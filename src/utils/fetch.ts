const API_BASE_URL = 'https://api.spaceflightnewsapi.net';

export const getAll = async (url: string) => {
  try {
    const dataFromApi = await fetch(`${API_BASE_URL}/${url}`);

    return dataFromApi.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getById = async (url: string, id: number) => {
  try {
    const dataFromApi = await fetch(`${API_BASE_URL}/${url}/${id}`);

    return dataFromApi.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
};
