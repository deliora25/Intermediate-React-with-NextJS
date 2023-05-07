import Image from "next/image";

type Props = {
  imgUrl: string;
};

const Thumbnail = ({ imgUrl }: Props) => {
  return (
    <Image
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      className="rounded-lg"
      fill
      src={imgUrl}
      style={{ objectFit: "cover" }}
      alt="thumbnail"
    />
  );
};

export default Thumbnail;
