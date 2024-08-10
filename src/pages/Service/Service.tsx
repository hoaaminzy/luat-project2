import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import PageMeta from "../../components/PageMeta/PageMeta";
import ProfessionalBanner from "../../components/ProfessionalBanner/ProfessionalBanner";
import { useInView } from "react-intersection-observer";
import customer1 from "../../assets/imgs/customer1.png";
import { Col, Row } from "react-bootstrap";
import rieng from "../../assets/luatsu/rieng.png";
import tranhtung from "../../assets/luatsu/tranhtung.png";
import hinhsu from "../../assets/luatsu/hinhsu.png";
import dansu from "../../assets/luatsu/dansu.png";
import nhadat from "../../assets/luatsu/nhadat.png";
import laodong from "../../assets/luatsu/laodong.png";
import tuvanhopdong from "../../assets/luatsu/tuvanhopdong.png";
import honnhanvagiadinh from "../../assets/luatsu/honnhanvagiadinh.png";
import doanhnghiepvadautu from "../../assets/luatsu/doanhnghiepvadautu.png";
import hanghaivabaohiemquocte from "../../assets/luatsu/hanghaivabaohiemquocte.png";
import tuvanvaxaydung from "../../assets/luatsu/tuvanvaxaydung.png";
import nguoinuocngoaitaivietnam from "../../assets/luatsu/nguoinuocngoaitaivietnam.png";
import CardService from "../../components/CardSevice/CardService";
import "./Service.css";
const dataLuatSu = [
  {
    image: rieng,
    heading: "Luật sư riêng",
    description:
      "Bạn sẽ có một luật sư đại diện luôn sẵn sàng giải quyết mọi vấn đề pháp lý một cách nhanh chóng và hiệu quả.",
  },
  {
    image: tranhtung,
    heading: "Luật sư tranh tụng",
    description:
      "Bảo vệ quyền lợi của bạn trong các vụ kiện và tranh chấp pháp lý.",
  },
  {
    image: hinhsu,
    heading: "Luật sư hình sự",
    description:
      "Bảo vệ pháp lý chuyên nghiệp và tận tâm trong các vụ án hình sự.",
  },
  {
    image: dansu,
    heading: "Luật sư dân sự",
    description:
      "Hỗ trợ pháp lý chuyên nghiệp trong các vụ tranh chấp và vấn đề dân sự.",
  },
  {
    image: nhadat,
    heading: "Luật sư nhà đất",
    description:
      "Đảm bảo quyền lợi và tài sản của bạn với sự hỗ trợ pháp lý chuyên nghiệp",
  },
  {
    image: laodong,
    heading: "Luật sư lao động",
    description:
      "Bảo vệ quyền lợi lao động của bạn với sự tư vấn chuyên sâu và tận tâm",
  },

  {
    image: tuvanhopdong,
    heading: "Luật sư tư vấn hợp đồng",
    description: "Đảm bảo mọi giao dịch của bạn đều an toàn và minh bạch",
  },
  {
    image: honnhanvagiadinh,
    heading: "Luật sư hôn nhân và gia đình",
    description: "Bảo vệ hạnh phúc gia đình bạn với sự hỗ trợ pháp lý tận tâm",
  },
  {
    image: doanhnghiepvadautu,
    heading: "Luật sư doanh nghiệp và đầu tư",
    description:
      "Đảm bảo sự phát triển bền vững và an toàn cho doanh nghiệp bạn",
  },
  {
    image: tuvanvaxaydung,
    heading: "Luật sư tư vấn về xây dựng",
    description:
      "Xây dựng nền tảng vững chắc cho dự án của bạn với sự tư vấn pháp lý chuyên nghiệp",
  },
  {
    image: hanghaivabaohiemquocte,
    heading: "Luật sư hàng hải và bảo hiểm và quốc tế",
    description:
      "Đảm bảo an toàn và quyền lợi cho hoạt động hàng hải và bảo hiểm của bạn",
  },
  {
    image: nguoinuocngoaitaivietnam,
    heading: "Luật sư cho người nước ngoài tại Việt Nam",
    description:
      "Hỗ trợ pháp lý toàn diện và chuyên nghiệp cho người nước ngoài tại Việt Nam",
  },
];
export default function Service() {
  const { ref: refA1, inView: inViewA1 } = useInView({ triggerOnce: true });
  const { ref: refA2, inView: inViewA2 } = useInView({ triggerOnce: true });
  const { ref: refA5, inView: inViewA5 } = useInView({ triggerOnce: true });
  const { ref: refA6, inView: inViewA6 } = useInView({ triggerOnce: true });

  return (
    <>
      <PageMeta
        title="Dịch vụ về công ty của chúng tôi"
        description="Tìm hiểu về Công Ty Luật, chuyên cung cấp dịch vụ luật pháp uy tín và chất lượng. Đọc về sứ mệnh, giá trị, và đội ngũ luật sư của chúng tôi."
      />
      <div
        className="w-full d-flex bg-white flex-col gttn"
        style={{ paddingTop: "100px" }}
      >
        <div className="introContainer w-full px-[100px] py-16 flex-col justify-center items-center gap-2.5 flex">
          <div className="w-full flex-col justify-center items-center gap-12 fix-gap flex">
            <div className="w-full flex-col justify-center items-center gap-2 flex introo">
              <div className="text-intro text-center text-[#002740] text-[56px] flex align-items-center justify-center font-bold font-space-grotesk leading-[64px]">
                <div className="me-2">Dịch vụ pháp lý</div>{" "}
                <ProfessionalBanner title="chuyên nghiệp" />
              </div>
              <div className="asdmnd w-full pb-8 flex-col justify-center items-center gap-6 flex introooo">
                <div className="text-intro text-center text-[#002740] text-[56px] font-bold font-space-grotesk leading-[64px]">
                  Đảm bảo quyền lợi của bạn
                </div>
                <div className="desc-intro  w-[654px] text-center text-[#606670] text-base font-normal font-open-sans leading-7">
                  Một loạt các dịch vụ pháp lý đa dạng và toàn diện nhằm đáp ứng
                  mọi nhu cầu của khách hàng. Đội ngũ luật sư chuyên nghiệp và
                  giàu kinh nghiệm của chúng tôi luôn sẵn sàng hỗ trợ bạn với sự
                  tận tâm và cam kết mang lại hiệu quả cao nhất.
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
        <Row className="gtkb w-full px-[100px] py-20">
          <div
            className="amndk"
           style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
          >
            {dataLuatSu?.map((e, index) => (
              <div
                key={index}
                className="flex align-items-center justify-center w-full"
              >
                <CardService index={index} item={e} />
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <ButtonCustom
              title="Xem thêm"
              from="#40e0d0"
              to="#48d1cc"
              color="text-white"
            />
          </div>
        </Row>
        <div
          className="pad100 flex talkabout"
          style={{
            paddingTop: "160px",
            height: "max-content",
          }}
        >
          <div
            ref={refA1}
            style={{ width: "50%" }}
            className={` ${
              inViewA1 ? "animate-slide-left" : ""
            } w-full talk flex flex-col justify-end`}
          >
            <div className="text-talk text-[#002740] pb-16 text-5xl font-bold font-space-grotesk">
              Khách hàng nói gì về Apolo Laywers
            </div>

            <div className="pls h-max w-full px-16 py-10 bg-[#f4f4f4] rounded-tl-2xl rounded-bl-2xl flex-col justify-end items-start gap-10 flex">
              <div className=" text-[#002740] text-base font-normal font-open-sans leading-normal">
                Apolo Lawyers đã giúp tôi vượt qua một vụ tranh chấp pháp lý
                phức tạp liên quan đến doanh nghiệp của mình. Sự chuyên nghiệp
                và tận tâm của họ đã tạo nên sự khác biệt. Tôi đặc biệt ấn tượng
                với khả năng lắng nghe và tư vấn của đội ngũ luật sư. Họ luôn
                sẵn sàng hỗ trợ mọi lúc cần thiết, mang đến cho tôi sự an tâm
                tuyệt đối khi có họ bên cạnh.
              </div>
              <div className="justify-start items-center gap-4 inline-flex">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={customer1}
                />
                <div className="text-[#002740] text-base font-semibold font-open-sans leading-loose">
                  Chị Linh - doanh nhân
                </div>
              </div>
            </div>
          </div>
          <div
            ref={refA2}
            style={{ width: "50%" }}
            className={`  ${
              inViewA2 ? "animate-slide-right" : ""
            } rounded-tl-2xl rounded-tr-2xl rounded-br-2xl img-talk`}
          >
            <img src={customer1} width="100%" />
          </div>
        </div>
        <Row className="gtkb w-full px-[100px] py-20 flex">
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
            className={`${inViewA6 ? "animate-slide-top" : ""} flex asd `}
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
                  <div className="c100 px-4 pt-4 pb-16 rounded-2xl border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                    <div className=" text-[#002740] text-[40px] font-medium font-['Space Grotesk'] leading-[48px]">
                      01
                    </div>
                    <div className=" text-[#48d1cc] text-2xl font-bold font-['Space Grotesk'] leading-loose">
                      Chất Lượng Dịch Vụ
                    </div>
                  </div>
                  <div className=" c100  px-4 pt-4 pb-16 rounded-2xl  border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
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
      </div>
    </>
  );
}
