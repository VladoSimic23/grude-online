import { fetchAPI } from "../FetchFunction/fetchGrudeOnlineData";

type Node = {
  id: string;
  content: string;
  author: {
    node: {
      name: string;
    };
  };
  date: string;
  commentedOn: {
    node: {
      title: string;
      slug: string;
    };
  } | null;
};

type NodesResponse = {
  comments: {
    nodes: Node[];
  };
};

export async function getRecentComments(numOfComments: number) {
  const data = await fetchAPI<NodesResponse>(`{
      comments(first: ${numOfComments}) {
        nodes {
          id
          content
          author {
            node {
              name
            }
          }
          date
          commentedOn {
            node {
              ... on Post {
                title
                slug
              }
            }
          }
        }
      }
    }`);
  return data;
}
