const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm block text-slate-700 font-bold mb-3"
    >
      {children}
    </label>
  );
};

export default Label;
