import { getRecentComments } from "@/app/libs/Queries/Queries/recentComments";
import Link from "next/link";
import style from "../../../css/style.module.css";

const RecentComments = async () => {
  const data = await getRecentComments(5);
  const {
    comments: { nodes },
  } = data;
  return (
    <div>
      <h1 className={style.h5Desktop}>NOVI KOMENTARI</h1>
      <div>
        {nodes?.map((item, index: number) => {
          return (
            <div key={index}>
              <p>
                <span className="text-black fw-bold">
                  {item?.author?.node?.name
                    ? item?.author?.node?.name
                    : "Anonimno"}{" "}
                  o{" "}
                </span>
                <Link
                  href={`/${item?.commentedOn?.node?.slug}`}
                  aria-label={item?.commentedOn?.node?.title}
                  className="text-black text-decoration-none"
                >
                  {item?.commentedOn?.node?.title}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentComments;
