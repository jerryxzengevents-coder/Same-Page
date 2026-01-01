import Link from "next/link";
import { LevelList } from "../../components/LevelList";
import { Screen } from "../../components/Screen";

export default function LevelPage() {
  return (
    <Screen padding="0">
      <div className="flex min-h-screen flex-col">
        <div
          className="flex items-center"
          style={{ padding: "12px 24px", gap: "10px", alignSelf: "stretch" }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center text-[var(--text-blue)] transition-transform duration-150 active:translate-y-[2px]"
            aria-label="Back to home"
            style={{ padding: "8px 0" }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
        </div>

        <div
          className="flex flex-col"
          style={{
            padding: "0 24px 48px 24px",
            gap: "48px",
            alignSelf: "stretch",
            flexShrink: 0,
          }}
        >
          <h1
            className="font-black tracking-tight"
            style={{
              fontSize: "clamp(64px, 10vw, 96px)",
              lineHeight: "0.8",
            }}
          >
            Choose a level
          </h1>
          <p
            className="text-right font-black"
            style={{
              fontSize: "clamp(18px, 4vw, 24px)",
              lineHeight: "24px",
              color: "var(--text-blue)",
            }}
          >
            of difficulty? Intimacy? Discomfort? Idk.
          </p>
        </div>

        <LevelList />
      </div>
    </Screen>
  );
}
