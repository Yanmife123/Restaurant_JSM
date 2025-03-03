import { images } from "../constants";
import Button from "./Button";
import Spoon from "./spoon";

const Number = (props) => {
  return (
    <div className="text-golden text-base font-semibold font-base leading-[28px]">
      {props.text}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="flex paddingY relative" id="home">
      <div className="flex justify-center items-center w-full">
        <div className="flex md:flex-row flex-col md:gap-0 gap-9 lg:w-[80%] w-full xl:max-w-[1080px] p-3">
          <div className="flex flex-col flex-1 justify-center ">
            <div className="flex flex-col items-start">
              <p className="font-base text-white font-bold mb-2">
                Chase the new Flavour
              </p>
              <Spoon />
            </div>
            <h2 className="text-6xl text-golden font-bold font-base  capital tracking-wider leading-[80px] md:text-start text-center">
              The Key To <br className="md:block hidden" /> Fine Dining
            </h2>

            <div className="flex flex-col md:items-start items-center">
              <p className="paragraph py-5 md:text-start text-center">
                Sit tellus lobortis sed senectus vivamus molestie.{" "}
                <br className="md:block hidden" />
                Condimentum volutpat morbi facilisis quam scelerisque{" "}
                <br className="md:block hidden" /> sapien. Et, penatibus aliquam
                amet tellus
              </p>
              <Button text={`Explore Menu`} style={`mt-1`} />
            </div>
          </div>
          <div className="flex flex-1  justify-center">
            <img
              src={images.welcome}
              alt="Welcome"
              className="lg:w-[100%] w-[90%] h-[100%] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-[-40px] top-[47%] rotate-270 lg:block hidden">
        <div className="flex gap-9 ">
          <div className="text-[12px] text-golden font-normal font-alt leading-[20px]">
            #Gericht
          </div>
          <div className="text-[12px] text-golden font-normal font-alt leading-[20px]">
            #Bar
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 lg:block hidden">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-8 bg-[#DCCA873D]" />
          <div className="font-base font-bold text-base text-golden">
            Scroll
          </div>
        </div>
      </div>
      <div className="absolute left-[46%] bottom-0 lg:block hidden">
        <div className="flex justify-center items-center gap-4 py-2">
          <Number text={`01`} />
          <div className="w-4 h-[1px] bg-golden"></div>
          <Number text={`02`} />
          <Number text={`03`} />
          <Number text={`04`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
