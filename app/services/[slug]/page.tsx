import { ServicePage } from "@/feature/Services/page";

export default async function ServicesDetails({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  console.log({ slug });
  return <ServicePage />;
}
