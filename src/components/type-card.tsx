import { useEffect } from "react";
import AOS from "aos";

export default function BigCategoryCard({
  title,
  item,
}: {
  title: string;
  item: {
    title: string;
    image: string;
    description: string;
  }[];
}) {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      // once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="py-10 text-3xl text-center bg-white">
      <div className="py-10 text-5xl text-center font-dejaVuSerif">{title}</div>
      <div className="flex justify-around">
        {item.map((item, index) => (
          <div key={index} className="m-12 text-left" data-aos="fade-up">
            <img
              src={item.image}
              alt="image_alt"
              className="object-cover w-full border-2 border-solid border_black h-[600px]"
            />
            <div className="my-8 font-dejaVuSerif">{item.title}</div>
            <div className="text-lg">
              {item.description}
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
