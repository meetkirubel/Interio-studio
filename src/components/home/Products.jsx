"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useSwiper,Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Image from "next/image";
import p1 from "@/asset/product/p1.jpg";
import p2 from "@/asset/product/p2.jpg";
import p3 from "@/asset/product/p3.jpg";
import p4 from "@/asset/product/p4.jpg";
import p5 from "@/asset/product/p5.jpg";

const data = [
  { img: p1, name: "Chair", price: "300$" },
  { img: p2, name: "Sofa", price: "500$" },
  { img: p3, name: "Lamp", price: "100$" },
  { img: p4, name: "Tap Lamp", price: "100$" },
  { img: p5, name: "Pot", price: "500$" },
];

const Products = () => {
    const [nex,setNex]=useState(0)
    const [pre,setPre]=useState(0)
    const prev =()=>setPre(pre=>pre+1)
    const next =()=>setNex(nex=>nex+1)

  return (
    <section>
      <div className="products-container">
        <div className="left">
          <h2 className="h2">
            Buy trending
            <br />
            <span>Products.</span>
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
        <div className="right">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            loop={true}
            spaceBetween={40}
            modules={[Autoplay]}
            className="mySwiper cards"
          >
            {data.map((item, key) => {
              return (
                <SwiperSlide className="card" key={key}>
                  <Image src={item.img} alt={item.name}  placeholder="blur"/>
                  <div className="text">
                    <h3 className="name">{item.name}</h3>
                    <p className="price">{item.price}</p>
                  </div>
                </SwiperSlide>
              );
            })}
            <Button nex={nex} pre={pre}/>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Products;




export const Button = ({pre,nex}) => {
    const swiper = useSwiper();
    const prev = () =>swiper.slidePrev();
    const next = () =>swiper.slideNext();

    useEffect(()=>{
        if(pre > 0){prev()}
    },[pre])
    useEffect(()=>{
        if(nex > 0){next()}
    },[nex])

}