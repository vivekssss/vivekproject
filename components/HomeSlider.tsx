'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Controller } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import Image from 'next/image'

const sliderImages = [
  { src: '/assets/slider1farm.jpg', alt: 'Farm View' },
  { src: '/assets/sildermainfarm.jpg', alt: 'Main Farm' },
  { src: '/assets/ornages.jpg', alt: 'Oranges' },
  { src: '/assets/farm.jpg', alt: 'Farm' },
]

const thumbImages = [
  { src: '/assets/sildermainfarm.jpg', alt: 'Main Farm' },
  { src: '/assets/silder5.jpg', alt: 'Farm Product' },
  { src: '/assets/product2.jpg', alt: 'Farm Product' },
  { src: '/assets/slider1farm.jpg', alt: 'Farm View' },
]

export default function HomeSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
  const [thumbActiveIndex, setThumbActiveIndex] = useState(0)
  const borderAnimRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Sync thumb active index with main slider
    setThumbActiveIndex(activeIndex)
  }, [activeIndex])

  useEffect(() => {
    // Listen for border animation completion and trigger slide change instantly
    const borderElement = borderAnimRef.current
    if (!borderElement || !mainSwiper || !thumbsSwiper) return

    let hasTriggered = false
    let timeoutId: NodeJS.Timeout | null = null
    let progressInterval: NodeJS.Timeout | null = null

    const triggerSlideChange = () => {
      if (hasTriggered) return
      hasTriggered = true
      
      // Trigger slide change immediately when border completes
      if (mainSwiper && !mainSwiper.destroyed) {
        mainSwiper.slideNext()
      }
      if (thumbsSwiper && !thumbsSwiper.destroyed) {
        thumbsSwiper.slideNext()
      }
    }

    const handleAnimationEnd = (e: Event) => {
      const target = e.target as HTMLElement
      
      // The left edge is the last one to complete - trigger slide change instantly
      if (target.classList.contains('left-edge-thumb')) {
        // Clear the timeout since animation ended
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
        if (progressInterval) {
          clearInterval(progressInterval)
        }
        triggerSlideChange()
      }
    }
    
    // Check animation progress to trigger exactly when left edge reaches 100% (at 8s)
    const leftEdge = borderElement.querySelector('.left-edge-thumb') as HTMLElement
    if (leftEdge) {
      progressInterval = setInterval(() => {
        const computedStyle = window.getComputedStyle(leftEdge)
        const animation = computedStyle.animation
        // Check if animation is running and get current time
        const animations = leftEdge.getAnimations()
        if (animations && animations.length > 0) {
          const anim = animations[0] as any
          if (anim.currentTime !== null && anim.currentTime >= 8000) {
            // Left edge reaches 100% at 8s (83.33% of 9.6s)
            clearInterval(progressInterval!)
            if (timeoutId) {
              clearTimeout(timeoutId)
            }
            triggerSlideChange()
          }
        }
      }, 50) // Check every 50ms for precision
    }

    // Set timeout as primary trigger - border visually completes at 8s
    // Left edge reaches 100% at 83.33% of 9.6s = 8s
    timeoutId = setTimeout(() => {
      if (progressInterval) {
        clearInterval(progressInterval)
      }
      triggerSlideChange()
    }, 8000)

    // Listen on the left edge for animationend as backup
    if (leftEdge) {
      leftEdge.addEventListener('animationend', handleAnimationEnd)
    }

    return () => {
      if (leftEdge) {
        leftEdge.removeEventListener('animationend', handleAnimationEnd)
      }
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (progressInterval) {
        clearInterval(progressInterval)
      }
      hasTriggered = false
    }
  }, [mainSwiper, thumbsSwiper, activeIndex])

  return (
    <section className="block-home-slider relative h-screen w-full overflow-hidden">
      {/* Main Slider */}
      <div className="absolute inset-0">
        <Swiper
          onSwiper={setMainSwiper}
          modules={[Autoplay, EffectFade, Controller]}
          effect="fade"
          autoplay={false}
          loop={true}
          speed={300}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          controller={thumbsSwiper ? { control: thumbsSwiper } : undefined}
          className="h-full w-full"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover animate-scale-in"
                sizes="100vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Text Overlay */}
      <div className="homepage-text absolute inset-0 z-20 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="line-wrapper-p mb-4 animate-slide-up">
          <p className="text-white/90 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] font-light">
            WELCOME TO TENTWENTY FARMS
          </p>
        </div>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] animate-slide-up animation-delay-200">
          <div className="line">
            FROM OUR FARMS <br className="hidden sm:block" /> TO YOUR HANDS
          </div>
        </h1>
      </div>

      {/* Thumbnail Slider */}
      <div className="homepage-thumbs-wrapper absolute bottom-4 left-4 sm:bottom-8 sm:left-[8vw] lg:bottom-16 lg:left-24 z-30">
        <div className="space-y-3 relative">
          <p className="next-p ini-anim">
            Next
          </p>
          <div
            ref={borderAnimRef}
            className="relative homepage-thumbs-border-anim w-[138px] h-[138px]"
            key={activeIndex}
            style={{ border: '1px solid #EEF4F9' }}
          >
            {/* Back frame */}
            <div className="back-frame absolute inset-0 bg-black/20 -z-10"></div>

            {/* Animated border edges around the thumbnail area */}
            <div className="homepage-thumbs-frame-edge top-edge-thumb"></div>
            <div className="homepage-thumbs-frame-edge right-edge-thumb"></div>
            <div className="homepage-thumbs-frame-edge bottom-edge-thumb"></div>
            <div className="homepage-thumbs-frame-edge left-edge-thumb"></div>

            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Autoplay, Controller]}
              autoplay={false}
              loop={true}
              speed={300}
              slidesPerView={1}
              spaceBetween={0}
              controller={mainSwiper ? { control: mainSwiper } : undefined}
              className="homepage-thumbs w-full h-full"
            >
            {thumbImages.map((image, index) => {
              // The next slide is the one that will be shown after the current active one
              const nextIndex = (thumbActiveIndex + 1) % thumbImages.length
              const isNext = nextIndex === index
              const isActive = thumbActiveIndex === index
              
              return (
                <SwiperSlide key={index} className="cursor-pointer thumbnail-slide">
                  <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                    {/* Slide overlay with clip-path animation - shows on next slide */}
                    <div 
                      className={`slide-overlay absolute z-10 bg-primary/20 ${
                        isNext ? 'ini-anim' : ''
                      }`}
                    ></div>
                    {/* Image with clip-path animation */}
                    <div className={`relative thumbnail-img-wrapper ${
                      isNext || isActive ? 'ini-anim animate' : ''
                    }`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={93}
                        height={93}
                        className="object-cover"
                        sizes="(max-width: 640px) 77.5px, 93px"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
            </Swiper>
          </div>

          {/* Progress Indicator */}
          <div className="home-progress-wrapper">
            <div className="home-progress ini-anim">
              <p className="ini-anim">{String(activeIndex + 1).padStart(2, '0')}</p>
              <div className="home-progress-line" aria-hidden="true"></div>
              <p className="ini-anim">{String(sliderImages.length).padStart(2, '0')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

