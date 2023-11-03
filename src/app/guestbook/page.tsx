import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="shadow-xl card w-96 bg-base-100">
        <figure>
          {" "}
          <Image
            alt="Dimah-luthfi"
            src={"/img/photo.jpg"}
            width={90}
            height={90}
            className="rounded-full"
          />
        </figure>
      </div>
    </>
  );
};

export default page;
