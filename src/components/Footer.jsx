import { images } from "../constants";
import Spoon from "./spoon";

const Footer = () => {
  return (
    <section className="paddingY flex boxWidth" id="contact">
      <div className="sectionCenter flex-col">
        <div className="flex md:flex-row flex-col md:gap-0 gap-12 lg:w-[80%] w-full xl:max-w-[1080px] p-3 md:justify-between justify-normal ">
          <div className="flex-1 flex items-center justify-start">
            <div className="md:w-[80%] w-[100%] flex flex-col items-center justify-center ">
              <h4 className="text-golden text-2xl font-base leading-[40px] tracking-wide">
                Contact Us
              </h4>
              <p className="paragraph mt-4 mb-2 text-center ">
                9 W 53rd St, New York, NY 10019, USA
              </p>
              <div className="flex flex-col">
                <p className="paragraph">+1 212-344-1230</p>
                <p className="paragraph">+1 212-344-1230</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <h2 className="text-golden  font-base leading-[70px] font-bold text-[50px] uppercase text-center">
              Gerícht
            </h2>
            <p className="paragraph text-center mt-4 mb-3">
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </p>
            <Spoon />
            <div className="flex gap-4">
              {[images.Facebook, images.Twitter, images.Instagram].map(
                (social) => (
                  <img src={social} alt="" />
                )
              )}
            </div>
          </div>
          <div className="flex-1 flex-col flex lg:items-end items-center justify-center">
            <h4 className="text-golden text-2xl font-base leading-[40px] tracking-wide">
              Working Hours
            </h4>
            <div className="flex flex-col mt-4 gap-4">
              <p className="paragraph">
                Monday-Friday: <br />
                08:00 am -12:00 am
              </p>
              <p className="paragraph">
                Saturday-Sunday: <br /> 07:00am -11:00 pm
              </p>
            </div>
          </div>
        </div>
        <p className="paragraph mt-9">
          @Yanmife clone Gerícht. How was it website
        </p>
      </div>
    </section>
  );
};

export default Footer;
