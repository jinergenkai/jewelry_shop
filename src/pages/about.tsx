import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import AOS from "aos";
// import ServiceSection from "../components/service";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="relative ">
      <Header></Header>
      {/* image with title left, right */}
      <div className="bg-[#FFE2EB]">
        <div
          className="inline-block w-[70%] p-10 text-3xl"
          data-aos="fade-left"
        >
          <div className="m-4">
            <div className="py-3 text-4xl">
              Chào mừng đến với
              <br />
              <b className="text-6xl">SWAN Ice Elegance</b>
            </div>
            <div className="text-2xl">
              <br />
              Nơi hội tụ của những tuyệt tác trang sức đá quý, nơi mỗi thiết kế
              đều là một thông điệp của vẻ đẹp và tinh tế. SWAN Ice Elegance tự
              hào là địa chỉ tin cậy cho những ai đam mê và yêu thích trang sức
              chính hãng, với những viên đá SWAN được chọn lọc kỹ lưỡng, mang
              đến cho bạn sự sang trọng và quý phái không thể phai mờ. Mỗi sản
              phẩm của chúng tôi không chỉ là một món trang sức, mà còn là một
              tác phẩm nghệ thuật được chế tác tỉ mỉ, phản ánh phong cách và cá
              tính riêng biệt của người đeo.
            </div>
            <div className="text-2xl font-normal">
              <br />
              Liên hệ trực tuyến với shop qua zalo
              <br />
              Số điện thoại hỗ trợ: 0358820162
            </div>
            {/* <br />
            <a href="/shop" className="text-base underline underline-offset-8">
            Tìm hiểu thêm
            </a> */}
          </div>
        </div>
        <img
          src="/test_image/1.jpg"
          alt="image_alt"
          className="object-cover w-[30%] h-[600px] inline-block align-top"
          data-aos="fade-right"
        />
      </div>
      <Footer></Footer>
    </div>
  );
}
