import type { Section } from "./section";

export type Grade = {
  id: string;
  name: string;
  sections: Section[];
};