"use client";

import { useEffect, useRef, useState } from "react";
import { Upload, Mic, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { AudioRecorder } from "./audio-recorder";
import { FileDropZone } from "./file-drop-zone";

interface VoiceSampleInputProps {
  value: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}

type Mode = "upload" | "record";

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function VoiceSampleInput({
  value,
  onChange,
  error,
}: VoiceSampleInputProps) {
  const [mode, setMode] = useState<Mode>("upload");
  const objectUrlRef = useRef<string | null>(null);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  // Manage object URL lifecycle
  useEffect(() => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    if (value) {
      const url = URL.createObjectURL(value);
      objectUrlRef.current = url;
      setAudioSrc(url);
    } else {
      setAudioSrc(null);
    }
    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
    };
  }, [value]);

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium">Voice Sample</label>

      {!value ? (
        <>
          {/* Tab toggle */}
          <div className="flex gap-1">
            <Button
              type="button"
              variant={mode === "upload" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setMode("upload")}
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload File
            </Button>
            <Button
              type="button"
              variant={mode === "record" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setMode("record")}
            >
              <Mic className="mr-2 h-4 w-4" />
              Record Audio
            </Button>
          </div>

          {/* Content based on mode */}
          {mode === "upload" ? (
            <FileDropZone onFileSelected={onChange} />
          ) : (
            <AudioRecorder onRecordingComplete={onChange} />
          )}
        </>
      ) : (
        /* Preview bar */
        <div className="flex items-center gap-3 rounded-md border p-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{value.name}</p>
            <p className="text-muted-foreground text-xs">
              {formatFileSize(value.size)}
            </p>
          </div>
          {audioSrc && (
            <audio controls src={audioSrc} className="h-8 max-w-48" />
          )}
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => onChange(null)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  );
}
