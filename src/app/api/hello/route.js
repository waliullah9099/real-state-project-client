import { headers } from "next/headers";
import { comments } from "../../../../public/data/comments";

export async function GET(request) {
  const headerList = headers();
  // console.log(headerList.get("Authorization"));

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (query) {
    const filterData = await comments.filter((comment) =>
      comment.content.toLocaleLowerCase().includes(query)
    );
    return Response.json(filterData);
  }

  return Response.json(comments);
}

export async function POST(request) {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    content: comment.content,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
