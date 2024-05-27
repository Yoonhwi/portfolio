interface LinksType {
  [key: string]: {
    git: string;
    demo?: string;
  };
}

export const links: LinksType = {
  Cooka: {
    git: "https://github.com/Yoonhwi/Cooka",
    demo: "http://cooka.site/",
  },
  Calendar: {
    git: "https://github.com/Yoonhwi/Calendar",
  },
  JoinUs: {
    git: "https://github.com/joinus-devs",
    demo: "https://www.joinus.asia",
  },
  Portfolio: {
    git: "https://github.com/Yoonhwi/portfolio",
  },
};
