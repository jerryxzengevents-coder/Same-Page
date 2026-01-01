export type AnswerOption = "agree" | "disagree";
export type Turn = "A" | "B";

export type QuestionOutcome = "agree" | "disagree";

export type QuestionAnswer = {
  questionId: string;
  a?: AnswerOption;
  b?: AnswerOption;
  outcome?: QuestionOutcome;
};

export type SessionState = {
  selectedLevel?: number;
  questionIds: string[];
  currentIndex: number;
  answers: QuestionAnswer[];
  turn: Turn;
};

export const DEFAULT_SESSION: SessionState = {
  selectedLevel: undefined,
  questionIds: [],
  currentIndex: 0,
  answers: [],
  turn: "A",
};
