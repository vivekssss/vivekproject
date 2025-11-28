'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import Image from 'next/image'

const products = [
  { 
    src: '/assets/product1.jpg', 
    alt: 'Product 1', 
    title: 'Farm Product 1',
    client: 'Client 1',
    location: 'Dubai, United Arab Emirates'
  },
  { 
    src: '/assets/slider2farm.jpg', 
    alt: 'Product 2', 
    title: 'Farm Product 2',
    client: 'Client 1',
    location: 'Dubai, United Arab Emirates'
  },
  { 
    src: '/assets/product2.jpg', 
    alt: 'Product 3', 
    title: 'Farm Product 3',
    client: 'Client 1',
    location: 'Dubai, United Arab Emirates'
  },
]

export default function QualityProducts() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="block-portfolio-slider bg-white">
      <div className="max-w-full mx-auto">
        {/* Title */}
        <div className="block-portfolio-slider-title-quality">
          <h3 className="text-center text-black">
            Quality Products
          </h3>
        </div>

        {/* Description */}
        <div className="paragraph">
          <div className="block-portfolio-slider-title-quality-content">
            <p className="text-center text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Product Slider */}
        <div className="slider-items">
          <Swiper
            modules={[FreeMode, Mousewheel]}
            freeMode={true}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            slidesPerView="auto"
            spaceBetween={0}
            className="block-portfolio-slider-main"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 0,
                allowTouchMove: false,
                freeMode: false,
                enabled: true,
                touchEventsTarget: 'container',
                simulateTouch: false,
              },
              1024: {
                slidesPerView: 'auto',
                spaceBetween: 0,
                allowTouchMove: true,
                freeMode: true,
              },
            }}
          >
            {products.map((product, index) => {
              const isActive = activeIndex === index
              const isFirst = index === 0
              const isSecond = index === 1
              const isThird = index === 2
              return (
                <SwiperSlide
                  key={index}
                  className={`portfolio-slide ${isFirst ? 'slide-first' : ''} ${isSecond ? 'slide-second' : ''} ${isThird ? 'slide-third' : ''}`}
                >
                  <div className="top" style={{ height: '50px' }}></div>
                  <a
                    href="#"
                    aria-label={product.title}
                    title={product.title}
                    className="block group"
                  >
                    <div className="bottom relative overflow-visible">
                      <div className={`portfolio-image-container ${isActive ? 'portfolio-image-active' : 'portfolio-image-side'}`}>
                        <Image
                          src={product.src}
                          alt={product.alt}
                          width={1075.67}
                          height={1434.22}
                          className="object-cover inview portfolio-image"
                        />
                        {/* Drag button - Show on hover */}
                        <button className="button no_hover button--largePadding port_more">
                          Drag
                        </button>
                      </div>
                      {/* Client Information - Only show on center/2nd slide */}
                      {isSecond && (
                        <div className="client-info">
                          <p className="client-name">{product.client}</p>
                          <p className="client-location">{product.location}</p>
                        </div>
                      )}
                    </div>
                  </a>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

