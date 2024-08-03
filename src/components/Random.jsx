import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

export default function Random() {

const {gif,fetchData,loading}=useGif();

  return (
    <div className="flex flex-col items-center mt-5 rounded-xl justify-center bg-green-600 w-6/12 mx-auto">
      <h2 className="text-xl underline my-3">Random GIF</h2>
      <div>
      {loading?<Spinner/>:<img src={gif} />}
      </div>
      <button className="bg-white p-2 px-4 rounded-md my-3 w-8/12"
      onClick={()=>fetchData()}>
        Generate
      </button>
    </div>
  );
}
