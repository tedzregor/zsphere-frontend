import en from "./en.json";
import ko from "./ko.json";
import ja from "./ja.json";
import tl from "./tl.json";

export const translations = {
  EN: en,
  KO: ko,
  JA: ja,
  TL: tl,
};

export type Language = keyof typeof translations;