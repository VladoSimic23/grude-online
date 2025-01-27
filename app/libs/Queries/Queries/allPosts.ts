import { CategoriesI, FeaturedImageI, TagsI } from "../../types/tsTypes";
import { fetchAPI } from "../FetchFunction/fetchGrudeOnlineData";

export interface AllPostsSourceI {
  posts: {
    nodes: {
      title: string;
      slug: string;
      content: string;
      date: string;
      postId: string;
      commentStatus: "closed" | "open";
      featuredImage: FeaturedImageI;
      categories: CategoriesI;
      tags: TagsI;
    }[];
  };
}
export interface AllPostsI {
  title: string;
  slug: string;
  content: string;
  date: string;
  postId: string;
  commentStatus: "closed" | "open";
  featuredImage: FeaturedImageI;
  categories: CategoriesI;
  tags: TagsI;
}

export async function getAllPosts() {
  const data = await fetchAPI<AllPostsSourceI>(`query NewQuery {
          posts {
            nodes {
              slug
              title
              content
              postId
              commentStatus
              featuredImage {
                node {
                  sourceUrl(size: LARGE)
                }
              }
              categories {
                edges {
                  node {
                    slug
                  }
                }
              }
              tags {
                nodes {
                  name
                }
              }
            }
          }
        }`);

  return data;
}
