"use client";

import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ScoreGauge({
  score,
}: {
  score: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += 5;

      if (current >= score) {
        current = score;
        clearInterval(timer);
      }

      setValue(current);
    }, 10);

    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="mx-auto w-64">
      <CircularProgressbar
        value={value}
        maxValue={1000}
        text={`${value}`}
        styles={buildStyles({
          textColor: "#ffffff",
          pathColor: "#22c55e",
          trailColor: "#27272a",
          textSize: "18px",
        })}
      />

      <div className="mt-6 text-center">
        <h3 className="text-2xl font-bold text-white">
          Excellent
        </h3>

        <p className="mt-2 text-zinc-500">
          AI Reputation Score
        </p>
      </div>
    </div>
  );
}