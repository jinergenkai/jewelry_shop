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
        // listImage={["/banner.png", "/banner1.png"]}
        listImage={["/banner.mp4", "/banner.mp4"]}
      ></SwiperComponent>

      {/* mau vang */}
      <div className={`bg-[#FFE2EB] text-center pt-10 text-3xl`}>
        Pha Lê - Vẻ Đẹp Kiêu Sa
        <div className="p-10 text-xl">
          Pha lê không chỉ là biểu tượng của vẻ đẹp tinh khiết
          <br />
          mà còn là sự lựa chọn hoàn hảo cho những ai muốn toát lên vẻ sang
          trọng.
        </div>
      </div>

      {/* Infinitely Inspiring */}
      <BigCategoryCard
        key={1}
        title="Cảm hứng vô tận"
        item={[
          {
            image: "./test_image/3-removebg-preview.png",
            title: "Vòng Tay",
            description:
              "Được làm từ những viên đá SWAN cao cấp, Mỗi viên đá được lựa chọn kỹ lưỡng, đảm bảo chất lượng và độ tinh khiết cao nhất, mang lại vẻ đẹp hoàn mỹ cho trang sức. Thiết kế của dây chuyền vừa tinh tế và sự chú trọng đến từng chi tiết nhỏ.",
          },
          {
            image: "./test_image/2-removebg-preview.png",
            title: "Bông Tai",
            description:
              "SWAN không chỉ là biểu tượng của sự sang trọng và thanh lịch, mà còn thể hiện cá tính và gu thẩm mỹ riêng biệt của người đeo. Đá SWAN được chọn lọc kỹ lưỡng, tỏa sáng với phản chiếu ánh sáng một cách hoàn hảo để tôn lên vẻ đẹp của làn da.",
          },
          {
            image: "./test_image/6-removebg-preview.png",
            title: "Dây Chuyền",
            description:
              "chính hãng mang đến vẻ đẹp tinh tế và sang trọng, phù hợp với mọi phong cách thời trang.  Bông tai có thiết kế đa dạng, từ kiểu dáng cổ điển đến hiện đại, đảm bảo bạn sẽ tìm thấy một cặp phù hợp với cá tính của mình.",
          },
        ]}
      ></BigCategoryCard>

      {/* image with title left, right */}
      <div className="bg-[#FFE2EB]">
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
            <div className="py-3 text-4xl font-dejaVuSerif">
              <span>Đá SWAN Cao Cấp</span>
              <br />
              Lựa Chọn Đẳng Cấp
            </div>
            <div className="text-xl">
              Đá SWAN - vẻ đẹp hoàn mỹ, chất lượng vượt trội, từ mỏ đá hàng đầu.
              Lựa chọn sang trọng, bền vững theo thời gian cho mọi công trình.
              Kết hợp nét đẹp tự nhiên và tính năng hiện đại, đá SWAN đảm bảo sự
              sang trọng và ứng dụng cao. Giá cực kỳ ưu đãi, cơ hội nâng cấp
              không gian sống và làm việc với sản phẩm đá cao cấp.
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
      <div className="bg-[#FFE2EB] text-center py-10 text-3xl">
        <div className="p-10 text-xl">
          Hãy để SWAN Stones ghi dấu ấn cá nhân của bạn qua từng viên đá quý và
          thiết kế tự thân. <br />
          Khám phá bộ sưu tập của chúng tôi và bắt đầu hành trình tạo nên sự
          khác biệt của riêng bạn!
        </div>
      </div>
      {/* <ServiceSection></ServiceSection> */}
      <Footer></Footer>
    </div>
  );
}
