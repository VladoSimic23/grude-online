import { getPostsByCategorySmall } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "../../../../public/noImage.jpg";
import style from "../../../css/style.module.css";
import desktopStyle from "../css/desktop.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";

const Naslovna = async () => {
  const data = await getPostsByCategorySmall("izdvojeno", 1, "LARGE");
  const {
    posts: { nodes },
  } = data;

  return (
    <div>
      <Link href={`/${nodes[0]?.slug}`}>
        <div className="position-relative">
          <div className={desktopStyle.desktopOverlay}></div>
          <Image
            className={style.imageCover}
            src={
              nodes[0]?.featuredImage?.node?.sourceUrl
                ? nodes[0]?.featuredImage?.node?.sourceUrl
                : defaultImage
            }
            width={400}
            height={500}
            priority={true}
            alt={"Naslovna 1."}
          />
          <div
            className={`position-absolute bottom-0 p-3 ${desktopStyle.dateAndComment}`}
          >
            <h1 className={`${style.h2Mobile}`}>{nodes[0].title}</h1>
            <div style={{ color: "white", fontSize: "14px" }}>
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
