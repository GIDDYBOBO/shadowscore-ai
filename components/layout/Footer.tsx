import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-zinc-300">ShadowScore AI</p>
          <p className="mt-1 text-sm text-zinc-600">
            © {new Date().getFullYear()} ShadowScore AI. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
