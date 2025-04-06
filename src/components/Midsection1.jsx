import React from 'react';

const Midsection1 = () => {
  return (
    <div className="mt-20 border-t-1 border-l-1 border-amber-600 w-full bg-black py-20 px-4 shadow-[20px_20px_60px_-10px_rgba(251,191,36,0.5)] rounded-4xl">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-15">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-[60%]">
          <img 
            src="/images/bub1.jpg" 
            alt="Unblur Preview" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-[55%] text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4">
          Sharpen Image, Bring Out More Details
          </h3>
          <p className="text-lg text-blue-200">
          With our image sharpener, you can effortlessly remove blur from any photo. It excels in unblurring portrait photos with our powerful AI face model, creating sharp and vivid portraits. Say goodbye to blurry photos with just single click. 
          </p>
        </div>

      </div>
    </div>
  );
};

export default Midsection1;
