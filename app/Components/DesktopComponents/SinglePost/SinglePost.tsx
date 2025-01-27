import { SinglePostI } from "@/app/libs/Queries/Queries/singlePosts";
import Image from "next/image";
import style from "../../../css/style.module.css";
//import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
//import * as cheerio from "cheerio";
//import MobileCarousel from "./MobileCarousel/MobileCarousel";
import defaultImage from "../../../../public/noImage.jpg";
import Popularno from "../Popularno/Popularno";
import Promo from "../Promo/Promo";
import desktopStyle from "../../DesktopComponents/css/desktop.module.css";
import DesktopSinglePostTags from "../DesktopTags/DesktopTags";
import PostSharingDesktop from "../../PostSharing/PostSharingDesktop";
//import MobileCarousel from "../../MobileComponents/MobileSinglePost/MobileCarousel/MobileCarousel";

const SinglePost = ({ post }: { post: SinglePostI }) => {
  const {
    title,
    content,
    date,
    tags,
    slug,
    // featuredImage: {
    //   node: { sourceUrl },
    // },
  } = post;

  //   const $ = cheerio.load(content);
  //   const images = $("img");

  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const extraImages: any = [];

  //   // If there are more than 3 images, remove the extras and save their src
  //   if (images.length > 3) {
  //     images.each((index, img) => {
  //       extraImages.push($(img).attr("src"));
  //       $(img).remove();
  //     });
  //   }

  // Get the updated content as HTML
  //const updatedContent = $.html();

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
            />
          </div>
          <div
            className={desktopStyle.desktopInnerHTML}
            //style={{ color: "white" }}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          {/* {extraImages.length > 0 && <MobileCarousel images={extraImages} />} */}
          <DesktopSinglePostTags tags={tags} />
          <PostSharingDesktop slug={slug} />
        </div>
        <div className="col-md-4">
          <Popularno />
          <Promo />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
