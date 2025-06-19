
interface FeatureItem {
  title: string;
  description: string[];
}

interface Props {
  item: FeatureItem;
}

const FeatureCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="w-full flex flex-col items-start gap-[2vh]">

        <p className="font-Inter font-bold text-[14px] sm:text-[16.5px] md:text-[18px] xl:text-[24px] text-[#0E59F6]">{item.title}</p>
      
      <ul className="list-disc pl-6 space-y-1.5 xl:space-y-2 2xl:space-y-3">
        {item.description.map((desc, index) => (
          <li className="font-Inter text-[#B5B5B5] text-[14px] sm:text-[16px] md:text-[14px] xl:text-[16px] font-bold" key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;