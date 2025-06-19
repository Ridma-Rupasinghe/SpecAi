import Social from "../components/Social";

export default function Footer() {
  return (
    <div>
      <div className="hidden w-full flex-col items-start justify-between gap-[3vh]  py-[2vh] md:flex px-[7%]">
        <div className="flex w-[530px] flex-col gap-[1vh]">
          <p className="font-Nunito text-left text-[18px] font-bold text-[#0E59F6]">
            Brief overview of Spec AI, its mission, and vision.
          </p>

          <p className="font-Nunito text-left text-[14px] text-[#484848]">
            Spec AI combines the power of artificial intelligence with blockchain technology to
            revolutionize the crypto world, enabling smarter, more efficient transactions.
          </p>
        </div>

        <div className="flex w-full items-start justify-between">
          <div className="flex items-start justify-between md:gap-[60px] lg:gap-[100px] xl:gap-[150px] 2xl:gap-[200px]">
            <div className="flex w-full flex-col items-start justify-between gap-[20px]">
              <p className="font-Nunito text-[16px] font-bold text-[#35383E]">Product</p>

              <div className="flex flex-col items-start justify-between gap-[5px]">
                <p className="font-Nunito text-[14px] text-nowrap text-[#7A818D]">
                  Terms and Conditions
                </p>
                <p className="font-Nunito text-[14px] text-nowrap text-[#7A818D]">Privacy Policy</p>
                <p className="font-Nunito text-[14px] text-nowrap text-[#7A818D]">
                  Opt Out of Cookies
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-between gap-[20px]">
              <p className="font-Nunito text-[16px] font-bold text-[#35383E]">Company</p>

              <div className="flex flex-col items-start justify-between gap-[5px]">
                <p className="font-Nunito text-[14px] text-nowrap text-[#7A818D]">Careers</p>
                <p className="font-Nunito text-[14px] text-nowrap text-[#7A818D]">Blog</p>
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-between gap-[20px]">
              <p className="font-Nunito text-[16px] font-bold text-[#35383E]">Contact Us</p>

              <div className="flex flex-col items-start justify-between gap-[5px]">
                <p className="font-Nunito text-[14px] text-nowrap text-[#7A818D]">Contact Sales</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-end justify-between gap-[20px]">
            <p className="font-Nunito text-[16px] font-bold text-[#35383E]">Follow us</p>

            <div className="flex flex-col items-start justify-between gap-[5px]">
              <Social />
            </div>
          </div>
        </div>

        <p className="font-Nunito text-[12px] text-[#7A818D]">
          © 2020 Spec AI. All rights reserved.
        </p>
      </div>

      <div className="flex w-full flex-col  md:hidden py-[2vh] gap-[5vh] items-center px-[3%]">
        <div className="flex w-full flex-col justify-between gap-[4vh]">

          <div className="flex items-start justify-between">
            <div className="flex w-full flex-col items-start justify-between gap-[20px]">
              <p className="font-Nunito text-[16px] sm:text-[18px] font-bold text-[#35383E]">Product</p>

              <div className="flex flex-col items-start justify-between gap-[5px]">
                <p className="font-Nunito text-[14px] sm:text-[16px] text-nowrap text-[#7A818D]">
                  Terms and Conditions
                </p>
                <p className="font-Nunito text-[14px] sm:text-[16px] text-nowrap text-[#7A818D]">Privacy Policy</p>
                <p className="font-Nunito text-[14px] sm:text-[16px] text-nowrap text-[#7A818D]">
                  Opt Out of Cookies
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-between gap-[20px]">
              <p className="font-Nunito text-[16px] sm:text-[18px] font-bold text-[#35383E]">Company</p>

              <div className="flex flex-col items-start justify-between gap-[5px]">
                <p className="font-Nunito text-[14px] sm:text-[16px] text-nowrap text-[#7A818D]">Careers</p>
                <p className="font-Nunito text-[14px] sm:text-[16px] text-nowrap text-[#7A818D]">Blog</p>
              </div>
            </div>
          </div>

          <div className=" flex items-start justify-between">
            <div className="flex w-full flex-col items-start justify-between gap-[20px]">
              <p className="font-Nunito text-[16px] sm:text-[18px] font-bold text-[#35383E]">Contact Us</p>

              <div className="flex flex-col items-start justify-between gap-[5px]">
                <p className="font-Nunito text-[14px] sm:text-[16px] text-nowrap text-[#7A818D]">Contact Sales</p>
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-between gap-[20px]">
              <p className="font-Nunito text-[16px] sm:text-[16px] font-bold text-[#35383E]">Follow us</p>

              <div className="flex flex-col items-start justify-between gap-[5px]">
                <Social />
              </div>
            </div>
          </div>
        </div>

        <p className="font-Nunito text-[12px] sm:text-[14px] text-[#7A818D]">
          © 2020 Spec AI. All rights reserved.
        </p>


      </div>
    </div>
  );
}
