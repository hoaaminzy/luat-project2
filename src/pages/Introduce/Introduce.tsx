import ProfessionalBanner from "../../components/ProfessionalBanner/ProfessionalBanner";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { Col, Row } from "react-bootstrap";
import Modal from "../../components/Model/Model";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import introduce1 from "../../assets/imgs/introduce1.png";
import introduce2 from "../../assets/imgs/introduce2.png";
import introduce3 from "../../assets/imgs/introduce3.png";
import introduceperson1 from "../../assets/imgs/introduceperson1.png";
import introduceperson2 from "../../assets/imgs/introduceperson2.png";
import introduceperson3 from "../../assets/imgs/introduceperson3.png";
import introduceperson4 from "../../assets/imgs/introduceperson4.png";
import PageMeta from "../../components/PageMeta/PageMeta";
import "./Introduce.css";
const Introduce = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const { ref: refA1, inView: inViewA1 } = useInView({ triggerOnce: true });
  const { ref: refA2, inView: inViewA2 } = useInView({ triggerOnce: true });
  const { ref: refA3, inView: inViewA3 } = useInView({ triggerOnce: true });
  const { ref: refA4, inView: inViewA4 } = useInView({ triggerOnce: true });
  const { ref: refA5, inView: inViewA5 } = useInView({ triggerOnce: true });
  const { ref: refA6, inView: inViewA6 } = useInView({ triggerOnce: true });
  const { ref: refA7, inView: inViewA7 } = useInView({ triggerOnce: true });
  const { ref: refA8, inView: inViewA8 } = useInView({ triggerOnce: true });
  // const { ref: refA9, inView: inViewA9 } = useInView({ triggerOnce: true });
  const { ref: refA10, inView: inViewA10 } = useInView({ triggerOnce: true });
  const { ref: refA11, inView: inViewA11 } = useInView({ triggerOnce: true });

  return (
    <>
      <PageMeta
        title="Giới thiệu về công ty của chúng tôi"
        description="Tìm hiểu về Công Ty Luật [Tên Công Ty], chuyên cung cấp dịch vụ luật pháp uy tín và chất lượng. Đọc về sứ mệnh, giá trị, và đội ngũ luật sư của chúng tôi."
      />
      <div
        className="w-full d-flex bg-white flex-col"
        style={{ paddingTop: "100px" }}
      >
        <div className="introContainer w-full px-[100px] py-16 flex-col justify-center items-center gap-2.5 flex">
          <div className="w-full flex-col justify-center items-center fix-gap flex">
            <div className="w-full flex-col justify-center items-center  flex introo">
              <ProfessionalBanner title="Apollo Lawyers" />
              <div
                className="w-full pb-5 flex-col justify-center items-center gap-6 flex introooo"
                style={{ paddingTop: "50px" }}
              >
                <div className="text-intro text-center text-[#002740] text-[56px] font-bold font-space-grotesk leading-[64px]">
                  Đồng Hành Pháp Lý, Bảo Vệ Quyền Lợi
                </div>
                <div className="desc-intro pb-16 w-[654px] text-center text-[#606670] text-base font-normal font-open-sans leading-7">
                  . Với tầm nhìn dài hạn và chiến lược phát triển bền vững,
                  chúng tôi không ngừng nỗ lực để trở thành đối tác pháp lý đáng
                  tin cậy, đồng hành cùng bạn trong mọi vấn đề pháp lý.
                </div>
              </div>
            </div>
            <ButtonCustom
              title="Liên hệ ngay"
              from="#40e0d0"
              to="#48d1cc"
              color="text-white"
            />
          </div>
        </div>
        <div className="dvnoibat w-full px-[100px] py-20 justify-center items-center gap-10 inline-flex">
          <Row className="">
            <Col
              sm={6}
              ref={refA1}
              className={`${inViewA1 ? "animate-slide-bottom" : ""}`}
            >
              <div className=" flex-col gap-4 flex">
                <div className="text-nbb text-[#9ea8b6] text-2xl font-bold font-space-grotesk leading-loose">
                  Những dịch vụ nổi bật
                </div>
                <div className="des-nb text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]">
                  Chất Lượng Pháp Lý <br />
                  Tinh Tế, Được Xây Dựng Từ Tâm Huyết Nghề Nghiệp
                </div>
              </div>
              <div className="flex-col gap-2 flex my-5">
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư riêng
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư tranh tụng
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư hình sự
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư dân sự
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư nhà đất
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư lao động
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư tư vấn hợp đồng
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư hôn nhân và gia đình
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư doanh nghiệp và đầu tư
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư tư vấn về xây dựng
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư hàng hải và bảo hiểm quốc tế
                </div>
                <div className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Luật sư cho người nước ngoài tại Việt Nam
                </div>
                <div className="text-[#606670] text-base font-bold font-['Space Grotesk'] leading-normal">
                  Xem thêm...
                </div>
              </div>
              <ButtonCustom
                title="Xem chi tiết"
                from="#40e0d0"
                to="#48d1cc"
                color="text-white"
              />
            </Col>
            <Col
              sm={6}
              ref={refA2}
              className={`${
                inViewA2 ? "animate-slide-right" : ""
              } d-flex justify-end img-nb-mobile`}
            >
              <img
                className="h-img-nb grow shrink basis-0 self-stretch rounded-2xl object-cover"
                src={introduce3}
              />
            </Col>
          </Row>
        </div>
        <div className="dn-us py-20 flex-col justify-center items-center gap-16 flex">
          <div
            ref={refA3}
            className={`${
              inViewA3 ? "animate-slide-top" : ""
            } text-dn-mobile text-center text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]`}
          >
            Đội ngũ của chúng tôi
          </div>
          <Row
            ref={refA4}
            className={`${
              inViewA4 ? "animate-slide-bottom" : ""
            } flex w-full justify-center items-center grid-mobile`}
            style={{ height: "400px", marginTop: "100px" }}
          >
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className="rounded-full border border-[#40e0d0]"
                src={introduceperson1}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson2}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson3}
              />
            </Col>
            <Col sm={3} className="justify-center items-center col-item flex">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson4}
              />
            </Col>
          </Row>
          <ButtonCustom
            title="Xem chi tiết"
            from="#40e0d0"
            to="#48d1cc"
            color="text-white"
          />
        </div>

        <Row className="gtkb w-full px-[100px] py-20 flex ">
          <Col
            sm={6}
            ref={refA5}
            className={`${inViewA5 ? "animate-slide-bottom" : ""}`}
          >
            <div className="flex-col justify-start items-start flex gap-6 gtkb-contaner ">
              <div className="text-gtkb text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]">
                Giá trị tạo nên <br />
                sự khác biệt
              </div>
              <div
                className="desc-gtkb self-stretch text-[#606670] text-base font-normal font-open-sans leading-7"
                style={{ height: "calc(200px - 20px)" }}
              >
                Tại Apolo Lawyers, chúng tôi không ngừng nỗ lực để tạo ra sự
                khác biệt trong từng dịch vụ pháp lý mà chúng tôi cung cấp. Các
                giá trị cốt lõi dưới đây là nền tảng giúp chúng tôi mang đến cho
                khách hàng những giải pháp pháp lý tốt nhất
              </div>
            </div>
          </Col>
          <Col
            ref={refA6}
            className={`${
              inViewA6 ? "animate-slide-top" : ""
            } flex asd justify-end `}
            sm={6}
          >
            <div className="flex flex100 ">
              <div className="sdasd">
                <div
                  className="hoes"
                  style={{
                    display: "grid",
                    gap: "15px",
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }}
                >
                  <div className="c100 px-4 pt-4 pb-16 rounded-2xl  border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                    <div className=" text-[#002740] text-[40px] font-medium font-['Space Grotesk'] leading-[48px]">
                      01
                    </div>
                    <div className=" text-[#48d1cc] text-2xl font-bold font-['Space Grotesk'] leading-loose">
                      Chất Lượng Dịch Vụ
                    </div>
                  </div>
                  <div className=" c100 px-4 pt-4 pb-16 rounded-2xl  border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                    <div className=" text-[#002740] text-[40px] font-medium font-['Space Grotesk'] leading-[48px]">
                      02
                    </div>
                    <div className=" text-[#48d1cc] text-2xl font-bold font-['Space Grotesk'] leading-loose">
                      Tâm Huyết Nghề Nghiệp
                    </div>
                  </div>
                  <div className="c100 px-4 pt-4 pb-16 rounded-2xl  border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="self-stretch text-[#002740] text-[40px] font-medium font-['Space Grotesk'] leading-[48px]">
                      03
                    </div>
                    <div className="self-stretch text-[#48d1cc] text-2xl font-bold font-['Space Grotesk'] leading-loose">
                      Đổi Mới Liên Tục
                    </div>
                  </div>
                  <div className="c100 px-4 pt-4 pb-16 rounded-2xl  border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="self-stretch text-[#002740] text-[40px] font-medium font-['Space Grotesk'] leading-[48px]">
                      04
                    </div>
                    <div className="self-stretch text-[#48d1cc] text-2xl font-bold font-['Space Grotesk'] leading-loose">
                      Đạo đức nghề nghiệp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="ttcontainer relative w-full pr-[100px] justify-start items-center inline-flex">
          <div
            ref={refA10}
            className={`${
              inViewA10 ? "animate-slide-top" : ""
            } ttnd pl-[100px] pr-[150px] py-[100px] bg-[#f4f4f4]/95 rounded-2xl flex-col justify-start items-start gap-6 inline-flex`}
            style={{ width: "60%" }}
          >
            <div className="ttdf self-stretch h-max flex-col justify-start items-start gap-4 flex">
              <div className="text-adasd text-start  text-[#9ea8b6] text-2xl font-bold font-space-grotesk leading-loose">
                Thành tựu
              </div>
              <div
                style={{ fontSize: "38px" }}
                className="self-stretch text-[#002740]  font-bold font-space-grotesk leading-[56px]"
              >
                Thành Công Được Xây Dựng Từ Chất Lượng Và Tâm Huyết
              </div>
              <div className="self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                Chúng tôi tự hào đã đạt được nhiều thành tựu nổi bật trong suốt
                quá trình hoạt động, từ việc giải quyết thành công hàng ngàn vụ
                án cho đến việc tư vấn và hỗ trợ pháp lý cho nhiều doanh nghiệp
                lớn. Những thành tựu này không chỉ khẳng định uy tín và năng lực
                của chúng tôi mà còn là động lực để chúng tôi tiếp tục nỗ lực
                hơn nữa trong tương lai.
              </div>
            </div>
          </div>
          <div
            style={{ right: "100px" }}
            ref={refA11}
            className={`${
              inViewA11 ? "animate-slide-right" : ""
            } absolute move `}
          >
            <img
              className=" object-cover w-full rounded-2xl wmove"
              src={introduce1}
              style={{ width: "630px" }}
            />
          </div>
        </div>
        <Row className="w-full px-[100px] py-20 gk ">
          <Col
            sm={6}
            ref={refA7}
            className={`${inViewA7 ? "animate-slide-left" : ""}`}
          >
            <img className=" rounded-2xl" src={introduce2} />
          </Col>
          <Col
            sm={6}
            ref={refA8}
            className={`${inViewA8 ? "animate-slide-bottom" : ""}`}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <div className="adasd flex-col justify-start items-start gap-6 flex">
                <div className="  flex-col justify-start items-start gap-4 flex">
                  <div className="text-gk text-[#002740] text-4xl font-bold font-space-grotesk ">
                    Cam Kết Của Chúng Tôi
                  </div>
                </div>
                <div className="des-gk text-black text-base font-normal font-['Inter'] leading-normal">
                  Chúng tôi cam kết cung cấp các dịch vụ pháp lý chất lượng,
                  nhanh chóng và hiệu quả. Chúng tôi luôn sẵn sàng lắng nghe và
                  giải quyết mọi vấn đề pháp lý của bạn với tinh thần trách
                  nhiệm cao nhất. Hãy để Apolo Lawyers trở thành đối tác pháp lý
                  tin cậy của bạn!
                </div>
              </div>
              <div className="flex buttnsd justify-start mt-4 items-start w-full">
                <ButtonCustom
                  title="Liên hệ ngay"
                  from="#40e0d0"
                  to="#48d1cc"
                  color="text-white"
                />
              </div>
            </div>
          </Col>
        </Row>
        <div className="w-full zxc pt-16">
          <div
            ref={refA5}
            className={` ${
              inViewA5 ? "animate-slide-bottom" : ""
            } w-full h-max baovecontainer px-[100px] flex-col justify-start items-start gap-2.5 pb-20 flex`}
          >
            <div className=" baove w-full h-max px-[200px] py-10 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-2xl shadow flex-col justify-start items-center gap-10 flex">
              <div className="asd h-48 flex-col justify-start items-center gap-6 flex">
                <div className="text-bvvvv text-center text-white text-5xl font-bold font-space-grotesk leading-[56px]">
                  Bảo vệ Quyền lợi của Bạn Ngay Hôm Nay!
                </div>
                <div className="descbv w-[654px] text-center text-white text-base font-normal font-open-sans leading-7">
                  Đừng để những vấn đề pháp lý cản trở bước tiến của bạn. Hãy để
                  Apolo Lawyers đồng hành và bảo vệ quyền lợi của bạn một cách
                  chuyên nghiệp và tận tâm.
                </div>
              </div>
              <ButtonCustom
                title="Liên hệ ngay"
                from="#fff"
                to="#fff"
                color="text-black"
              />
            </div>
          </div>
        </div>
        <div>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </div>
    </>
  );
};

export default Introduce;
