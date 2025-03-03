const MenuData = ({ title, price, tags }) => {
  return (
    <div className="w-full">
      <div className="flex lg:gap-[25px] gap-0 lg:justify-start justify-between items-center">
        <h3 className="flex-1 text-golden font-base font-bold tracking-wider text-[min(11vw, 18px)]">
          {title}
        </h3>
        <div className="flex flex-1 items-center lg:justify-start justify-end gap-3">
          <div className="w-[100px] h-[1px] bg-white" />
          <div className="text-white font-base text-[min(11vw, 18px)] text-[20px] text-center">
            {price}
          </div>
        </div>
      </div>
      <p className=" text-sm text-grey font-normal tracking-tight font-alt leading-[25px]">
        {tags}
      </p>
    </div>
  );
};

export default MenuData;
