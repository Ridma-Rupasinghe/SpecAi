import hero from "/Images/hero.webp";
import h1 from "/Images/h1.webp";
import h2 from "/Images/h2.webp";
import h3 from "/Images/h3.webp";
import h4 from "/Images/h4.webp";
import h5 from "/Images/h5.webp";

export default function Hero(){

    const images = [
  {
    src: h1,
    position: "  top-[15%]   translate-y-[-15%]   left-[10%]   translate-x-[-10%] ",
    width: "w-[23%]",
  },
  {
    src: h2,
    position: " top-[25%]   translate-y-[-25%]   right-[0%]   translate-x-[] ",
    width: "w-[25%]",
  },
  {
    src: h3,
    position: " top-[70%]   translate-y-[-70%]   left-[0%]   translate-x-[]",
    width: "w-[21%]",
  },
  {
    src: h4,
    position: " top-[70%]   translate-y-[-70%]   right-[0%]   translate-x-[]",
    width: "w-[22%]",
  },
  {
    src: h5,
    position: " top-[90%]   translate-y-[-90%]   left-[70%]   translate-x-[-70%]",
    width: "w-[22%]",
  },
];

    return(
        <div className="relative w-full">
            <img src={hero} className="w-full" />

            {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          className={`blink-image absolute ${image.position} ${image.width}`}
           style={{animationDelay: `${index}s`,}}
          
        />
      ))}

        </div>
    )
}