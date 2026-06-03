import type { Resource } from "./resource";

export type Section = {
  id: string;
  title: string;
  resources: Resource[];
};