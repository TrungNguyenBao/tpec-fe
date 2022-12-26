import { MenuFix } from "@/constants/index";
import { useGlobalContext } from "Context/GlobalProvider";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavMobile = () => {
  const { globalData, showNavMobile, setShowNavMobile, categories } =
    useGlobalContext();

  const navBar = globalData?.data?.attributes?.menuDynamic;
  const [openMC, setOpenMC] = useState(-1);

  const handleClickLink = () => {
    setShowNavMobile(false);
    setOpenMC(-1);
  };

  return (
    <ul
      className={`block lg:hidden text-base font-semibold text-colorcs-fff absolute z-50 duration-200 max-h-[60vh] overflow-y-auto ${
        showNavMobile ? `visible opacity-100` : `invisible opacity-0`
      }`}
    >
      <li className="inline-block w-full">
        <Link href="/">
          <a
            className="inline-block text-lg font-bold lg:px-[30px] md:px-5 sx:px-3 hover:bg-colorcs-fff hover:text-colorcs-E0C bg-colorcs-E0C py-3 w-full duration-200  border-y-[1px] border-colorcs-bd3"
            onClick={handleClickLink}
          >
            Trang chủ
          </a>
        </Link>
      </li>
      {navBar?.map((item, index) => (
        <li
          className="inline-block group w-full hover:bg-colorcs-fff duration-200 bg-colorcs-E0C"
          key={"nav-bar-link-m-" + item?.id}
        >
          <div className="pr-10 relative border-b border-colorcs-bd3">
            {item?.article?.data ? (
              <Link
                href={`/${item?.article?.data?.attributes?.slug}-${item?.id}.html`}
              >
                <a
                  className={`flex justify-between items-center group-hover:text-colorcs-E0C duration-200  text-lg font-bold lg:px-[30px] md:px-5 sx:px-3 py-3 w-full uppercase`}
                  onClick={handleClickLink}
                >
                  {item?.article?.data?.attributes?.title}
                </a>
              </Link>
            ) : (
              <div className="flex justify-between items-center group-hover:text-colorcs-E0C bg-colorcs-E0Cext-lg font-bold lg:px-[30px] md:px-5 sx:px-3 py-3 w-full">
                {item?.name}
              </div>
            )}
            {item?.menuChildren && (
              <div
                className="absolute top-1/2 right-5 -translate-y-1/2"
                onClick={() => setOpenMC(index)}
              >
                <MdOutlineKeyboardArrowDown className="text-2xl group-hover:text-colorcs-E0C" />
              </div>
            )}
          </div>
          {item?.menuChildren && openMC === index && (
            <ul className="text-colorcs-fff ">
              {item?.menuChildren?.articles?.data?.map((itemMC) => (
                <li key={"menu-m-link-" + itemMC?.id}>
                  <Link
                    href={`/${itemMC?.attributes?.slug}-${itemMC?.id}.html`}
                  >
                    <a
                      className="px-[35px] py-[10px] border-b text-base border-colorcs-cf1  font-bold inline-block duration-200 bg-colorcs-E0C hover:bg-colorcs-cf1 w-full"
                      onClick={handleClickLink}
                    >
                      {itemMC?.attributes?.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      {categories?.map((item: any, index: number) => (
        <li
          className="inline-block group w-full hover:bg-colorcs-fff duration-200 bg-colorcs-E0C"
          key={"nav-h-c-" + item?.id}
        >
          <div className={`pr-10 relative border-b border-colorcs-bd3`}>
            {item?.attributes?.navbarMenu ? (
              <div
                className="flex justify-between items-center group-hover:text-colorcs-E0C bg-colorcs-E0Cext-lg font-bold lg:px-[30px] md:px-5 sx:px-3 py-3 w-full uppercase"
                onClick={() => setOpenMC(index)}
              >
                {item?.attributes?.name}
              </div>
            ) : (
              <Link href={`/${item?.attributes?.slug}`}>
                <a
                  className={`flex justify-between items-center group-hover:text-colorcs-E0C duration-200  text-lg font-bold lg:px-[30px] md:px-5 sx:px-3 py-3 w-full uppercase`}
                  onClick={handleClickLink}
                >
                  {item?.attributes?.name}
                </a>
              </Link>
            )}
            {item?.attributes?.navbarMenu &&
              item?.attributes?.articles?.data?.length > 0 && (
                <div
                  className="absolute top-1/2 right-5 -translate-y-1/2"
                  onClick={() => setOpenMC(index)}
                >
                  <MdOutlineKeyboardArrowDown className="text-2xl group-hover:text-colorcs-E0C" />
                </div>
              )}
          </div>
          {item?.attributes?.navbarMenu &&
            item?.attributes?.articles?.data?.length > 0 &&
            openMC === index && (
              <ul className="text-colorcs-fff ">
                {item?.attributes?.articles?.data?.map((itemMC: any) => (
                  <li key={"menu-m-link-" + itemMC?.id}>
                    <Link
                      href={`/${itemMC?.attributes?.slug}-${itemMC?.id}.html`}
                    >
                      <a
                        className="px-[35px] py-[10px] border-b text-base border-colorcs-cf1  font-bold inline-block duration-200 bg-colorcs-E0C hover:bg-colorcs-cf1 w-full"
                        onClick={handleClickLink}
                      >
                        {itemMC?.attributes?.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
        </li>
      ))}
      {MenuFix?.map((item) => (
        <li className="inline-block w-full group" key={item?.id}>
          <Link href={item?.link}>
            <a
              className="inline-block text-lg font-bold lg:px-[30px] md:px-5 sx:px-3 group-hover:text-colorcs-E0C hover:bg-colorcs-fff py-3 w-full duration-200 bg-colorcs-E0C border-b-[1px] border-colorcs-bd3"
              onClick={handleClickLink}
            >
              {item?.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMobile;
