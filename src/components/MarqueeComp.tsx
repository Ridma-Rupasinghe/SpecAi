import m1 from "/Images/m1.webp";
import m2 from "/Images/m2.webp";
import m3 from "/Images/m3.webp";
import m4 from "/Images/m4.webp";

import Marquee from "react-fast-marquee";

export default function MarqueeComp() {
  const images = [m1, m2, m3, m4, m1, m2, m3, m4];

  return (
    <Marquee speed={50} gradient={false} direction="left" pauseOnHover>
      {images.map((src, index) => (
        <div
          key={index}
          className="flex items-center justify-center px-2 md:px-5 lg:px-7 xl:px-9 2xl:px-11"
        >
          <img
            src={src}
            className="w-[140px] object-contain md:w-[110px] lg:w-[130px] xl:w-[165px] 2xl:w-[200px]"
          />
        </div>
      ))}
    </Marquee>
  );
}
