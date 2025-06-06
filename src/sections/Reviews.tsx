'use client'

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';

interface ReviewCardProps {
  name: string;
  images: string[];
  description: string;
  story: string;
}

const reviewsData: ReviewCardProps[] = [
  {
    name: 'Жасcулан',
    images: ['/assets/review/jasulan1.jpeg', '/assets/review/jasulan2.jpeg', '/assets/review/jasulan3.jpeg'],
    description: 'Бизнес-аналитик\nстудент 2-го потока',
    story: 'Узнайте историю Жассулана'
  },
  {
    name: 'Даяна',
    images: ['/assets/review/dayana.png', '/assets/review/dayana2.png', '/assets/review/dayana3.png', '/assets/review/dayana4.png'],
    description: 'С нуля\nстудентка 1-го потока',
    story: 'Узнайте историю Даяны'
  },
  {
    name: 'Анатолий',
    images: ['/assets/review/anatoly1.jpeg', '/assets/review/anatoly2.jpeg', '/assets/review/anatoly3.jpeg', '/assets/review/anatoly4.jpeg'],
    description: 'Системный аналитик\nстудент 1-го потока',
    story: 'Узнайте историю Анатолия'
  },
  
  {
    name: 'Софья',
    images: ['/assets/review/sofya1.png', '/assets/review/sofya2.png', '/assets/review/sofya3.png', '/assets/review/sofya4.png'],
    description: 'Проджект-менеджер\nстудентка 1-го потока',
    story: 'Узнайте историю Софьи'
  }
];

const ReviewCard = ({ name, images, description, story }: ReviewCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="bg-white rounded-[25px] p-4 md:p-8">
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col">
          <div className="relative aspect-square w-full group">
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className={`relative w-full h-full transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
              <Image
                src={images[currentImageIndex]}
                alt={name}
                fill
                className="object-contain rounded-[15px]"
              />
            </div>
          </div>
          <div className='mt-0 space-y-2 p-5'>
            <h3 className="text-xl text-[var(--text-primary)] font-medium">
              {name}
            </h3>
            <p className="text-sm text-[var(--text-primary)] opacity-70">
              {description.split('\n').map((line, i) => (
                <span key={i} className="block leading-snug">
                  {line}
                </span>
              ))}
            </p>
            <p className="text-sm text-[var(--text-primary)] opacity-80 leading-snug">
              {story}
            </p>
            <Link 
              href="/reviews"   
              className="text-[var(--button-primary)] text-sm font-medium mt-5 hover:opacity-80 bg-[#F2F2F2] px-10 py-1.5 rounded-2xl transition-opacity inline-flex items-center mt-2"
            >
              Узнать подробнее
              <svg className="ml-1 w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-start gap-6">
          <div className="relative aspect-square w-[320px] flex-shrink-0 group">
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className={`relative w-full h-full transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
              <Image
                src={images[currentImageIndex]}
                alt={name}
                fill
                className="object-contain rounded-[15px]"
              />
            </div>
          </div>

          <div className='flex flex-col justify-between h-[320px] w-full py-4'>
            <div className='space-y-6'>
              <h3 className="text-3xl text-[var(--text-primary)]">
                {name}
              </h3>
              <p className="text-[15px] text-[var(--text-primary)] opacity-70">
                {description.split('\n').map((line, i) => (
                  <span key={i} className="block leading-snug">
                    {line}
                  </span>
                ))}
              </p>
              <p className="text-[15px] text-[var(--text-primary)] opacity-80 leading-snug">
                {story}
              </p>
            </div>
            <Link 
              href="/reviews" 
              className="text-[var(--button-primary)] text-md font-medium hover:opacity-80 bg-[#F2F2F2] px-4 py-4 rounded-3xl transition-opacity inline-flex items-center w-52"
            >
              Узнать подробнее
              <svg className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


const Reviews = () => {
  return (
    <section id='reviews' className="bg-[var(--bg-section)] py-16 px-4 md:px-0 rounded-3xl">
      <div className="container mx-auto">
        <AnimatedSection direction="up">
          <h2 className="text-[32px] text-white font-semibold mb-8">
            Отзывы
          </h2>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-6 md:hidden">
            {reviewsData.slice(0, 4).map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 mb-8">
            {reviewsData.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href='/reviews' className="bg-[var(--button-primary)] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-[15px]">
              Смотреть все
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Reviews;
