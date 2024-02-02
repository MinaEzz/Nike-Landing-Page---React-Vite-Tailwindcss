import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import StatisticWrapper from "../components/StatisticWrapper";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-[100dvw] min-h-[100dvh] max-container flex xl:flex-row flex-col justify-center gap-10"
    >
      <div className="relative flex flex-col justify-center items-start xl:w-2/5 w-full pt-28 max-xl:padding-x">
        <p className="text-xl font-montserrat capitalize text-coral-red">
          our summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold capitalize">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            the new arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">nike</span> shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          discover stylish nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="shop now" iconURL={arrowRight} />
        <div className="flex items-center justify-center flex-wrap gap-16 mt-20 w-full">
          {statistics.map((stat) => {
            return (
              <StatisticWrapper
                value={stat.value}
                label={stat.label}
                key={stat.label}
              />
            );
          })}
        </div>
      </div>
      {/* ./ left-part */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
      {/* ./ right-part */}
    </section>
  );
};

export default Hero;
