import { FC } from "react";
import cloudSvg from "../../assets/images/Cloud.svg";
import lightningSVg from "../../assets/images/Lightning.svg";
import rainSvg from "../../assets/images/rain.svg";

const WeatherRecentCard: FC = () => {
  return (
    <div className="h-[220px] w-full bg-gradient-2 rounded-t-[2rem]  relative  hover:-translate-y-2 transition-all duration-200 cursor-pointer">
      <div className="w-full  flex flex-col justify-between py-4 h-full">
        <div className="py-3 mx-1 w-full text-center">
          <span className="font-medium leading-normal text-xl  text-white">
            New-york
          </span>
        </div>
        <div className=" flex items-center justify-center ">
          <div className="z-20 w-[3.5rem] h-[2rem] relative">
            <img
              src={cloudSvg}
              alt=""
              className="w-full h-full !z-20 object-cover"
            />
            <img
              src={rainSvg}
              alt=""
              className="absolute z-10 right-4  -bottom-2 w-4 h-4 object-contain"
            />
            <img
              src={lightningSVg}
              alt=""
              className="absolute -z-10  -bottom-1.5 left-4 w-4 h-[22px] object-contain"
            />
            <img
              src={rainSvg}
              alt=""
              className="absolute z-10 left-0 -bottom-2 w-4 h-4 object-contain"
            />
          </div>
        </div>
        <div className="w-full text-center z-10 ">
          <span className="font-light leading-normal text-[30px] text-white">
            90
          </span>
        </div>
        <div className="bg-gradient-3  backdrop-blur-md w-full !h-[110px] shadow-md  z-[1] rounded-[25px] absolute bottom-0 right-0 left-0"></div>
      </div>
    </div>
  );
};

export default WeatherRecentCard;
