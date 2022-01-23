export const fetchApi = async (apiUrl: string) => {
  try {
    const response = await fetch(apiUrl);
    return response.json();
  } catch (_error) {
    throw new Error("fail to fetch api");
  }
};
