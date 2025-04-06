import React from 'react';

const Download = ({ enhanced, loading }) => {
  return (
    <>
      {enhanced && !loading && (
        <div className="flex justify-center mt-8">
          <a
            href={enhanced}
            download="enhanced-image.jpg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Download Enhanced Image
          </a>
        </div>
      )}
    </>
  );
};

export default Download;
