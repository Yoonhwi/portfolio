export interface PhotoType {
  src: string;
  text?: string;
}

export interface imgByProjectType {
  [name: string]: PhotoType[];
}
export const imgByProject: imgByProjectType = {
  Cooka: [
    { src: "/cooka/cooka-main.png" },
    { src: "/cooka/cooka1.png" },
    { src: "/cooka/cooka2.png" },
    { src: "/cooka/cooka3.png" },
  ],
  Calendar: [
    { src: "/calendar/calendar-main.png" },
    { src: "/calendar/calendar1.png" },
  ],
};
