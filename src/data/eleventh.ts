import EleventhBookCover from "../assets/covers/english/11th/11thBookCover.png";

import Unit1Cover from "../assets/covers/english/11th/Unit1Cover.png";
import Unit2Cover from "../assets/covers/english/11th/Unit2Cover.png";
import Unit3Cover from "../assets/covers/english/11th/Unit3Cover.png";
import Unit4Cover from "../assets/covers/english/11th/Unit4Cover.png";
import Unit5Cover from "../assets/covers/english/11th/Unit5Cover.png";

export const eleventh = {
  id: "11",
  name: "Undecimo",

  sections: [
    {
      id: "complete-book",
      title: "Libro completo",

      resources: [
        {
          id: "11th-full-book",
          title: "11th Student Book",

          cover: EleventhBookCover,

          pdf: "https://drive.google.com/file/d/1frLc_TkDvHahyAWU-26ABIgbprKly_UX/view?usp=drive_link",
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

          pdf: "https://drive.google.com/file/d/1wOi-hcIdm_21RYlBK9iUuEB-vAt6Ong1/view?usp=drive_link",
        },

        {
          id: "unit-2",
          title: "Unit 2",

          cover: Unit2Cover,

          pdf: "https://drive.google.com/file/d/18zAjJOFnnB3VP-Onei5CvLVlGWacvvYi/view?usp=drive_link",
        },

        {
          id: "unit-3",
          title: "Unit 3",

          cover: Unit3Cover,

          pdf: "https://drive.google.com/file/d/1DAuQZqh5gaKcFNFXakxFabFAt7UxcSvl/view?usp=drive_link",
        },

        {
          id: "unit-4",
          title: "Unit 4",

          cover: Unit4Cover,

          pdf: "https://drive.google.com/file/d/1vx4Nydeb_QLPN_MzEebZwHstcg-9czgp/view?usp=drive_link",
        },

        {
          id: "unit-5",
          title: "Unit 5",

          cover: Unit5Cover,

          pdf: "https://drive.google.com/file/d/1O_nHcQMf3dHAm3gUBy2ScWn1J0UfOZkR/view?usp=drive_link",
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