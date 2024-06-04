import { SectionName } from "@/constants";
import { useCallback, useEffect, useState } from "react";

interface Section {
  [name: string]: number;
}

const defaultSections: Section = {
  About: 0,
  Projects: 0,
  Contact: 0,
};

const useScrollObserver = () => {
  const [sections, setSections] = useState<Section>(defaultSections);

  const registerSection = useCallback(
    (section: SectionName, offsetTop: number) => {
      setSections((prev) => ({ ...prev, [section]: offsetTop }));
    },
    []
  );

  useEffect(() => {
    console.log(sections);
  }, [sections]);

  const scrollToSection = (section: SectionName) => {
    window.scrollTo({ top: sections[section], behavior: "smooth" });
  };

  return {
    sections,
    registerSection,
    scrollToSection,
  };
};

export default useScrollObserver;
