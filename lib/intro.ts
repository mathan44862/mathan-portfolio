"use client";

import { useSyncExternalStore } from "react";

// Tiny shared flag so the hero can start its entrance exactly when the intro lifts.
let done = false;
const listeners = new Set<() => void>();

export function markIntroDone() {
  if (done) return;
  done = true;
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useIntroDone() {
  return useSyncExternalStore(subscribe, () => done, () => false);
}
