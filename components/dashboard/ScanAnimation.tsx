"use client";

import { useEffect, useState } from "react";

const steps = [
  "Reading wallet information...",
  "Checking ETH balance...",
  "Analyzing transaction patterns...",
  "Evaluating wallet reputation...",
  "Running security scan...",
  "Generating AI report...",
];

export default function ScanAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === steps.length - 1) {
          clearInterval(timer);
          setFinished(true);
          return prev;
        }
        return prev + 1;
      });
    }, 700);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-8">
      <h2 className="text-2xl font-bold text-white">
        Shadow AI Scanner
      </h2>

      <div className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex items-center gap-3 ${
              index <= currentStep
                ? "text-cyan-400"
                : "text-zinc-500"
            }`}
          >
            {index < currentStep ? "✅" : index === currentStep ? "⏳" : "○"}
            <span>{step}</span>
          </div>
        ))}
      </div>

      {finished && (
        <div className="mt-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-400 font-semibold">
          Analysis Complete
        </div>
      )}
    </div>
  );
}