import Button from "./Button";
import Spoon from "./spoon";

const NewsLetter = () => {
  return (
    <section className=" flex boxWidth">
      <div className="sectionCenter">
        <div className="flex flex-col items-center md:w-[80%] w-full xl:max-w-[1080px] p-3 py-6 bg-black new__letter__boxShadow md:border-1 border-0 border-[#DCCA8733] gap-[40px] z-3">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <p className="font-base md:text-base text-[18px] text-white font-bold mb-2">
                Newsletter
              </p>
              <Spoon />
            </div>
            <h2 className="heading text-center">Subscribe to Our Newsletter</h2>
            <p className="paragraph mt-3">And never miss latest Updates!</p>
          </div>
          <div className="flex md:flex-row flex-col gap-[30px] items-center">
            <input
              type="email"
              className="box-border text-grey font-base md:w-[30vw] w-[65vw] placeholder:font-semibold py-2 px-3 placeholder:text-grey placeholder:text-[15px] border-1 border-crimson outline-0"
              placeholder="Email Address"
            />
            <Button text={`Subscribe`} />
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full h-[150px] z-2 bg-black"></div>
    </section>
  );
};

export default NewsLetter;
