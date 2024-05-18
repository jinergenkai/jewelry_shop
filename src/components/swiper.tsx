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
              <div className="absolute z-20 text-5xl leading-9 text-left text-black left-32 bottom-32">
                Phan Uyên Nhi
                <br />
                <span className="text-2xl">
                  lorem ipsum dolor sit amet, consectetur
                </span>
                <br />
                <br />
                <button className="px-16 py-1 text-xl text-white bg-black border-2 border-black border-solid hover:text-black hover:bg-transparent hover:border-solid hover:border-2 hover:border-black ">
                  <a
                    href="https://www.facebook.com/nhi.phanuyen.9?locale=vi_VN"
                    target="blank"
                  >
                    Follow Nhi nhé
                  </a>
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
