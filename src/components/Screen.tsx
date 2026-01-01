import { ReactNode } from "react";
import { BG_LIME } from "../data/palette";

type ScreenProps = {
  children: ReactNode;
  background?: string;
  padding?: string;
  maxWidth?: number;
};

export function Screen({
  children,
  background = BG_LIME,
  padding = "2rem 1.5rem",
  maxWidth,
}: ScreenProps) {
  return (
    <div
      className="flex min-h-screen justify-center"
      style={{ backgroundColor: background }}
    >
      <div
        className="flex w-full flex-col"
        style={{
          minHeight: "calc(100vh)",
          padding,
          maxWidth: maxWidth ?? "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}
