import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

export default function Notification() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{zIndex:"9999999"}}>
      <div className="h-[304px] px-6 pt-8 pb-12 bg-[#f3f3f3] rounded-2xl flex-col justify-start items-center gap-4 inline-flex">
        <div className="flex flex-col justify-start items-center gap-6">
          <div className="flex justify-center items-center text-bg-chudao">
            <FaRegCheckCircle style={{ width: '120px', height: '120px' }} />
          </div>
          <div className="self-stretch text-center text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">Cảm ơn bạn đã gửi thông tin. <br/>Chúng tôi sẽ liên hệ lại.</div>
        </div>
      </div>
    </div>
  );
}
