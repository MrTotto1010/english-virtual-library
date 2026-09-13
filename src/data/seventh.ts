import SeventhBookCover from "../assets/covers/english/7th/7thBookCover.png";
import SeventhGAWCover from "../assets/covers/english/7th/7thGAWCover.png";
import SeventhSpeakingCover from "../assets/covers/english/7th/7thSpeakingCover.png";

import Unit1Cover from "../assets/covers/english/7th/Unit1Cover.png";
import Unit2Cover from "../assets/covers/english/7th/Unit2Cover.png";
import Unit3Cover from "../assets/covers/english/7th/Unit3Cover.png";
import Unit4Cover from "../assets/covers/english/7th/Unit4Cover.png";
import Unit5Cover from "../assets/covers/english/7th/Unit5Cover.png";
import Unit6Cover from "../assets/covers/english/7th/Unit6Cover.png";

export const seventh = {
  id: "7",
  name: "Seventh",

  sections: [
    {
      id: "complete-book",
      title: "Complete Book",

      resources: [
        {
          id: "7th-full-book",
          title: "7th Student Book",

          cover: SeventhBookCover,

          pdf: "https://drive.google.com/file/d/1XmyMlZ3xQHpIScBKnHR7QhiMinP6B8hl/view?usp=drive_link",
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

          pdf: "https://drive.google.com/file/d/1_w2Tlqup5WAAOhJWIizQXCjrf-92jpeL/view?usp=drive_link",
        },

        {
          id: "unit-2",
          title: "Unit 2",

          cover: Unit2Cover,

          pdf: "https://drive.google.com/file/d/1XUA3SQ-mmmPyMNhzVjSUQ71fyps2yyPR/view?usp=drive_link",
        },

        {
          id: "unit-3",
          title: "Unit 3",

          cover: Unit3Cover,

          pdf: "https://drive.google.com/file/d/165uvyuG1UF8VU9r17olC3YD_-Cjt_gxO/view?usp=drive_link",
        },

        {
          id: "unit-4",
          title: "Unit 4",

          cover: Unit4Cover,

          pdf: "https://drive.google.com/file/d/1UwAZt5PcYe59AsQumo7t7SNyRVXuPzRg/view?usp=drive_link",
        },

        {
          id: "unit-5",
          title: "Unit 5",

          cover: Unit5Cover,

          pdf: "https://drive.google.com/file/d/1s0QaTrsPktkdhJvSa_7o18Lxqt4780fM/view?usp=drive_link",
        },

        {
          id: "unit-6",
          title: "Unit 6",

          cover: Unit6Cover,

          pdf: "https://drive.google.com/file/d/165-TJcrrFMg_P4jrmo1YVO1b6UlSmzy7/view?usp=drive_link",
        },
      ],
    },

    {
      id: "practices",
      title: "Practice",

      resources: [
        {
          id: "7th-grammar-and-writing",
          title: "Grammar and Writing",

          cover: SeventhGAWCover,

          pdf: "https://drive.google.com/file/d/1h2jAy6wMKjXjb3kqc48UCtaIYIoHZC70/view?usp=sharing",
        },

        {
          id: "7th-speaking",
          title: "Speaking",

          cover: SeventhSpeakingCover,

          pdf: "https://drive.google.com/file/d/1sULK8MwkQzzUVPVec9W6eqSp7WaDsAyS/view?usp=drive_link",
        },
      ],
    },
  ],
};