import Spoon from "./spoon";
import { images, data } from "../constants";

const Awards = ({ imgUrl, title, subtitle }) => {
  return (
    <div className={`flex min-w-[230px] `}>
      <div className="flex-1 flex md:justify-start justify-center items-center">
        <img src={imgUrl} alt="award" className="h-[50px] w-[50px]" />
      </div>
      <div className="md:flex-3 flex-2 flex flex-col justify-center">
        <h5 className="text-golden font-base font-bold text-[18px]">{title}</h5>
        <p className="paragraph">{subtitle}</p>
      </div>
    </div>
  );
};

const Laurel = () => {
  return (
    <section className="paddingY flex boxWidth" id="awards">
      <div className="sectionCenter lg:mt-0 md:mt-9 mt-5">
        <div className="flex md:flex-row flex-col lg:w-[80%] w:full xl:max-w-[1080px] p-3 md:justify-between justify-normal md:gap-0 gap-12">
          <div className="flex-1 flex gap-[40px] flex-col md:items-start items-center justify-center">
            <div className="flex flex-col md:items-start items-center">
              <p className="font-base md:text-base text-[18px] text-white font-bold mb-2">
                Awards & recognition
              </p>
              <Spoon />
              <h2 className="md:text-5xl text-[42px] text-golden font-semibold font-base  capital tracking-wider leading-[80px] md:text-start text-center">
                Our Laurels
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-6">
              {data.awards.map((award) => (
                <Awards
                  key={award.title}
                  //   style={index > 2 ? "mt-5" : "mt-0"}
                  {...award}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-1 md:justify-end justify-center items-center">
            <img
              src={images.laurels}
              alt="laurel"
              className="h-[100%] w-[90%] object-contain "
            />
          </div>
        </div>
      </div>
      <div className="absolute top-8  left-7">
        <img src={images.logo} alt="logo" className="max-h-[100px] h-[8vw]" />
      </div>
    </section>
  );
};

export default Laurel;
