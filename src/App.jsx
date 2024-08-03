import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  <div className="background w-screen h-screen overflow-x-hidden">
    <div className="bg-white w-11/12 mx-auto mt-5 text-center text-3xl font-semibold rounded-xl py-3">RANDOM GIF</div>
    <Random/>
    <Tag/>
  </div>);
}
