import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import AvatarModel from "@/models/Avatar";

const Avatar = async () => {
  const avatar = await AvatarModel.find({});
  console.log("AVATAR ==>", avatar);

  return (
    <section className="block text-center  bg-success rounded-lg border border-font-100 p-8 text-white">
      {avatar.map((item) => (
        <>
          <h4 className="block font-danaBlack font-extrabold text-md" key={item._id}>
            {item.name}
          </h4>
          <img
            src="/assets/images/user.webp"
            alt=""
            className="block my-4 rounded-xl"
          />
          <ul className="block text-right">
            <li className="block mb-4">
              <span className="block font-danaBold text-xl text-font-100">
                علاقه :
              </span>
              <span className="block mt-2 text-lg">{item.favorite}</span>
            </li>
            <li className="block">
              <span className="block font-danaBold text-xl text-font-100">
                محل زندگی :
              </span>
              <span className="block mt-2 text-lg">
                {item.location}
              </span>
            </li>
          </ul>
          <ul className="flex items-center justify-center mt-6 gap-8">
            <li className="block">
              <Link
                target="_blank"
                href={item.linkInstagram}
                className="flex items-center justify-center w-10 h-10 rounded-[50%] border border-font-100 text-xl ease-out duration-300 hover:bg-primary-default"
              >
                <BsInstagram />
              </Link>
            </li>
            <li className="block">
              <Link
                target="_blank"
                href={item.linkGithub}
                className="flex items-center justify-center w-10 h-10 rounded-[50%] border border-font-100 text-xl ease-out duration-300 hover:bg-back"
              >
                <FaGithub />
              </Link>
            </li>
            <li className="block">
              <Link
                target="_blank"
                href={item.linkTelegram}
                className="flex items-center justify-center w-10 h-10 rounded-[50%] border border-font-100 text-xl ease-out duration-300 hover:bg-white hover:text-blue-700"
              >
                <FaTelegram />
              </Link>
            </li>
            <li className="block">
              <Link
                target="_blank"
                href={item.linkDin}
                className="flex items-center justify-center w-10 h-10 rounded-[50%] border border-font-100 text-xl ease-out duration-300 hover:bg-white hover:text-blue-700"
              >
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </>
      ))}
    </section>
  );
};

export default Avatar;
