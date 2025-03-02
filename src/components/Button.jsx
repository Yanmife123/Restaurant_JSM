const Button = (props) => {
  return (
    <div>
      <button
        className={`bg-golden px-6 py-2 text-black outline-none cursor-pointer ${props.style}`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
