import { serviceAPI } from "@/services/serviceAPI";
import { toastError, toastSuccess } from "@/utils/toast";
import { useGlobalContext } from "Context/GlobalProvider";
import { useCallback, useState } from "react";
import { FaHome } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { IoIosMail } from "react-icons/io";

const rgP = /^\d{10}$/;
const rgE = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Consultancy = () => {
  const { globalData } = useGlobalContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitContact = () => {
    if (email && !rgE.test(email)) {
      toastError("Email không hợp lệ !");
      return;
    }
    if (phoneNumber && !rgP.test(phoneNumber)) {
      toastError("Số điện thoại không hợp lệ !");
      return;
    }
    if (!name || !title || !content) {
      toastError("Nội dung không hợp lệ !");
      return;
    }
    serviceAPI
      .createContact({
        name,
        email,
        phoneNumber,
        title,
        content,
      })
      .then((res) => {
        if (res?.data) {
          resetForm();
          toastSuccess("Gửi thông tin thành công.");
          return;
        }
        resetForm();
        toastError("Đã có lỗi xảy ra vui lòng thử lại sau !");
      });
  };

  const resetForm = useCallback(() => {
    setPhoneNumber("");
    setName("");
    setEmail("");
    setTitle("");
    setContent("");
  }, []);

  return (
    <div className="bg-colorcs-fff">
      <section className="container relative mx-auto mb-4 text-justify px-3">
        <header className="mt-6">
          <h2 className="relative  pt-3 text-[26px] font-medium leading-8 text-colorcs-E0C">
            Liên hệ
          </h2>
        </header>
        <div className="flex flex-wrap pt-3">
          <article className="lg:w-2/5 py-3 lg:pr-3">
            <div className=" h-full bg-colorcs-F9F md:p-5 sx:p-3 shadow-3xl">
              <header className="mb-2">
                <h3 className="text-[16px] font-bold uppercase leading-[24px] text-colorcs-f11">
                  {globalData?.data?.attributes?.nameOfCompany}
                </h3>
              </header>
              <div className="relative flex py-[6px] leading-5">
                <FaHome className="absolute top-[9px]  text-sm text-colorcs-C7A" />

                <p className=" pl-6 text-[14px] leading-[21px] text-colorcs-f11">
                  Địa chỉ: {globalData?.data?.attributes?.address}
                </p>
              </div>
              <div className="relative flex py-[6px] leading-5">
                <FaHome className="absolute top-[9px]  text-sm text-colorcs-C7A" />

                <p className=" pl-6 text-[14px] leading-[21px] text-colorcs-f11">
                  VPGD: {globalData?.data?.attributes?.office}
                </p>
              </div>
              <div className="relative flex py-[6px] leading-5">
                <ImPhone className="absolute top-[9px] text-colorcs-C7A text-sm" />

                <p className=" pl-6 text-[14px] leading-[21px] text-colorcs-f11">
                  Điện thoại: {globalData?.data?.attributes?.phoneNumber},
                  Hotline: {globalData?.data?.attributes?.hotline}
                </p>
              </div>
              <div className="relative flex py-[6px] leading-5">
                <IoIosMail className="absolute top-[9px] text-colorcs-C7A text-sm" />

                <p className=" pl-6 text-[14px] leading-[21px] text-colorcs-f11">
                  Email: {globalData?.data?.attributes?.email}
                </p>
              </div>
            </div>
          </article>
          <article className="lg:w-3/5 py-3 lg:pl-3">
            <div className=" h-full bg-colorcs-F9F md:p-5 sx:p-3 shadow-3xl">
              <header className="mb-3">
                <h3 className="pb-3 text-[22px] font-bold leading-[24px] text-colorcs-E0C">
                  Liên hệ tư vấn & báo giá
                </h3>
                <p className="text-[16px] leading-[24px] text-colorcs-f11">
                  Nếu bạn có bất kì thắc mắc nào cần được giải đáp, hãy gửi câu
                  hỏi tới chúng tôi, chúng tôi sẽ liên lạc lại sớm nhất có thể.{" "}
                </p>
              </header>
              <form
                className="relative flex-col pb-3 leading-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitContact();
                }}
              >
                <div className="flex flex-wrap">
                  <div className="mb-5 md:w-1/2 sx:w-full pr-1">
                    <p className="text-[13px] font-bold text-colorcs-f11">
                      Tên của bạn *
                    </p>
                    <input
                      className=" w-full border-[1px] border-colorcs-E5E bg-colorcs-fff py-[6px] px-3 text-[13px] leading-8  focus:border-colorcs-E5E focus:outline-none "
                      type="text"
                      placeholder="Nhập tên của bạn"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-5 md:w-1/2 sx:w-full md:pl-1">
                    <p className="text-[13px] font-bold text-colorcs-f11">
                      Email
                    </p>
                    <input
                      className=" w-full border-[1px] border-colorcs-E5E bg-colorcs-fff py-[6px] px-3 text-[13px] leading-8  focus:border-colorcs-E5E focus:outline-none "
                      type="text"
                      name="search"
                      placeholder="Nhập địa chỉ email của bạn"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-5 md:w-1/2 sx:w-full md:pr-1">
                    <p className="text-[13px] font-bold text-colorcs-f11">
                      Số điện thoại
                    </p>
                    <input
                      className="w-full border-[1px] border-colorcs-E5E bg-colorcs-fff py-[6px] px-3 text-[13px] leading-8  focus:border-colorcs-E5E focus:outline-none "
                      type="text"
                      placeholder="Nhập số điện thoại của bạn"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-5 md:w-1/2 sx:w-full md:pl-1">
                    <p className="text-[13px] font-bold text-colorcs-f11">
                      Tiêu đề *
                    </p>
                    <input
                      className="w-full border-[1px] border-colorcs-E5E bg-colorcs-fff py-[6px] px-3 text-[13px] leading-8  focus:border-colorcs-E5E focus:outline-none "
                      type="text"
                      placeholder="Nhập tiêu đề tin nhắn"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-5 w-full max-h-40">
                    <p className="text-[13px] font-bold text-colorcs-f11">
                      Nội dung thông điệp *
                    </p>
                    <textarea
                      className="w-full border-[1px] line-clamp-4 resize-none border-colorcs-E5E bg-colorcs-fff py-[6px] px-3 text-[13px] leading-8 text-colorcs-f77  focus:border-colorcs-E5E focus:outline-none "
                      placeholder="Nhập thông tin bạn cần giải đáp"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                </div>
                <button className="bg-colorcs-E0C px-7 py-3 text-lg leading-5 text-colorcs-fff duration-200 hover:bg-colorcs-E9A">
                  Gửi thông điệp
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Consultancy;
