import React from 'react';
import Link from 'next/link';
import { Servicebox } from '@/app/api/data';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Services = () => {
  return (
    <section className="bg-section dark:bg-darklight" id="services">
      <div className="container mx-auto max-w-6xl px-4">
        <div
          className="flex gap-2 items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000">
        </div>

        <h2
          className="sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:text-white"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000">
          Services specifically designed to meet your business needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto">
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              data-aos-duration="1000"
              data-aos-offset="300"
              className="bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer">
              <Image
                src={item.icon}
                alt="Service Box"
                width={0}
                height={0}
                className="w-10 h-10 bg-no-repeat inline-block bg-contain"
              />

              <h3 className="max-w-44 mx-auto text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mx-auto text-xl font-normal dark:text-white/70">
                Start From {item.price}
              </p>

              <p className="dark:text-white/50 text-base font-normal">
                {item.description}
              </p>

              <Link
                href="#"
                className="hover:text-blue-700 text-lg font-medium text-primary group flex items-center">
                Get Started
                <span>
                  <Icon icon="ei:chevron-right" width="30" height="30" />
                </span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
