export default function BigCategoryCard({
  title,
  listImage,
}: {
  title: string;
  listImage: string[];
}) {
  return (
    <div className="py-10 text-3xl text-center bg-white">
      <div className="py-10 text-5xl text-center">{title}</div>
      <div className="flex justify-around">
        {listImage.map((image, index) => (
          <div key={index} className="m-12 text-left">
            <img
              src={image}
              alt="image_alt"
              className="w-full border-2 border-solid border_black"
            />
            <div className="my-8">Radiant Necklaces</div>
            <div className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              a eligendi deserunt delectus distinctio iure magni explicabo neque
              saepe sunt.
            </div>
            <div className="my-4">
              <a href="/shop" className="text-lg underline underline-offset-8">
                Radiant Necklaces
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
