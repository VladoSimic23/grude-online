import { fetchAPI } from "../FetchFunction/fetchGrudeOnlineData";

export interface IzdvojenoMobileI {
  slug: string;
  title: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}
export interface IzdvojenoSourceMobileI {
  posts: {
    nodes: {
      slug: string;
      title: string;
      content: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      };
    }[];
  };
}

export async function getMobileIzdvojeno(category: string, numOfPosts: number) {
  const data = await fetchAPI<IzdvojenoSourceMobileI>(`query NewQuery {
      posts(first: ${numOfPosts}, where: {categoryName: "${category}"}) {     
          nodes {
            slug
            title
            content 
            featuredImage {
              node {
                sourceUrl(size: LARGE)
              }
            }
          }
        
      }
    }`);

  return data;
}
