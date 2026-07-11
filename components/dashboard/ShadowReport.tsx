"use client";

import useReputation from "@/hooks/useReputation";
import { generateAIReport } from "@/lib/shadow-ai";

export default function ShadowReport() {
  const rep = useReputation();

  const report = generateAIReport(rep.score, rep.risk);

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-cyan-950/30 p-8 shadow-2xl">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-cyan-400 font-semibold tracking-widest text-sm">
            SHADOW AI
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Intelligence Report
          </h2>
        </div>

        <div className="rounded-full bg-cyan-500/20 px-4 py-2">
          <span className="text-cyan-400 font-semibold">
            {report.confidence}% Confidence
          </span>
        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">

        <h3 className="text-2xl font-bold text-white">
          {report.title}
        </h3>

        <p className="mt-4 leading-8 text-zinc-300">
          {report.summary}
        </p>

      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        <div>

          <h3 className="mb-5 text-lg font-semibold text-emerald-400">
            Strengths
          </h3>

          <div className="space-y-3">

            {report.strengths.map((item) => (

              <div
                key={item}
                className="rounded-xl bg-emerald-500/10 p-4 border border-emerald-500/20"
              >
                ✅ {item}
              </div>

            ))}

          </div>

        </div>

        <div>

          <h3 className="mb-5 text-lg font-semibold text-yellow-400">
            Recommendations
          </h3>

          <div className="space-y-3">

            {report.recommendations.map((item) => (

              <div
                key={item}
                className="rounded-xl bg-yellow-500/10 p-4 border border-yellow-500/20"
              >
                💡 {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="mt-10">

        <p className="mb-3 text-sm text-zinc-500">
          AI Confidence
        </p>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-1000"
            style={{
              width: `${report.confidence}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}