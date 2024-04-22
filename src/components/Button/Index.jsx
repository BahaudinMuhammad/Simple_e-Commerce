const Button = (props) => {
  const {
    classname = "bg-black",
    children,
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold text-white rounded-md ${classname}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
