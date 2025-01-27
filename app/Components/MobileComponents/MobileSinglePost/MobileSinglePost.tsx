import { SinglePostI } from "@/app/libs/Queries/Queries/singlePosts";
import Image from "next/image";
import style from "../../../css/style.module.css";
import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import * as cheerio from "cheerio";
import MobileCarousel from "./MobileCarousel/MobileCarousel";
import defaultImage from "../../../../public/noImage.jpg";

const MobileSinglePost = ({ post }: { post: SinglePostI }) => {
  const {
    title,
    content,
    date,
    postId,
    // featuredImage: {
    //   node: { sourceUrl },
    // },
  } = post;

  const $ = cheerio.load(content);
  const images = $("img");

  $("img.wp-caption, div.wp-caption").each((index, element) => {
    $(element).remove();
  });

  // Return the modified HTML content

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
    <div style={{ marginTop: "30px", overflow: "hidden" }}>
      <h1
        style={{ color: "white" }}
        className={`${style.h2Mobile} text-center`}
      >
        {title}
      </h1>
      <h2 className={`${style.h5Mobile} text-center`}>
        {formatDateToCroatian(date)}
      </h2>

      <Image
        className={`${style.imageContain} mt-4 mb-4`}
        style={{ height: "auto" }}
        src={
          post?.featuredImage?.node?.sourceUrl
            ? post?.featuredImage?.node?.sourceUrl
            : defaultImage
        }
        width={500}
        height={250}
        alt={`post image ${postId}`}
        priority={true}
      />

      <div
        className={mobileStyle.MobileInnerHTML}
        style={{ color: "white" }}
        dangerouslySetInnerHTML={{ __html: updatedContent }}
      ></div>
      {extraImages.length > 0 && <MobileCarousel images={extraImages} />}
    </div>
  );
};

export default MobileSinglePost;
