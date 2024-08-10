// import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css'; // Tạo file CSS riêng biệt để quản lý các kiểu
export default function Breadcrumb({ title1, title2 }) {
  return (
    <div className='mt-[100px] h-6 justify-start items-center gap-3 inline-flex pad100' >
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb flex align-items-center">
          <li className="breadcrumb-item text-sm font-semibold font-open-sans leading-tight">
            <Link to="/" className='text-[#7e899c] text-decoration-none'>{title1}</Link>
          </li>
          <li className="breadcrumb-item active  text-sm font-semibold font-open-sans leading-tight text-[#1cb0ad]" aria-current="page">
            {title2}
          </li>
        </ol>
      </nav>
    </div>
  );
}
