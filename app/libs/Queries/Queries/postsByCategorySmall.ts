import { CategoriesI, CommentsI, FeaturedImageI } from "../../types/tsTypes";
import { fetchAPI } from "../FetchFunction/fetchGrudeOnlineData";

export interface PostsByCategorySourceI {
  posts: {
    nodes: {
      slug: string;
      title: string;
      date: string;
      featuredImage: FeaturedImageI;
      categories: CategoriesI;
      comments: CommentsI;
    }[];
  };
}

export interface PostsByCategoryI {
  slug: string;
  title: string;
  date: string;
  featuredImage: FeaturedImageI;
  categories: CategoriesI;
  comments: CommentsI;
}

export async function getPostsByCategorySmall(
  category: string,
  numOfPosts: number,
  size: string
) {
  const data = await fetchAPI<PostsByCategorySourceI>(`query NewQuery {
      posts(first: ${numOfPosts}, where: {categoryName: "${category}"}) {
          nodes {
            slug
            title
            date
            featuredImage {
              node {
                sourceUrl(size: ${size})
              }
            }
            categories {
              edges {
                node {
                  slug
                }
              }
            }
              comments(first:500) {
                nodes {
                commentId
                }
              }
          }

      }
    }`);

  return data;
}
