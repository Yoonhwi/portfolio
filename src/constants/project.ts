import {
  CookaDes,
  CalendarDes,
  JoinusDes,
  PortfolioDes1,
  PortfolioDes2,
  JoinUsDes1,
  JoinUsDes2,
} from "@/containers";
import PortfolioDes from "@/containers/description/PortfolioDes";

export interface ProjectDeatilsType {
  [key: string]: {
    imgSrc: string;
    description: () => JSX.Element;
  }[];
}
export interface ProjectType {
  name: string;
  date: string;
  description?: () => JSX.Element;
}

export const projects: ProjectType[] = [
  {
    name: "Portfolio",
    date: "2024.04 ~ 2024.04",
    description: PortfolioDes,
  },
  {
    name: "Join-Us",
    date: "2024.02 ~ ",
    description: JoinusDes,
  },
  {
    name: "Calendar",
    date: "2023.11 ~ 2023.12",
    description: CalendarDes,
  },
  {
    name: "Cooka",
    date: "2023.08 ~ 2023.11",
    description: CookaDes,
  },
];

export const projectDetails: ProjectDeatilsType = {
  Portfolio: [
    {
      imgSrc: "/portfolio/portfolio1.png",
      description: PortfolioDes1,
    },
    {
      imgSrc: "/portfolio/portfolio2.png",
      description: PortfolioDes2,
    },
  ],
  "Join-Us": [
    {
      imgSrc: "/joinus/joinus1.png",
      description: JoinUsDes1,
    },
    {
      imgSrc: "/joinus/joinus2.png",
      description: JoinUsDes2,
    },
  ],
};
