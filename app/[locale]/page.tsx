import HomeComponent from "@/components/home";
import { LOCALES } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeComponent />;
}
