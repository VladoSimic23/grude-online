import { fetchClientComments } from "@/app/libs/Queries/FetchFunction/fetchClientComments";

const CommentCount = async ({
  slug,
  color,
  fontSize,
}: {
  slug: string;
  color: string;
  fontSize: string;
}) => {
  const commentCount = await fetchClientComments(slug);

  return (
    <span style={{ fontWeight: "600" }}>
      {commentCount?.length}
      <i
        style={{
          color: color,
          marginLeft: "4px",
          fontSize: fontSize,
        }}
        className="bi bi-chat-left"
      ></i>
    </span>
  );
};

export default CommentCount;
