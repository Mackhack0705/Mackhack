import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import replay from "../assets/replay.svg";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;