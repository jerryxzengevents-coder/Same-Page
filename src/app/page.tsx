import Link from "next/link";
import { ReactNode } from "react";
import { Screen } from "../components/Screen";

function IconBubble({ children, label }: { children: ReactNode; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--text-blue)] text-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-transform duration-150 active:translate-y-[2px]"
      style={{ padding: "8px", gap: "8px" }}
    >
      {children}
    </button>
  );
}

export default function HomePage() {
  return (
    <Screen>
      <div className="flex min-h-screen flex-col items-center">
        <div
          className="flex items-start"
          style={{ padding: "12px", gap: "10px", alignSelf: "stretch" }}
        >
          <IconBubble label="Open Instagram">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </IconBubble>
          <IconBubble label="Share">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </IconBubble>
        </div>

        <div
          className="flex flex-1 flex-col items-center justify-center"
          style={{ gap: "48px", padding: "0 24px" }}
        >
          <div
            className="flex flex-col items-center"
            style={{ gap: "82px", alignSelf: "stretch" }}
          >
            <h1
              className="text-center font-black tracking-tight"
              style={{
                fontSize: "clamp(64px, 10vw, 96px)",
                lineHeight: "0.75",
              }}
            >
              Are we on the same page?
            </h1>
            <p
              className="text-center font-black"
              style={{
                color: "var(--text-blue)",
                fontSize: "clamp(18px, 4vw, 24px)",
                lineHeight: "24px",
              }}
            >
              A dating question game about deal breakers and compatibility.
            </p>
          </div>
        </div>

        <div className="mt-auto flex justify-center pb-4" style={{ padding: "0 24px" }}>
          <Link
            href="/level"
            className="inline-flex min-w-[260px] items-center justify-center text-white transition-transform duration-150 active:translate-y-[2px]"
            style={{
              height: "70px",
              padding: "8px 16px",
              gap: "8px",
              borderRadius: "8px",
              background: "#4D4AFC",
              color: "#FFFFFF",
              fontFamily: "var(--font-display), Inter, sans-serif",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            Let&apos;s find out hehehehe
          </Link>
        </div>
      </div>
    </Screen>
  );
}
