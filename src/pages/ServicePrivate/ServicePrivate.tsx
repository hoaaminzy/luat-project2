import { Col, Row } from "react-bootstrap";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import PageMeta from "../../components/PageMeta/PageMeta";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import luasurieng1 from '../../assets/luatsu/luatsurieng1.png'
import luasurieng2 from '../../assets/luatsu/luatsurieng2.png'
export default function ServicePrivate() {
  return (
    <>
      <PageMeta title="Luật sư riêng" description="Luật sư riêng là gì, tầm quan trọng của luật sư riêng cho doanh nghiệp (mục đích để title SEO này được đặt tên tuỳ ý để hiển thị trên kết quả tìm kiếm google cho nó phù hợp nhu cầu)"/>
      <Breadcrumb title1={"Dịch vụ"} title2={"Luật sư riêng"}/>
      <hr />
      <section className="pad100">
        <Row>
          <Col sm={8}>
            <div className="w-full h-[2954px] pt-10 pb-16 flex-col justify-start items-center gap-12 inline-flex">
              <div className="self-stretch h-24 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch justify-start items-start gap-6 inline-flex">
                  <div className="grow shrink basis-0 text-[#3c3c3c] text-[40px] font-bold font-['Space Grotesk'] leading-[48px]">Dịch Vụ Luật Sư Riêng: Bảo Vệ Quyền Lợi Và Hỗ Trợ Pháp Lý Tối Đa</div>
                </div>
              </div>
              <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">Trong cuộc sống hiện đại, những vấn đề pháp lý phức tạp ngày càng trở nên phổ biến và ảnh hưởng đến nhiều khía cạnh của cuộc sống cá nhân và công việc. Chính vì vậy, việc có một luật sư riêng để hỗ trợ và tư vấn pháp lý đã trở thành nhu cầu thiết yếu đối với nhiều cá nhân và gia đình. Dịch vụ luật sư riêng của Apollo Lawyers là giải pháp hoàn hảo để bảo vệ quyền lợi và hỗ trợ pháp lý tối đa cho bạn</div>
              {/* <img className="self-stretch h-[555px] rounded-2xl shadow" src={luasurieng1} /> */}
              <img src={luasurieng1} height="555px"  alt="" />
              <div className="self-stretch h-[1943px] flex-col justify-start items-center gap-8 flex">
                <div className="self-stretch h-[168px] flex-col justify-start items-center gap-4 flex">
                  <div className="self-stretch text-[#002740] text-[32px] font-bold font-['Space Grotesk'] leading-10"> Luật Sư Riêng Là Gì?</div>
                  <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">Luật sư riêng là người đại diện pháp lý cá nhân cho bạn, cung cấp các dịch vụ tư vấn, hỗ trợ và bảo vệ quyền lợi trong mọi vấn đề pháp lý mà bạn có thể gặp phải. Họ là những chuyên gia am hiểu sâu rộng về luật pháp và có khả năng đưa ra những lời khuyên chính xác, kịp thời, giúp bạn giải quyết mọi tình huống phức tạp.</div>
                </div>
                <div className="self-stretch h-[983px] flex-col justify-start items-center gap-4 flex">
                  <div className="self-stretch text-[#002740] text-[32px] font-bold font-['Space Grotesk'] leading-10">Lợi Ích Của Việc Có Luật Sư Riêng</div>
                  <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                    <div className="grow shrink basis-0"><span className="text-[#606670] text-base font-bold font-open-sans leading-7">Bảo Vệ Quyền Lợi Cá Nhân:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> Luật sư riêng sẽ đảm bảo rằng mọi quyền lợi pháp lý của bạn được bảo vệ tối đa. Họ sẽ tư vấn cho bạn về các quyền và nghĩa vụ pháp lý trong mọi tình huống, giúp bạn tránh những rủi ro không đáng có.</span></div>
                  </div>
                  <div className="w-full"><span className="text-[#606670] text-base font-bold font-open-sans leading-7">Giải Quyết Nhanh Chóng Các Vấn Đề Pháp Lý:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> Với kiến thức chuyên môn và kinh nghiệm thực tiễn, luật sư riêng có thể giúp bạn giải quyết các vấn đề pháp lý một cách nhanh chóng và hiệu quả, tiết kiệm thời gian và chi phí.</span></div>
                  <div className="w-full"><span className="text-[#606670] text-base font-bold font-open-sans leading-7">Tư Vấn Pháp Lý Liên Tục:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> Bạn sẽ nhận được sự tư vấn pháp lý liên tục và kịp thời từ luật sư riêng, giúp bạn luôn nắm bắt được những thay đổi mới nhất trong luật pháp và có những quyết định đúng đắn.</span></div>
                  <div className="w-full"><span className="text-[#606670] text-base font-bold font-open-sans leading-7">Tư Vấn Pháp Lý Liên Tục:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> Luật sư riêng cam kết bảo mật tuyệt đối mọi thông tin cá nhân và các vấn đề pháp lý của bạn, đảm bảo sự an tâm và tin tưởng.</span></div>
                  <img className="self-stretch h-[555px] rounded-2xl shadow" src={luasurieng2} />
                </div>
                <div className="self-stretch h-[356px] flex-col justify-start items-start gap-4 flex">
                  <div className="text-[#002740] text-[32px] font-bold font-['Space Grotesk'] leading-10">Dịch Vụ Luật Sư Riêng Của Apolo Lawyers</div>
                  <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">Tại Apolo Lawyers, chúng tôi tự hào cung cấp dịch vụ luật sư riêng chuyên nghiệp và tận tâm, đáp ứng mọi nhu cầu pháp lý của bạn. Đội ngũ luật sư của chúng tôi có kinh nghiệm phong phú trong nhiều lĩnh vực pháp lý, bao gồm:</div>
                  <div className="w-full"><span className="text-[#606670] text-base font-bold font-open-sans leading-7">Tư Vấn Pháp Lý Cá Nhân:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> Giải đáp các thắc mắc pháp lý, tư vấn về quyền và nghĩa vụ cá nhân trong các vấn đề hôn nhân, gia đình, tài sản, thừa kế, hợp đồng, và các tranh chấp dân sự.</span></div>
                  <div className="w-full"><span className="text-[#606670] text-base font-bold font-open-sans leading-7">Bảo Vệ Quyền Lợi Trong Kinh Doanh:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> Hỗ trợ pháp lý cho các doanh nhân và chủ doanh nghiệp trong các vấn đề liên quan đến hợp đồng, sở hữu trí tuệ, lao động, và các tranh chấp thương mại.</span></div>
                  <div className="w-full"><span className="text-[#606670] text-base font-bold font-open-sans leading-7">Đại Diện Pháp Lý Trước Tòa:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> Luật sư của chúng tôi sẽ đại diện cho bạn trong các phiên tòa, giúp bạn bảo vệ quyền lợi một cách tốt nhất.</span></div>
                </div>
                <div className="self-stretch h-[168px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-[#002740] text-[32px] font-bold font-['Space Grotesk'] leading-10">Cam Kết Của Chúng Tôi</div>
                  <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">Apolo Lawyers cam kết mang đến cho bạn dịch vụ luật sư riêng với chất lượng cao nhất. Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu, đảm bảo sự hài lòng và tin tưởng tuyệt đối. Với phương châm "Chuyên Nghiệp - Tận Tâm - Hiệu Quả," chúng tôi luôn nỗ lực hết mình để trở thành người bạn đồng hành đáng tin cậy trong mọi vấn đề pháp lý của bạ</div>
                </div>
                <div className="self-stretch h-[140px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-[#002740] text-[32px] font-bold font-['Space Grotesk'] leading-10">Kết Luận</div>
                  <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">Việc có một luật sư riêng không chỉ giúp bạn yên tâm hơn trong cuộc sống mà còn là sự đầu tư thông minh để bảo vệ quyền lợi và tài sản của mình. Hãy liên hệ với Apolo Lawyers ngay hôm nay để được tư vấn và trải nghiệm dịch vụ luật sư riêng chuyên nghiệp và uy tín nhất.</div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="h-[920px] px-6 py-10 flex-col justify-start items-center gap-8 inline-flex">
              <div className="self-stretch h-[212px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch h-[212px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch h-8 flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch text-[#002740] text-2xl font-bold font-space-grotesk leading-loose">Mục lục </div>
                  </div>
                  <div className="self-stretch h-[164px] flex-col justify-start items-start gap-4 flex ">
                    <div className="self-stretch h-5 flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch text-[#002740] text-sm font-semibold font-open-sans leading-tight"> Luật Sư Riêng Là Gì?</div>
                    </div>
                    <div className="self-stretch h-5 flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch text-[#002740] text-sm font-semibold font-open-sans leading-tight">Lợi Ích Của Việc Có Luật Sư Riêng</div>
                    </div>
                    <div className="self-stretch h-5 flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch text-[#002740] text-sm font-semibold font-open-sans leading-tight">Dịch Vụ Luật Sư Riêng Của Apollo Lawyers</div>
                    </div>
                    <div className="self-stretch text-[#002740] text-sm font-semibold font-open-sans leading-tight">Cam Kết Của Chúng Tôi</div>
                    <div className="self-stretch text-[#002740] text-sm font-semibold font-open-sans leading-tight">Kết Luận</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[596px] flex-col justify-start items-start gap-10 flex">
                <div className="self-stretch h-[508px] flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch h-[72px] flex-col justify-start items-start gap-4 flex mt-5">
                    <div className="self-stretch text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">Các dịch vụ khác tại Apolo Laywers</div>
                  </div>
                  <div className="self-stretch h-[420px] flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư tranh tụng</div>
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư hình sự</div>
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư dân sự</div>
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư nhà đất</div>
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư lao động</div>
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư tư vấn hợp đồng</div>
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư hôn nhân và gia đình</div>
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư doanh nghiệp và đầu tư</div>
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư tư vấn về xây dựng</div>
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư hàng hải và bảo hiểm quốc tế</div>
                    <div className="text-[#606670] text-base font-normal font-open-sans leading-7">Luật sư cho người nước ngoài tại Việt Nam</div>
                    <div className="text-[#606670] text-base font-bold font-space-grotesk leading-normal">Xem thêm...</div>
                  </div>
                </div>
                <div className=" rounded-xl justify-center items-center gap-3 inline-flex">
                <ButtonCustom from="#40e0d0" to="#48d1cc" title="Xem chi tiết" text="text-white" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}
