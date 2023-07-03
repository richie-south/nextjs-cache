import { Metadata, ResolvingMetadata } from "next";
import { getData } from "./lib";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData("6");

  return {
    title: data.value,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData("6");

  return (
    <html lang="en">
      <body>
        {data.value}
        {children}
      </body>
    </html>
  );
}
