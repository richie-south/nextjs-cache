import "server-only";

export async function getData(id: string): Promise<{
  value: string;
}> {
  const res = await fetch(`http://localhost:8080/data.json?id=${id}`, {
    next: { revalidate: 10 },
    /* cache: "force-cache", */
  });
  return res.json();
}
