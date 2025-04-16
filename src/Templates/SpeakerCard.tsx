import { motion } from "framer-motion";
interface SpeakerCardProps {
  image: string;
  name: string;
  title: string;
  org: string;
}

export default function SpeakerCard({
  image,
  name,
  title,
  org,
}: SpeakerCardProps) {

  return (
    <motion.div
      whileHover={{ y: -15 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent rounded-[32px] text-center shadow-sm"
    >
      <div className="bg-transparent rounded-[32px] text-center shadow-sm cursor-pointer">
        <img
          src={image}
          alt={name}
          className="object-cover rounded-[32px] w-[80vw] h-[80vw] md:w-[18vw] md:h-[18vw] m-auto shadow-indigo-900 shadow-2xl"
        />
        <div className="p-4">
          <h3 className="font-normal text-2xl md:text-3xl">{name}</h3>
          <p className="text-sm text-gray-400 mt-1">{title}</p>
          <p className="text-sm text-gray-400">{org}</p>
        </div>
      </div>{" "}
    </motion.div>
  );
}
