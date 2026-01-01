"use client";

import { useRouter } from "next/navigation";
import { LEVELS } from "../data/levels";
import { useSession } from "../state/session-store";

export function LevelList() {
  const router = useRouter();
  const { selectLevel } = useSession();

  const handleSelect = (levelId: number) => {
    selectLevel(levelId);
    router.push("/play");
  };

  return (
    <div className="w-full">
      {LEVELS.map((level) => (
        <button
          key={level.id}
          type="button"
          onClick={() => handleSelect(level.id)}
          className="flex w-full items-center justify-between text-left transition-transform duration-150 active:translate-y-[2px]"
          style={{
            backgroundColor: level.color,
            color: "#FFFFFF",
            padding: "16px 20px",
            gap: "8px",
            borderRadius: "0",
            minHeight: "clamp(140px, 22vh, 200px)",
          }}
        >
          <div className="flex flex-1 items-center gap-4">
            <div
              style={{
                fontSize: "48px",
                lineHeight: "28px",
                fontWeight: 700,
                minWidth: "32px",
                textAlign: "left",
              }}
            >
              {level.id}
            </div>
            <div className="flex flex-col">
              <div
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  fontWeight: 500,
                }}
              >
                {level.title}
              </div>
              <p className="text-sm leading-5 opacity-90">{level.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
