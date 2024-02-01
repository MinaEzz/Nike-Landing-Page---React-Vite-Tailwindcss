const StatisticWrapper = ({ value, label }) => {
  return (
    <div>
      <p className="text-4xl font-palanquin font-bold">{value}</p>
      <p className="leading-7 font-montserrat text-slate-gray">{label}</p>
    </div>
  );
};

export default StatisticWrapper;
