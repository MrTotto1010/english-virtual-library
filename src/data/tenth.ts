import TenthBookCover from "../assets/covers/english/10th/10thBookCover.png";

import Unit1Cover from "../assets/covers/english/10th/Unit1Cover.png";
import Unit2Cover from "../assets/covers/english/10th/Unit2Cover.png";
import Unit3Cover from "../assets/covers/english/10th/Unit3Cover.png";
import Unit4Cover from "../assets/covers/english/10th/Unit4Cover.png";
import Unit5Cover from "../assets/covers/english/10th/Unit5Cover.png";
import Unit6Cover from "../assets/covers/english/10th/Unit6Cover.png";

export const tenth = {
  id: "10",
  name: "Decimo",

  sections: [
    {
      id: "complete-book",
      title: "Libro completo",

      resources: [
        {
          id: "10th-full-book",
          title: "10th Student Book",

          cover: TenthBookCover,

          pdf: "https://drive.google.com/file/d/1QDelnOzkSjtCBvg6UPxFZdPZx4bRaN4O/view?usp=drive_link",
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

          pdf: "https://drive.google.com/file/d/1cQSYruN7Hip-rZyf4uXO_zV8TGaqEO3U/view?usp=drive_link",
        },

        {
          id: "unit-2",
          title: "Unit 2",

          cover: Unit2Cover,

          pdf: "https://drive.google.com/file/d/1IUa7I8jRIUDAtDf2k7rWsfGZveyjt5gP/view?usp=drive_link",
        },

        {
          id: "unit-3",
          title: "Unit 3",

          cover: Unit3Cover,

          pdf: "https://drive.google.com/file/d/1HrDJl0FnAmiSP8kgvYMfH9TmUFsG5Pdb/view?usp=drive_link",
        },

        {
          id: "unit-4",
          title: "Unit 4",

          cover: Unit4Cover,

          pdf: "https://drive.google.com/file/d/1a22ifXow-rthC_nonOFtuz9iQbkfuXib/view?usp=drive_link",
        },

        {
          id: "unit-5",
          title: "Unit 5",

          cover: Unit5Cover,

          pdf: "https://drive.google.com/file/d/1CrGWJzdUaKZK1DsbDRcjIpaTEf5R3KlC/view?usp=drive_link",
        },

        {
          id: "unit-6",
          title: "Unit 6",

          cover: Unit6Cover,

          pdf: "https://drive.google.com/file/d/1YX641YpYj6SyjFRyb0IGNwZpi0LWRWFh/view?usp=drive_link",
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