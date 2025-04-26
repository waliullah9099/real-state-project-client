import { authkey } from "@/constants/authkey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/localStroge";

export const storeUserInfo = (token: string) => {
  return setToLocalStorage(authkey, token);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authkey);

  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authkey);
  if (authToken) {
    return !!authToken;
  }
};


export const removeUser = () => {
    return removeFromLocalStorage(authkey)
}