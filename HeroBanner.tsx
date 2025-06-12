'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const slides = [
  {
    id: 1,
    title: 'Güvenli Oyun Hesabı Alım Satımı',
    description: 'Binlerce güvenilir satıcı ve alıcı ile güvenli alışveriş yapın',
    image: '/images/banner1.jpg',
  },
  {
    id: 2,
    title: 'En Popüler Oyun Hesapları',
    description: 'Valorant, PUBG, LoL ve daha fazlası',
    image: '/images/banner2.jpg',
  },
  {
    id: 3,
    title: '7/24 Canlı Destek',
    description: 'Uzman ekibimiz her zaman yanınızda',
    image: '/images/banner3.jpg',
  },
]

export function HeroBanner() {
  return (
    <div className="relative w-full h-[600px]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 to-dark-900/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/90">{slide.description}</p>
                  <button className="mt-8 px-8 py-3 bg-primary-500 hover:bg-primary-600 rounded-lg text-white font-semibold transition-all duration-200 shadow-glow hover:shadow-glow-lg">
                    Hemen Başla
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
} 