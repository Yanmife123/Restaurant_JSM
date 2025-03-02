import { images } from "../constants";
const Spoon = (props) => {
  return (
    <img
      src={images.spoon}
      alt=""
      className={`h-[20px] w-[25px] object-contain  ${props.style}`}
    />
  );
};

export default Spoon;
