import {  useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


export default function Tag() {
    const [tag, setTag] = useState('car');



    const {gif,fetchData,loading}=useGif(tag);

  return (
    <div className="flex flex-col items-center mt-5 rounded-xl justify-center px-2 bg-blue-600 w-6/12 mx-auto">
      <h2 className="text-xl underline my-3">Random <span className="capitalize">{tag}</span> GIF</h2>
      <div>
        {loading?<Spinner/>:<img src={gif} alt="spinner"/>}
      </div>


      <input
    className="bg-white p-2 px-4 rounded-md my-3 w-8/12 text-center"
      type="text"
      value={tag}
      onChange={(e) => setTag(e.target.value)}

      />
      <button className="bg-white p-2 px-4 rounded-md my-3 w-8/12"
      onClick={()=>fetchData(tag)}>
        Generate
      </button>
    </div>
  );
}
