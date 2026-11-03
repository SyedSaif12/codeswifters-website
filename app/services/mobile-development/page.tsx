import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { getService } from "@/lib/services";

const service = getService("mobile-development")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.hero.description,
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
