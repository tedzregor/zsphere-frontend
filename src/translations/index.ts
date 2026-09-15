import en from "./en.json";
import ko from "./ko.json";
import ja from "./ja.json";

export const translations = {
  EN: en,
  KO: ko,
  JA: ja,
};

export type Language = keyof typeof translations;