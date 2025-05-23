//import CommentComponent from "@/app/Components/Comments/CommentComponent";
import CommentForm from "@/app/Components/Comments/CommentForm";
import RestComments from "@/app/Components/Comments/RestApiComments/RestCommentComponent";
import SinglePost from "@/app/Components/DesktopComponents/SinglePost/SinglePost";
//import MobilePopularno from "@/app/Components/MobileComponents/MobilePopularno/MobilePopularno";
//import MobilePromo from "@/app/Components/MobileComponents/MobilePromo/MobilePromo";
import MobileSinglePost from "@/app/Components/MobileComponents/MobileSinglePost/MobileSinglePost";
import MobileSinglePostTags from "@/app/Components/MobileComponents/MobileSinglePost/MobileSinglePostTags/MobileSinglePostTags";
import PostSharingDetails from "@/app/Components/PostSharing/PostSharingDetails";
import { removeHtmlTags } from "@/app/functions/removeHtmlTags";
import { grOnlineMainPath } from "@/app/libs/GrudeOnlineURLs/grudeOnlineURLs";
import { AllPostsI, getAllPosts } from "@/app/libs/Queries/Queries/allPosts";
import {
  getSinglePost,
  SinglePostSourceI,
} from "@/app/libs/Queries/Queries/singlePosts";
import { isMobileDevice } from "@/app/libs/UserAgent/UserAgent";
import NotFound from "@/app/not-found";
import type { Metadata } from "next";
import React, { Suspense } from "react";

export type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params)?.slug;
  const post: SinglePostSourceI = await getSinglePost(slug);

  if (post.postBy === null) {
    return {};
  }

  const {
    postBy: {
      title,
      content,
      date,
      tags: { nodes },
    },
  } = post;

  return {
    title: `${title} - Grude Online`,
    description: removeHtmlTags(content?.slice(0, 190) + " ..."),
    openGraph: {
      description: removeHtmlTags(content?.slice(0, 190) + " ..."),
      images: post?.postBy?.featuredImage?.node?.sourceUrl
        ? [post?.postBy?.featuredImage?.node?.sourceUrl]
        : "",
      type: "article",
      publishedTime: date,
      tags: nodes?.map((item) => item?.name),
      siteName: "Grude Online",
      url: `${grOnlineMainPath}/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const {
    posts: { nodes },
  } = posts;

  return nodes
    .filter((post) => post?.slug)
    .map((post: AllPostsI) => ({
      slug: post?.slug.toString(),
    }));
}

const SingleGospodarstvo = async ({ params }: Props) => {
  const isMobile = await isMobileDevice();
  const { slug } = await params;
  const thePost = await getSinglePost(slug);

  if (thePost.postBy === null) {
    console.error("Missing slug parameter");
    return <NotFound />;
  }

  const {
    postBy: { tags, commentStatus, postId },
  } = thePost;

  return (
    <div className="container">
      {isMobile && (
        <Suspense
          fallback={<h1 style={{ color: "white" }}>Loading Post ...</h1>}
        >
          <MobileSinglePost post={thePost?.postBy} />
        </Suspense>
      )}

      {!isMobile && <SinglePost post={thePost?.postBy} />}

      {isMobile && (
        <Suspense
          fallback={<h2 style={{ color: "white" }}>Loading Tags ...</h2>}
        >
          <MobileSinglePostTags tags={tags} />
        </Suspense>
      )}

      {isMobile && <PostSharingDetails slug={slug} />}

      {commentStatus === "open" && (
        <div className="row">
          <div className="col-md-8">
            {
              <>
                <RestComments
                  postId={Number(postId)}
                  color={isMobile ? "white" : "black"}
                />
                <CommentForm
                  color={isMobile ? "white" : "black"}
                  slug={slug}
                  id={postId}
                />
              </>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleGospodarstvo;
