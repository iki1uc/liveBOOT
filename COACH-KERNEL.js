// COACH-KERNEL.js · Humanistischer Agent
// © iki1uc · kostenlos · Einzelentscheidung
// Bezug: alle liveBOOT-Dateien · nur was am Rechner läuft

import { COACH } from "./COACH.core.js";

export function coachKernel(input, forcedArea) {
  const solution = COACH.solve(input, forcedArea);

  return {
    solution,
    sense: COACH.sense(),
    bezug: {
      core:    "COACH.core.js",      // was drin ist
      routing: "COACH-Routing.md",   // wie es kommt
      tastatur:"COACH-Tastatur.md",  // wie du es rufst
      ordner:  "COACH-Ordnerstruktur.md", // wo es hängt
      papier:  "COACH.md",           // was es ist
      kernel:  "COACH-KERNEL.js",    // was es tut (dieses File)
    },
    user: {
      wer:  "user.html",   // der König
      was:  "use.html",    // was er tut
      wo:   "runtime.html" // wo er läuft
    },
    relevanz: "nur am Rechner · nur was läuft"
  };
}
