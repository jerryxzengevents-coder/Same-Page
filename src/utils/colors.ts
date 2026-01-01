import { CARD_COLORS } from "../data/palette";

export function colorForQuestion(questionId: string) {
  const hash = Array.from(questionId).reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0,
  );
  return CARD_COLORS[hash % CARD_COLORS.length];
}
