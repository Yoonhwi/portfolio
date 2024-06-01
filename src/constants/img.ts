export interface PhotoType {
  src: string;
  text?: string;
}

export interface imgByProjectType {
  [name: string]: PhotoType[];
}
export const imgByProject: imgByProjectType = {
  Cooka: [
    { src: "/cooka/cooka1.png" },
    { src: "/cooka/cooka2.png" },
    { src: "/cooka/cooka3.png" },
    { src: "/cooka/cooka4.png" },
  ],
  Calendar: [
    { src: "/calendar/calendar1.png" },
    { src: "/calendar/calendar2.png" },
  ],
  "Join-Us": [
    { src: "/joinus/joinus1.png" },
    { src: "/joinus/joinus2.png" },
    { src: "/joinus/joinus3.png" },
    { src: "/joinus/joinus4.png" },
    { src: "/joinus/joinus5.png" },
    { src: "/joinus/joinus6.png" },
  ],
  Portfolio: [
    { src: "/portfolio/portfolio1.png" },
    { src: "/portfolio/portfolio2.png" },
  ],
};
