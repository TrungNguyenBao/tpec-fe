import { useGlobalContext } from "Context/GlobalProvider";

const Contact = () => {
  const { globalData } = useGlobalContext();
  return (
    <div className="fixed z-20 bottom-0 left-0 lg:w-[400px] sx:w-full border-t-[1px] border-colorcs-EAE bg-[rgba(255,255,255,.9)]">
      <ul className="flex p-3 sx:justify-between md:justify-around">
        <li className=" cursor-pointer">
          <a className="flex items-center">
            <img
              src="/images/icon-phone2.png"
              alt="phone"
              className="w-[60px]"
            />
            <span className="mt-2 pl-1 text-lg font-bold text-colorcs-E0C">
              {globalData?.data?.attributes?.hotline}
            </span>
          </a>
        </li>
        <li className=" cursor-pointer">
          <a
            href={`https://zalo.me/${globalData?.data?.attributes?.hotline
              .split(" ")
              .join("")}`}
            rel="noreferrer"
            target={"_blank"}
            className="flex items-center"
          >
            <img
              src="/images/icon-zalo2.png"
              alt="title"
              className="w-[60px]"
            />
            <span className="mt-2 pl-1 text-lg font-bold text-colorcs-E0C">
              Chat Zalo
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Contact;
