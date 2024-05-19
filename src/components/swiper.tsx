// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function SwiperComponent({
  listImage,
}: {
  listImage: Array<string>;
}) {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {listImage.map((image, index) => {
        return (
          <SwiperSlide className="w-full" key={index}>
            <div className="relative w-full h-[80vh]">
              <img
                src={image}
                alt="image"
                className="object-cover w-full h-[80vh]"
              ></img>
              <div className="absolute z-20 text-5xl leading-snug leading-9 text-left text-black left-32 bottom-40">
                <div>Crystal - Quyến Rũ Mọi Ánh Nhìn</div>
                <div className="text-2xl">
                  Crystal không chỉ đơn thuần là đá quý,
                  <br />
                  chúng còn là biểu tượng của vẻ đẹp tinh khiết và sự quyến rũ.
                </div>
                <button className="px-16 py-1 text-xl text-white bg-black border-2 border-black border-solid hover:text-black hover:bg-transparent hover:border-solid hover:border-2 hover:border-black ">
                  <a href="/jewelry">Xem thêm</a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide>Slide 1</SwiperSlide> */}
    </Swiper>
  );
}
