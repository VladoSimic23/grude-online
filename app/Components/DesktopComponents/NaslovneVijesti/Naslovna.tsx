import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "../../../../public/noImage.jpg";
import style from "../../../css/style.module.css";
import desktopStyle from "../css/desktop.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import { cheerioCheck } from "@/app/functions/cheerioCheck";

const Naslovna = async () => {
  const data = await getPostsByCategorySmall("izdvojeno", 1, "LARGE");
  const {
    posts: { nodes },
  } = data;

  const { hasImages, hasVideo } = cheerioCheck(
    nodes[0]?.content,
    nodes[0]?.tags
  );
  // const isVideo = true;
  // const isImage = true;

  return (
    <div className={desktopStyle.naslovna}>
      <Link
        href={`/${nodes[0]?.slug}`}
        className="text-decoration-none text-black"
      >
        <div className="position-relative">
          <div className="position-relative">
            {hasImages && (
              <div className={desktopStyle.desktopImage}>
                {" "}
                <i className="bi bi-camera"></i>
              </div>
            )}
            {hasVideo && (
              <div
                className={desktopStyle.desktopVideo}
                style={hasImages ? { right: "100px" } : { right: "10px" }}
              >
                <i className="bi bi-youtube"></i>
              </div>
            )}
            <Image
              className={`${style.imageCover} rounded-3`}
              src={
                nodes[0]?.featuredImage?.node?.sourceUrl
                  ? nodes[0]?.featuredImage?.node?.sourceUrl
                  : defaultImage
              }
              width={400}
              height={500}
              priority
              alt={"Ilustracija članka: " + nodes[0].title}
            />
          </div>
          <div className={`${desktopStyle.dateAndComment}`}>
            <h1
              className={`${style.h1Desktop} text-black `}
              style={{ fontSize: "50px", margin: "16px 0" }}
            >
              {nodes[0].title}
            </h1>
            <div>
              <span>{formatDateToCroatian(nodes[0].date)}</span> |{" "}
              <span>
                {nodes.length} <i className="bi bi-chat-left-text"></i>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Naslovna;
