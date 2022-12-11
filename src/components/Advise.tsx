import { serviceAPI } from "@/services/serviceAPI";
import { toastError, toastSuccess } from "@/utils/toast";
import { useGlobalContext } from "Context/GlobalProvider";
import { useEffect, useState } from "react";
const rg = /^\d{10}$/;

const Advise = () => {
  const { globalData } = useGlobalContext();

  const [phone, setPhone] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (!phone) {
      setErr(false);
      return;
    }
    const rs = rg.test(phone);
    if (!rs) {
      setErr(true);
      return;
    }
    setErr(false);
  }, [phone]);

  const hanldeRegister = () => {
    serviceAPI.createRegister(phone).then((res) => {
      if (res?.data) {
        setPhone("");
        toastSuccess("Bạn đã đăng ký thành công");
      }
      if (res?.error?.message === "This attribute must be unique") {
        setPhone("");
        toastError("Số điện thoại đã được sử dụng !");
        return;
      }
      setPhone("");
      toastError("Đã có lỗi xảy ra vui lòng thử lại sau !");
    });
  };

  return (
    <div className="w-full bg-bgpro bg-auto bg-fixed">
      <section className="container relative mx-auto grid md:grid-cols-2 px-3 md:py-[30px] sx:py-5">
        <article className=" bg-colorcs-bg8">
          <div className="md:p-10 sx:p-5">
            <header>
              <h2 className="text-3xl font-medium leading-9">
                Đăng kí tư vấn sản phẩm dịch vụ
              </h2>
              <p className="text-[17px] text-colorcs-f66 py-3">
                Nhập số điện thoại của ban, chúng tôi sẽ gọi lại...!
              </p>
            </header>
            <footer>
              <span className="block text-[13px] font-bold text-colorcs-f11">
                Số điện thoại *
              </span>
              <input
                className="mt-1 mb-2 w-full border-[1px] border-colorcs-f11 px-[15px] text-[13px] leading-10 text-colorcs-f77"
                placeholder="Nhập số điện thoại của bạn"
                type="text"
                name="submitted[so_dien_thoai]"
                value={phone}
                onChange={(e) => setPhone(e.target.value + "")}
              />
              <span
                className={`block text-[12px] text-red-500 duration-300 ${
                  err ? `visible opacity-100` : `invisible opacity-0`
                }`}
              >
                Số điện thoại không hợp lệ
              </span>
              <button
                className="rounded-full cursor-pointer bg-colorcs-E0C px-6 text-xs font-bold leading-9 text-colorcs-fff duration-200 hover:bg-colorcs-E9A mt-1"
                disabled={err || !phone}
                onClick={hanldeRegister}
              >
                ĐĂNG KÝ
              </button>
            </footer>
          </div>
        </article>
        <article className=" bg-colorcs-fff">
          <div className="md:p-10 sx:p-5">
            <header className="mb-5">
              <h2 className="text-3xl font-medium leading-[54px]">
                Hotline hỗ trợ
              </h2>
              <p className="text-[17px] text-colorcs-f66">
                Gọi để được tư vấn về sản phẩm, dịch vụ:
              </p>
            </header>
            <span
              title="title"
              className="inline-block lg:text-3xl sx:text-2xl text-blue-800"
            >
              {globalData?.data?.attributes?.hotline}
              <span className="text-[15px] text-colorcs-f66">
                {" "}
                (Hỗ trợ 24/7)
              </span>
            </span>
            <div className="my-1 h-[1px] w-full bg-colorcs-BEB"></div>
            <span
              title="gmail"
              className="inline-block lg:text-3xl sx:text-2xl text-colorcs-E0C"
            >
              {globalData?.data?.attributes?.email}
            </span>
          </div>
        </article>
      </section>
    </div>
  );
};
export default Advise;
