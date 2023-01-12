const API_BASE_URL = 'https://api.spaceflightnewsapi.net';

export const getAll = async (url: string) => {
  const response = await fetch(`${API_BASE_URL}/${url}`);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};

export const getById = async (url: string, id: number) => {
  const response = await fetch(`${API_BASE_URL}/${url}/${id}`);

  if (!response.ok) {
    throw new Error();
  }

  return response.json();
};
