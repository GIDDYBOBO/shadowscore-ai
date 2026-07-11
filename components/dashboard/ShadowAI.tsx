"use client";

import { useState } from "react";

const suggestions = [
  "How can I improve my reputation?",
  "Is this wallet safe?",
  "Explain my reputation score.",
  "What should I do next?",
];

export default function ShadowAI() {
  const [question, setQuestion] = useState("");

  const answer = question
    ? `Based on your wallet activity, your reputation is healthy. Continue using trusted protocols, avoid interacting with malicious contracts, and maintain consistent on-chain activity to improve your ShadowScore.`
    : "Ask Shadow AI anything about your wallet.";

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Shadow AI Copilot
      </h2>

      <p className="mt-2 text-sm text-zinc-500">
        AI-powered blockchain assistant
      </p>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask Shadow AI..."
        className="mt-6 h-32 w-full rounded-xl border border-white/10 bg-zinc-950 p-4 text-white outline-none"
      />

      <button
        className="mt-4 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
      >
        Analyze
      </button>

      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-zinc-950 p-5">
        <p className="text-zinc-300 leading-7">
          {answer}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => setQuestion(item)}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 transition hover:border-cyan-500 hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}