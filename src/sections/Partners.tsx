
import partnersD from "/Images/partnersD.webp";
import partnersM from "/Images/partnersM.webp";
import superman from "/Images/superman.webp";

import g1 from "/Images/g1.webp";
import g2 from "/Images/g2.webp";
import g3 from "/Images/g3.webp";
import g4 from "/Images/g4.webp";
import g5 from "/Images/g5.webp";
import g6 from "/Images/g6.webp";

import Slider from "../components/Slider";
import PartnersComp from "../components/PartnersComp";



const values = [
  { image: g1 },
  { image: g2 },
  { image: g3 },
  { image: g4 },
  { image: g5 },
  { image: g6 },
];

export default function Partners() {
  return (
    <div className="h-auto w-full">
      <div className="mt-[3vh] hidden w-full flex-col items-center gap-[5vh] 2xl:gap-[70px] md:flex 2xl:my-[50px]">
        <div className="flex h-[60px] w-[360px] items-center justify-center rounded-[20px] bg-[#F3FAFF]">
          <p className="font-Nunito text-[20px] font-bold text-[#0E59F6]">Our Trusted Partners</p>
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="flex w-[45%] flex-col items-start gap-[3vh]">
            <p className="font-NunitoBold tracking-[-10%] md:text-[35px] md:leading-[40px] lg:text-[40px] lg:leading-[45px] xl:text-[46px] xl:leading-[52px] 2xl:text-[54px] 2xl:leading-[62px]">
              Work Together with our{" "}
              <span className="font-NunitoBold text-[#0E59F6] md:text-[35px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px]">
                Expert Team
              </span>
            </p>

            <p className="font-Nunito md:text-[12px] xl:text-[16px] text-[#484848]">
              At Spec AI, we are proud to collaborate with top-tier companies that share our vision
              for a decentralized future. Our strategic partnerships help us drive innovation and
              create a more seamless experience for our users. Below are some of the sponsors who
              support the growth and success of Spec AI:
            </p>

            <div className="cursor-pointer hover:scale-95 flex h-[35px] w-[120px] items-center justify-center rounded-[14px] border-[1px] border-[#0E59F6] xl:h-[50px] xl:w-[140px]">
              <p className="font-Inter text-[12px] text-[#0E59F6] xl:text-[16px] font-bold">See More</p>
            </div>
          </div>

          <div className="flex w-[45%] flex-col items-center justify-between gap-[2vh] p-5 shadow-lg">
            <Slider values={values} component={PartnersComp} />
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <img src={partnersD} className="w-[40%]" />

          <div className="flex w-[50%] flex-col items-end gap-[3vh]">
            <p className="text-right font-NunitoBold tracking-[-10%] md:text-[35px] md:leading-[40px] lg:text-[40px] lg:leading-[45px] xl:text-[46px] xl:leading-[52px] 2xl:text-[54px] 2xl:leading-[62px]">
              How Spec AI Works -{" "}
              <span className="font-NunitoBold text-[#0E59F6] md:text-[35px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px]">
                Bridging AI{" "}
              </span>
              and{" "}
              <span className="font-NunitoBold text-[#0E59F6] md:text-[35px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px]">
                Blockchain
              </span>
            </p>

            <p className="text-right font-Nunito md:text-[12px] xl:text-[16px] text-[#484848]">
              Spec AI leverages advanced artificial intelligence and blockchain technology to create
              a seamless and efficient ecosystem.
            </p>

            <div className="cursor-pointer hover:scale-95 flex h-[35px] w-[120px] items-center justify-center rounded-[14px] border-[1px] border-[#0E59F6] xl:h-[50px] xl:w-[140px]">
              <p className="font-Inter text-[12px] text-[#0E59F6] xl:text-[16px] font-bold">See More</p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-start justify-between 2xl:mt-[50px]">
          <div className="flex flex-col items-start gap-[2vh] md:w-[450px] lg:w-[600px] xl:w-[730px]">
            <p className="font-Nunito text-[#0E59F6] md:text-[15px] xl:text-[18px] font-bold">
              Stay updated with the latest news and updates from Spec AI. <br />{" "}
              <span className="font-Nunito text-[#484848] md:text-[12px] xl:text-[14px]">
                Subscribe to our newsletter and never miss an update."
              </span>
            </p>

            <div className="flex w-full items-center justify-between rounded-[18px] border-[1px] border-[#0E59F6] p-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="placeholder:font-Inter placeholder:text-[16px] placeholder:text-[#B5B5B5]"
              />

              <div className="cursor-pointer hover:scale-95 flex h-[40px] w-[140px] items-center justify-center rounded-[14px] border-[1px] border-[#0E59F6] bg-[#F3FAFF]">
                <p className="font-Inter text-[16px] text-[#0E59F6] font-bold">Start Trial</p>
              </div>
            </div>
          </div>
          <img src={superman} className="md:w-[150px] lg:w-[200px] xl:w-[260px]" />
        </div>
      </div>

      <div className="mt-[3vh] flex w-full flex-col items-center gap-[3vh] md:hidden">
        <div className="flex h-[45px] w-[200px] items-center justify-center rounded-[20px] bg-[#F3FAFF] sm:w-[350px]">
          <p className="font-Nunito text-[14px] font-bold text-[#0E59F6] sm:text-[16px]">
            Our Trusted Partners
          </p>
        </div>

        <p className="font-NunitoBold text-center text-[61px]  tracking-[-4%] sm:text-[70px] leading-[53px] sm:leading-[61px]">
          Work Together with our{" "}
          <span className="font-NunitoBold text-[61px] font-bold text-[#0E59F6] sm:text-[70px]">
            Expert Team
          </span>
        </p>

        <p className="font-Nunito text-center text-[14px] sm:text-[16px text-[#484848]">
          At Spec AI, we are proud to collaborate with top-tier companies that share our vision for
          a decentralized future. Our strategic partnerships help us drive innovation and create a
          more seamless experience for our users. Below are some of the sponsors who support the
          growth and success of Spec AI:
        </p>

        <div className="flex w-full flex-col items-center justify-between gap-[2vh] p-5 shadow-lg">
          <Slider values={values} component={PartnersComp} />
        </div>

        <img src={partnersM} className="w-full max-w-[500px]" />

        <p className="font-NunitoBold text-center text-[61px]  tracking-[-10%] sm:text-[70px] leading-[53px] sm:leading-[67px]">
          How Spec AI Works -{" "}
          <span className="font-Nunito text-[61px] font-bold text-[#0E59F6] sm:text-[70px]">
            Bridging AI{" "}
          </span>
          and{" "}
          <span className="font-Nunito text-[61px] font-bold text-[#0E59F6] sm:text-[70px]">
            Blockchain
          </span>
        </p>

        <p className="font-Nunito text-center text-[14px] text-[#484848] sm:text-[16px]">
          At Spec AI, we are proud to collaborate with top-tier companies that share our vision for
          a decentralized future. Our strategic partnerships help us drive innovation and create a
          more seamless experience for our users. Below are some of the sponsors who support the
          growth and success of Spec AI:
        </p>

        <div className="cursor-pointer hover:scale-95 flex h-[50px] w-full max-w-[450px] items-center justify-center rounded-[8px] border-[1px] border-[#0E59F6]">
          <p className="font-Inter text-[16px] font-bold text-[#0E59F6] sm:text-[18px]">See More</p>
        </div>

        <p className="font-Nunito text-center font-bold text-[#0E59F6] md:text-[15px] xl:text-[18px]">
          Stay updated with the latest news and updates from Spec AI.
        </p>

        <p className="font-Nunito text-center text-[#484848] md:text-[12px] xl:text-[14px]">
          Subscribe to our newsletter and never miss an update."
        </p>

        <div className="flex h-[55px] w-full max-w-[450px] items-center justify-start rounded-[8px] border-[1px] border-[#0E59F6] p-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="placeholder:font-Inter placeholder:text-[16px] placeholder:text-[#B5B5B5]"
          />
        </div>

        <div className="cursor-pointer hover:scale-95 flex h-[55px] w-full max-w-[450px] items-center justify-center rounded-[8px] border-[1px] border-[#0E59F6] bg-[#F3FAFF]">
          <p className="font-Inter text-[16px] font-bold text-[#0E59F6]">Start Trial</p>
        </div>

        <p className="font-Nunito text-center text-[14px] text-[#0E59F6] sm:text-[16px] font-bold">
        Brief overview of Spec AI, its mission, and vision.
      </p>

      <p className="font-Inter text-center text-[14px] text-[#484848] sm:text-[16px]">
        Spec AI combines the power of artificial intelligence with blockchain technology to
        revolutionize the crypto world, enabling smarter, more efficient transactions.
      </p>

      <img src={superman} className="w-[50%] max-w-[300px]" />

      </div>

      
    </div>
  );
}
