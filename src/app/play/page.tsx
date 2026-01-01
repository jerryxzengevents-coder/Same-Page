"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Screen } from "../../components/Screen";
import { QUESTIONS } from "../../data/questions";
import { DISAGREE_BLACK } from "../../data/palette";
import { useSession } from "../../state/session-store";
import { AnswerOption, QuestionOutcome } from "../../types/session";
import { colorForQuestion } from "../../utils/colors";

type Phase = "question";

export default function PlayPage() {
  const router = useRouter();
  const { session, hydrated, setSession, resetSession } = useSession();
  const [phase, setPhase] = useState<Phase>("question");
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [justAdvanced, setJustAdvanced] = useState(false);

  const currentQuestionId = session.questionIds[session.currentIndex];
  const question = useMemo(
    () => QUESTIONS.find((q) => q.id === currentQuestionId),
    [currentQuestionId],
  );
  const nextQuestion =
    session.questionIds[session.currentIndex + 1] &&
    QUESTIONS.find((q) => q.id === session.questionIds[session.currentIndex + 1]);
  const total = session.questionIds.length;
  const questionNumber = session.currentIndex + 1;
  const cardColor = currentQuestionId
    ? colorForQuestion(currentQuestionId)
    : DISAGREE_BLACK;
  const nextCardColor = nextQuestion
    ? colorForQuestion(nextQuestion.id)
    : cardColor;

  useEffect(() => {
    // Disable entry transition on the freshly shown card.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setJustAdvanced(true);
    const t = setTimeout(() => setJustAdvanced(false), 30);
    return () => clearTimeout(t);
  }, [currentQuestionId]);

  useEffect(() => {
    if (!hydrated) return;
    if (!session.selectedLevel || session.questionIds.length === 0) {
      router.replace("/level");
    }
  }, [hydrated, router, session.questionIds.length, session.selectedLevel]);

  useEffect(() => {
    // Reset phase when the question changes; intentional state update.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhase("question");
  }, [currentQuestionId]);

  if (!question) {
    return null;
  }

  const handleAnswer = (answer: AnswerOption) => {
    if (phase !== "question" || transitioning) return;
    if (!question) return;

    const outcome: QuestionOutcome = answer === "agree" ? "agree" : "disagree";

    setSession((prev) => {
      const existing = prev.answers.find((a) => a.questionId === question.id);
      const updatedAnswers = existing
        ? prev.answers.map((a) =>
            a.questionId === question.id ? { ...a, a: answer, outcome } : a,
          )
        : [...prev.answers, { questionId: question.id, a: answer, outcome }];
      return { ...prev, answers: updatedAnswers };
    });

    setTransitioning(true);
    const flyDir = answer === "agree" ? 1 : -1;
    setDragX(flyDir * 800);
    setTimeout(() => {
      if (session.currentIndex + 1 >= total) {
        router.push("/results");
      } else {
        setSession((prev) => ({
          ...prev,
          currentIndex: prev.currentIndex + 1,
          turn: "A",
        }));
        setPhase("question");
        setDragX(0);
        setTransitioning(false);
      }
    }, 200);
  };

  const handleBack = () => {
    router.push("/level");
  };

  const handleClose = () => {
    resetSession();
    router.push("/");
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (phase !== "question") return;
    setDragStart(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStart === null || phase !== "question") return;
    setDragX(e.clientX - dragStart);
  };

  const handlePointerUp = () => {
    if (dragStart === null || phase !== "question") {
      setDragStart(null);
      setDragX(0);
      return;
    }
    if (dragX > 60) {
      handleAnswer("agree");
    } else if (dragX < -60) {
      handleAnswer("disagree");
    }
    setDragStart(null);
    setDragX(0);
  };

  const showSwipeOverlay = session.currentIndex === 0;
  const disableInteractions = transitioning;

  return (
    <Screen padding="12px">
      <div className="flex min-h-screen flex-col">
        <div
          className="flex items-center justify-between"
          style={{ padding: "12px", gap: "12px", alignSelf: "stretch" }}
        >
          <button
            type="button"
            onClick={handleBack}
            aria-label="Back"
            className="text-[var(--text-blue)] transition-transform duration-150 active:translate-y-[2px]"
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
          </button>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="text-[var(--text-blue)] transition-transform duration-150 active:translate-y-[2px]"
            style={{ padding: "8px 0" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div
          className="relative mt-2 flex flex-1 flex-col items-center justify-center"
          style={{ padding: "24px", gap: "24px" }}
        >
          <div
            className="relative w-full"
            style={{
              minHeight: "64vh",
            }}
          >
            {nextQuestion && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none"
                style={{
                  backgroundColor: nextCardColor,
                  borderRadius: "50px",
                  padding: "50px 24px",
                  minHeight: "64vh",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                  zIndex: 0,
                }}
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <p className="text-base font-semibold leading-tight">
                    Question {questionNumber + 1} / {total}
                  </p>
                  <h2
                    className="max-w-[85%] text-2xl font-black leading-tight sm:text-3xl"
                    style={{ lineHeight: "1.2" }}
                  >
                    {nextQuestion.text}
                  </h2>
                </div>
              </div>
            )}

            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-white"
              style={{
                backgroundColor: cardColor,
                borderRadius: "50px",
                padding: "50px 24px",
                minHeight: "64vh",
                transform: `translateX(${dragX}px)`,
                transition:
                  dragStart === null
                    ? justAdvanced
                      ? "none"
                      : transitioning
                        ? "transform 0.2s ease-in"
                        : "transform 0.15s ease-out"
                    : "none",
                boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                zIndex: 1,
              }}
              onPointerDown={disableInteractions ? undefined : handlePointerDown}
              onPointerMove={disableInteractions ? undefined : handlePointerMove}
              onPointerUp={disableInteractions ? undefined : handlePointerUp}
              onPointerLeave={disableInteractions ? undefined : handlePointerUp}
            >
              {showSwipeOverlay && (
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/drawing/swipeleft.png"
                    alt="Swipe left"
                    width={200}
                    height={200}
                    className="absolute left-4 top-10 w-32 opacity-85"
                  />
                  <Image
                    src="/drawing/swiperight.png"
                    alt="Swipe right"
                    width={200}
                    height={200}
                    className="absolute bottom-6 right-4 w-40 opacity-85"
                  />
                </div>
              )}
              <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-base font-semibold leading-tight">
                  Question {questionNumber} / {total}
                </p>
                <h2
                  className="max-w-[85%] text-2xl font-black leading-tight sm:text-3xl"
                  style={{ lineHeight: "1.2" }}
                >
                  {question.text}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-auto flex items-center justify-between"
          style={{ padding: "12px", gap: "12px" }}
        >
          <button
            type="button"
            onClick={() => handleAnswer("disagree")}
            disabled={disableInteractions}
            className="w-full rounded-full px-4 py-4 text-center text-base font-semibold text-white transition-transform duration-150 active:translate-y-[2px]"
            style={{ backgroundColor: DISAGREE_BLACK }}
          >
            Disagree
          </button>
          <button
            type="button"
            onClick={() => handleAnswer("agree")}
            disabled={disableInteractions}
            className="w-full rounded-full px-4 py-4 text-center text-base font-semibold text-white transition-transform duration-150 active:translate-y-[2px]"
            style={{ backgroundColor: cardColor }}
          >
            Agree
          </button>
        </div>
      </div>
    </Screen>
  );
}
