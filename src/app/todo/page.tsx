import Link from "next/link";
import { getData } from "../lib";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData("6");

  return {
    title: data.value,
  };
}

export default async function Page() {
  const data = await getData("6");

  return (
    <div>
      <h1>Todo page</h1>

      <Link href={"/"}>home</Link>
      <p>{data.value}</p>
    </div>
  );
}
