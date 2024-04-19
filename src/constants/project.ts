export interface ProjectType {
  name: string;
  imgSrc: string;
  data: string;
}
export const projects: ProjectType[] = [
  {
    name: "Portfolio",
    imgSrc: "",
    data: "2024.04 ~ 2024.04",
  },
  {
    name: "Join-Us",
    imgSrc: "",
    data: "2024.02 ~ ",
  },
  {
    name: "Callendar",
    imgSrc: "",
    data: "2023.11 ~ 2023.12",
  },
  {
    name: "Cooka",
    imgSrc: "/cooka/cooka-main.png",
    data: "2023.08 ~ 2023.11",
  },
];

export const imgByProject = {
  cooka: [
    "/cooka/cooka-main.png",
    "/cooka/cooka1.png",
    "/cooka/cooka2.png",
    "/cooka/cooka3.png",
  ],
};
