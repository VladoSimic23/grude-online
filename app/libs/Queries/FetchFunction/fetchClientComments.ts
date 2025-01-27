import { temporaryApiUrl } from "../../GrudeOnlineURLs/grudeOnlineURLs";
import { fetchAPI } from "./fetchGrudeOnlineData";

export interface CommentCountSourceI {
  data: {
    comments: {
      nodes: {
        commentId: number;
      }[];
    };
  };
}

export const fetchClientComments = async (contentName: string) => {
  try {
    const response = await fetch(temporaryApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query NewQuery {
            comments(first:100, where: {contentName: "${contentName}"}) {
              nodes {         
                commentId           
              }
            }
          }`,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result: CommentCountSourceI = await response.json();
    return result?.data?.comments?.nodes;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export interface ClientCommentsDetailedI {
  comments: {
    nodes: {
      content: string;
      date: string;
      author: {
        node: {
          name: string;
        };
      };
    }[];
  };
}

export interface ClientCommentsShortI {
  nodes: {
    content: string;
    date: string;
    author: {
      node: {
        name: string;
      };
    };
  }[];
}

export interface ClientCommentsContent {
  content: string;
  date: string;
  author: {
    node: {
      name: string;
    };
  };
}

export const fetchClientCommentsDetailed = async (contentName: string) => {
  const data = await fetchAPI<ClientCommentsDetailedI>(
    `query NewQuery {
            comments(first:100, where: {contentName: "${contentName}"}) {
              nodes {         
                content
                date
                author {
                  node {
                    name
                  }
                }          
              }
            }
          }`
  );
  return data;
};
