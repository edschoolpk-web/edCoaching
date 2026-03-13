"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { toAbsoluteUploadsUrl } from "@/lib/image-utils";

// Import slick-carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroSlide {
  id: string;
  imageUrl: string;
  title?: string | null;
}

interface HeroImageSliderProps {
  slides: HeroSlide[];
}

export default function HeroImageSlider({ slides }: HeroImageSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="banner-img">
        <Image
          src="/webImages/newimages/banner12.png"
          alt="Students learning at Engineers & Doctors Inn"
          width={500}
          height={375}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
    );
  }

  return (
    <div className="hero-slider-container w-full relative mb-12">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-slider-container .slick-dots {
          bottom: -35px;
        }
        .hero-slider-container .slick-dots li button:before {
          color: #666 !important;
          opacity: 0.5;
          font-size: 14px;
        }
        .hero-slider-container .slick-dots li.slick-active button:before {
          color: #00fef9 !important;
          opacity: 1;
        }
        /* Extra safety for different slick versions or themes */
        .hero-slider-container .slick-dots li.slick-active button {
          color: #00fef9 !important;
          background-color: #00fef9 !important;
        }
        .hero-slider-container .slick-dots li.slick-active {
          color: #00fef9 !important;
        }
        /* In case dots are styled as solid circles */
        .hero-slider-container .slick-dots li.slick-active button:after {
            background-color: #00fef9 !important;
        }
        .hero-slide-item {
          outline: none;
          width: 100%;
        }
        .hero-slide-img {
          width: 100% !important;
          height: auto !important;
          display: block;
        }
      `}} />
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="hero-slide-item">
            <img
              src={toAbsoluteUploadsUrl(slide.imageUrl)}
              alt={slide.title || "Hero Slide"}
              className="hero-slide-img"
              loading="eager"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
