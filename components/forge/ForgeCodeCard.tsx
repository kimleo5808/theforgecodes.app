"use client";

import { ForgeCode } from "@/lib/forge-data";
import { CheckCircle2, CircleX, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ForgeCodeCardProps {
  code: ForgeCode;
  statusLabel: string;
}

export function ForgeCodeCard({ code, statusLabel }: ForgeCodeCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const isActive = code.status === "active";

  return (
    <div
      className={`group relative rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md ${
        isActive
          ? "border-indigo-200 bg-indigo-50/30 hover:border-indigo-300 dark:border-indigo-800 dark:bg-indigo-950/20 dark:hover:border-indigo-700"
          : "border-slate-200 bg-slate-50/30 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/20 dark:hover:border-slate-600"
      }`}
    >
      {/* Code and Copy Button */}
      <div className="flex items-start justify-between gap-3">
        <p
          className={`font-mono text-xl font-bold leading-tight ${
            isActive
              ? "text-indigo-700 dark:text-indigo-300"
              : "text-slate-600 dark:text-slate-400"
          }`}
        >
          {code.code}
        </p>
        <button
          onClick={handleCopy}
          className={`shrink-0 rounded-lg p-2 transition-all ${
            isActive
              ? "text-indigo-400 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/40 dark:hover:text-indigo-300"
              : "text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
          }`}
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

      {/* Status and Last Tested */}
      <div className="mt-3 flex items-center gap-2 text-sm">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
            isActive
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
              : "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"
          }`}
        >
          {isActive ? (
            <CheckCircle2 className="h-3 w-3" />
          ) : (
            <CircleX className="h-3 w-3" />
          )}
          {statusLabel}
        </span>
        <span className="text-slate-400 dark:text-slate-500">•</span>
        <span className="text-xs text-slate-600 dark:text-slate-400">
          Last: {code.lastTested}
        </span>
      </div>
    </div>
  );
}
