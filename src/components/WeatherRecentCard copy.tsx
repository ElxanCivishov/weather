import { FC } from "react";
// import cloudSvg from "../../assets/images/Cloud.svg";

const WeatherRecentCard: FC = () => {
  return (
    <div className="!h-[121px] w-full bg-gradient-2  rounded-[25px] flex flex-col justify-between">
      <div className="w-full px-7 py-9 flex flex-col z-10 justify-between items-center gap-3 h-full">
        {/* <span className="font-medium leading-normal text-[16px] text-white">
          Baku
        </span>
        <div className="relative">
          <div className="!z-20 w-[78px] h-[46px]">
            <img src={cloudSvg} alt="" className="w-full h-full object-cover" />
          </div>
          <img
            src={cloudSvg}
            alt=""
            className="absolute z-10 left-10 bottom-5 w-[47px] h-[28px] object-cover"
          />
        </div>
        <span className="font-light leading-normal text-[21px] text-white">
          27°
        </span> */}
      </div>
      <div className="!min-h-[72px] bg-black w-full   rounded-[25px] bacdrop-blur-md"></div>
    </div>
  );
};

export default WeatherRecentCard;
