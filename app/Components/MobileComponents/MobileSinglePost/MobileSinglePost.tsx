import { SinglePostI } from "@/app/libs/Queries/Queries/singlePosts";
import Image from "next/image";
import style from "../../../css/style.module.css";
import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import * as cheerio from "cheerio";
import MobileCarousel from "./MobileCarousel/MobileCarousel";
import defaultImage from "../../../../public/noImage.jpg";
import ScrollToComments from "../../Comments/ScrollToComments";

const MobileSinglePost = ({ post }: { post: SinglePostI }) => {
  const { title, content, date, postId } = post;

  const $ = cheerio.load(content);
  const images = $("img");

  $("img.wp-caption, div.wp-caption").each((index, element) => {
    $(element).remove();
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extraImages: any = [];

  // If there are more than 3 images, remove the extras and save their src
  if (images.length > 3) {
    images.each((index, img) => {
      extraImages.push($(img).attr("src"));
      $(img).remove();
    });
  }

  // Get the updated content as HTML
  const updatedContent = $.html();

  return (
    <div style={{ marginTop: "30px", overflow: "hidden", padding: "0 5px" }}>
      <h1
        style={{ color: "white" }}
        className={`${style.h2Mobile} text-center`}
      >
        {title}
      </h1>
      <h2 className={`${style.h5Mobile} text-center`}>
        {formatDateToCroatian(date)}
      </h2>

      <div style={{ position: "relative" }}>
        <Image
          className={`${style.imageContain} mt-4 mb-4`}
          style={{
            height: "auto",
            position: "absolute",
            zIndex: "-1",
            borderRadius: "8px",
          }}
          src={
            post?.featuredImage?.node?.sourceUrl
              ? post?.featuredImage?.node?.sourceUrl
              : defaultImage
          }
          width={500}
          height={250}
          alt={`post image ${postId}`}
          priority={true}
          fetchPriority="high"
          quality={1}
          id={`post-image-${postId}`}
        />
        <Image
          className={`${style.imageContain} mt-4 mb-4`}
          style={{
            height: "auto",
            position: "relative",
            zIndex: "1",
            borderRadius: "8px",
          }}
          src={
            post?.featuredImage?.node?.sourceUrl
              ? post?.featuredImage?.node?.sourceUrl
              : defaultImage
          }
          width={500}
          height={250}
          alt={`post image ${postId}`}
          priority={false}
          //fetchPriority="high"
          quality={50}
          id={`post-image-${postId}`}
        />
      </div>

      <div
        className={mobileStyle.MobileInnerHTML}
        style={{ color: "white" }}
        dangerouslySetInnerHTML={{ __html: updatedContent }}
      ></div>
      {extraImages.length > 0 && (
        <MobileCarousel images={extraImages} title={title} />
      )}
      {/* {extraImages.length > 0 && (
        <MobileImageList images={extraImages} title={title} />
      )} */}
      <ScrollToComments />
    </div>
  );
};

export default MobileSinglePost;
