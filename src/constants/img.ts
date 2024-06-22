export interface PhotoType {
  src: string;
  text?: string;
}

export interface imgByProjectType {
  [name: string]: PhotoType[];
}
export const imgByProject: imgByProjectType = {
  Cooka: [
    { src: "https://yoonhwi.github.io/portfolio/cooka/cooka1.png" },
    { src: "https://yoonhwi.github.io/portfolio/cooka/cooka2.png" },
    { src: "https://yoonhwi.github.io/portfolio/cooka/cooka3.png" },
    { src: "https://yoonhwi.github.io/portfolio/cooka/cooka4.png" },
  ],
  Calendar: [
    { src: "https://yoonhwi.github.io/portfolio/calendar/calendar1.png" },
    { src: "https://yoonhwi.github.io/portfolio/calendar/calendar2.png" },
  ],
  "Join-Us": [
    { src: "https://yoonhwi.github.io/portfolio/joinus/joinus1.png" },
    { src: "https://yoonhwi.github.io/portfolio/joinus/joinus2.png" },
    { src: "https://yoonhwi.github.io/portfolio/joinus/joinus3.png" },
    { src: "https://yoonhwi.github.io/portfolio/joinus/joinus4.png" },
    { src: "https://yoonhwi.github.io/portfolio/joinus/joinus5.png" },
    { src: "https://yoonhwi.github.io/portfolio/joinus/joinus6.png" },
  ],
  Portfolio: [
    { src: "https://yoonhwi.github.io/portfolio/portfolio/portfolio1.png" },
    { src: "https://yoonhwi.github.io/portfolio/portfolio/portfolio2.png" },
  ],
};
