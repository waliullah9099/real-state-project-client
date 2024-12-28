import { cookies } from "next/headers";

export async function GET() {
  cookies().set("tahar-nam", "Habiba");

  //   console.log(request.cookies.get("theme"));

  console.log(cookies().get("tahar-nam"));

  return Response.json("Profile API", {
    // headers: {
    //   "Set-Cookie": "theme=dark",
    // },
  });
}
