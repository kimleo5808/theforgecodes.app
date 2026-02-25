import MDXComponents from "@/components/mdx/MDXComponents";
import { BASE_URL } from "@/config/site";
import { Locale, LOCALES } from "@/i18n/routing";
import { breadcrumbSchema, JsonLd } from "@/lib/jsonld";
import { constructMetadata } from "@/lib/metadata";
import fs from "fs/promises";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import path from "path";
import remarkGfm from "remark-gfm";

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

async function getMDXContent(locale: string) {
  const filePath = path.join(process.cwd(), "content", "the-forge-quests-guide", `${locale}.mdx`);
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error reading MDX file: ${error}`);
    return "";
  }
}

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "QuestsGuide" });

  return constructMetadata({
    page: "QuestsGuide",
    title: t("title"),
    description: t("description"),
    keywords: [
      "the forge quests", "the forge all quests", "the forge quest guide",
      "the forge quest list", "the forge quest rewards", "the forge roblox quests",
      "the forge quest walkthrough",
    ],
    locale: locale as Locale,
    path: "/the-forge-quests-guide",
    canonicalUrl: "/the-forge-quests-guide",
  });
}

export default async function QuestsGuidePage({ params }: { params: Params }) {
  const { locale } = await params;
  const content = await getMDXContent(locale);

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "The Forge Wiki", url: `${BASE_URL}/the-forge-wiki` },
          { name: "Quests Guide", url: `${BASE_URL}/the-forge-quests-guide` },
        ])}
      />
      <header className="relative overflow-hidden rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 p-6 dark:border-indigo-900/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-violet-200/30 blur-3xl" />
        <h1 className="relative font-heading text-3xl font-black text-slate-900 dark:text-slate-100 sm:text-4xl">
          All Quests in The Forge — Complete Guide & Rewards
        </h1>
        <p className="relative mt-4 text-slate-700 dark:text-slate-300">
          Full quest list for The Forge on Roblox with NPC locations, objectives, rewards, and recommended completion order.
        </p>
      </header>
      <article className="rounded-2xl border border-indigo-100 bg-white p-6 dark:border-indigo-900/40 dark:bg-slate-950 sm:p-8">
        <MDXRemote source={content} components={MDXComponents} options={options} />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
