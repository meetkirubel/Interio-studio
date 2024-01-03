import React from "react";
import Btn from "../ui/Btn";
import Image from "next/image";
import hero from "@/asset/hero/p1.jpg";
export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="up">
        <div className="inner-container">
          <div className="text ">
            <h1 className="h1">
              <span>Interio</span> The Modern <br /> art of simplicity.
            </h1>
            <p>
              A classic motorcycle material, perfect for upholstery on chairs,
              sofas, or ottomans. You could even use salvaged motorcycle jackets
              or pants.
            </p>
            <Btn text="Explor More" />
          </div>
          <div className="img">
            <Image src={hero} alt="Interio Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};
