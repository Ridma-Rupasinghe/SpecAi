
interface ValueCardProps {
  image: string;
 
}
export default function Partners({ image }: ValueCardProps){
    return(
        <div className="flex w-full items-center justify-between">
            <div className="flex w-[65%] flex-col items-start gap-[3vh]">
              <p className="font-Inter text-[16px] font-bold sm:text-[18px] md:text-[14px] xl:text-[16px]">
                James Coombes <br />{" "}
                <span className="font-Inter text-[16px] font-bold text-[#0E59F6] sm:text-[18px] md:text-[14px] xl:text-[16px]">
                  Co-Founder, CEO
                </span>
              </p>

              <p className="font-Inter text-[12px] sm:text-[14px] md:text-[12px] xl:text-[14px] text-[#484848]">
                With over 10 years of experience in financial services, commodities, and trade,
                <span className="font-Inter text-[12px] font-bold sm:text-[14px] md:text-[12px] xl:text-[14px]">
                  Morgan Clay
                </span>{" "}
                , CEO of Spec AI, combines expertise with a strong academic background from Harvard
                and Imperial College. Outside work,{" "}
                <span className="font-Inter text-[12px] font-bold sm:text-[14px] md:text-[12px] xl:text-[14px]">Morgan</span>{" "}
                enjoys golf and supporting Arsenal F.C.
              </p>
            </div>

            <img src={image} className="w-[20%]" />
          </div>

    )
}