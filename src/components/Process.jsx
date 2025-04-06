import React from 'react';



const Process = () => {
    return (
      <div className="mt-20 w-full bg-black py-16 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-4">How to unblur an image?</h2>
        <p className="text-gray-100 max-w-2xl mx-auto mb-12">
          Bring clarity and beauty to your photo in a single click. If needed, you can colorize or retouch the image after automatic enhancement.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          
            <div className="relative rounded-3xl shadow-md p-6 pt-12 text-center transition duration-300 hover:shadow-xl h-70 backdrop-blur-sm border-2 border-blue-500">
              {/* Numbered circle */}
             <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-0 w-14 h-14 rounded-full bg-indigo-400 backdrop-blur-md shadow-xl flex items-center justify-center text-white text-3xl font-bold">1</div>
             <div className='content-center flex justify-center items-center mt-8 py-7 rounded-4xl bg-gradient-to-r from-blue-500 to-purple-500'>
                <img src="/images/upload.svg" alt="" />
             </div>
             
              {/* Step description */}
              <p className="mt-9 text-amber-50 text-pretty">Upload a blurry photo file from your photo library.</p>
            </div>






            <div className="relative rounded-3xl shadow-md p-6 pt-12 text-center transition duration-300 hover:shadow-xl h-70 backdrop-blur-sm border-2 border-blue-500">
              {/* Numbered circle */}
             <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-0 w-14 h-14 rounded-full bg-indigo-400 backdrop-blur-md shadow-xl flex items-center justify-center text-white text-3xl font-bold">2</div>
             <div className='content-center flex justify-center items-center mt-3 rounded-4xl blur-xs'>
                <img src="/images/enhanced.avif" alt="" />
             </div>
             <div className='absolute top-30 left-1/2 w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 z-20' >
                <img src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_b_14444_2832)'%3e%3ccircle%20cx='19.5'%20cy='19.5'%20r='19.5'%20fill='white'%20fill-opacity='0.8'/%3e%3c/g%3e%3cpath%20d='M18.8809%2011V23.7498'%20stroke='%23333333'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.8809%2011L23.2202%2015.3149'%20stroke='%23333333'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.8813%2011L14.542%2015.3149'%20stroke='%23333333'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27.39%2022.2188V24.8051C27.39%2025.7929%2026.5731%2026.5987%2025.5798%2026.5987H11.8102C10.8169%2026.5987%2010.0065%2025.8059%2010%2024.8181C10%2024.8181%2010%2024.8181%2010%2024.8116V22.2252'%20stroke='%23333333'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cdefs%3e%3cfilter%20id='filter0_b_14444_2832'%20x='-4'%20y='-4'%20width='47'%20height='47'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeGaussianBlur%20in='BackgroundImageFix'%20stdDeviation='2'/%3e%3cfeComposite%20in2='SourceAlpha'%20operator='in'%20result='effect1_backgroundBlur_14444_2832'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_backgroundBlur_14444_2832'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e" alt="" />
             </div>
             
              {/* Step description */}
              <p className="mt-7 text-amber-50 text-pretty">Wait a seconds, see AI remove blur automatically.</p>
            </div>









            <div className="relative rounded-3xl shadow-md p-6 pt-12 text-center transition duration-300 hover:shadow-xl h-70 backdrop-blur-sm border-2 border-blue-500">
              {/* Numbered circle */}
             <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-0 w-14 h-14 rounded-full bg-indigo-400 backdrop-blur-md shadow-xl flex items-center justify-center text-white text-3xl font-bold">3</div>
             <div className='content-center flex justify-center items-center mt-3 rounded-4xl '>
                <img src="/images/enhanced.avif" alt="" />
             </div>
             <div className='absolute top-44 left-1/2 w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 z-20' >
                <img src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_b_14444_2825)'%3e%3ccircle%20cx='19.5'%20cy='19.5'%20r='19.5'%20fill='url(%23paint0_linear_14444_2825)'/%3e%3c/g%3e%3cpath%20d='M19.8809%2024.75L19.8809%2012.0002'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.8809%2024.75L15.5415%2020.4351'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.8814%2024.75L24.2207%2020.4351'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28.39%2023.2188V25.8051C28.39%2026.7929%2027.5731%2027.5987%2026.5798%2027.5987H12.8102C11.8169%2027.5987%2011.0065%2026.8059%2011%2025.8181C11%2025.8181%2011%2025.8181%2011%2025.8116V23.2252'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cdefs%3e%3cfilter%20id='filter0_b_14444_2825'%20x='-4'%20y='-4'%20width='47'%20height='47'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeGaussianBlur%20in='BackgroundImageFix'%20stdDeviation='2'/%3e%3cfeComposite%20in2='SourceAlpha'%20operator='in'%20result='effect1_backgroundBlur_14444_2825'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_backgroundBlur_14444_2825'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_14444_2825'%20x1='6.5'%20y1='9.75'%20x2='35.75'%20y2='35.75'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%235EA9F9'/%3e%3cstop%20offset='1'%20stop-color='%23545BF6'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="" />
             </div>
             
              {/* Step description */}
              <p className="mt-7 text-amber-50 text-pretty">Download the repaired photo and share on social media.</p>
            </div>





        </div>
      </div>
    );
  };
  

 
export default Process;
