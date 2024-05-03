import React from "react";

  import { CiMail, CiInstagram} from "react-icons/ci";


const Footer = () => {
  return (
    <div>
      <ul className="flex justify-center font-bold text-3xl pt-3">
      <li className="pb-5">
              <CiInstagram />
          </li>
          <li>
          <CiMail />
          </li>
      </ul>
    </div>
  );
};

export default Footer;