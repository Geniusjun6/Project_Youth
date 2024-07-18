import { jwtDecode } from "jwt-decode";
import Cookie from "js-cookie";

interface DecodedToken {
  exp: number;
  sub: string;
  iss: string;
}

export const verifyAccessToken = (accessToken: string) => {
  try {
    const decodedToken = jwtDecode<DecodedToken>(accessToken);

    const isTokenValid: boolean = decodedToken.exp * 1000 > Date.now();

    return isTokenValid;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const verifyRefreshToken = (refreshToken: string) => {
  try {
    const decodedToken = jwtDecode<DecodedToken>(refreshToken);

    const isTokenValid: boolean = decodedToken.exp * 1000 > Date.now();

    return isTokenValid;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

export function getRefreshTokenFromCookie() {
  // 쿠키 문자열을 가져옵니다.
  const cookieString: string = document.cookie;

  // 쿠키 문자열을 세미콜론으로 분할합니다.
  const cookies: string[] = cookieString.split(";");

  // 주어진 이름에 해당하는 쿠키를 찾습니다.
  for (let i = 0; i < cookies.length; i++) {
    const cookie: string = cookies[i].trim(); // 좌우 공백 제거

    // 쿠키의 이름과 값으로 나눕니다.
    const [cookieName, refreshToken] = cookie.split("=");

    // 주어진 이름에 해당하는 쿠키를 찾으면 해당 값을 반환합니다.
    if (cookieName === "refreshToken") {
      return refreshToken;
    }
  }
  // 주어진 이름에 해당하는 쿠키를 찾지 못한 경우 null을 반환합니다.
  return null;
}

export const deleteTokens = () => {
  localStorage.removeItem("accessToken");
  document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
};
