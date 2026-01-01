"use client";

import { PropsWithChildren } from "react";
import { SessionProvider } from "../state/session-store";

export function Providers({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}
