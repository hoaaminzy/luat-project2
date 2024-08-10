import { LuMousePointer2 } from "react-icons/lu";
import "./ProfessionalBanner.css";
interface ProfessionalBannerProps {
  title?: string;
}
const ProfessionalBanner: React.FC<ProfessionalBannerProps> = ({ title }) => {
  return (
    <div className="frocess-container flex items-center  relative">
      <div
        className="profess-text text-5xl font-bold text-[#40e0d0] p-4 font-space-grotesk"
        style={{ border: "1px solid #40e0d0" }}
      >
        {title}
        <div
          className="w-2 h-2 absolute"
          style={{
            top: "-3px",
            background: "#fff",
            right: "-3px",
            zIndex: 999,
            border: "1px solid #40e0d0",
          }}
        ></div>
        <div
          className="w-2 h-2 absolute"
          style={{
            bottom: "-3px",
            background: "#fff",
            right: "-3px",
            zIndex: 999,
            border: "1px solid #40e0d0",
          }}
        ></div>
        <div
          className="w-2 h-2 absolute"
          style={{
            top: "-3px",
            background: "#fff",
            left: "-3px",
            zIndex: 999,
            border: "1px solid #40e0d0",
          }}
        ></div>
        <div
          className="w-2 h-2 absolute"
          style={{
            bottom: "-3px",
            background: "#fff",
            left: "-3px",
            zIndex: 999,
            border: "1px solid #40e0d0",
          }}
        ></div>
      </div>
      <div
        className="absolute ml-4 flex gap-1 icon-apl"
        style={{ bottom: 0, right: "-170px" }}
      >
        <div className="" style={{ transform: "translateY(-17px)" }}>
          <LuMousePointer2 style={{ color: "#40e0d0", fontSize: "18px" }} />
        </div>
        <div
          className="bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] text-white py-1 px-3 justify-start items-end"
          style={{ fontSize: "12px", fontWeight: "bold", borderRadius: "5px" }}
        >
          Apolo Lawyers
        </div>
      </div>
    </div>
  );
};

export default ProfessionalBanner;
