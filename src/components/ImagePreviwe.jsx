import Loading from "./Loading"
import Download from "./Download" 


const ImagePreviwe = (props) => {
  return (
    <>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
      
        <div className="bg-black rounded-xl border-2 border-indigo-500 overflow-hidden shadow-2xl shadow-indigo-700 w-full" >
          <h2 className="text-lg font-semibold text-center bg-black text-white py-7 ">Orginal Image</h2>

          <img src={props.uploaded} alt="" className="w-full h-full object-cover" />

          <div className="flex items-center  justify-center font-bold text-blue-950 bg-black text-2xl h-64 w-2xl border-t-2 border-t-amber-50"></div>

        </div>


        <div className="bg-black rounded-xl border-2 border-indigo-500 overflow-hidden shadow-2xl shadow-indigo-700 w-full ">
          <h2 className="text-lg font-semibold text-center bg-black text-white py-7 ">Enhanced Image</h2>

          {props.enhanced && !props.loading &&(

              <img src={props.enhanced} alt="" className="w-full h-full object-cover" />
          )}
           
          

          {props.loading ? ( <Loading /> ): (
                    <div className="flex items-center justify-center font-bold text-blue-950 bg-black text-2xl h-64 w-2xl border-t-2 border-t-amber-50"></div>
                    )} 

        </div>

    </div>

    
      {/* ✅ Download Button Below Both Boxes */}
      <Download enhanced={props.enhanced} loading={props.loading} />
    
  </>
  )
}




export default ImagePreviwe
