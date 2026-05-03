import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default function robots(): MetadataRoute.Robots {
  const headersList = headers()
  const host = headersList.get('host') || ''

  // Проверяем, начинается ли адрес с 'dev.'
  const isDevSubdomain = host.startsWith('dev.')

  if (isDevSubdomain) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/', // Полный запрет индексации для dev-стенда
      },
    }
  }

  // Правила для основного домена (production)
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/'],
    },
    sitemap: `https://${host}/sitemap.xml`,
  }
}
