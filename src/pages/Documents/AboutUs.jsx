import React from 'react';
import Footer from '@/layout/NoAuthLayout/Footer';

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mt-4">About Us</h1>
        <div className="container mx-auto px-4 py-8 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className=" rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Our Vision</h2>
              <p>To become the leading provider of innovative solutions in our industry, setting new standards for excellence and customer satisfaction.</p>
            </div>
            <div className="rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Our Mission</h2>
              <p>Delivering exceptional value through cutting-edge technology and personalized service while maintaining the highest standards of integrity.</p>
            </div>
            <div className=" rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Our Values</h2>
              <p>Excellence, Innovation, Integrity, Customer Focus, and Continuous Improvement guide everything we do.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            We are a team of dedicated professionals committed to providing top-notch services and solutions. Our mission is to deliver high-quality products that exceed our customers' expectations. With years of experience in the industry, we pride ourselves on our expertise and customer-centric approach.
          </div>
        </div>
        <Footer/>
    </div>
    </React.Fragment >
    
  )
}

export default AboutUs;