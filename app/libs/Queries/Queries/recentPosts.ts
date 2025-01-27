import { CategoriesI, CommentsI, FeaturedImageI } from "../../types/tsTypes";
import { fetchAPI } from "../FetchFunction/fetchGrudeOnlineData";

export interface RecentPostsSourceI {
  posts: {
    nodes: {
      title: string;
      slug: string;
      date: string;
      content: string;
      featuredImage: FeaturedImageI;
      comments: CommentsI;
      categories: CategoriesI;
    }[];
  };
}
export interface RecentPostsI {
  title: string;
  slug: string;
  date: string;
  content: string;
  featuredImage: FeaturedImageI;
  comments: CommentsI;
  categories: CategoriesI;
}

export const getRecentPostsHomepage = async (numOfPosts: number) => {
  const data = await fetchAPI<RecentPostsSourceI>(`{
        posts(first: ${numOfPosts}) {
          nodes {
            title
            slug
            date
            content
            featuredImage {
              node {
                sourceUrl(size: MEDIUM)
              }
            }
            comments(first:500) {
              nodes {
                content

              }
            }
            categories {
              edges {
                node {
                  slug
                }
              }
            }
          }
        }
      }`);

  return data;
};
