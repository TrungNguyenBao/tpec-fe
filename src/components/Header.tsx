import { useGlobalContext } from "Context/GlobalProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GoMailRead } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import {
  MdOutlineKeyboardArrowRight,
  MdPhoneInTalk,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { MenuFix } from "../constants";
import { getMediaFormat } from "../utils";
import NextImage from "./BaseComponents/NextImage";

const Header = () => {
  const router = useRouter();
  const { globalData, setShowNavMobile, categories } = useGlobalContext();
  const navBar = globalData?.data?.attributes?.menuDynamic;
  const [kw, setKw] = useState("");

  const handleSearch = () => {
    if (kw) {
      router.push(`/tim-kiem?keyword=${kw}`);
      setKw("");
      return;
    }
    router.push(`/tim-kiem`);
    setKw("");
  };

  return (
    <header className="lg:sticky lg:-top-[99px] bg-colorcs-fff transition-all duration-200 z-[10]">
      <div className="container mx-auto py-[10px] px-3 ">
        <div className="sx:justify-center lg:justify-between sx:px-0 lg:flex lg:mx-0">
          <Link href="/">
            <a title={globalData?.data?.attributes?.nameOfCompany}>
              {globalData?.data?.attributes?.logo?.data && (
                <NextImage
                  className="m-auto"
                  src={getMediaFormat(globalData?.data?.attributes?.logo)}
                  alt={globalData?.data?.attributes?.nameOfCompany}
                  width={70}
                  height={70}
                  layout="intrinsic"
                  objectFit="contain"
                />
              )}
            </a>
          </Link>
          <div className="mx-[15px] sx:hidden lg:block xl:flex ">
            <div className="relative  items-center mx-[15px] flex lg:py-5 xl:px-0 group">
              <GoMailRead className="absolute duration-200 left-[-2px] mt-[6px] items-center text-2xl group-hover:text-colorcs-E0C text-colorcs-C7A" />
              <ul className="pl-[30px]">
                <li className="leading-[14px]">
                  <span className="text-[10px] uppercase">Email</span>
                </li>
                <li className="leading-4">
                  <span className="text-sm font-bold uppercase text-colorcs-C7A duration-200 group-hover:opacity-80">
                    {globalData?.data?.attributes?.email}
                  </span>
                  {/* <span
                    title="gmail"
                    className="text-sm font-bold uppercase text-colorcs-D68"
                  >
                    {globalData?.data?.attributes?.email}
                  </span> */}
                </li>
              </ul>
            </div>
            <div className="relative mx-[15px] flex items-center md:py-4 xl:py-0 group">
              <MdPhoneInTalk className="absolute duration-200 left-[-2px] mt-[6px] group-hover:text-colorcs-E0C items-center text-2xl text-colorcs-C7A" />
              <ul className="pl-[30px]">
                <li className="leading-[14px]">
                  <span className="text-[10px] uppercase">Holine</span>
                </li>
                <li className="leading-4">
                  <span className="text-sm font-bold uppercase text-colorcs-C7A duration-200 group-hover:opacity-80">
                    {globalData?.data?.attributes?.hotline}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative flex items-center lg:m-0 sx:m-auto xl:w-[420px] lg:w-[340px] md:w-[420px] sx:w-full">
            <input
              className="w-full rounded-full border-[1px] border-[rgba(0,0,0,.09)] bg-[rgba(0,0,0,.03)] py-[6px] pl-3 text-base leading-[26px] outline-none focus:border-[rgba(0,0,0,.09)] pr-28"
              title="Nhập điều kiện tìm kiếm."
              type="text"
              name="search"
              placeholder="Nhập từ khóa..."
              value={kw}
              onChange={(e) => setKw(e?.target?.value)}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center text-base"
              onClick={handleSearch}
            >
              <button>Tìm Kiếm</button>
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-colorcs-E0C  flex">
        <div className="container mx-auto md:hidden">
          <IoIosMenu
            className="lg:hidden sx:block w-[48px] h-[48px]  rounded-full hover:bg-blue-500 active:bg-blue-400 p-2 duration-300 text-colorcs-fff text-3xl cursor-pointer"
            onClick={() => setShowNavMobile((pre: any) => !pre)}
          />
        </div>
        <div className="relative mx-auto p-3 items-center md:flex hidden">
          <nav className="flex items-center mx-auto w-full relative">
            <ul className="text-base font-semibold text-colorcs-fff">
              <li className="inline-block px-1">
                <Link href="/">
                  <a
                    className={`relative rounded-md hover:bg-colorcs-fff text-base xl:px-4 lg:px-3 inline-block leading-9 duration-200 font-bold hover:text-colorcs-E0C uppercase ${
                      router.pathname === "/" ? `active` : ``
                    }`}
                  >
                    TRANG CHỦ
                  </a>
                </Link>
              </li>
              {navBar?.map((item) => (
                <li
                  className="group relative inline-block duration-200 px-1"
                  key={"nav-h-" + item?.id}
                >
                  {item?.article?.data ? (
                    <Link
                      href={`/${item?.article?.data?.attributes?.slug}-${item?.article?.data?.id}.html`}
                    >
                      <a
                        className={`${
                          router.pathname === "/elevator" ? "active" : ""
                        } relative flex items-center leading-9 rounded-md hover:bg-colorcs-fff hover:text-colorcs-E0C duration-200 text-base xl:px-4 lg:px-3 font-bold uppercase`}
                      >
                        {item?.article?.data?.attributes?.title}
                        {item?.menuChildren && (
                          <MdKeyboardArrowDown className="ml-1" />
                        )}
                      </a>
                    </Link>
                  ) : (
                    <a
                      className={`relative flex hover:text-colorcs-E0C rounded-md hover:bg-colorcs-fff leading-9 duration-200 items-center xl:px-4 lg:px-3 text-base font-bold uppercase`}
                    >
                      {item?.name}
                      {item?.menuChildren && (
                        <MdKeyboardArrowDown className="ml-1" />
                      )}
                    </a>
                  )}
                  {item?.menuChildren && (
                    <ul className="bg-colorcs-E0C text-colorcs-fff shadow-4xl absolute left-0 hidden top-[36px] pt-[10px] w-[230px] duration-200 group-hover:block">
                      {item?.menuChildren?.articles?.data?.map((itemMC) => (
                        <li
                          className=" inline-block w-full px-1 hover:bg-colorcs-fff duration-200"
                          key={"item-mc-li-" + itemMC?.id}
                        >
                          <Link
                            href={`/${itemMC?.attributes?.slug}-${itemMC?.id}.html`}
                          >
                            <a className="inline-block px-[25px] leading-9 text-xs border-b-[1px] border-colorcs-bd1 font-normal uppercase duration-200 hover:text-colorcs-E0C">
                              {itemMC?.attributes?.title}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {categories?.map((item: any) => (
                <li
                  className="group relative inline-block duration-200 px-1"
                  key={"nav-h-c-" + item?.id}
                >
                  <div
                    className={`relative flex hover:text-colorcs-E0C rounded-md hover:bg-colorcs-fff leading-9 duration-200 items-center xl:px-4 lg:px-3 text-base font-bold uppercase`}
                  >
                    {item?.attributes?.navbarMenu ? (
                      item?.attributes?.name
                    ) : (
                      <Link href={`/${item?.attributes?.slug}`}>
                        <a>{item?.attributes?.name}</a>
                      </Link>
                    )}
                    {item?.attributes?.navbarMenu &&
                      item?.attributes?.articles?.data?.length > 0 && (
                        <MdKeyboardArrowDown className="ml-1" />
                      )}
                  </div>
                  {item?.attributes?.navbarMenu &&
                    item?.attributes?.articles?.data?.length > 0 && (
                      <ul className="bg-colorcs-E0C text-colorcs-fff shadow-4xl absolute left-0 hidden top-[36px] pt-[10px] w-[230px] duration-200 group-hover:block">
                        {item?.attributes?.articles?.data?.map(
                          (itemMC: any) => (
                            <li
                              className=" inline-block w-full px-1 hover:bg-colorcs-fff duration-200"
                              key={"item-mc-li-c-" + itemMC?.id}
                            >
                              <Link
                                href={`/${itemMC?.attributes?.slug}-${itemMC?.id}.html`}
                              >
                                <a className="inline-block px-[25px] leading-9 text-xs border-b-[1px] border-colorcs-bd1 font-normal uppercase duration-200 hover:text-colorcs-E0C">
                                  {itemMC?.attributes?.title}
                                </a>
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </li>
              ))}
              {MenuFix?.map((item) => (
                <li className="inline-block px-1" key={item?.id + "-pc"}>
                  <Link href={item?.link}>
                    <a
                      className={` hover:text-colorcs-E0C hover:bg-colorcs-fff rounded-md duration-200 relative inline-block leading-9 text-base xl:px-4 lg:px-3 font-bold uppercase ${
                        router?.pathname === item?.link ? `active` : ``
                      }`}
                    >
                      {item?.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export { Header };
