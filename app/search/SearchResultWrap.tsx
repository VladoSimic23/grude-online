"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formatDateToCroatian } from "../functions/formatDateToCroatian";
import style from "../css/style.module.css";
import defaultImage from "../../public/noImage.jpg";
//import Link from "next/link";
import mobileStyle from "../Components/MobileComponents/MobileHomepage/Css/mobileHomepage.module.css";

interface Post {
  slug: string;
  title: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

export default function SearchResultsWrap() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    if (query.trim() !== "") {
      // Fetch initial results when query changes
      setResults([]);
      setEndCursor(null);
      fetchResults(query, null);
    }
  }, [query]);

  const fetchResults = async (
    searchQuery: string,
    afterCursor: string | null
  ) => {
    setLoading(true);

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          searchQuery,
          first: 10,
          after: afterCursor,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch results");
      }

      const data = await response.json();
      const posts: Post[] = data.data.posts.nodes;
      const pageInfo = data.data.posts.pageInfo;

      setResults((prevResults) => [
        ...prevResults,
        ...posts.filter(
          (post) => !prevResults.some((prev) => prev.slug === post.slug)
        ), // Avoid duplicates
      ]);

      setEndCursor(pageInfo.endCursor); // Update cursor for next fetch
      setHasMore(pageInfo.hasNextPage); // Update "Load More" availability
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (hasMore) {
      fetchResults(query, endCursor);
    }
  };

  return (
    <div>
      <h1 className={style.h2Mobile}>Search Results for : {query}</h1>

      {loading && results.length === 0 && (
        <p style={{ color: "white" }}>Loading...</p>
      )}

      <ul style={{ listStyle: "none", padding: "0" }}>
        {results.map((result, index) => {
          const { title, featuredImage, date } = result;
          return (
            <a
              key={index}
              href={`/${result?.slug}`}
              style={{ textDecoration: "none" }}
            >
              <li className="row" style={{ marginBottom: "30px" }}>
                <div className="col-6">
                  <Image
                    className={style.imageContain}
                    src={
                      featuredImage?.node?.sourceUrl
                        ? featuredImage?.node?.sourceUrl
                        : defaultImage
                    }
                    alt={title}
                    width={200}
                    height={130}
                  />
                </div>
                <div className="col-6">
                  <h1 className={style.h4Mobile}>{title}</h1>
                  <p style={{ color: "white", fontSize: "14px" }}>
                    {formatDateToCroatian(date)}
                  </p>
                </div>
              </li>
            </a>
          );
        })}
      </ul>

      {hasMore && (
        <button onClick={loadMore} className={mobileStyle.mobileButton}>
          {loading ? "Loading..." : "Učitaj više ..."}
        </button>
      )}

      {!hasMore && results.length > 0 && (
        <p style={{ color: "white" }}>No more results.</p>
      )}

      {!loading && results.length === 0 && (
        <p style={{ color: "white" }}>No results found.</p>
      )}
    </div>
  );
}
