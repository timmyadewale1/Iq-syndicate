import type { Metadata } from "next";
import ApplyPage from "./page.client";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Submit your application to IQ Syndicate's climate finance programmes and partner channels, designed for founders, investors, and ecosystem collaborators.",
  keywords: [
    "apply climate finance",
    "African climate ventures",
    "investment readiness",
    "technical assistance application",
    "impact funding",
  ],
  alternates: {
    canonical: "https://iqsyndicate.org/apply",
  },
};

export const dynamic = "force-static";

export default function Page() {
  return <ApplyPage />;
}
