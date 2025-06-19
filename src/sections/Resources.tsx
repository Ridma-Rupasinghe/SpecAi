import ResourceCard from "../components/ResourcesCard";

import resource from "/Images/resource.webp";


export default function Services() {
  const items = [
    {
      title: "Revolutionizing Trade Finance with Blockchain",
      description: [
        "Instant Verification",
        "Global Accessibility",
        "Cost Efficiency",
        "Fraud Prevention",
        "Automated Processes",
      ],
    },
    {
      title: "Unlocking the Power of DeFi with Spec AI",
      description: [
        "Yield Optimization",
        "Smart Contract Automation",
        "Liquidity Management",
        "Risk Mitigation",
        "Interoperability",
      ],
    },
  ];

  return (
    <div className="relative h-auto w-full">
      <div className="hidden w-full flex-col items-center gap-[3vh] py-[3vh] md:flex 2xl:mt-[70px]">
        <div className="flex flex-col items-center gap-[4vh]">
          <div className="flex h-[60px] w-[360px] items-center justify-center rounded-[20px] bg-[#F3FAFF]">
            <p className="font-Nunito text-[20px] font-bold text-[#0E59F6]">Trade Finance & More</p>
          </div>

          <div className="flex items-center justify-start gap-[10px]">
            <div className="cursor-pointer hover:scale-95 flex items-center justify-center rounded-[14px] border-[1px] border-[#0E59F6] bg-[#E2EBFF] py-[12px] md:w-[290px]">
              <p className="font-Inter text-[13px] font-bold text-nowrap text-[#0E59F6] xl:text-[16px]">
                Trade Finance
              </p>
            </div>

            <div className="cursor-pointer hover:scale-95 flex items-center justify-center rounded-[14px] border-[1px] border-[#0E59F6] py-[12px] md:w-[290px]">
              <p className="font-Inter text-[13px] font-bold text-nowrap text-[#0E59F6] xl:text-[16px]">
                Decentralized Finance (DeFi)
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between my-[4vh] 2xl:my-[140px] px-[10%]">
          <div className="flex w-[40%] flex-col items-start gap-[3vh] 2xl:gap-[100px]">
            <ResourceCard item={items[0]} />

            <ResourceCard item={items[1]} />
          </div>

          <div className="relative w-[45%]">
            <img src={resource} className="w-full" />

            <div className="absolute bottom-0 left-0 flex w-[80%] translate-x-[-20%] translate-y-[20%] flex-col items-start gap-[15px] bg-white p-4 shadow-md">
              <p className="font-Inter md:text-[14px] xl:text-[18px] text-[#18191B]">
                “Trade finance is traditionally slow, paper-intensive, and prone to fraud. Spec AI
                transforms this process by integrating blockchain and AI.”
              </p>

              <p className="font-Inter text-[#0E59F6] md:text-[11px] xl:text-[14px]">
                Revolutionizing Trade Finance with Blockchain
              </p>
            </div>
          </div>
        </div>


        <div className="w-full h-[1px] bg-[#B5B5B5] mt-[3vh]">

        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-[2vh] py-[2vh] md:hidden">
        <div className="flex w-full flex-col items-center gap-[2vh]">
          <div className="flex h-[60px] w-2/3 max-w-[300px] items-center justify-center rounded-[20px] bg-[#F3FAFF] cursor-pointer hover:scale-95 ">
            <p className="font-Nunito text-[16px] font-bold text-[#0E59F6] sm:text-[18px]">
              Trade Finance & More
            </p>
          </div>

          <div className="flex w-full max-w-[450px] flex-col items-center gap-[10px]">
            <div className="flex w-full items-center justify-center rounded-[14px] border-[1px] border-[#0E59F6] bg-[#E2EBFF] py-[12px] cursor-pointer hover:scale-95 ">
              <p className="font-Inter text-[14px] font-bold text-nowrap text-[#0E59F6] sm:text-[16px]">
                Trade Finance
              </p>
            </div>

            <div className="flex w-full items-center justify-center rounded-[14px] border-[1px] border-[#0E59F6] py-[12px] cursor-pointer hover:scale-95 ">
              <p className="font-Inter text-[14px] font-bold text-nowrap text-[#0E59F6] xl:text-[16px]">
                Decentralized Finance (DeFi)
              </p>
            </div>
          </div>
        </div>

        <ResourceCard item={items[0]} />
        <ResourceCard item={items[1]} />

        <div className=" w-full max-w-[603px] flex flex-col items-center">
          <img src={resource} className="w-full" />

          <div className="  flex w-[90%]  flex-col items-center gap-[15px] bg-white p-4 shadow-md">
            <p className="font-Inter text-center text-[14px] sm:text-[16px] text-[#18191B]">
              “Trade finance is traditionally slow, paper-intensive, and prone to fraud. Spec AI
              transforms this process by integrating blockchain and AI.”
            </p>

            <p className="font-Inter text-[12px] text-[#0E59F6] sm:text-[14px]">
              Revolutionizing Trade Finance with Blockchain
            </p>
          </div>
        </div>

        <div className="bg-[#B5B5B5] w-full h-[1px] mt-[3vh]"></div>
      </div>
    </div>
  );
}
