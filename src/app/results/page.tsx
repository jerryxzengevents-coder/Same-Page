"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Screen } from "../../components/Screen";
import { QUESTIONS } from "../../data/questions";
import { useSession } from "../../state/session-store";
import { DISAGREE_BLACK } from "../../data/palette";

export default function ResultsPage() {
  const { session, resetSession } = useSession();
  const total = session.questionIds.length;
  const agreeCount = session.answers.filter((a) => a.outcome === "agree").length;

  const [copied, setCopied] = useState(false);

  const rows = useMemo(
    () =>
      session.answers.map((a, idx) => {
        const q = QUESTIONS.find((qst) => qst.id === a.questionId);
        return { ...a, question: q, idx };
      }),
    [session.answers],
  );

  const vibeLine = useMemo(() => {
    if (!total) return "";
    const pct = (agreeCount / total) * 100;
    if (pct < 40) return "Yikes.";
    if (pct < 50) return "Nahhhh this ain't it.";
    if (pct < 60) return "Uhhhh gl.";
    if (pct < 70) return "Okay, ig.";
    if (pct < 85) return "Nice.";
    return "Happy for ya'll. Whatever.";
  }, [agreeCount, total]);

  const shareText = useMemo(() => {
    const lines = rows
      .map((row, i) => {
        if (!row.question) return null;
        return `${i + 1}. ${row.question.text} — ${
          row.outcome === "agree" ? "Agree" : "Disagree"
        }`;
      })
      .filter(Boolean)
      .join("\n");
    return `Are we on the same page?\n${agreeCount}/${total} matched.\n${vibeLine}\n\n${lines}`;
  }, [agreeCount, rows, total, vibeLine]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      if (navigator.share) {
        await navigator.share({
          title: "Are we on the same page?",
          text: shareText,
        });
      }
    } catch {
      // ignore
    }
  };

  return (
    <Screen padding="0">
      <div className="flex min-h-screen flex-col">
        <header
          className="flex items-center justify-between text-[var(--text-blue)]"
          style={{ padding: "16px 16px 12px 16px", gap: "12px" }}
        >
          <Link
            href="/"
            className="text-lg font-semibold transition-transform duration-150 active:translate-y-[1px]"
          >
            Home
          </Link>
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-lg font-semibold transition-transform duration-150 active:translate-y-[1px]"
          >
            <span>{copied ? "Copied!" : "Share results"}</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </button>
        </header>

        <div
          className="flex flex-col"
          style={{ padding: "24px", gap: "48px" }}
        >
          <div className="text-[var(--text-blue)]">
            <div className="text-[72px] font-black leading-[0.8]">
              {agreeCount}/{total || "?"}
            </div>
            <p className="mt-2 text-lg font-semibold">
              Here&apos;s what ya&apos;ll said.
            </p>
            {vibeLine && (
              <p className="mt-2 text-xl font-black">{vibeLine}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          {rows.map((row) =>
            row.question ? (
              <div
                key={row.questionId}
                className="flex w-full flex-col"
                style={{
                  backgroundColor:
                    row.outcome === "agree" ? "#4D4AFC" : DISAGREE_BLACK,
                  color: "#FFFFFF",
                  padding: "20px 16px",
                  minHeight: "140px",
                  gap: "8px",
                }}
              >
                <div className="text-lg font-semibold leading-6">
                  Question {row.idx + 1} (
                  {row.outcome === "agree" ? "Agree" : "Disagree"})
                </div>
                <div
                  className="text-2xl font-black leading-8"
                  style={{ lineHeight: "1.2" }}
                >
                  {row.question.text}
                </div>
              </div>
            ) : null,
          )}
        </div>

        <div
          className="flex items-center justify-between text-[var(--text-blue)]"
          style={{ padding: "16px" }}
        >
          <button
            type="button"
            onClick={resetSession}
            className="text-sm font-semibold underline-offset-2 hover:underline"
          >
            Reset session
          </button>
          <div className="text-sm font-semibold opacity-75">
            Swipe to review all
          </div>
        </div>
      </div>
    </Screen>
  );
}
