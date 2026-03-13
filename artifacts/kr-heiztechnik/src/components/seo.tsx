import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function Seo({ title, description, children }: SeoProps) {
  const siteName = "KR Heiztechnik Nuziders";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_AT" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <html lang="de" />
      {children}
    </Helmet>
  );
}
