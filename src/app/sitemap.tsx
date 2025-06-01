import type { MetadataRoute } from 'next'
import { settings } from '@/settings'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: settings.base_url,
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 1,
  }
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [...staticRoutes]

  return routes.filter(entry => entry && entry.url)
}