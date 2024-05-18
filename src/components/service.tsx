import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faGift } from '@fortawesome/free-solid-svg-icons';

const ServiceSection = () => {
  return (
    <section className="py-12 text-center bg-white">
      <div className="container mx-auto">
        <h2 className="mb-12 text-3xl font-bold" data-aos="fade-up">Swarovski Services</h2>
        <div className="flex flex-col justify-around md:flex-row">
          <div className="mb-12 md:mb-0 md:w-1/2" data-aos="fade-right">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faConciergeBell} className="w-8 h-8 mb-4" />
              <h3 className="mb-2 text-xl font-semibold">CUSTOMER SERVICE</h3>
              <p className="text-gray-600">Explore answers to our FAQs or connect with our Customer Service team.</p>
            </div>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faGift} className="w-8 h-8 mb-4" />
              <h3 className="mb-2 text-xl font-semibold">GIFT SERVICES</h3>
              <p className="text-gray-600">Add a personalized touch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;