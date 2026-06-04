import type { Subject } from "../types/subject";

import { seventh } from "./seventh";
import { eighth } from "./eighth";
import { ninth } from "./ninth";
import { tenth } from "./tenth";
import { eleventh } from "./eleventh";

export const subjects: Subject[] = [
  {
    id: "english",
    name: "Ingles",

    grades: [
      seventh,
      eighth,
      ninth,
      tenth,
      eleventh,
    ],
  },
];