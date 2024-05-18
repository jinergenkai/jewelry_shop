import DropdownMenu from "../components/dropdown-menu";
import Footer from "../components/footer";
import Header from "../components/header";
import SwiperComponent from "../components/swiper";

export default function Jewelry() {
  return (
    <>
      <Header />
      {/* banner swiper */}
      <SwiperComponent
        listImage={["/banner1.png", "/banner.png"]}
      ></SwiperComponent>

      <div className="bg-[#f0eee4] px-36 py-4">
        {/* filter */}
        <div className="flex items-center justify-center px-8 py-4 space-x-4 bg-white">
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

        <div className="h-[1000px] bg-[#f0eee4]">
          <h1 className="text-4xl font-bold text-center">Jewelrys</h1>
        </div>
      </div>

      <Footer />
    </>
  );
}
