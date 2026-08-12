import { useEffect } from "react";
export default function Analytics(){useEffect(()=>{const id=import.meta.env.VITE_GA4_MEASUREMENT_ID;if(!id)return;const script=document.createElement("script");script.async=true;script.src=`https://www.googletagmanager.com/gtag/js?id=${id}`;document.head.appendChild(script);window.dataLayer=window.dataLayer||[];function gtag(...args:unknown[]){window.dataLayer.push(args)}gtag("js",new Date());gtag("config",id);return()=>script.remove()},[]);return null}
declare global{interface Window{dataLayer:unknown[]}}
