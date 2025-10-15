'use client'
import { useState, useEffect } from 'react';
import { fetchNews } from '@/features/news/api/NewsApi';

export function useFetchNews({ country = 'us', category, q }) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

useEffect(() => {
  const loadNews = async () => {
    setIsLoading(true);
    try {
      const params = { country };
      if (category) params.category = category;
      const articles = await fetchNews(params);
      setNews(articles);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  loadNews();
}, [country, category]);


  return { news, isLoading, error };
}
