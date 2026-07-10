interface Props {
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition-all hover:border-violet-500/40">
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-emerald-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}