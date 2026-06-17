import clients from "@/data/clients.json";

export type Client = (typeof clients)[number];

export function getClient(slug: string): Client | null {
  return clients.find((c) => c.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return clients.map((c) => c.slug);
}
