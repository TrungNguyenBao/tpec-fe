import { MdOutlineDoubleArrow } from "react-icons/md";

const Breadcrumb = () => (
  <div className=" bg-colorcs-fff">
    <div className="container relative mx-auto">
      <header className="px-3">
        <div className="flex items-center border-b-[1px] border-colorcs-D6D py-4">
          <a
            href="#"
            className="text-[16px] text-colorcs-f00 hover:text-colorcs-E0C"
          >
            Trang chủ
          </a>
          <MdOutlineDoubleArrow className="mx-2 text-xs text-colorcs-f99" />
          <a
            href="#"
            className="text-[16px] text-colorcs-f00 hover:text-colorcs-E0C"
          >
            Liên hệ
          </a>
        </div>
      </header>
    </div>
  </div>
);
export default Breadcrumb;
