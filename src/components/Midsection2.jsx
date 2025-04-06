import React from 'react';

const Midsection2 = () => {
  return (
    

    <div className="mt-20 w-full border-t-1 border-r-1 border-amber-500 bg-black py-20 px-4 shadow-[-20px_20px_60px_-10px_rgba(251,191,36,0.5)] rounded-4xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Text */}
        <div className="w-full md:w-[55%] text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4">
            Image Sharpener for Product Photos
          </h3>
          <p className="text-lg text-blue-200">
            Whether for printing or digital platforms, high-resolution images are essential
            for an outstanding user experience and higher conversion rates. With PicWish,
            you can effortlessly sharpen images, fix pixelation and blur, ensuring your
            product photos or any other photography look sharp and professional.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-[45%]">
          <img 
            src="/images/bub2.webp" 
            alt="Unblur Preview" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

      </div>
    </div>

    



  );
};

export default Midsection2;
