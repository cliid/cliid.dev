export default async function fetcher<JSON = any>(
  // eslint-disable-next-line no-undef
  input: RequestInfo,
  // eslint-disable-next-line no-undef
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
