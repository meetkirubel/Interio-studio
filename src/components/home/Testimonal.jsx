"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import p1 from "@/asset/product/p1.jpg";
import p2 from "@/asset/product/p2.jpg";
import p3 from "@/asset/product/p3.jpg";
import p4 from "@/asset/product/p4.jpg";
import p5 from "@/asset/product/p5.jpg";
import { FaStar } from "react-icons/fa6";

const data = [
  {  img: p1,
     name: "Marta J.", 
    review: `"Interio transformed our bland apartment into a stunning
  and functional sanctuary. Their creativity and attention
  to detail are unmatched. We couldn't be happier with the
  outcome!"` },
  {  img: p4,
     name: "Marta J.", 
    review: `"Interio transformed our bland apartment into a stunning
  and functional sanctuary. Their creativity and attention
  to detail are unmatched. We couldn't be happier with the
  outcome!"` },
  {  img: p1,
     name: "Marta J.", 
    review: `"Interio transformed our bland apartment into a stunning
  and functional sanctuary. Their creativity and attention
  to detail are unmatched. We couldn't be happier with the
  outcome!"` },
  {  img: p3,
     name: "Marta J.", 
    review: `"Interio transformed our bland apartment into a stunning
  and functional sanctuary. Their creativity and attention
  to detail are unmatched. We couldn't be happier with the
  outcome!"` },
  {  img: p4,
     name: "Marta J.", 
    review: `"Interio transformed our bland apartment into a stunning
  and functional sanctuary. Their creativity and attention
  to detail are unmatched. We couldn't be happier with the
  outcome!"` },
  {  img: p3,
     name: "Marta J.", 
    review: `"Interio transformed our bland apartment into a stunning
  and functional sanctuary. Their creativity and attention
  to detail are unmatched. We couldn't be happier with the
  outcome!"` },
];

const Testimonal = () => {
  const [nex, setNex] = useState(0);
  const [pre, setPre] = useState(0);
  const prev = () => setPre((pre) => pre + 1);
  const next = () => setNex((nex) => nex + 1);

  return (
    <section className="testimonal-section">
      <div className="testimonal-container container">
        <div className="top">
          <h2 className="h2">
            What <span>Our Client</span>
            <br />
            are Saying.
          </h2>
          <div className="controler">
            <button className="swiper-btn pre-btn" onClick={prev}>
              <IoIosArrowRoundBack className="icon" />
            </button>
            <button className="swiper-btn next-btn" onClick={next}>
              <IoIosArrowRoundForward className="icon" />
            </button>
          </div>
        </div>
        <div className="bottom">
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={40}
            className="mySwiper testimonals"
          >
            {data.map((item, key) => {
              return (
                <SwiperSlide className="testimonal" key={key}>
                    <div className="text">
                      <p>{item.review}</p>
                    </div>
                    <div className="person">
                      <div className="person-data">
                        <Image src={item.img} alt="Sarah M." className="img" placeholder="blur"/>
                        <p className="name">{item.name}</p>
                      </div>

                      <div className="stars">
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                        <FaStar className="icon" />
                      </div>
                    </div>

                </SwiperSlide>
              );
            })}

            <Button nex={nex} pre={pre} />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;

export const Button = ({ pre, nex }) => {
  const swiper = useSwiper();
  const prev = () => swiper.slidePrev();
  const next = () => swiper.slideNext();

  useEffect(() => {
    if (pre > 0) {
      prev();
    }
  }, [pre]);
  useEffect(() => {
    if (nex > 0) {
      next();
    }
  }, [nex]);
};
