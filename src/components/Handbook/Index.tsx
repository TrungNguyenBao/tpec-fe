import { MdOutlineDoubleArrow } from 'react-icons/md';

const Index = () => (
  <div className="mt-[148px] bg-colorcs-fff">
    <div className="container relative mx-auto">
      <header className="px-3">
        <div className="flex items-center border-b-[1px] border-colorcs-D6D py-4">
          <a
            href="#"
            className="text-[16px] text-[#999] hover:text-colorcs-E9A"
          >
            Trang chủ
          </a>
          <MdOutlineDoubleArrow className="mx-2 text-xs text-[#999]" />
          <a
            href="#"
            className="text-[16px] text-[#999] hover:text-colorcs-E9A"
          >
            Tin tức
          </a>
        </div>
      </header>
    </div>
  </div>
);
export { Index };
