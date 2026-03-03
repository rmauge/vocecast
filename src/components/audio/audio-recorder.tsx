"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Mic, Square } from "lucide-react";
import { Button } from "~/components/ui/button";

interface AudioRecorderProps {
  onRecordingComplete: (file: File) => void;
  disabled?: boolean;
}

type RecorderStatus = "idle" | "recording";

export function AudioRecorder({
  onRecordingComplete,
  disabled,
}: AudioRecorderProps) {
  const [status, setStatus] = useState<RecorderStatus>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cleanup = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    mediaRecorderRef.current = null;
    chunksRef.current = [];
  }, []);

  // Cleanup on unmount
  useEffect(() => cleanup, [cleanup]);

  const startRecording = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mimeType = MediaRecorder.isTypeSupported("audio/webm")
        ? "audio/webm"
        : "";
      const recorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const actualMime = recorder.mimeType || "audio/webm";
        const blob = new Blob(chunksRef.current, { type: actualMime });
        const ext = actualMime.includes("webm") ? "webm" : "wav";
        const file = new File(
          [blob],
          `recording-${Date.now()}.${ext}`,
          { type: actualMime },
        );
        cleanup();
        setStatus("idle");
        setElapsed(0);
        onRecordingComplete(file);
      };

      recorder.start();
      setStatus("recording");
      setElapsed(0);
      timerRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      cleanup();
      setStatus("idle");
      if (err instanceof DOMException && err.name === "NotAllowedError") {
        setError("Microphone access denied. Please allow microphone access.");
      } else {
        setError("Could not access microphone.");
      }
    }
  }, [cleanup, onRecordingComplete]);

  const stopRecording = useCallback(() => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
    }
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-3 rounded-md border border-dashed p-6">
        {status === "idle" ? (
          <Button
            type="button"
            variant="outline"
            onClick={() => void startRecording()}
            disabled={disabled}
          >
            <Mic className="mr-2 h-4 w-4" />
            Record
          </Button>
        ) : (
          <>
            <span className="relative flex h-3 w-3">
              <span className="bg-destructive absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-destructive relative inline-flex h-3 w-3 rounded-full" />
            </span>
            <span className="text-sm font-medium tabular-nums">
              {formatTime(elapsed)}
            </span>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={stopRecording}
            >
              <Square className="mr-2 h-3 w-3" />
              Stop
            </Button>
          </>
        )}
      </div>
      {status === "idle" && !error && (
        <p className="text-muted-foreground mt-1 text-center text-xs">
          Click to start recording
        </p>
      )}
      {error && <p className="text-destructive mt-1 text-sm">{error}</p>}
    </div>
  );
}
