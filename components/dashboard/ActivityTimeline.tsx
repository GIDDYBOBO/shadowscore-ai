"use client";

const events = [
  "Wallet connected",
  "Risk scan completed",
  "Portfolio analyzed",
  "AI reputation updated",
  "No suspicious activity detected",
];

export default function ActivityTimeline() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-8">
      <h2 className="text-xl font-semibold text-white">
        Activity Timeline
      </h2>

      <div className="mt-8 space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >
            <div className="mt-2 h-3 w-3 rounded-full bg-emerald-400" />

            <div>
              <p className="text-white">
                {event}
              </p>

              <p className="text-sm text-zinc-500">
                Just now
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}