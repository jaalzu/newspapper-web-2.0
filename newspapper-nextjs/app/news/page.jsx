'use client'

import NewsList from '@/features/news/components/NewsList';

export default function NewsHomePage() {
  const apiCategory = undefined; // Últimas noticias (sin categoría)

  return (
    <main className="min-h-screen bg-[var(--color-bg)] p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl mb-6 text-center">Últimas Noticias</h1>
        <NewsList country="us" category={apiCategory} />
      </div>
    </main>
  );
}
