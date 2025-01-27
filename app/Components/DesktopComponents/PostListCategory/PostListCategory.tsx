import { PostsByCategorySourceI } from "@/app/libs/Queries/Queries/postsByCategorySmall";
import Image from "next/image";
import style from "../../../css/style.module.css";
//import mobileStyle from "../MobileHomepage/Css/mobileHomepage.module.css";
import { formatDateToCroatian } from "@/app/functions/formatDateToCroatian";
import Link from "next/link";

const PostListCategory = ({ data }: { data: PostsByCategorySourceI }) => {
  const {
    posts: { nodes },
  } = data;

  return (
    <div>
      {nodes.map((item, index) => {
        const {
          title,
          date,
          slug,
          comments: { nodes },
          featuredImage: {
            node: { sourceUrl },
          },
        } = item;
        return (
          <Link
            key={index}
            href={`/${slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{ marginBottom: "60px" }}
              className="row align-items-center"
            >
              <div className="col-md-6">
                <Image
                  className={style.imageCover}
                  src={sourceUrl}
                  width={300}
                  height={220}
                  alt={title}
                  priority={index < 3 ? true : false}
                />
              </div>
              <div className="col-md-6">
                <h1 className={`${style.h3Desktop} text-black mt-0`}>
                  {title}
                </h1>
                <div>
                  <span className="text-black">
                    {formatDateToCroatian(date)}
                  </span>

                  <div>
                    <span className="me-1 text-black">{nodes.length}</span>
                    <i className="bi bi-chat-left-text text-black"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PostListCategory;
