import { images, data } from "../constants";
import Button from "./Button";
import Spoon from "./spoon";

const AboutUs = () => {
  return (
    <section className="paddingY flex boxWidth z-1 relative" id="about">
      <div className="sectionCenter">
        <div className="flex lg:flex-row flex-col lg:w-[80%] w:full xl:max-w-[1080px] p-3 lg:gap-0 gap-[30px] z-2">
          <div className="flex flex-2 flex-col justify-center gap-4 lg:items-end items-center">
            <div className="flex flex-col lg:items-end items-center">
              <h2 className="heading">About Us</h2>
              <Spoon style={`rotate-180`} />
            </div>
            <p className="paragraph lg:text-right text-center lg:w-full max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <Button text={`Know More`} />
          </div>
          <div className="flex flex-1 justify-center items-center">
            <img
              src={images.knife}
              alt="Knife"
              className="h-[600px] w-[70px] lg:py-0 py-[20px]"
            />
          </div>
          <div className="flex flex-2 flex-col justify-center gap-4 lg:items-start items-center">
            <div className="flex flex-col lg:items-start items-center">
              <h2 className="heading">Our History</h2>
              <Spoon />
            </div>
            <p className="paragraph lg:text-left text-center lg:w-full max-w-[400px]">
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
              Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
              odio nec aliquet.
            </p>
            <Button text={`Know More`} />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center z-1 ">
        <img src={images.G} alt="" className="h-[310px] w-[286px]" />
      </div>
    </section>
  );
};

export default AboutUs;
