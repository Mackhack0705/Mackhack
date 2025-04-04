import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import replay from "../assets/replay.svg";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import facebook from "../assets/facebook.svg";
import bmw from "../assets/bmw.svg";
import netflix from "../assets/netflix.svg";
import twitter from "../assets/twitter.svg";
import soundCloud from "../assets/soundCloud.svg";
import airbnb from "../assets/airbnb.svg";
import cocacola from "../assets/cocacola.svg";
import etherum from "../assets/etherum.svg";
import ola from "../assets/ola.svg";
import redbull from "../assets/redbull.svg";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;
export const googleImg = google;
export const appleImg = apple;
export const facebookImg = facebook;
export const netflixImg = netflix;
export const twitterImg = twitter;
export const bmwImg = bmw;
export const soundCloudImg = soundCloud;
export const airbnbImg = airbnb;
export const cocacolaImg = cocacola;
export const etherumImg = etherum;
export const olaImg = ola;
export const redbullImg = redbull;