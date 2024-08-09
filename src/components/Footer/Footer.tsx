import { Row, Col, Container } from "react-bootstrap";
import { Select } from "antd";
import mastercard from "../../assets/imgs/mastercard.png"
import vissa from "../../assets/imgs/vissa.png";
import paypal from "../../assets/imgs/paypal.png";
import iconfb from "../../assets/icon/fill/facebook_fill.png";
import iconins from "../../assets/icon/fill/ins_fill.png";
import iconlinkedin from "../../assets/icon/fill/linkedin_fill.png";
import iconthreads from "../../assets/icon/fill/threads_fill.png";
import iconyoutube from "../../assets/icon/fill/youtube_fill.png";
import iconpinterest from "../../assets/icon/fill/pinterest_fill.png";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import './Footer.css'

export default function Footer() {
  return (
    <div className="px-[100px] py-20 bg-[#f3f3f3]" style={{width:"100%"}}>
        <section className="container mx-auto">
          <Row>
            <Col sm={4} className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="text-[#40e0d0] text-5xl font-bold font-space-grotesk leading-[56px]">
                  Apolo Laywers
                </div>
                <div className="self-stretch text-justify text-[#606670] text-base font-normal font-open-sans leading-7">
                  Cập nhật các tin tức pháp lý mới nhất, những thay đổi trong luật
                  pháp và các bài viết phân tích chuyên sâu từ đội ngũ luật sư của
                  chúng tôi. Hãy theo dõi để luôn được thông tin và chuẩn bị tốt
                  nhất cho mọi tình huống pháp lý.
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
                  Trụ sở chính
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch h-[47px]">
                    <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                      Địa chỉ:
                    </span>
                    <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                      {" "}
                      Tầng 2,108 Trần Đình Xu, Phường Nguyễn Cư Trinh, Quận 1, TP Hồ
                      Chí Minh
                    </span>
                  </div>
                  <div className="self-stretch">
                    <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                      Số điện thoại:
                    </span>
                    <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                      {" "}
                      (028) 66.701.709 - 0903.419.479
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
                  Chi nhánh 1
                </div>
                <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch">
                    <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                      Địa chỉ:
                    </span>
                    <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                      {" "}
                      Tòa nhà PaxSky, 51 Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh
                    </span>
                  </div>
                  <div className="self-stretch">
                    <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                      Số điện thoại:
                    </span>
                    <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                      {" "}
                      (028) 66.701.709 - 0903.419.479
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
                  Chi nhánh 2
                </div>
                <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch h-[47px]">
                    <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                      Địa chỉ:
                    </span>
                    <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                      {" "}
                      Tầng 09 Tower K&M, số 33 Ung Văn Khiêm, Quận Bình Thạnh, TP.
                      Hồ Chí Minh
                    </span>
                  </div>
                  <div className="self-stretch">
                    <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                      Số điện thoại:
                    </span>
                    <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                      {" "}
                      (028) 35.059.349 - 0903.600.347
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
                  Kết nối với chúng tôi{" "}
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconins} />
                    </div>
                  </div>
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconlinkedin} />
                    </div>
                  </div>
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconpinterest} />
                    </div>
                  </div>
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconthreads} />
                    </div>
                  </div>
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconyoutube} />
                    </div>
                  </div>
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconfb} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4} className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
                  Dịch vụ
                </div>
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư riêng
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư tranh tụng
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư hình sự
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư dân sự
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư nhà đất
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư lao động
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư tư vấn hợp đồng
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư hôn nhân và gia đình
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư doanh nghiệp và đầu tư
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư tư vấn về xây dựng
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư hàng hải và bảo hiểm quốc tế
                  </div>
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Luật sư cho người nước ngoài tại Việt Nam
                  </div>
                  <div className="text-[#606670] text-base font-bold font-space-grotesk leading-normal">
                    Xem thêm...
                  </div>
                </div>
              </div>
              <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
                  Tuyển dụng
                </div>
                <div className="self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                  <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    Gửi thông tin ứng tuyển tại
                  </div>
                  <div className="self-stretch">
                    <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                      Địa chỉ:
                    </span>
                    <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                      {" "}
                      contact@apolo.vn
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={4} className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
                  Đăng Ký Tư Vấn Ngay Để Nhận Giải Pháp Pháp Lý Tốt Nhất!
                </div>
                <div className="self-stretch text-[#606670] text-justify text-base font-normal font-open-sans leading-7">
                  Điền thông tin để nhận tư vấn miễn phí từ đội ngũ luật sư chuyên
                  nghiệp của chúng tôi. Chúng tôi sẽ liên hệ và hỗ trợ bạn sớm nhất
                  có thể.
                </div>
              </div>
              <div className=" flex-col justify-center items-start gap-[17px] flex w-full">
                <div className="self-stretch flex-col justify-center items-start gap-4 inline-flex w-full">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                      peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
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
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      Email
                    </label>
                  </div>
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                  />
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
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
                      {
                        value: "1",
                        label: "Not Identified",
                      },
                      {
                        value: "2",
                        label: "Closed",
                      },
                      {
                        value: "3",
                        label: "Communicated",
                      },
                      {
                        value: "4",
                        label: "Identified",
                      },
                      {
                        value: "5",
                        label: "Resolved",
                      },
                      {
                        value: "6",
                        label: "Cancelled",
                      },
                    ]}
                  />
                </div>
                <div className="w-full relative">
                  <textarea
                    id="message"
                    className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=""
                  ></textarea>
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                    Nội dung tin nhắn
                  </label>
                </div>
              </div>
              <ButtonCustom title="Gửi" from="#40e0d0" to="#48d1cc" />
              <div className="self-stretch h-[106px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
                  Chấp nhận thanh toán
                </div>
                <div className="justify-start items-center gap-4 inline-flex">
                  <img className="w-20 h-[54px]" src={mastercard} />
                  <img className="w-20 h-[54px]" src={vissa} />
                  <img className="w-20 h-[54px]" src={paypal} />
                </div>
              </div>
            </Col>

          </Row>
      </section>
    </div>
  )
}
