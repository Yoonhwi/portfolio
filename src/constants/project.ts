import { CookaDes } from "@/containers";
import CalendarDes from "@/containers/description/CalendarDes";

export interface ProjectType {
  name: string;
  date: string;
  description?: () => JSX.Element;
}

export const projects: ProjectType[] = [
  {
    name: "Portfolio",
    date: "2024.04 ~ 2024.04",
  },
  {
    name: "Join-Us",
    date: "2024.02 ~ ",
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
