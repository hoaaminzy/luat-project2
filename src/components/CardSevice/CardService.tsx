import "./CardService.css";
export default function CardService({ item, index }) {
  return (
    <div
      key={index}
      style={{
        height: "600px",
        width: "320px",
        zIndex: 99999999,
        padding: "30px",
      }}
      className="bg-bg-nen hoverScale my-5 max-w-sm overflow-hidden flex flex-col  justify-between border border-gray-200 rounded-lg shadow dark:border-gray-700"
    >
      <div
        className="flex flex-col "
        style={{ height: "calc(600px - 400px) " }}
      >
        <span className="fw-bold text-[22px]">{item.heading}</span>
        <p className="text-[#606670] text-sm font-normal pt-5 font-open-sans leading-tight">
          {item.description}
        </p>
      </div>
      <div style={{ height: "250px", width: "100%" }} className="mt-5">
        <img src={item.image} alt={item.heading} />
      </div>
    </div>
  );
}
