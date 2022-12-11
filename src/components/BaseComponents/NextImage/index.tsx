import Image, { ImageProps } from "next/image";

const NextImage = (props: ImageProps) => {
  return <Image {...props} alt="image" unoptimized={true} />;
};

export default NextImage;
