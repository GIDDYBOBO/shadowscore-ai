"use client";

import { useMemo, useState } from "react";
import useWalletAnalysis from "@/hooks/useWalletAnalysis";

export default function ShadowAI() {
  const analysis = useWalletAnalysis();

  const [question, setQuestion] = useState("");

  const answer = useMemo(() => {
    if (!question) return "";

    const q = question.toLowerCase();

    if (q.includes("score")) {
      return `Your reputation score is ${analysis.score}. It is mainly influenced by your wallet balance, activity level and overall risk profile.`;
    }

    if (q.includes("risk")) {
      return `Your current wallet risk is ${analysis.risk}%. Lower risk wallets generally achieve higher reputation scores.`;
    }

    if (q.includes("improve")) {
      return `To improve your score, keep a healthy wallet balance, interact with trusted protocols, avoid suspicious contracts, and maintain consistent on-chain activity.`;
    }

    if (q.includes("grade")) {
      return `Your current reputation grade is ${analysis.grade}. Improving your reputation score will automatically increase your grade.`;
    }

    return `Shadow AI is still learning. Try asking about your score, risk, grade, or how to improve your reputation.`;
  }, [question, analysis]);

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-zinc-900 to-cyan-950/30 p-8">

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Shadow AI Copilot
        </h2>

        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
          Online
        </span>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
        <p className="text-sm text-zinc-400">
          Reputation Score
        </p>

        <p className="mt-1 text-4xl font-bold text-white">
          {analysis.score}
        </p>

        <p className="mt-3 text-zinc-300">
          Grade:
          <span className="ml-2 text-cyan-400 font-semibold">
            {analysis.grade}
          </span>
        </p>

        <p className="mt-2 text-zinc-300">
          Risk:
          <span className="ml-2 text-emerald-400">
            {analysis.risk}%
          </span>
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-white">
          Quick Questions
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">

          <button
            onClick={() => setQuestion("Why is my score?")}
            className="rounded-lg bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700"
          >
            Why is my score?
          </button>

          <button
            onClick={() => setQuestion("How do I improve?")}
            className="rounded-lg bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700"
          >
            Improve Score
          </button>

          <button
            onClick={() => setQuestion("What is my risk?")}
            className="rounded-lg bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700"
          >
            Explain Risk
          </button>

          <button
            onClick={() => setQuestion("What is my grade?")}
            className="rounded-lg bg-zinc-800 px-4 py-2 text-sm text-white hover:bg-zinc-700"
          >
            Explain Grade
          </button>

        </div>
      </div>

      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">

        <h3 className="font-semibold text-cyan-400">
          AI Response
        </h3>

        <p className="mt-3 leading-7 text-zinc-300">
          {answer || "Select one of the questions above to begin your AI wallet analysis."}
        </p>

      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-2">

        <div>
          <h3 className="mb-3 font-semibold text-emerald-400">
            Strengths
          </h3>

          <div className="space-y-2">
            {analysis.strengths.map((item) => (
              <div
                key={item}
                className="rounded-lg bg-emerald-500/10 p-3 text-sm text-white"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-red-400">
            Weaknesses
          </h3>

          <div className="space-y-2">
            {analysis.weaknesses.map((item) => (
              <div
                key={item}
                className="rounded-lg bg-red-500/10 p-3 text-sm text-white"
              >
                ⚠ {item}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}