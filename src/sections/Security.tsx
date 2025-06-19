import Marquee from "../components/MarqueeComp";
import AboutComp from "../components/About";

const items = [
  "- Smarter Transactions",
  "- Risk Management",
  "- Automated Trading",
  "- Transparency & Security",
  "- Scalability",
];

export default function About() {
  return (
    <div className="h-auto w-full bg-white">
      <div className="hidden w-full flex-col items-center justify-between gap-[4vh] 2xl:gap-[60px] py-[2vh] md:flex">
        <div className="flex h-[60px] w-[360px] items-center justify-center rounded-[20px] bg-[#F3FAFF]">
          <p className="font-Nunito text-[20px] font-bold text-[#0E59F6]">
            Powered by Leading Innovators
          </p>
        </div>

        <Marquee />

        <div className="flex w-full items-end justify-between 2xl:mt-[30px]">
          <div className="flex w-[50%] flex-col items-start justify-start gap-[4vh] 2xl:gap-[80px]"> 
            <div className="w-full rounded-[10px] bg-[#F3FAFF] p-3 xl:rounded-[20px] xl:p-6">
              <p className="font-Inter text-[16px] xl:text-[20px] text-[#B5B5B5] ">
                This header emphasizes the strength and credibility brought by your sponsors and
                partners, aligning them with the innovation and forward-thinking nature of{" "}
                <span className="font-Inter text-[16px] text-[#0D59F6] xl:text-[20px] font-bold">
                  Spec AI
                </span>
              </p>
            </div>

            <div className="flex flex-col items-start gap-[2vh] 2xl:gap-[40px]">
              <p className="tracking-[-4%] font-NunitoBold md:text-[40px] md:leading-[37px] lg:text-[55px] lg:leading-[50px] xl:text-[75px] xl:leading-[70px] 2xl:text-[100px] 2xl:leading-[88px]">
                The Advantage of{" "}
                <span className="font-NunitoBold text-[#0E59F6] md:text-[40px] lg:text-[55px] xl:text-[75px] 2xl:text-[100px] tracking-[-10%]">
                  Spec Ai
                </span>
              </p>

              <p className="font-nunito text-[14px] text-[#484848] xl:text-[16px]">
                Spec AI combines the power of artificial intelligence with blockchain technology to
                revolutionize the crypto space. Here are the advantages:
              </p>

              <div className="flex flex-col items-start pl-[20%] gap-[10px]">
              {items.map((item,index) => (
                <p key={index} className="font-Inter text-[16px] text-[#B5B5B5] xl:text-[20px]">{item}</p>
              ))}
            </div>
            </div>

            
          </div>

          <div className="flex w-[45%] items-end">
            <AboutComp />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[4vh] md:hidden mb-[3vh]">
        <div className="flex h-[46px] w-[300px] items-center justify-center rounded-[20px] bg-[#F3FAFF] sm:w-[450px]">
          <p className="font-Nunito text-[14px] font-bold text-[#0E59F6] sm:text-[16px]">
            Powered by Leading Innovators
          </p>
        </div>

        <Marquee />

        <div className="w-full max-w-[500px] rounded-[14px] bg-[#F3FAFF] p-2">
          <p className="font-Inter text-center text-[14px] sm:text-[16px] text-[#B5B5B5]">
            This header emphasizes the strength and credibility brought by your sponsors and
            partners, aligning them with the innovation and forward-thinking nature of{" "}
            <span className="font-Inter text-[14px] text-[#0D59F6] sm:text-[16px] font-bold">Spec AI</span>
          </p>
        </div>

        <p className="tracking-[-4%] font-NunitoBold text-center text-[61px]  sm:text-[70px] leading-[69px] ">
          The Advantage of{" "}
          <span className="font-NunitoBold text-[61px]  text-[#0E59F6] sm:text-[70px] tracking-[-4%]">
            Spec Ai
          </span>
        </p>

        <p className="font-nunito text-center text-[14px] text-[#484848] sm:text-[16px]">
          Spec AI combines the power of artificial intelligence with blockchain technology to
          revolutionize the crypto space. Here are the advantages:
        </p>

        <div className="flex w-full flex-col items-start gap-[14px]">
          {items.map((item) => (
            <p className="font-Inter text-[16px] text-[#B5B5B5]">{item}</p>
          ))}
        </div>

        <div className="w-full max-w-[500px]">
          <AboutComp />

        </div>
        
      </div>
    </div>
  );
}
