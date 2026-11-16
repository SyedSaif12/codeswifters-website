import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { pageMetadata } from "@/lib/seo";
import { getService } from "@/lib/services";

const service = getService("web-applications")!;

export const metadata: Metadata = pageMetadata({
  title: "Custom Web Application Development",
  description: service.hero.description,
  path: service.href,
  image: service.hero.image,
});

export default function Page() {
  return <ServiceDetail service={service} />;
}
