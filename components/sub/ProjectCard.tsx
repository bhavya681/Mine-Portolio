import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-xl hover:cursor-pointer shadow-lg border border-[#2A0E61]" style={{cursor:"pointer",borderRadius:"34px",padding:"8px"}}>
      <Image
        src={src}
        alt={title}
        width={600}
        height={700}
        className="w-full object-contain hover:cursor-pointer rounded-xl"
      />
      <div className="relative p-4 hover:cursor-pointer">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
