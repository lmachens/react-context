export const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();
  return result;
};
