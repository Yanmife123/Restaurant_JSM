import MenuData from "./MenuData";
import Spoon from "./spoon";
import { data, images } from "../constants";

const Menu = () => {
  return (
    <section id="menu" className="paddingY flex boxWidth">
      <div className="sectionCenter flex-col">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="font-base font-bold text-white text-sm mb-1">
              Menu that fits you palatte
            </p>
            <Spoon />
          </div>
          <h2 className="heading">Today’s Special</h2>
        </div>
        <div className=" flex lg:flex-row flex-col lg:w-[80%] w:full lg:pt-15 pt-8">
          <div className="flex-1 flex flex-col justify-center items-center">
            <h3 className="text-white font-semibold font-base leading-[50px] text-[37px] text-center">
              Wine & Beer
            </h3>
            <div className="flex flex-col gap-[25px] lg:w-full w-[85%] max-w-[400px]">
              {data.wines.map((wine) => (
                <MenuData key={wine.title} {...wine} />
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:p-3 py-6">
            <img
              src={images.menu}
              alt="Menu"
              className="lg:h-[100%] lg:w-[90%] h-[600px] w-[380px] object-contain object-left"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <h3 className="text-white font-semibold font-base leading-[50px] text-[37px] text-center lg:mt-0 mt-5">
              Cocktails
            </h3>
            <div className="flex flex-col gap-[25px] lg:w-full w-[85%] max-w-[400px]">
              {data.cocktails.map((cocktail) => (
                <MenuData key={cocktail.title} {...cocktail} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
