import axios from "axios";

const apiUrl = "http://localhost:8000/api/auth/";

/** 로그아웃 시 DB RefreshToken 삭제 API 요청 */
export const deleteRefreshToken = async (accessToken: string) => {
  try {
    const url = `${apiUrl}log-out`;
    return await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};
