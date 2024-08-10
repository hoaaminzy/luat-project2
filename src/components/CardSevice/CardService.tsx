import { useNavigate } from "react-router-dom";
import "./CardService.css";
export default function CardService({ item, index }) {
  const navigate = useNavigate()
  return (
    <div
      key={index}
      style={{
        height: "600px",
        width: "max-content",
        zIndex: 99999999,
        padding: "30px",
      }}
      onClick={()=>{
        navigate('/dich-vu/luat-su-rieng')
      }}
      className="slickcontainer bg-bg-nen hoverScale my-5 max-w-sm overflow-hidden flex flex-col  justify-between border border-gray-200 
       rounded-2xl shadow dark:border-gray-700"
    >
      <div
        className="flex flex-col "
        // style={{ height: "calc(600px - 400px) " }}
      >
        <span className="grow shrink basis-0 text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">{item.heading}</span>
        <p className="text-[#606670] text-sm font-normal pt-3 font-open-sans leading-tight">
          {item.description}
        </p>
      </div>
      <div style={{ height: "250px", width: "100%" }} className="mt-5">
        <img src={item.image} alt={item.heading} />
      </div>
    </div>
  );
}
