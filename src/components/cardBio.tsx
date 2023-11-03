import React from "react";
import Image from "next/image";

interface Itemprops {
  icon?: string;
  value?: string;
  label?: string;
}

const Item = ({ icon = "", value = "value", label = "label" }: Itemprops) => (
  <div className="inline-flex gap-[9px] text-sm mb-1">
    <Image alt="icon" src={icon} width={18} height={18} />
    <span className="font-bold">{value}</span>
    <span>{label}</span>
  </div>
);
const cardBio = () => {
  return (
    <div className="inline-flex gap-[27px] justify-center items-center rounded-lg border border-zinc-100 w-[312px] h-[134px]">
      <Image
        alt="Dimah-luthfi"
        src={"/img/photo.jpg"}
        width={90}
        height={90}
        className="rounded-full"
      />
      <div className="flex flex-col gap-2">
        <Item icon="/img/project.png" value="125" label="Projek selesai" />
        <Item icon="/img/github.png" value="5" label="Repository" />
        <Item icon="/img/deal.png" value="5" label="Client" />
      </div>
    </div>
  );
};

export default cardBio;
