"use client";

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_SESSION, SessionState } from "../types/session";
import { QUESTIONS } from "../data/questions";

const STORAGE_KEY = "same-page/session";

type SessionContextValue = {
  session: SessionState;
  hydrated: boolean;
  selectLevel: (levelId: number) => void;
  resetSession: () => void;
  setSession: React.Dispatch<React.SetStateAction<SessionState>>;
};

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<SessionState>(DEFAULT_SESSION);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Partial<SessionState>;
        // Loading persisted session after mount; intentional state update.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSession({
          ...DEFAULT_SESSION,
          ...parsed,
          questionIds: parsed.questionIds ?? DEFAULT_SESSION.questionIds,
          answers: parsed.answers ?? DEFAULT_SESSION.answers,
          turn: parsed.turn ?? DEFAULT_SESSION.turn,
          currentIndex: parsed.currentIndex ?? DEFAULT_SESSION.currentIndex,
        });
      } catch {
        setSession(DEFAULT_SESSION);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }, [hydrated, session]);

  useEffect(() => {
    if (!hydrated) return;
    if (session.selectedLevel && session.questionIds.length === 0) {
      const questionIds = QUESTIONS.filter(
        (q) => q.level === session.selectedLevel,
      ).map((q) => q.id);
      if (questionIds.length > 0) {
        // Filling missing question ids after hydration; intentional.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSession((prev) => ({ ...prev, questionIds }));
      }
    }
  }, [hydrated, session.selectedLevel, session.questionIds.length]);

  const selectLevel = useCallback((levelId: number) => {
    const questionIds = QUESTIONS.filter((q) => q.level === levelId).map(
      (q) => q.id,
    );
    setSession({
      ...DEFAULT_SESSION,
      selectedLevel: levelId,
      questionIds,
    });
  }, []);

  const resetSession = useCallback(() => {
    setSession(DEFAULT_SESSION);
  }, []);

  const value = useMemo(
    () => ({ session, hydrated, selectLevel, resetSession, setSession }),
    [hydrated, resetSession, selectLevel, session],
  );

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return ctx;
}
