import NinthBookCover from "../assets/covers/english/9th/9thBookCover.png";
import NinthGAWCover from "../assets/covers/english/9th/9thGAWCover.png";
import NinthSpeakingCover from "../assets/covers/english/9th/9thSpeakingCover.png";

import Unit1Cover from "../assets/covers/english/9th/Unit1Cover.png";
import Unit2Cover from "../assets/covers/english/9th/Unit2Cover.png";
import Unit3Cover from "../assets/covers/english/9th/Unit3Cover.png";
import Unit4Cover from "../assets/covers/english/9th/Unit4Cover.png";
import Unit5Cover from "../assets/covers/english/9th/Unit5Cover.png";
import Unit6Cover from "../assets/covers/english/9th/Unit6Cover.png";

export const ninth = {
  id: "9",
  name: "Ninth",

  sections: [
    {
      id: "complete-book",
      title: "Complete Book",

      resources: [
        {
          id: "9th-full-book",
          title: "9th Student Book",

          cover: NinthBookCover,

          pdf: "https://drive.google.com/file/d/1takeEK8Oi5VCyybgXtlz1IF2A3Nc-CTB/view?usp=drive_link",
        },
      ],
    },

    {
      id: "chapters",
      title: "Chapters",

      resources: [
        {
          id: "unit-1",
          title: "Unit 1",

          cover: Unit1Cover,

          pdf: "https://drive.google.com/file/d/1pfuVrbxdfCAMTgFbuYChfC2rNqKEWDXw/view?usp=drive_link",
        },

        {
          id: "unit-2",
          title: "Unit 2",

          cover: Unit2Cover,

          pdf: "https://drive.google.com/file/d/1Dnd2OXIhe_NuoeZgvpsAckbMj6Icda50/view?usp=drive_link",
        },

        {
          id: "unit-3",
          title: "Unit 3",

          cover: Unit3Cover,

          pdf: "https://drive.google.com/file/d/1RXKqMwXpGWWSaOh5c9ALvma2aJgkkTYv/view?usp=drive_link",
        },

        {
          id: "unit-4",
          title: "Unit 4",

          cover: Unit4Cover,

          pdf: "https://drive.google.com/file/d/1Z7M4vUEmAQhv0k5FrnVWT-IdKnDsPDHw/view?usp=drive_link",
        },

        {
          id: "unit-5",
          title: "Unit 5",

          cover: Unit5Cover,

          pdf: "https://drive.google.com/file/d/1yq9ZKwaJ2JKsF7Cwb5CERTl_lDrIUwCJ/view?usp=drive_link",
        },

        {
          id: "unit-6",
          title: "Unit 6",

          cover: Unit6Cover,

          pdf: "https://drive.google.com/file/d/15jPb4X7ORftTF3RwMuTwtXivpn2csLGq/view?usp=drive_link",
        },
      ],
    },

    {
      id: "practices",
      title: "Practice",

      resources: [
        {
          id: "9th-grammar-and-writing",
          title: "Grammar and Writing",

          cover: NinthGAWCover,

          pdf: "https://drive.google.com/file/d/1M6g1L4gY3h7r0n2w8k5p9v4c6x2z1aB/view?usp=drive_link",
        },

        {
          id: "9th-speaking",
          title: "Speaking",

          cover: NinthSpeakingCover,

          pdf: "https://drive.google.com/file/d/1N7h2M5jZ4k8s1p3q9w6v0b2c5x7y3dE/view?usp=drive_link",
        },
      ],
    },
  ],
};