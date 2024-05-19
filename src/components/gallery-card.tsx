import { useEffect } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import AOS from "aos";
import { Link } from "react-router-dom";

export default function GalleryCard({ image, name , href}: { image: string; name: string; href: string}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="relative bg-white" data-aos="zoom-in-up">
      <Link to={href}>
      <div className="overflow-hidden">
        <img
          src={
            image
              ? image
              : "https://fakeimg.pl/300x300/ffffff/969696?text=text&font=bebas"
          }
          alt="gallery"
          className="w-full transition-transform duration-500 ease-in-out hover:scale-125"
        ></img>

      </div>

      <div className="group">
        <Heart className="absolute text-gray-400 text-xm top-6 right-6 group-hover:hidden" />
        <HeartFill className="hidden text-gray-400 aboslute text-xm top-6 right-6 group-hover:inline-block" />
      </div>

      <div className="p-8 text-xs">
        <div className="my-2 text-gray-500">New collection</div>
        <div className="font-bold">{name}</div>
        {/* <div className="font-normal">Laboratory grown diamonds</div>
        <div className="mt-4 font-semibold">6,789,000 vnđ</div> */}
      </div>
      </Link>
    </div>
  );
}
