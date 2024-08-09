import React from "react";
import { Select } from "antd";
interface ModalProps {
  onClose?: () => void;
  isOpen?: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      style={{ background: "rgba(0,0,0,0.5)",zIndex:99999 }}
      onClick={onClose}
    >
      <div
        className="w-[492px] h-max p-6 bg-[#f3f3f3] rounded-2xl flex-col justify-start items-center gap-6 inline-flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="self-stretch h-max flex-col justify-start items-start gap-4 flex">
          <div className="flex-col justify-center items-start gap-[17px] flex w-full">
            <div className="self-stretch flex-col justify-center items-start gap-4 inline-flex w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  id="floating_outlined"
                  className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                  placeholder=" "
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                  Họ tên
                </label>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="floating_outlined"
                  className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                  placeholder=" "
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                  Email
                </label>
              </div>
            </div>
            <div className="relative w-full"><input
                type="text"
                id="floating_outlined"
                className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Số điện thoại
              </label>
            </div>
            <div className="w-full h-9">
              <Select
                showSearch
                className="bg-[#f3f3f3] h-full text-gray-900"
                style={{ width: "100%" }}
                dropdownStyle={{ background: "#f3f3f3" }}
                placeholder="Chọn dịch vụ"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  { value: "1", label: "Not Identified" },
                  { value: "2", label: "Closed" },
                  { value: "3", label: "Communicated" },
                  { value: "4", label: "Identified" },
                  { value: "5", label: "Resolved" },
                  { value: "6", label: "Cancelled" },
                ]}
              />
            </div>
            <div className="w-full relative">
              <textarea
                rows={4}
                id="message"
                className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                placeholder=""
              ></textarea>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Nội dung tin nhắn
              </label>
            </div>
            <div className="flex justify-center w-full"><div className="h-12 px-10 py-3 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-xl justify-center items-center gap-3 inline-flex">
                <div
                  className={`w-full text-white flex text-center text-base justify-center items-center font-bold font-['Space Grotesk'] leading-normal`}
                >
                  Gửi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;