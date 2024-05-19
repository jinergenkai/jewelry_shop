import { useEffect } from "react";
import AOS from 'aos';

export default function BigCategoryCard({
  title,
  listImage,
}: {
  title: string;
  listImage: string[];
}) {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="py-10 text-3xl text-center bg-white">
      <div className="py-10 text-5xl text-center">{title}</div>
      <div className="flex justify-around">
        {listImage.map((image, index) => (
          <div key={index} className="m-12 text-left" data-aos="fade-up">
            <img
              src={image}
              alt="image_alt"
              className="w-full border-2 border-solid border_black"
            />
            <div className="my-8">Dây chuyền</div>
            <div className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              a eligendi deserunt delectus distinctio iure magni explicabo neque
              Vòng tay, Bông Tai
            </div>
            {/* <div className="my-4">
              <a href="/shop" className="text-lg underline underline-offset-8">
                Radiant Necklaces
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
