import s1 from "/Images/s1.webp";
import s2 from "/Images/s2.webp";
import s3 from "/Images/s3.webp";
import s4 from "/Images/s4.webp";
import s5 from "/Images/s5.webp";

const items = [s1, s2, s3, s4, s5];

export default function Social() {
  return (
    <div>
      <div className="hidden md:flex items-center justify-between gap-[8px]">
        {items.map((item, index) => (
          <div key={index}
          className="rounded-[4px] flex items-center justify-center bg-[#7A818D] w-[24px] aspect-[1] cursor-pointer hover:scale-95">
            <img src={item} className="w-[12px]" />
          </div>
        ))}
      </div>

      <div className="md:hidden grid grid-cols-3 grid-rows-2 gap-[8px]">
        {items.map((item, index) => (
          <div key={index}
          className="rounded-[4px] flex items-center justify-center bg-[#7A818D] w-[24px] aspect-[1] cursor-pointer hover:scale-95">
            <img src={item} className="w-[12px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
