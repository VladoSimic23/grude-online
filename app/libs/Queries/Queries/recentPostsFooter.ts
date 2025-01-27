import { fetchAPI } from "../FetchFunction/fetchGrudeOnlineData";

export interface RecentPostsFooterI {
  posts: {
    nodes: {
      title: string;
      slug: string;
    }[];
  };
}

export const getRecentPosts = async (numOfPosts: number) => {
  const data = await fetchAPI<RecentPostsFooterI>(`{
        posts(first: ${numOfPosts}) {
          nodes {
            title
            slug
          }
        }
      }`);

  return data;
};
