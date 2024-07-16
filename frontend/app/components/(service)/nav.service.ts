import { jwtDecode } from "jwt-decode";

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
