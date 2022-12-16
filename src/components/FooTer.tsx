import { useGlobalContext } from "Context/GlobalProvider";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import { IArticle } from "../models";

const FooTer = () => {
  const { globalData } = useGlobalContext();

  const footerMenu = globalData?.data?.attributes?.footerMenu;

  return (
    <footer className="sx:pb-[72.64px] lg:pb-0">
      <div className="w-full bg-bgfooter">
        <div className="container relative mx-auto flex flex-wrap overflow-hidden md:py-[30px] sx:py-5 px-3">
          <div className="rounded-md bg-colorcs-bg2 p-5 lg:w-2/5 text-colorcs-fff">
            <header className="mb-3">
              <Link href="/">
                <a>
                  <h3 className="text-[16px] font-bold uppercase leading-[22px] text-colorcs-fff">
                    {globalData?.data?.attributes?.nameOfCompany}
                  </h3>
                </a>
              </Link>
            </header>
            <div className="relative flex pb-3 leading-5">
              <FaHome className="absolute top-[4px] text-colorcs-fff text-sm" />

              <p className=" pl-6 text-[14px] leading-[21px]">
                Địa chỉ: {globalData?.data?.attributes?.address}
              </p>
            </div>
            <div className="relative flex pb-3 leading-5">
              <FaHome className="absolute top-[4px] text-colorcs-fff text-sm" />

              <p className=" pl-6 text-[14px] leading-[21px]">
                VPGD: {globalData?.data?.attributes?.office}
              </p>
            </div>
            <div className="relative flex pb-3 leading-5">
              <ImPhone className="absolute top-[4px] text-colorcs-fff text-sm" />
              <p className=" pl-6 text-[14px] leading-[21px]">
                Điện thoại: {globalData?.data?.attributes?.phoneNumber},
                Hotline: {globalData?.data?.attributes?.hotline}
              </p>
            </div>
            <div className="relative flex pb-3 leading-5">
              <IoIosMail className="absolute top-[4px] text-colorcs-fff text-sm" />
              <p className=" pl-6 text-[14px] leading-[21px] ">
                Email: {globalData?.data?.attributes?.email}
              </p>
            </div>
          </div>
          {footerMenu && (
            <div className="lg:w-3/5 sx:w-full lg:pt-0 sx:pt-4 grid md:grid-cols-3 gap-4 lg:pl-16 sx:pl-5">
              {footerMenu?.map((item: any) => (
                <article key={"ft-menu-" + item?.id}>
                  <header className="mb-3">
                    <h3 className="affooter relative pb-2 text-[16px] font-bold uppercase leading-[22px] text-colorcs-fff">
                      {item?.name}
                    </h3>
                  </header>
                  <ul className="text-colorcs-fff">
                    {item?.menus?.data?.map(
                      (itemM: IArticle, index: number) => (
                        <li
                          className="group mb-2 inline-block w-full leading-5"
                          key={"ft-link-" + index + item?.id}
                        >
                          <Link
                            href={`/${itemM?.attributes?.slug}-${itemM?.id}`}
                          >
                            <a className="afInformation relative inline-block pl-[14px] text-[14px] duration-300 group-hover:pl-[18px] ">
                              {itemM?.attributes?.title}
                            </a>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border-t-[1px] border-colorcs-E0C bg-colorcs-B2B">
        <div className="container relative mx-auto flex flex-wrap p-[15px] md:justify-evenly lg:justify-end">
          <div className="text-colorcs-fff sx:pr-0 md:pr-5">
            <p className="text-sm leading-6">
              © Copyright THANG MÁY 3D 2022. All Rights Reserved
            </p>
            <p className="text-sm leading-6">
              Đơn vị chủ quản: {globalData?.data?.attributes?.nameOfCompany}
            </p>
          </div>
          {/* <div className="flex">
            <Link href="/">
              <a className="pr-5">
                <img
                  src="/images/dmca_protected_1_120.png"
                  alt="DMCA.com Protection Status"
                />
              </a>
            </Link>
            <div className="flex items-center pt-2 text-colorcs-fff">
              <a
                href={globalData?.data?.attributes?.facebookLink}
                target={"_blank"}
                rel="noreferrer"
                title="Facebook"
                className="mx-1 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-colorcs-D68 text-[15px] text-colorcs-fff duration-200 hover:bg-colorcs-fff  hover:text-colorcs-E11"
              >
                <ImFacebook2 />
              </a>
              <a
                href={globalData?.data?.attributes?.youtubeLink}
                target={"_blank"}
                rel="noreferrer"
                title="Youtube"
                className="mx-1 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-colorcs-D68 text-[15px] text-colorcs-fff duration-200 hover:bg-colorcs-fff hover:text-colorcs-E11 "
              >
                <BsYoutube />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
export { FooTer };
