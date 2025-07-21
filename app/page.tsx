"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/download")
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "mat.txt";
        a.click();
        URL.revokeObjectURL(url);
      });
  }, []);

  return (
    <div>
      <h1>Скачивание начнётся автоматически...</h1>
      <p>Если не началось — <a href="/api/download" download>нажмите здесь</a></p>
    </div>
  );
}
