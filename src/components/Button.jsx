const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center space-x-2 px-7 py-4 text-lg font-montserrat capitalize border border-coral-red bg-coral-red rounded-full text-white ">
      <span>{label}</span>
      <img src={iconURL} alt="arrow right" className="rounded-full w-5 h-5" />
    </button>
  );
};

export default Button;
