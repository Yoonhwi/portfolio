import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper as _Swiper } from "swiper/react";

interface SwiperProps<T> {
  datas: T[];
  renderItem: ({ data }: { data: T }) => JSX.Element;
}
const Swiper = <T,>({ datas, renderItem }: SwiperProps<T>) => {
  return (
    <_Swiper
      autoHeight={true}
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {datas.map((data, index) => (
        <SwiperSlide key={index}>{renderItem({ data })}</SwiperSlide>
      ))}
    </_Swiper>
  );
};

export default Swiper;
