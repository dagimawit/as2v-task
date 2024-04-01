import Image from "next/image";
import Link from "next/link";
import image from "@/public/Rectangle 400.png";
import { FC } from "react";

interface Hostpital {
  address: string;
  availability: string;
  photo: String;
  phoneNumbers: String;
  emails: String;
}

const Hospitalcard: FC<Hostpital> = ({
  address,
  availability,
  photo,
  phoneNumbers,
  emails,
}) => {
  return (
    <div>
      <div className="flex p-40 border border-2px">
        <div className="w-1/3 ">
          <Image
            src={photo}
            alt="img"
            className="pl-5"
            width={300}
            height={300}
          />
        </div>
        <div>
          <p>Swaziland St, Addis Ababa</p>
          <h1 className="font bold">Black Lion Hospital</h1>
          <p>3 Kilometers Away</p>
          <p>{phoneNumbers} </p>
          <p>{emails} </p>
          <p>+25111763498</p>
        </div>
      </div>
    </div>
  );
};

export default Hospitalcard;
