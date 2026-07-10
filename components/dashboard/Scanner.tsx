"use client";

import { useEffect, useState } from "react";

const steps = [
  "Connecting wallet...",
  "Reading blockchain...",
  "Loading portfolio...",
  "Checking smart contracts...",
  "Running AI analysis...",
  "Generating ShadowScore...",
];

export default function Scanner({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= steps.length) {
      onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setStep((s) => s + 1);
    }, 600);

    return () => clearTimeout(timer);
  }, [step, onFinish]);

  return (
    <div className="flex h-[450px] items-center justify-center rounded-2xl border border-white/10 bg-zinc-900">
      <div className="text-center">
        <div className="mb-8 h-16 w-16 animate-spin rounded-full border-4 border-zinc-700 border-t-white mx-auto"></div>

        <h2 className="text-2xl font-semibold text-white">
          ShadowScore AI
        </h2>

        <p className="mt-6 text-zinc-400">
          {step < steps.length
            ? steps[step]
            : "Analysis Complete"}
        </p>
      </div>
    </div>
  );
}