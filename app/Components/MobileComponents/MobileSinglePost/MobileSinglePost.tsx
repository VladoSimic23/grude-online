import { SinglePostI } from "@/app/libs/Queries/Queries/singlePosts";
import Image from "next/image";
import style from "../../../css/style.module.css";
import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import * as cheerio from "cheerio";
import MobileCarousel from "./MobileCarousel/MobileCarousel";
import defaultImage from "../../../../public/noImage.jpg";
import ScrollToComments from "../../Comments/ScrollToComments";
import PostEmbedPreview from "./PostEmbedPreview";
import { JSX } from "react";
import "../../Swiper/swiperCustomCss.css";

const MobileSinglePost = ({ post }: { post: SinglePostI }) => {
  const { title, content, date, postId } = post;

  const $ = cheerio.load(content);

  const images = $("img");
  $("img.wp-caption, div.wp-caption").each((index, element) => {
    $(element).remove();
  });

  const extraImages: string[] = [];
  if (images.length > 3) {
    images.each((index, img) => {
      extraImages.push($(img).attr("src") || "");
    });
  }

  // Zamjena WP embedded postova sa custom previewom
  $("blockquote.wp-embedded-content").each((i, el) => {
    const link = $(el).find("a").attr("href");
    if (link && link.startsWith("https://www.grude-online.info/")) {
      // Zamijenimo cijeli blockquote sa custom wrapper divom i data-url
      $(el).replaceWith(`<div class="post-embed" data-url="${link}"></div>`);
    }
  });

  const updatedContent = $.html();

  // Parsiramo embedove nakon rendera
  const renderWithEmbeds = () => {
    const $ = cheerio.load(updatedContent);
    const elements: JSX.Element[] = [];

    $("body")
      .contents()
      .each((i, el) => {
        if (
          el.type === "tag" &&
          el.name === "div" &&
          $(el).hasClass("post-embed")
        ) {
          const url = $(el).attr("data-url");
          if (url) elements.push(<PostEmbedPreview key={i} url={url} />);
        } else {
          elements.push(
            <div key={i} dangerouslySetInnerHTML={{ __html: $.html(el) }} />
          );
        }
      });

    return elements;
  };

  return (
    <div style={{ marginTop: "30px", overflow: "hidden", padding: "0 5px" }}>
      <h1
        style={{ color: "white" }}
        className={`${style.h2Mobile} text-center`}
      >
        {title}
      </h1>

      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <h2
            className={`${style.h5Mobile} text-center`}
            style={{ fontSize: "15px !important" }}
          >
            {formatDateToCroatian(date)}
          </h2>
        </div>
        <Image
          className={`${style.imageContain} mt-4 mb-4`}
          style={{ height: "auto", position: "absolute", zIndex: "-1" }}
          src={post?.featuredImage?.node?.sourceUrl || defaultImage}
          width={500}
          height={250}
          alt={`post image ${postId}`}
          priority={true}
          fetchPriority="high"
          quality={1}
          id={`post-image-${postId}`}
        />
        {extraImages.length > 0 ? (
          <MobileCarousel
            images={extraImages}
            title={title}
            mainImg={post?.featuredImage?.node.sourceUrl}
            postId={postId}
          />
        ) : (
          <Image
            className={`${style.imageContain} mt-4 mb-4`}
            style={{ height: "auto", position: "relative", zIndex: "1" }}
            src={post?.featuredImage?.node?.sourceUrl || defaultImage}
            width={500}
            height={250}
            alt={`post image ${postId}`}
            priority={true}
            fetchPriority="high"
            quality={75}
            id={`post-image-${postId}`}
          />
        )}
      </div>

      <div
        className={mobileStyle.MobileInnerHTML}
        style={{ color: "white", fontFamily: "sans-serif" }}
      >
        {renderWithEmbeds()}
      </div>

      <ScrollToComments />
    </div>
  );
};

export default MobileSinglePost;
