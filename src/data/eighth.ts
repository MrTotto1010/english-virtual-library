import EighthBookCover from "../assets/covers/english/8th/8thBookCover.png";

import Unit1Cover from "../assets/covers/english/8th/Unit1Cover.png";
import Unit2Cover from "../assets/covers/english/8th/Unit2Cover.png";
import Unit3Cover from "../assets/covers/english/8th/Unit3Cover.png";
import Unit4Cover from "../assets/covers/english/8th/Unit4Cover.png";
import Unit5Cover from "../assets/covers/english/8th/Unit5Cover.png";
import Unit6Cover from "../assets/covers/english/8th/Unit6Cover.png";

export const eighth = {
  id: "8",
  name: "Octavo",

  sections: [
    {
      id: "complete-book",
      title: "Libro completo",

      resources: [
        {
          id: "8th-full-book",
          title: "8th Student Book",

          cover: EighthBookCover,

          pdf: "https://drive.google.com/file/d/1BtelgKXJywBzHNrsfn1_CaX2BUbYrdud/view?usp=drive_link",
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

          pdf: "https://drive.google.com/file/d/1Nn3uHVk9JNNWLfw6stxmT5FD-1mDEmSM/view?usp=drive_link",
        },

        {
          id: "unit-2",
          title: "Unit 2",

          cover: Unit2Cover,

          pdf: "https://drive.google.com/file/d/10CstWNCP_3gqavLi9rN__Kg1f6Jy8D7A/view?usp=drive_link",
        },

        {
          id: "unit-3",
          title: "Unit 3",

          cover: Unit3Cover,

          pdf: "https://drive.google.com/file/d/1L3rv_JuSKJgx4RmmeCQ1d_Huaf9YSVHx/view?usp=drive_link",
        },

        {
          id: "unit-4",
          title: "Unit 4",

          cover: Unit4Cover,

          pdf: "https://drive.google.com/file/d/1i_ysg2zvOoGLM9tUTKdEEX8EiF8RL7Cp/view?usp=drive_link",
        },

        {
          id: "unit-5",
          title: "Unit 5",

          cover: Unit5Cover,

          pdf: "https://drive.google.com/file/d/1rGGtQ_FdVnp58jbT6QPrf_RQrbrhGvGn/view?usp=drive_link",
        },

        {
          id: "unit-6",
          title: "Unit 6",

          cover: Unit6Cover,

          pdf: "https://drive.google.com/file/d/1p5NBv7cfXw5kOgK4oq-jED_5pJ_x0B56/view?usp=drive_link",
        },
      ],
    },

    {
      id: "practices",
      title: "Practicas",

      resources: [],
    },
  ],
};