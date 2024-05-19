import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import AOS from "aos";
// import ServiceSection from "../components/service";

export default function Blog() {
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
      <div className="bg-[#f0eee4]">
        <div
          className="inline-block w-[60%] p-10 text-3xl align-top"
          data-aos="fade-left"
        >
          <div className="m-4">
            <div className="py-3 text-4xl">
              Blog
              <br />
              <b className="text-6xl">SWAN Ice Elegance</b>
            </div>
            <div className="text-2xl">
              <br />
              Xin chào các bạn, Câu chuyện của SWAN Stones bắt đầu từ sự kết hợp
              tài tình giữa nghệ thuật thiết kế và vẻ đẹp kỳ diệu của tự nhiên.
              <br />
              <br />
              Mỗi viên đá SWAN được chọn lọc kỹ càng, không chỉ để đảm bảo chất
              lượng tốt nhất mà còn để nói lên một câu chuyện riêng. Đá quý
              trong mỗi sản phẩm SWAN không chỉ là một vật phẩm trang sức, mà
              còn mang ý nghĩa phong thủy may mắn. Đối với những bạn trẻ ưa
              thích phong thủy, việc chọn lựa một viên đá phù hợp với mệnh và
              cung hoàng đạo của mình là một hành trình thú vị. Đá Aquamarine
              cho người mệnh Thủy, Amethyst cho người mệnh Mộc, hay Citrine cho
              những ai thuộc mệnh Thổ, mỗi loại đá đều mang trong mình nguồn
              năng lượng và ý nghĩa riêng biệt.
            </div>
          </div>
        </div>
        <img
          src="/test_image/7.jpg"
          alt="image_alt"
          className="object-cover w-[40%] h-[600px] inline-block"
          data-aos="fade-right"
        />
      </div>


      <div className="bg-[#f0eee4]">
      <img
          src="/test_image/6.jpg"
          alt="image_alt"
          className="object-cover w-[30%] h-[500px] inline-block align-top"
          data-aos="fade-right"
        />
        <div
          className="inline-block w-[70%] p-20 text-3xl text-center"
          data-aos="fade-left"
        >
          <div className="m-4">
            <div className="text-2xl">
              Nhưng SWAN Stones không chỉ dừng lại ở việc cung cấp trang sức -
              chúng tôi còn muốn mang đến cho khách hàng cơ hội để tự thiết kế
              riêng cho mình. Bạn có thể chọn kiểu dáng, loại đá và cả bản khắc
              chữ hoặc hình ảnh cá nhân. Mỗi thiết kế do bạn tạo ra không chỉ
              phản ánh phong cách của bạn, mà còn giúp bạn kết nối với nguồn
              năng lượng tích cực từ tự nhiên. Và quan trọng hơn cả, khi bạn
              chọn SWAN Stones, bạn không chỉ chọn cho mình một món trang sức,
              bạn chọn cho mình một người bạn đồng hành - một người bạn sẽ theo
              bạn qua từng khoảnh khắc quan trọng và góp phần vào câu chuyện đời
              bạn. 
              
              <br/>
              <br/>
              Hãy để SWAN Stones ghi dấu ấn cá nhân của bạn qua từng viên
              đá quý và thiết kế tự thân. Khám phá bộ sưu tập của chúng tôi và
              bắt đầu hành trình tạo nên sự khác biệt của riêng bạn!
            </div>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
}
