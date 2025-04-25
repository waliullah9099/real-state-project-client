"use server";

export const registerUser = async (formData: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
    {
      method: "POST",
      body: formData,
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
      cache: "no-store",

    }
  );

  const userInfo = await res.json();
  console.log("userInfo", userInfo);
  
  return userInfo;
};
