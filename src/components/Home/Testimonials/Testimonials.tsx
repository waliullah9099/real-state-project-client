import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';
import AllTestimonials from './AllTestimonials';

const Testimonials = () => {
  return (
    <div className='bg-[#f3f7fd] mt-10 pt-12 pb-24'>
      <SectionTitle title="Our Location For You" subTitle="Explore Cities" />
      <AllTestimonials />
    </div>
  );
};

export default Testimonials;