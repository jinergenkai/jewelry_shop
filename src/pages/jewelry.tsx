import { useEffect, useState } from "react";
import DropdownMenu from "../components/dropdown-menu";
import Footer from "../components/footer";
import GalleryCard from "../components/gallery-card";
import Header from "../components/header";
import SwiperComponent from "../components/swiper";

export default function Jewelry() {
  const [products, setProducts] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

// useEffect(() => {

//   }
//   , [products]  
// );

  return (
    <>
      <Header />
      {/* banner swiper */}
      <SwiperComponent
        listImage={["/banner1.png", "/banner.png"]}
      ></SwiperComponent>

      <div className="bg-[#f0eee4] px-1 py-3 md:px-56">
        {/* filter */}
        <div className="flex items-center justify-center px-8 py-2 space-x-8 bg-white">
          <DropdownMenu
            label="Shop By"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <DropdownMenu
            label="Categories"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <DropdownMenu
            label="Material"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <DropdownMenu
            label="Color"
            options={["Option 1", "Option 2", "Option 3"]}
          />
          <DropdownMenu
            label="Price Range"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </div>

        {/* sort by */}
        <div className="flex justify-between m-4">
          <div>
            <i>804 Results</i>
          </div>
          <DropdownMenu
            label="Price Range"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </div>

        {/* gallery */}
        <div className="grid grid-cols-2 gap-[2px] md:grid-cols-4">
          {products.map((item, index) => (
            <div className="col-span-1">
              <GalleryCard key={index} />
            </div>
          ))}
        </div>
        <div className="m-4 text-xs text-center">Showing 64 of 66 products</div>
        <div className="w-40 h-[1px] bg-black m-auto"></div>

        <button
          className="block px-16 py-1 m-auto my-4 text-sm text-white bg-black border-2 border-black border-solid hover:text-black hover:bg-transparent hover:border-solid hover:border-2 hover:border-black"
          onClick={() => {
            setProducts([...products, 1,2,3,4]);
            console.log(products);
          }}
        >
          show more
          {/* <a href="" target="blank">
            show more
          </a> */}
        </button>
      </div>

      <Footer />
    </>
  );
}
