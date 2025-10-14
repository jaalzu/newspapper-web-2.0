'use client' // necesario porque usás hooks
import NewsCard from '@/features/news/components/NewsCard'
import { useFetchNews } from '@/features/news/hooks/useFetchNews'
import NewsListSkeleton from '@/features/news/components/NewsList/NewsListSkeleton'


export default function NewsList({ country, category, q }) {
  const { news, isLoading, error } = useFetchNews({ country, category, q })

  if (isLoading) return <NewsListSkeleton />
  if (error) return <p className="text-center text-red-500">{error}</p>

  const featuredArticle = news[0]
  const secondArticle = news[1]
  const remainingArticles = news.slice(2)

  return (
    <div className="news-layout">
      {/* Layout desktop */}
      <div className="hidden sm:block">
        <div className="flex gap-8 mb-8 max-w-6xl mx-auto">
          {/* Primera noticia grande */}
          <div className="w-8/12">
            {featuredArticle && <NewsCard article={featuredArticle} large />}
          </div>

          {/* Segunda noticia */}
          <div className="w-4/12">
            {secondArticle && <NewsCard article={secondArticle} />}
          </div>
        </div>

        {/* Resto de noticias en grid */}
        {remainingArticles.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 grid-cols-3">
              {remainingArticles.map((article,index) => (
                <NewsCard key={`${article.url}-${index}`} article={article} compact />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Layout mobile */}
      <div className="lg:hidden">
        {featuredArticle && (
          <div className="mb-10">
            <NewsCard article={featuredArticle} />
          </div>
        )}

        {remainingArticles.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2">
            {remainingArticles.map((article,index) => (
              <NewsCard key={`${article.url}-${index}`} article={article} compact />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
