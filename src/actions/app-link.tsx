export async function createAppLink({
  appId,
  title,
  url,
}: {
  appId: string;
  title: string;
  url: string;
}) {
  console.log(title);
  return { appId, title, url };
}
