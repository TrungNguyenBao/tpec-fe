import { IAboutUs } from "../models";
import { getMediaFormat } from "../utils";
import NextImage from "./BaseComponents/NextImage";

const WorkingMotto = ({ data }: { data: IAboutUs }) => {
  return (
    <div className="bg-colorcs-fff">
      <section className="container relative mx-auto py-[30px] px-3">
        <header className="text-center">
          <h2 className="afProd relative pb-4 text-[28px] font-bold leading-8 text-colorcs-f33">
            {data?.title}
          </h2>
          <div
            className="ck-content max-w-[850px] mx-auto py-[15px]"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </header>
        <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {data?.aboutus?.map((item) => (
            <article className="pl-10 relative" key={"ab-" + item?.id}>
              <div className="absolute top-[2px] left-0">
                <NextImage
                  src={getMediaFormat(item?.image)}
                  alt="ab-icon"
                  layout="intrinsic"
                  width={30}
                  height={25}
                  objectFit="cover"
                />
              </div>
              <div className="group relative flex h-full w-full duration-200 hover:drop-shadow-3xl">
                <header className="relative">
                  <h3 className="text-base font-bold uppercase leading-8  text-colorcs-E31 ">
                    {item?.name}
                  </h3>
                  <p className="text-[15px] leading-7 text-colorcs-E31 line-clamp-4">
                    {item?.description}
                  </p>
                </header>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
export default WorkingMotto;
