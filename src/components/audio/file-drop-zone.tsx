"use client";

import { useCallback, useRef, useState } from "react";
import { Upload } from "lucide-react";
import {
  MAX_VOICE_SAMPLE_SIZE,
  isAllowedVoiceSampleType,
} from "~/shared/schemas";
import { cn } from "~/lib/utils";

interface FileDropZoneProps {
  onFileSelected: (file: File) => void;
  disabled?: boolean;
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function validateFile(file: File): string | null {
  if (!isAllowedVoiceSampleType(file.type)) {
    return `Invalid file type: ${file.type || "unknown"}. Use WAV or WebM.`;
  }
  if (file.size > MAX_VOICE_SAMPLE_SIZE) {
    return `File too large (${formatFileSize(file.size)}). Max is ${formatFileSize(MAX_VOICE_SAMPLE_SIZE)}.`;
  }
  return null;
}

export function FileDropZone({ onFileSelected, disabled }: FileDropZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      const err = validateFile(file);
      if (err) {
        setError(err);
        return;
      }
      setError(null);
      onFileSelected(file);
    },
    [onFileSelected],
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) setIsDragOver(true);
    },
    [disabled],
  );

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      if (disabled) return;
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [disabled, handleFile],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
      // Reset so the same file can be re-selected
      e.target.value = "";
    },
    [handleFile],
  );

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!disabled) inputRef.current?.click();
          }
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "cursor-pointer rounded-md border border-dashed p-6 text-center transition-colors",
          isDragOver && "border-primary bg-primary/5",
          disabled && "cursor-not-allowed opacity-50",
          error && "border-destructive",
        )}
      >
        <Upload className="text-muted-foreground mx-auto mb-2 h-8 w-8" />
        <p className="text-muted-foreground text-sm">
          Drag & drop an audio file here, or click to browse
        </p>
        <p className="text-muted-foreground mt-1 text-xs">
          WAV or WebM, max 10MB
        </p>
        <input
          ref={inputRef}
          type="file"
          accept=".wav,.webm"
          onChange={handleInputChange}
          className="hidden"
          disabled={disabled}
        />
      </div>
      {error && <p className="text-destructive mt-1 text-sm">{error}</p>}
    </div>
  );
}
