import { redirect } from "next/navigation";
import { comments } from "../../../../../public/data/comments";
export async function GET(request, { params }) {
  const { id } = params;

  if (parseInt(id) > comments.length) {
    redirect("/api/hello");
  }

  const comment = comments.find((comment) => comment.id === parseInt(id));

  return Response.json(comment);
}

export async function PATCH(request, { params }) {
  const comment = await request.json();
  const { id } = params;

  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );

  comments[commentIndex].content = comment.content;

  return Response.json(comments[commentIndex]);
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );

  const deletedComment = comments[commentIndex];

  comments.splice(commentIndex, 1);

  return Response.json(deletedComment);
}
