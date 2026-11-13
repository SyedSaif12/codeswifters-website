import { OldClientLogos } from "@/components/old-home/OldClientLogos";
import { OldCtaBanner } from "@/components/old-home/OldCtaBanner";
import { OldHero } from "@/components/old-home/OldHero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { HomeProcess } from "@/components/sections/HomeProcess";
import { HomeReviews } from "@/components/sections/HomeReviews";
import { Services } from "@/components/sections/Services";
import { TrustBand } from "@/components/sections/TrustBand";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

// Only verifiable figures: headcount is owner-confirmed, the rest is counted
// from the site's own data so it can never drift from what is shown.
const facts = [
  {
    value: 25,
    suffix: "+",
    label: "Senior engineers",
    note: "Every product is built by our own team, under our supervision.",
  },
  {
    value: projects.length,
    label: "Products shipped",
    note: "Each one has a full case study.",
  },
  {
    value: testimonials.length,
    label: "Client reviews",
    note: "In the clients' own words.",
  },
  {
    value: site.offices.length,
    label: "Offices",
    note: "Milton, ON and Karachi.",
  },
];

export default function Home() {
  return (
    <>
      <OldHero showStats={false} />
      <TrustBand facts={facts} />
      <OldClientLogos />
      <Services />
      <HomeProcess />
      <FeaturedWork />
      <HomeReviews />
      <OldCtaBanner />
    </>
  );
}
