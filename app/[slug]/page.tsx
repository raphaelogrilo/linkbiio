import { notFound } from "next/navigation";
import { getClient, getAllSlugs } from "@/lib/getClient";
import LinkBioPage from "@/components/LinkBioPage";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return {};
  return {
    title: client.fullName,
    description: client.tagline,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();
  return <LinkBioPage client={client} />;
}
