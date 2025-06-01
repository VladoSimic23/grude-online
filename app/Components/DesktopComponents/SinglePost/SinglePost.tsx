import { SinglePostI } from "@/app/libs/Queries/Queries/singlePosts";
import Image from "next/image";
import style from "../../../css/style.module.css";

import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import * as cheerio from "cheerio";
//import MobileCarousel from "./MobileCarousel/MobileCarousel";
import defaultImage from "../../../../public/noImage.jpg";
import Popularno from "../Popularno/Popularno";
import { JSX } from "react";
import desktopStyle from "../../DesktopComponents/css/desktop.module.css";
import DesktopSinglePostTags from "../DesktopTags/DesktopTags";
import PostSharingDesktop from "../../PostSharing/PostSharingDesktop";
import PostEmbedPreview from "../../MobileComponents/MobileSinglePost/PostEmbedPreview";

import DesktopCarousel from "./Carousel/DesktopCarousel";
//import MobileCarousel from "../../MobileComponents/MobileSinglePost/MobileCarousel/MobileCarousel";

const SinglePost = ({ post }: { post: SinglePostI }) => {
  const {
    title,
    content,
    date,
    tags,
    postId,
    slug,
    // featuredImage: {
    //   node: { sourceUrl },
    // },
  } = post;
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
    <div style={{ marginTop: "30px" }}>
      <div className="row">
        <div className="col-md-8">
          <h1 className={`text-center fw-bold mb-0 ${style.h2Desktop}`}>
            {title}
          </h1>
          <h2 className={`${style.h5Desktop} text-center`}>
            {formatDateToCroatian(date)}
          </h2>
          <div style={{ margin: "40px 0" }}>
            {extraImages.length > 0 ? (
              <DesktopCarousel
                images={extraImages}
                title={title}
                mainImg={post?.featuredImage?.node.sourceUrl}
                postId={postId}
              />
            ) : (
              <Image
                className={style.imageContain}
                src={
                  post?.featuredImage?.node?.sourceUrl
                    ? post?.featuredImage?.node?.sourceUrl
                    : defaultImage
                }
                width={1024}
                height={550}
                alt={title}
                priority={true}
                style={{ borderRadius: "0px" }}
              />
            )}
          </div>
          <div
            className={desktopStyle.desktopInnerHTML}
            //style={{ color: "white" }}
          >
            {" "}
            {renderWithEmbeds()}
          </div>
          {/* {extraImages.length > 0 && <MobileCarousel images={extraImages} />} */}
          <DesktopSinglePostTags tags={tags} />
          <PostSharingDesktop slug={slug} />
        </div>
        <div className="col-md-4">
          <Popularno />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
