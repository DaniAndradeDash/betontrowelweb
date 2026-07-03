import type { MetadataRoute } from "next";
import {
  compactadoras,
  herramientasConcreto,
  maquinaAcabado,
  vibradores,
} from "@/data/Productos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://betontrowel.mx";

  // Páginas estáticas
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${baseUrl}/acabado-de-concreto`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/herramientas-de-concreto`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/compactacion`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/vibracion`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/avisoPrivacidad`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  // Páginas dinámicas de productos
  const acabadoPages = maquinaAcabado.map((p) => ({
    url: `${baseUrl}/acabado-de-concreto/${encodeURIComponent(p.ref)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const herramientaPages = herramientasConcreto.map((p) => ({
    url: `${baseUrl}/herramientas-de-concreto/${encodeURIComponent(p.ref)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const compactacionPages = compactadoras.map((p) => ({
    url: `${baseUrl}/compactacion/${encodeURIComponent(p.ref)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const vibracionPages = vibradores.map((p) => ({
    url: `${baseUrl}/vibracion/${encodeURIComponent(p.ref)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...acabadoPages,
    ...herramientaPages,
    ...compactacionPages,
    ...vibracionPages,
  ];
}
