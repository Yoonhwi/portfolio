import { photo } from "@/constants";
import PhotoCard from "./PhotoCard";

const Photo = () => {
  return (
    <>
      {photo.map((item) => {
        return <PhotoCard src={item.src} text={item.text} />;
      })}
    </>
  );
};

export default Photo;
