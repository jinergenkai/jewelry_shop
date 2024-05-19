import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
}

export default function DetailJewelry() {
  const { name } = useParams<{ name: string }>();
  const [images, setImages] = useState([] as string[]);

  const [selectedImage, setSelectedImage] = useState("/images/ring1.jpg");

  // const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/image_paths.json")
      .then((response) => response.json())
      .then((data) => {
        const currentProduct = (data as Product[]).find(
          (product) => product.name === name
        );
        console.log("currentProduct", currentProduct);

        setImages(currentProduct?.images || []);
        setSelectedImage(currentProduct?.images[0] || "");
      })
      .catch((error) =>
        console.error("Error fetching the image paths:", error)
      );
  }, [name]);

  return (
    <>
      <Header />
      <div className="flex bg-gray-100 p-28">
        {/* Image List */}
        <div className="flex flex-col gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Ring ${index}`}
              onClick={() => setSelectedImage(image)}
              className={`cursor-pointer w-16 h-16 border-2 ${
                selectedImage === image ? "border-black" : "border-transparent"
              }`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex justify-center flex-1 p-8 items-top">
          <img
            src={selectedImage}
            alt="Selected Ring"
            className="max-w-full w-[70%] h-[70%]"
          />
        </div>

        {/* Ring Details */}
        <div className="p-10 bg-white rounded-lg shadow-lg w-[500px] h-[100%] align-top">
          <p className="mt-4 mb-1 text-xl">Sản phẩm</p>
          <h1 className="mb-2 text-2xl font-semibold font-dejaVuSerif">
            {name?.replace(/-/g, " ")}
          </h1>
          <p className="text-gray-600">
            Biểu tượng của đẳng cấp và phong cách cá nhân.
            <br />
            <br />
            Với thiết kế hiện đại, sản phẩm này tôn lên vẻ đẹp và sự tự tin,
            mang lại niềm vui và hạnh phúc cho người sở hữu.
          </p>
          {/* <p className="mt-4 mb-6 text-xl font-semibold">¥ 143,000</p>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Color</h3>
            <div className="flex gap-4 mt-2">
              <div className="w-8 h-8 bg-yellow-400 border-2 border-transparent rounded-full cursor-pointer"></div>
              <div className="w-8 h-8 bg-gray-200 border-2 border-black rounded-full cursor-pointer"></div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Select size</h3>
            <div className="grid grid-cols-4 gap-2 mt-2">
              <button className="p-2 border rounded-lg">48</button>
              <button className="p-2 border rounded-lg">50</button>
              <button className="p-2 border rounded-lg">52</button>
              <button className="p-2 border rounded-lg">53</button>
              <button className="p-2 border rounded-lg">55</button>
              <button className="p-2 border rounded-lg">58</button>
              <button className="p-2 border rounded-lg" disabled>
                60
              </button>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Delivery options</h3>
            <div className="mt-2">
              <div className="flex items-start mb-2">
                <input
                  type="radio"
                  name="delivery"
                  id="delivery-to-address"
                  className="mt-1"
                />
                <label htmlFor="delivery-to-address" className="ml-2">
                  Delivery to address
                  <p className="text-gray-600">
                    Unfortunately this product is currently unavailable online
                  </p>
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="radio"
                  name="delivery"
                  id="find-in-store"
                  className="mt-1"
                />
                <label htmlFor="find-in-store" className="ml-2">
                  Find in store
                  <a href="#" className="text-blue-500">
                    Check Instore Availability
                  </a>
                </label>
              </div>
            </div>
          </div> */}
          <button className="w-full py-2 mt-4 text-xl text-white bg-black rounded-lg">

            Liên hệ đặt hàng <br/> 
            
            <span className="font-dejaVuSerif">0358820162</span>

          </button>
          {/* <p className="mt-4 text-center text-gray-600">
            Free standard shipping over ¥ 18,000.
          </p> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
