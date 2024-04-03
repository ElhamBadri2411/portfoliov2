import Image from "next/image";
import React from "react";

type Props = {
  iconHref: string;
};

const Icon = (props: Props) => {
  return (
    <div>
      <Image
        className=" fill-white text-white bg-white"
        src={props.iconHref}
        width={50}
        height={50}
        alt="icon"
      />
    </div>
  );
};

export default Icon;
