import { data } from "../constants";
import Button from "./Button";
import Spoon from "./spoon";

const Gallery = () => {
  return (
    <section className="paddingY ">
      <div className="flex md:justify-between lg:flex-row flex-col justify-center lg:pl-15 lg:px-0 px-6">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-start">
            <p className="font-base md:text-base text-[18px] text-white font-bold mb-2">
              Instagram
            </p>
            <Spoon />
            <h2 className="heading">Photo Gallery</h2>
          </div>
          <div className="flex flex-col gap-[24px] mt-2 md:items-start items-center ">
            <p className="paragraph md:w-[90%] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              mattis ipsum turpis elit elit scelerisque egestas mu.
            </p>
            <Button text={`View More`} />
          </div>
        </div>
        <div className="flex gap-3 flex-wrap lg:mt-0 mt-6">
          {data.gallery.map((image) => (
            <div className="flex-1" key={image.id}>
              <img
                src={image.img}
                alt="image"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
