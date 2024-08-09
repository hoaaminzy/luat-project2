// import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";
interface HeaderProps {
  type: boolean;
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const [toggle, setToggle] = useState(false);
  const dataNav = [
    {
      slug: "trangchu",
      name: "Trang chủ",
    },
    {
      slug: "gioi-thieu",
      name: "Giới thiệu",
    },
    {
      slug: "dich-vu",
      name: "Dịch vụ",
    },
    {
      slug: "tuyendung",
      name: "Tuyển dụng",
    },

    {
      slug: "nhansu",
      name: "Nhân sự",
    },

    {
      slug: "baiviet",
      name: "Bài viết",
    },
  ];
  return (
    <div className="">
      <div className="absolute w-full" style={{ top: 0, left: 0, zIndex: 9 }}>
        <div
          className="w-full px-[50px] flex py-4 justify-between items-center "
          style={{ background: "transparent" }}
        >
          <div className="text-center text-[#40e0d0] justify-center items-center text-[32px] font-bold font-space-grotesk leading-10">
            Apolo Laywers
          </div>

          <nav className="flex justify-center items-center gap-6">
            {dataNav.map((nav, index) => {
              return (
                <NavLink
                  key={index}
                  to={nav.slug}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-item active"
                      : type === true
                      ? "nav-item"
                      : "nav-item-black"
                  }
                >
                  {nav.name}
                </NavLink>
              );
            })}
          </nav>
          <div className="justify-start items-center gap-8 flex">
            <div className="px-6 py-2 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-lg justify-center items-center gap-3 flex">
              <div className="text-white text-base font-semibold font-open-sans leading-loose">
                Liên hệ
              </div>
            </div>
            <div className="justify-start items-center flex">
              <div
                onClick={() => {
                  if (!toggle) setToggle(true);
                }}
                className={`px-4 cursor-pointer ${
                  toggle
                    ? "bg-gradient-to-r from-[#40e0d0] to-[#48d1cc]  pt-3 pb-2.5  rounded-lg text-white"
                    : "bg-[#e7ecf1] text-[#002740] py-1"
                } rounded-lg ounded-bl-lg flex-col justify-center items-center gap-2.5 inline-flex`}
              >
                <div className=" text-sm font-semibold font-open-sans leading-normal">
                  EN
                </div>
              </div>
              <div
                onClick={() => {
                  if (toggle) setToggle(false);
                }}
                className={`px-4 cursor-pointer ${
                  !toggle? "bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] text-white pt-3 pb-2.5  rounded-lg"
                    : "bg-[#e7ecf1] py-1"
                } rounded-lg flex-col justify-center items-center gap-2.5 inline-flex`}
              >
                <div className="text-sm font-semibold font-open-sans leading-normal">
                  VI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header