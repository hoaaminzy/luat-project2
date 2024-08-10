import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./header.css";

interface HeaderProps {
  type: boolean;
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(false);
  const [toggleLanguage, setToggleLanguage] = useState(false);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(true);
      } else {
        setSlidesToShow(false);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);
  const dataNav = [
    { slug: "trangchu", name: "Trang chủ" },
    { slug: "gioi-thieu", name: "Giới thiệu" },
    { slug: "dich-vu", name: "Dịch vụ" },
    { slug: "tuyendung", name: "Tuyển dụng" },
    { slug: "nhansu", name: "Nhân sự" },
    { slug: "baiviet", name: "Bài viết" },
  ];

  return (
    <div className="relative">
      <div className="absolute w-full" style={{ top: 0, left: 0, zIndex: 9 }}>
        <div
          className="w-full px-[100px] gap-10 flex py-4 justify-between items-center nav-mobile "
          style={{ background: "transparent" }}
        >
          <div
            style={{ flex: 1 }}
            className={`text-center text-[#40e0d0] justify-center items-center ${
              !slidesToShow ? "text-[32px] leading-10" : "text-[28px] leading-9"
            } font-bold font-space-grotesk`}
          >
            Apolo Laywers
          </div>

          <div
            className="hidden md:flex gap-6 justify-center"
            style={{ flex: 3 }}
          >
            {dataNav.map((nav, index) => (
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
            ))}
          </div>

          <div
            className="hidden md:flex items-center gap-8"
            style={{ flex: 1 }}
          >
            <div className="px-6 py-2 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-lg justify-center items-center gap-3 flex">
              <div className="text-white text-base font-semibold font-open-sans leading-loose">
                Liên hệ
              </div>
            </div>
            <div className="flex items-center icon-choose ">
              <div
                onClick={() => setToggleLanguage(true)}
                className={`px-4 cursor-pointer ${
                  toggleLanguage
                    ? "bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] pt-3 pb-2.5 rounded-lg text-white"
                    : "bg-[#e7ecf1] text-[#002740] py-1"
                } rounded-lg flex-col justify-center items-center gap-2.5 inline-flex`}
              >
                <div className="text-sm font-semibold font-open-sans leading-normal">
                  EN
                </div>
              </div>

              <div
                onClick={() => setToggleLanguage(false)}
                className={`px-4 cursor-pointer ${
                  !toggleLanguage
                    ? "bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] text-white pt-3 pb-2.5 rounded-lg"
                    : "bg-[#e7ecf1] py-1"
                } rounded-lg flex-col justify-center items-center gap-2.5 inline-flex`}
              >
                <div className="text-sm font-semibold font-open-sans leading-normal">
                  VI
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          {slidesToShow && (
            <div className="flex ">
              <div className="flex items-center icon-choose ">
                <div
                  onClick={() => setToggleLanguage(true)}
                  className={`px-4 cursor-pointer ${
                    toggleLanguage
                      ? "bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] py-2 rounded-lg text-white"
                      : "bg-[#e7ecf1] text-[#002740] py-0.5"
                  } rounded-lg flex-col justify-center items-center gap-2.5 inline-flex`}
                >
                  <div className="text-sm font-semibold font-open-sans leading-normal">
                    EN
                  </div>
                </div>

                <div
                  onClick={() => setToggleLanguage(false)}
                  className={`px-4 cursor-pointer ${
                    !toggleLanguage
                      ? "bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] text-white py-2 rounded-lg"
                      : "bg-[#e7ecf1] py-0.5"
                  } rounded-lg flex-col justify-center items-center gap-2.5 inline-flex`}
                >
                  <div className="text-sm font-semibold font-open-sans leading-normal">
                    VI
                  </div>
                </div>
              </div>
              <div className="ml-3 md:hidden flex items-center">
                <button
                  onClick={() => setToggleMenu(!toggleMenu)}
                  className="text-3xl text-[#40e0d0]"
                >
                  &#9776;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{ zIndex: 999999999 }}
        className={`fixed inset-0 z-20 bg-gradient-to-t from-white via-[#00a99d] to-[#00a99d] transform ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-white text-[32px] font-bold">Apolo Laywers</div>

          <button
            onClick={() => setToggleMenu(false)}
            className="text-white text-2xl"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-6 mt-8">
          {dataNav.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.slug}
              className="nav-item-mobile text-lg font-semibold text-white"
              onClick={() => setToggleMenu(false)}
            >
              {nav.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-col items-center mt-10">
          <button className="px-6 py-2 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-lg text-white font-semibold">
            Liên hệ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
