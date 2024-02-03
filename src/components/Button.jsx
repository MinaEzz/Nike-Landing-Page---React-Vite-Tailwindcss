const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={` flex items-center justify-center space-x-2 px-7 py-4 text-lg font-montserrat capitalize border rounded-full ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } ${borderColor ? borderColor : "border-coral-red"}
      ${textColor ? textColor : "text-white"}
      ${fullWidth && "w-full"}
      `}
    >
      <span>{label}</span>
      {iconURL && (
        <img src={iconURL} alt="arrow right" className="rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
