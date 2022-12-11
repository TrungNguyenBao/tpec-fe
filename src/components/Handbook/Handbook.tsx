import Link from 'next/link';
import { useRouter } from 'next/router';
import { ImArrowRight } from 'react-icons/im';

const Handbook = () => {
  const router = useRouter();

  return (
    <div className="bg-colorcs-fff">
      <section className="container relative mx-auto mb-4 px-3 text-justify">
        <header className="mt-8">
          <h2 className="relative  py-3 text-[26px] font-medium leading-8 text-colorcs-A94">
            Cẩm nang
          </h2>
        </header>
        <div className="py-2">
          <article className="group mb-5 flex flex-wrap border-[1px] border-colorcs-D6D">
            <figure className="sx:w-full lg:w-1/3">
              <a href="#" className="h-[230px] w-[380px]">
                <img
                  src="/images/thang-may-gia-dinh-350kg-thiet-ke-nho-gon.jpg"
                  alt=""
                  className="sx:m-auto lg:m-0"
                />
              </a>
            </figure>
            <div className="px-7 py-5 sx:w-full lg:w-2/3">
              <header>
                <h3 className="mb-[15px] text-lg font-bold text-colorcs-f00 duration-300 group-hover:text-colorcs-AE3">
                  <Link href="/handBdetail">
                    <a
                      className={`${
                        router.pathname === '/handBdetail' ? 'active' : ''
                      }`}
                    >
                      Thang máy gia đình 350kg, liệu có phù hợp cho ngôi nhà
                      bạn?
                    </a>
                  </Link>
                </h3>
                <span className="rounded bg-colorcs-EBE py-2 px-3 text-[13px] leading-[30px] text-[#666]">
                  Ngày 14/05/2021
                </span>
                <p className="mt-[15px] text-[17px] leading-5 text-colorcs-f33">
                  Nhắc đến thang máy là chúng ta đều nghĩ thang máy là một thiết
                  bị vận chuyển xuất hiện ở các tòa nhà, bệnh viện, chung cư với
                  tần suất lớn, ít ai nghĩ đến thang máy hoàn toàn có thể lắp
                  đặt và sử dụng ngay trong căn nhà của mình.{' '}
                </p>
              </header>
              <a
                href="#"
                className="mt-[41px] flex items-center text-[17px] font-medium leading-7 text-colorcs-f00 duration-300 hover:text-colorcs-E9A"
              >
                Xem chi tiết
                <ImArrowRight className="ml-[10px] text-xs text-colorcs-ff3 duration-300" />
              </a>
            </div>
          </article>
          <article className="group mb-5 flex flex-wrap border-[1px] border-colorcs-D6D">
            <figure className="sx:w-full lg:w-1/3">
              <a href="#" className="h-[230px] w-[380px]">
                <img
                  src="/images/thang-may-gia-dinh-350kg-thiet-ke-nho-gon.jpg"
                  alt=""
                  className="sx:m-auto lg:m-0"
                />
              </a>
            </figure>
            <div className="px-7 py-5 sx:w-full lg:w-2/3">
              <header>
                <h3 className="mb-[15px] text-lg font-bold text-colorcs-f00 duration-300 group-hover:text-colorcs-AE3">
                  <a href="#">
                    Lưu ý sử dụng thang máy với gia đình có trẻ nhỏ
                  </a>
                </h3>
                <span className="rounded bg-colorcs-EBE py-2 px-3 text-[13px] leading-[30px] text-[#666]">
                  Ngày 14/05/2021
                </span>
                <p className="mt-[15px] text-[17px] leading-5 text-colorcs-f33">
                  Thang máy gia đình là thiết bị vận tải thiết yếu, chủ yếu chở
                  người. Vì vậy, cần lưu ý đảm bảo độ an toàn cao, tuân thủ
                  nghiêm ngặt về các tiêu chuẩn an toàn được đề ra.
                </p>
              </header>
              <a
                href="#"
                className="mt-[41px] flex items-center text-[17px] font-medium leading-7 text-colorcs-f00 duration-300 hover:text-colorcs-E9A"
              >
                Xem chi tiết
                <ImArrowRight className="ml-[10px] text-xs text-colorcs-ff3 duration-300" />
              </a>
            </div>
          </article>
          <article className="group mb-5 flex flex-wrap border-[1px] border-colorcs-D6D">
            <figure className="sx:w-full lg:w-1/3">
              <a href="#" className="h-[230px] w-[380px]">
                <img
                  src="/images/cau-tao-cac-bo-phan-thang-may-gia-dinh.jpg"
                  alt=""
                  className="sx:m-auto lg:m-0"
                />
              </a>
            </figure>
            <div className="px-7 py-5 sx:w-full lg:w-2/3">
              <header>
                <h3 className="mb-[15px] text-lg font-bold text-colorcs-f00 duration-300 group-hover:text-colorcs-AE3">
                  <a href="#">
                    Cấu tạo thang máy gia đình gồm những bộ phận nào?
                  </a>
                </h3>
                <span className="rounded bg-colorcs-EBE py-2 px-3 text-[13px] leading-[30px] text-[#666]">
                  Ngày 14/05/2021
                </span>
                <p className="mt-[15px] text-[17px] leading-5 text-colorcs-f33">
                  Với hệ thống thang máy cho gia đình hoặc những nơi công cộng,
                  chúng ta thấy có rất nhiều thiết bị như tủ điều khiển, động cơ
                  và nhiều thiết bị khác. Nhưng cơ bản một chiếc thang máy gia
                  đình hoàn chỉnh sẽ có 2 phần chính là phần hệ thống điện điều
                  khiển và phần cơ khí.
                </p>
              </header>
              <a
                href="#"
                className="mt-[41px] flex items-center text-[17px] font-medium leading-7 text-colorcs-f00 duration-300 hover:text-colorcs-E9A"
              >
                Xem chi tiết
                <ImArrowRight className="ml-[10px] text-xs text-colorcs-ff3 duration-300" />
              </a>
            </div>
          </article>
          <article className="group mb-5 flex flex-wrap border-[1px] border-colorcs-D6D">
            <figure className="sx:w-full lg:w-1/3">
              <a href="#" className="h-[230px] w-[380px]">
                <img
                  src="/images/co-nen-lap-dat-thang-may-gia-dinh.png"
                  alt=""
                  className="sx:m-auto lg:m-0"
                />
              </a>
            </figure>
            <div className="px-7 py-5 sx:w-full lg:w-2/3">
              <header>
                <h3 className="mb-[15px] text-lg font-bold text-colorcs-f00 duration-300 group-hover:text-colorcs-AE3">
                  <a href="#">Những tiện ích mà thang máy gia đình mang lại</a>
                </h3>
                <span className="rounded bg-colorcs-EBE py-2 px-3 text-[13px] leading-[30px] text-[#666]">
                  Ngày 14/05/2021
                </span>
                <p className="mt-[15px] text-[17px] leading-5 text-colorcs-f33">
                  Thang máy cho gia đình là một trong những thiết bị phục vụ cho
                  cuộc sống con người trở nên tiện nghi và hiện đại hơn.
                </p>
              </header>
              <a
                href="#"
                className="mt-[41px] flex items-center text-[17px] font-medium leading-7 text-colorcs-f00 duration-300 hover:text-colorcs-E9A"
              >
                Xem chi tiết
                <ImArrowRight className="ml-[10px] text-xs text-colorcs-ff3 duration-300" />
              </a>
            </div>
          </article>
          <article className="group mb-5 flex flex-wrap border-[1px] border-colorcs-D6D">
            <figure className="sx:w-full lg:w-1/3">
              <a href="#" className="h-[230px] w-[380px]">
                <img
                  src="/images/thang-may.jpg"
                  alt=""
                  className="sx:m-auto lg:m-0"
                />
              </a>
            </figure>
            <div className="px-7 py-5 sx:w-full lg:w-2/3">
              <header>
                <h3 className="mb-[15px] text-lg font-bold text-colorcs-f00 duration-300 group-hover:text-colorcs-AE3">
                  <a href="#">
                    Các yếu tố ảnh hưởng tới giá thang máy gia đình
                  </a>
                </h3>
                <span className="rounded bg-colorcs-EBE py-2 px-3 text-[13px] leading-[30px] text-[#666]">
                  Ngày 14/05/2021
                </span>
                <p className="mt-[15px] text-[17px] leading-5 text-colorcs-f33">
                  Thang máy gia đình là một trong những thiết bị tiêu tốn không
                  nhỏ trong kinh phí xây dựng ngôi nhà. Vì vậy, khi xây dựng,
                  chi phí cho chiếc thang máy luôn được cân nhắc ở mức tối ưu
                  nhất. Giá thang máy gia đình phụ thuộc vào nhiều yếu tố.
                </p>
              </header>
              <a
                href="#"
                className="mt-[41px] flex items-center text-[17px] font-medium leading-7 text-colorcs-f00 duration-300 hover:text-colorcs-E9A"
              >
                Xem chi tiết
                <ImArrowRight className="ml-[10px] text-xs text-colorcs-ff3 duration-300" />
              </a>
            </div>
          </article>
          <article className="group mb-5 flex flex-wrap border-[1px] border-colorcs-D6D">
            <figure className="sx:w-full lg:w-1/3">
              <a href="#" className="h-[230px] w-[380px]">
                <img
                  src="/images/thang-may.jpg"
                  alt=""
                  className="sx:m-auto lg:m-0"
                />
              </a>
            </figure>
            <div className="px-7 py-5 sx:w-full lg:w-2/3">
              <header>
                <h3 className="mb-[15px] text-lg font-bold text-colorcs-f00 duration-300 group-hover:text-colorcs-AE3">
                  <a href="#">
                    Các yếu tố ảnh hưởng tới giá thang máy gia đình
                  </a>
                </h3>
                <span className="rounded bg-colorcs-EBE py-2 px-3 text-[13px] leading-[30px] text-[#666]">
                  Ngày 14/05/2021
                </span>
                <p className="mt-[15px] text-[17px] leading-5 text-colorcs-f33">
                  Thang máy gia đình là một trong những thiết bị tiêu tốn không
                  nhỏ trong kinh phí xây dựng ngôi nhà. Vì vậy, khi xây dựng,
                  chi phí cho chiếc thang máy luôn được cân nhắc ở mức tối ưu
                  nhất. Giá thang máy gia đình phụ thuộc vào nhiều yếu tố.
                </p>
              </header>
              <a
                href="#"
                className="mt-[41px] flex items-center text-[17px] font-medium leading-7 text-colorcs-f00 duration-300 hover:text-colorcs-E9A"
              >
                Xem chi tiết
                <ImArrowRight className="ml-[10px] text-xs text-colorcs-ff3 duration-300" />
              </a>
            </div>
          </article>
          <article className="group mb-5 flex flex-wrap border-[1px] border-colorcs-D6D">
            <figure className="sx:w-full lg:w-1/3">
              <a href="#" className="h-[230px] w-[380px]">
                <img
                  src="/images/thang-may.jpg"
                  alt=""
                  className="sx:m-auto lg:m-0"
                />
              </a>
            </figure>
            <div className="px-7 py-5 sx:w-full lg:w-2/3">
              <header>
                <h3 className="mb-[15px] text-lg font-bold text-colorcs-f00 duration-300 group-hover:text-colorcs-AE3">
                  <a href="#">
                    Các yếu tố ảnh hưởng tới giá thang máy gia đình
                  </a>
                </h3>
                <span className="rounded bg-colorcs-EBE py-2 px-3 text-[13px] leading-[30px] text-[#666]">
                  Ngày 14/05/2021
                </span>
                <p className="mt-[15px] text-[17px] leading-5 text-colorcs-f33">
                  Thang máy gia đình là một trong những thiết bị tiêu tốn không
                  nhỏ trong kinh phí xây dựng ngôi nhà. Vì vậy, khi xây dựng,
                  chi phí cho chiếc thang máy luôn được cân nhắc ở mức tối ưu
                  nhất. Giá thang máy gia đình phụ thuộc vào nhiều yếu tố.
                </p>
              </header>
              <a
                href="#"
                className="mt-[41px] flex items-center text-[17px] font-medium leading-7 text-colorcs-f00 duration-300 hover:text-colorcs-E9A"
              >
                Xem chi tiết
                <ImArrowRight className="ml-[10px] text-xs text-colorcs-ff3 duration-300" />
              </a>
            </div>
          </article>
          <article className="group mb-5 flex flex-wrap border-[1px] border-colorcs-D6D">
            <figure className="sx:w-full lg:w-1/3">
              <a href="#" className="h-[230px] w-[380px]">
                <img
                  src="/images/thang-may.jpg"
                  alt=""
                  className="sx:m-auto lg:m-0"
                />
              </a>
            </figure>
            <div className="px-7 py-5 sx:w-full lg:w-2/3">
              <header>
                <h3 className="mb-[15px] text-lg font-bold text-colorcs-f00 duration-300 group-hover:text-colorcs-AE3">
                  <a href="#">
                    Các yếu tố ảnh hưởng tới giá thang máy gia đình
                  </a>
                </h3>
                <span className="rounded bg-colorcs-EBE py-2 px-3 text-[13px] leading-[30px] text-[#666]">
                  Ngày 14/05/2021
                </span>
                <p className="mt-[15px] text-[17px] leading-5 text-colorcs-f33">
                  Thang máy gia đình là một trong những thiết bị tiêu tốn không
                  nhỏ trong kinh phí xây dựng ngôi nhà. Vì vậy, khi xây dựng,
                  chi phí cho chiếc thang máy luôn được cân nhắc ở mức tối ưu
                  nhất. Giá thang máy gia đình phụ thuộc vào nhiều yếu tố.
                </p>
              </header>
              <a
                href="#"
                className="mt-[41px] flex items-center text-[17px] font-medium leading-7 text-colorcs-f00 duration-300 hover:text-colorcs-E9A"
              >
                Xem chi tiết
                <ImArrowRight className="ml-[10px] text-xs text-colorcs-ff3 duration-300" />
              </a>
            </div>
          </article>
        </div>
        <h2 className="my-2 text-2xl font-bold leading-8 text-colorcs-f00">
          Trang
        </h2>
        <ul className="mb-5 text-[16px] text-colorcs-f00">
          <li className="group inline-block pr-[15px]">
            <a href="#" className="duration-200 group-hover:text-colorcs-E9A">
              1
            </a>
          </li>
          <li className="group inline-block pr-[15px]">
            <a href="#" className="duration-200 group-hover:text-colorcs-E9A">
              2
            </a>
          </li>
          <li className="group inline-block pr-[15px]">
            <a href="#" className="duration-200 group-hover:text-colorcs-E9A">
              3
            </a>
          </li>
          <li className="group inline-block pr-[15px]">
            <a href="#" className="duration-200 group-hover:text-colorcs-E9A">
              SAU ›
            </a>
          </li>
          <li className="group inline-block pr-[15px]">
            <a href="#" className="duration-200 group-hover:text-colorcs-E9A">
              CUỐI »
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
export { Handbook };
