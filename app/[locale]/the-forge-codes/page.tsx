import ForgeHubPage from "@/components/forge/ForgeHubPage";
import { Locale, LOCALES } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TheForgeCodes" });

  return constructMetadata({
    page: "TheForgeCodes",
    title: t("title"),
    description: t("description"),
    keywords: [
      "the forge codes", "the forge codes today", "the forge roblox codes",
      "codes for the forge roblox", "the forge codes list", "the forge active codes",
    ],
    locale: locale as Locale,
    path: "/the-forge-codes",
    canonicalUrl: "/the-forge-codes",
  });
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function TheForgeCodesPage({
  params,
}: {
  params: Params;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ForgeHubPage />;
}
