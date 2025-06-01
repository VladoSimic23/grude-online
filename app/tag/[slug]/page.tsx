import Popularno from "@/app/Components/DesktopComponents/Popularno/Popularno";

import TagDetailsDesktop from "@/app/Components/Tags/DesktopTags/TagDetailsDesktop";
import TagDetails from "@/app/Components/Tags/TagDetails";
import { AllPostsI, getAllPosts } from "@/app/libs/Queries/Queries/allPosts";
import { isMobileDevice } from "@/app/libs/UserAgent/UserAgent";
import { Metadata } from "next";
import React, { Suspense } from "react";

export type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params)?.slug;

  return {
    title: `Arhiva ${decodeURIComponent(slug)} - Grude Online`,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const {
    posts: { nodes },
  } = posts;

  return nodes.map((post: AllPostsI) => ({
    slug: post?.slug,
    fallback: "blocking",
  }));
}

const Tag = async ({ params }: Props) => {
  const isMobile = await isMobileDevice();
  const { slug } = await params;
  const decodedTag = decodeURIComponent(slug);

  return (
    <div className="container">
      {isMobile && (
        <Suspense
          fallback={<h1 style={{ color: "white" }}>Loading Tags...</h1>}
        >
          <TagDetails tag={decodedTag} />
        </Suspense>
      )}

      {!isMobile && (
        <div className="row">
          <div className="col-lg-8">
            <TagDetailsDesktop tag={decodedTag} />
          </div>
          <div className="col-lg-4">
            <Popularno />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tag;
