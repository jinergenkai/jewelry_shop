import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SwiperComponent from "../components/swiper";
import BigCategoryCard from "../components/type-card";
import AOS from "aos";
// import ServiceSection from "../components/service";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="relative ">
      <Header></Header>

      {/* banner swiper */}
      <SwiperComponent
        listImage={["/banner.png", "/banner1.png"]}
      ></SwiperComponent>

      {/* mau vang */}
      <div className={`bg-[#f0eee4]] text-center py-10 text-3xl`}>
        Masters of Light Since 1895
        <div className="p-10 text-xl">
          Since 1895, founder Daniel Swarovski’s passion for innovation and
          design, and mastery of crystal cutting has defined <br />
          Swarovski as the leading jewelry and accessories brand.
        </div>
      </div>

      {/* Infinitely Inspiring */}
      <BigCategoryCard
        key={1}
        title="Cảm hứng vô tận"
        listImage={[
          "./test_image/3-removebg-preview.png",
          "./test_image/2-removebg-preview.png",
          "./test_image/6-removebg-preview.png",
        ]}
      ></BigCategoryCard>

      {/* image with title left, right */}
      <div className="bg-[#f0eee4]">
        <img
          src="/test_image/7.jpg"
          alt="image_alt"
          className="object-cover w-[50%] h-full inline-block"
          data-aos="fade-right"
        />
        <div
          className="inline-block w-[50%] p-10 text-3xl"
          data-aos="fade-left"
        >
          <div className="m-32">
            <div className="py-3 text-4xl">Đá Swan</div>
            <div className="text-base">
              Welcome to the future of diamond jewelry.
              <br />
              The Swarovski Created Diamond jewelry collection radiates
              otherworldly wonder, featuring beautiful lab grown diamonds that
              are identical to their mined counterparts in every way but how
              they originate.
            </div>
            {/* <br />
            <a href="/shop" className="text-base underline underline-offset-8">
            Tìm hiểu thêm
            </a> */}
          </div>
        </div>
      </div>

      {/* shop by category */}
      {/* <div className="py-10 text-5xl text-center">Shop by Category</div>
      <div className="flex justify-center m-2">
        {[
          "/test_image/11.jpg",
          "/test_image/44.jpg",
          "/test_image/77.jpg",
          "/test_image/11.jpg",
        ].map((image, index) => (
          <div key={index} className="w-[15%] px-1">
            <img
              src={image}
              alt="image_alt"
              className="object-cover w-full h-full"
              data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
            />
            <div className="p-2 text-lg text-center bg-yellow-50">Category</div>
          </div>
        ))}
      </div> */}

      {/* divider */}
      <div className="bg-[#f0eee4] text-center py-10 text-3xl">
        <div className="p-10 text-xl">
          Since 1895, founder Daniel Swarovski’s passion for innovation and
          design, and mastery of crystal cutting has defined <br />
          Swarovski as the leading jewelry and accessories brand.
        </div>
      </div>
      {/* <ServiceSection></ServiceSection> */}
      <Footer></Footer>
    </div>
  );
}
