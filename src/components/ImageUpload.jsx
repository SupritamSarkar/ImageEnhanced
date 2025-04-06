const ImageUpload = (props) => {

  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.uploadImageHandler(file);
  }
}

  return (
    <div className='bg-white rounded-4xl p-3 w-full max-w-120 border-4 
                    shadow-2xl shadow-blue-500/50 transition-all duration-300 
                    hover:shadow-blue-500/70 focus-within:shadow-blue-500/80'>

      <label htmlFor="fileInput" 
        className='block w-full cursor-pointer border-3 border-dashed border-gray-300 hover:border-blue-800 rounded-4xl p-6 text-center transition-all duration-300'>

        <input type="file" id='fileInput' className='hidden' onChange={ShowImageHandler} />

        <span className='text-2xl font-medium text-gray-700'>
          Click to upload
        </span>

      </label>

    </div>
  )
}

export default ImageUpload;
