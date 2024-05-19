import { useEffect, useState } from "react";
import DropdownMenu from "../components/dropdown-menu";
import Footer from "../components/footer";
import GalleryCard from "../components/gallery-card";
import Header from "../components/header";
import SwiperComponent from "../components/swiper";
import FilterCard from "../components/filter-card";

export default function Jewelry() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  useEffect(() => {
    fetch("/image_paths.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setVisibleProducts(data.slice(0, 32));
      })
      .catch((error) =>
        console.error("Error fetching the image paths:", error)
      );
  }, []);

  const loadMore = () => {
    const nextVisibleProducts = products.slice(
      visibleProducts.length,
      visibleProducts.length + 8
    );
    setVisibleProducts([...visibleProducts, ...nextVisibleProducts]);
    if (
      visibleProducts.length + nextVisibleProducts.length >=
      products.length
    ) {
      setLoadMoreVisible(false); // Ẩn nút "Tải thêm" nếu không còn phần tử nào để tải
    }
  };

  return (
    <>
      <Header />
      {/* banner swiper */}
      <SwiperComponent
        // listImage={["/banner.png", "/banner1.png"]}
        listImage={["/banner.mp4", "/banner.mp4"]}
      ></SwiperComponent>

      <div className="bg-[#FFE2EB] px-1 py-3 xl:px-56">
        {/* filter */}
        <FilterCard />

        {/* sort by */}
        <div className="flex justify-between m-4 font-dejaVuSerif">
          <div>
            <i>{products.length} Results</i>
          </div>
          <DropdownMenu
            label="Sắp xếp theo"
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </div>

        {/* gallery */}
        <div className="grid grid-cols-2 gap-[2px] xl:grid-cols-4">
          {visibleProducts.map((item: {"name": string; "images": Array<string>}, index: number) => (
            <div key={index} className="col-span-1">
              <GalleryCard key={index} image={item.images[0]} href={`/detail-jewelry/${item.name}`} name={item?.name}/>
            </div>
          ))}
        </div>
        <div className="m-4 text-xs text-center font-dejaVuSerif">Hiện có {visibleProducts.length} trên {products.length} products</div>
        <div className="w-40 h-[1px] bg-black m-auto"></div>

        {loadMoreVisible && (
          <button
            className="block px-16 py-1 m-auto my-4 text-sm text-white bg-black border-2 border-black border-solid hover:text-black hover:bg-transparent hover:border-solid hover:border-2 hover:border-black"
            onClick={loadMore}
          >
            Hiện thêm
            {/* <a href="" target="blank">
            show more
          </a> */}
          </button>
        )}
      </div>

      <Footer />
    </>
  );
}
