"use client";

import { CircleDot, Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeCardProps {
  code: string;
}

export function CodeCard({ code }: CodeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="group relative rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-indigo-800">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <CircleDot className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
          <p className="font-mono text-lg font-bold text-indigo-700 dark:text-indigo-300">
            {code}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 rounded-lg p-1.5 text-slate-400 transition-all hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400"
          aria-label={copied ? "Copied!" : "Copy code"}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
