import SeventhBookCover from "../assets/covers/english/7th/7thBookCover.png";

import Unit1Cover from "../assets/covers/english/7th/Unit1Cover.png";
import Unit2Cover from "../assets/covers/english/7th/Unit2Cover.png";
import Unit3Cover from "../assets/covers/english/7th/Unit3Cover.png";
import Unit4Cover from "../assets/covers/english/7th/Unit4Cover.png";
import Unit5Cover from "../assets/covers/english/7th/Unit5Cover.png";
import Unit6Cover from "../assets/covers/english/7th/Unit6Cover.png";

import SeventhBookPDF from "../assets/pdfs/english/7th/7th Book.pdf";

import type { Subject } from "../types/subject";

import Unit1PDF from "../assets/pdfs/english/7th/7thBookU1.pdf";
import Unit2PDF from "../assets/pdfs/english/7th/7thBookU2.pdf";
import Unit3PDF from "../assets/pdfs/english/7th/7thBookU3.pdf";
import Unit4PDF from "../assets/pdfs/english/7th/7thBookU4.pdf";
import Unit5PDF from "../assets/pdfs/english/7th/7thBookU5.pdf";
import Unit6PDF from "../assets/pdfs/english/7th/7thBookU6.pdf";

export const subjects: Subject[] = [
  {
    id: "english",
    name: "Ingles",

    grades: [
      {
  id: "7",
  name: "Setimo",

  sections: [
    {
      id: "complete-book",
      title: "Libro completo",

      resources: [
        {
          id: "7th-full-book",
          title: "7th Student Book",

          cover: SeventhBookCover,

          pdf: SeventhBookPDF,
        },
      ],
    },

    {
      id: "chapters",
      title: "Capitulos",

      resources: [
        {
          id: "unit-1",
          title: "Unit 1",

          cover: Unit1Cover,

          pdf: Unit1PDF,
        },

        {
          id: "unit-2",
          title: "Unit 2",

          cover: Unit2Cover,

          pdf: Unit2PDF,
        },

        {
          id: "unit-3",
          title: "Unit 3",

          cover: Unit3Cover,

          pdf: Unit3PDF,
        },

        {
          id: "unit-4",
          title: "Unit 4",

          cover: Unit4Cover,

          pdf: Unit4PDF,
        },

        {
          id: "unit-5",
          title: "Unit 5",

          cover: Unit5Cover,

          pdf: Unit5PDF,
        },

        {
          id: "unit-6",
          title: "Unit 6",

          cover: Unit6Cover,

          pdf: Unit6PDF,
        },
      ],
    },

    {
      id: "practices",
      title: "Practicas",

      resources: [],
    },
  ],
},

      {
        id: "8",
        name: "Octavo",

        sections: [
          {
            id: "complete-book",
            title: "Libro completo",

            resources: [],
          },

          {
            id: "chapters",
            title: "Capitulos",

            resources: [],
          },

          {
            id: "practices",
            title: "Practicas",

            resources: [],
          },
        ],
      },

      {
        id: "9",
        name: "Noveno",

        sections: [
          {
            id: "complete-book",
            title: "Libro completo",

            resources: [],
          },

          {
            id: "chapters",
            title: "Capitulos",

            resources: [],
          },

          {
            id: "practices",
            title: "Practicas",

            resources: [],
          },
        ],
      },

      {
        id: "10",
        name: "Decimo",

        sections: [
          {
            id: "complete-book",
            title: "Libro completo",

            resources: [],
          },

          {
            id: "chapters",
            title: "Capitulos",

            resources: [],
          },

          {
            id: "practices",
            title: "Practicas",

            resources: [],
          },
        ],
      },

      {
        id: "11",
        name: "Undecimo",

        sections: [
          {
            id: "complete-book",
            title: "Libro completo",

            resources: [],
          },

          {
            id: "chapters",
            title: "Capitulos",

            resources: [],
          },

          {
            id: "practices",
            title: "Practicas",

            resources: [],
          },
        ],
      },
    ],
  },
];