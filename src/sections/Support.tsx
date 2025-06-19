import Hero from "../components/Hero";

export default function Support() {
  return (
    <div className="h-auto w-full">
      <div className="hidden w-full items-center justify-between py-[3vh] md:flex 2xl:my-[80px]">
        <div className="flex w-[42%] flex-col items-start justify-between gap-[2vh] 2xl:gap-[50px]">

          <div className="flex flex-col items-start gap-[2px]">
            <p className="font-Nunito text-[18px] font-bold text-[#0E59F6] xl:text-[24px]">
            Empowering Blockchain Innovation
          </p>

          <p className="font-NunitoBold text-[40px] leading-[37px]  tracking-[-4%] text-[#18191B] lg:text-[55px] lg:leading-[50px] xl:text-[75px] xl:leading-[70px] 2xl:text-[100px] 2xl:leading-[88px]">
            The Future of Crypto{" "}
            <span className="font-NunitoBold text-[40px]  tracking-[-10%] text-[#0E59F6] lg:text-[55px] xl:text-[75px] 2xl:text-[100px]">
              Spec
            </span>
          </p>

          </div>
          

          <p className="font-Inter text-[12px] text-[#484848] xl:text-[16px]">
            Welcome to{" "}
            <span className="font-Inter text-[12px] text-[#0E59F6] xl:text-[16px]">Spec</span> AI!
            Our vision is to revolutionize the world of cryptocurrency by combining cutting-edge
            artificial intelligence with the power of blockchain technology
          </p>

          <div className="flex items-center justify-start gap-[10px]">
            <div className="flex cursor-pointer items-center justify-center rounded-[7px] bg-[#0E59F6] py-[7px] hover:scale-95 md:w-[130px] xl:w-[220px] xl:rounded-[14px] xl:py-[12px]">
              <p className="font-Inter text-[12px] text-nowrap text-white xl:text-[16px]">
                Spec AI ecosystem
              </p>
            </div>

            <div className="flex cursor-pointer items-center justify-center rounded-[7px] border-[1px] border-[#0E59F6] py-[7px] hover:scale-95 md:w-[130px] xl:w-[220px] xl:rounded-[14px] xl:py-[12px]">
              <p className="font-Inter text-[12px] text-nowrap text-[#0E59F6] xl:text-[16px]">
                Learn More{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[53%]">
          <Hero />
        </div>
      </div>

      <div className="flex w-full flex-col gap-[35px] pt-[1vh] pb-[5vh] md:hidden">
        <div className="flex w-full flex-col items-center justify-between gap-[12px]">
          <div className="flex w-full flex-col items-center justify-between gap-[4px]">
            <p className="font-Nunito text-center text-[14px] font-bold text-[#0E59F6] sm:text-[16px]">
              Empowering Blockchain Innovation
            </p>

            <p className="font-NunitoBold text-center text-[64px]  tracking-[-4%] text-[#18191B] leading-[72px]">
              The Future of Crypto{" "}
              <span className="font-NunitoBold text-[64px]  text-[#0E59F6]">Spec</span>
            </p>
          </div>

          <p className="font-Inter text-center text-[12px] sm:text-[14px] text-[#484848]">
            Welcome to{" "}
            <span className="font-Inter text-[12px] text-[#0E59F6] sm:text-[14px]">Spec</span> AI!
            Our vision is to revolutionize the world of cryptocurrency by combining cutting-edge
            artificial intelligence with the power of blockchain technology
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[16px]">
          <div className="cursor-pointer hover:scale-95 flex w-full max-w-[500px] items-center justify-center rounded-[12px] bg-[#0E59F6] py-[12px]">
            <p className="font-Inter text-[14px] text-nowrap text-white sm:text-[16px]">
              Spec AI ecosystem
            </p>
          </div>

          <div className="cursor-pointer hover:scale-95  flex w-full max-w-[500px] items-center justify-center rounded-[12px] border-[1px] border-[#0E59F6] py-[12px]">
            <p className="font-Inter text-[14px] text-nowrap text-[#0E59F6] sm:text-[16px]">
              Learn More{" "}
            </p>
          </div>
        </div>

        <Hero />
      </div>
    </div>
  );
}
