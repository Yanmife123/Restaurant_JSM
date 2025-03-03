import { images } from "../constants";
import Spoon from "./spoon";

const Chef = () => {
  return (
    <section className="paddingY flex boxWidth">
      <div className="sectionCenter">
        <div className="flex md:flex-row flex-col lg:w-[80%] w:full xl:max-w-[1080px] p-3 md:justify-between justify-normal">
          <div className="flex flex-1 md:justify-start justify-center">
            <img
              src={images.chef}
              alt="Chef"
              className="lg:w-[100%] w-[90%] h-[100%] object-contain"
            />
          </div>
          <div className="flex flex-col flex-1 justify-center md:items-end items-center md:py-0 py-8">
            <div className=" md:w-[80%] w-[90%]">
              <div className="flex flex-col items-start">
                <p className="font-base md:text-base text-[18px] text-white font-bold mb-2">
                  Chef’s Word
                </p>
                <Spoon />
              </div>
              <h2 className="md:text-5xl text-[42px] text-golden font-semibold font-base  capital tracking-wider leading-[80px] md:text-start text-center">
                What we believe in
              </h2>
              <div className="flex md:justify-start justify-center">
                <p className="paragraph py-5 text-start md:w-full w-[92%] ">
                  <img
                    src={images.quote}
                    alt=""
                    className="h-[28px] w-[37px] float-start pr-2"
                  />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime nihil dicta accusamus. Placeat quia itaque delectus,
                  qui rem nemo molestias enim nulla laboriosam perspiciatis
                  veniam. Adipisci, suscipit? Possimus, illum sint?
                </p>
              </div>
              <div className="flex flex-col">
                <div className="py-5">
                  <h3 className="text-golden font-base font-normal text-[28px] leading-[41.5px]">
                    Kevin Luo
                  </h3>
                  <p className="text-grey text-base font-alt font-normal leading-[28px]">
                    {" "}
                    Chef & Founder
                  </p>
                </div>
                <div className="py-5">
                  <img
                    src={images.sign}
                    alt="signature"
                    className="h-[85px] w-[230px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
