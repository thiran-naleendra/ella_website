/* eslint-disable react-refresh/only-export-components */
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE = "https://radeshatours.com";
const DEFAULT_IMAGE = "https://images.pexels.com/photos/12147639/pexels-photo-12147639.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop";

type SeoProps = { title: string; description: string; path?: string; schema?: Record<string, unknown> | Record<string, unknown>[] };

export function SeoHead({ title, description, path, schema }: SeoProps) {
  const location = useLocation();
  const canonicalPath = path ?? location.pathname;
  const url = `${SITE}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const crumbs = canonicalPath.split("/").filter(Boolean);
  const breadcrumb = crumbs.length ? {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` }, ...crumbs.map((part, index) => ({
      "@type": "ListItem", position: index + 2, name: part.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()), item: `${SITE}/${crumbs.slice(0,index+1).join("/")}`
    }))]
  } : null;
  const schemas = [...(Array.isArray(schema) ? schema : schema ? [schema] : []), ...(breadcrumb ? [breadcrumb] : [])];
  return <Helmet>
    <title>{title}</title><meta name="description" content={description}/><link rel="canonical" href={url}/>
    <meta property="og:type" content="website"/><meta property="og:site_name" content="Radesha Tours"/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:image" content={DEFAULT_IMAGE}/><meta property="og:url" content={url}/>
    <meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content={title}/><meta name="twitter:description" content={description}/><meta name="twitter:image" content={DEFAULT_IMAGE}/>
    {schemas.map((item,index)=><script key={index} type="application/ld+json">{JSON.stringify(item)}</script>)}
  </Helmet>;
}

export const businessSchema = {
  "@context":"https://schema.org", "@type":"TravelAgency", name:"Radesha Tours", url:`${SITE}/`,
  telephone:"+94758110086", email:"info@radeshatours.com",
  address:{"@type":"PostalAddress",addressLocality:"Ella",addressCountry:"LK"},
  areaServed:{"@type":"Country",name:"Sri Lanka"},
  hasOfferCatalog:{"@type":"OfferCatalog",name:"Travel services",itemListElement:["Airport Transfers","Private Tours","Safari Tours","Car Rentals","Scooter Rentals","Custom Tours"].map(name=>({"@type":"OfferCatalog",name}))}
};

export const websiteSchema = {"@context":"https://schema.org","@type":"WebSite",name:"Radesha Tours",url:`${SITE}/`};
