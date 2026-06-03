import type { Grade } from "./grade";

export type Subject = {
  id: string;
  name: string;
  grades: Grade[];
};