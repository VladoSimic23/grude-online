"use client";
import { SetStateAction, useState } from "react";
import commentStyles from "./commentsCss/comments.module.css";
import { submitComment } from "@/app/libs/Queries/Queries/submitComment";

const CommentForm = ({
  id,
  color,
}: {
  slug: string;
  id: string;
  color: string;
}) => {
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const formattedComment = comment.replace(/\n/g, "\\n");

  const handleCommentChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setComment(e.target.value);
  };

  const handleUsernameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await submitComment(Number(id), formattedComment, username);
      window.location.reload();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }

    setComment("");
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit} className={commentStyles.commentForm}>
      <h3 style={{ color: color, marginBottom: "20px", marginTop: "50px" }}>
        Ostavi komentar
      </h3>
      <textarea
        placeholder="Tvoj komentar..."
        value={comment}
        onChange={handleCommentChange}
        rows={5}
        name="Komentar"
      />
      <br />
      <input
        placeholder="Ime"
        name="Ime"
        type="text"
        value={username}
        onChange={handleUsernameChange}
      />
      <br />

      <div>
        <button type="submit">Objavi</button>
      </div>
    </form>
  );
};

export default CommentForm;
