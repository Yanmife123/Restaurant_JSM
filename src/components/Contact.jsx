import { images } from "../constants";
import Button from "./Button";
import Spoon from "./spoon";

const Contact = () => {
  return (
    <section className="paadingY flex boxWidth" id="contact">
      <div className="sectionCenter">
        <div className="flex md:flex-row flex-col-reverse lg:w-[80%] w:full xl:max-w-[1080px] p-3 md:justify-between justify-normal">
          <div
            className="flex flex-col flex-1 justify-center md:items-start  
         items-center md:py-0 py-8 gap-[40px]"
          >
            <div className="w-full">
              <div className="flex flex-col md:items-start items-center">
                <p className="font-base md:text-base text-[18px] text-white font-bold mb-2">
                  Contact
                </p>
                <Spoon />
              </div>
              <h2 className="md:text-5xl text-[42px] text-golden font-semibold font-base  capital tracking-wider leading-[80px] md:text-start text-center">
                Find Us
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="paragraph md:text-start text-center">
                Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
              </p>
              <div className="flex flex-col gap-4 md:items-start items-center">
                <h5 className="text-golden font-base font-bold text[20px] leading-[27px]">
                  Opening Hours
                </h5>
                <div className="flex flex-col items-start">
                  <p className="paragraph">Mon - Fri: 10:00 am - 02:00 am</p>
                  <p className="paragraph">Sat - Sun: 10:00 am - 03:00 am</p>
                </div>
              </div>
            </div>
            <Button text={`Visit Us`} />
          </div>
          <div className="flex-1 flex justify-center md:py-0 py-6">
            <img
              src={images.findus}
              alt="findUs"
              className="lg:w-[100%] w-[90%] h-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
