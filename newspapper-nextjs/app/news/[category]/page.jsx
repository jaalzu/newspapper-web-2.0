'use client'

import { use, useMemo } from 'react';
import { categoryMap } from '@/features/news/constants/categoryMap';
import NewsList from '@/features/news/components/NewsList';

export default function NewsCategoryPage({ params }) {
  const { category } = use(params); // ← Unwrap la Promise

  const apiCategory = useMemo(
    () => categoryMap[category.toLowerCase()] || undefined,
    [category]
  );

  return (
    <NewsList country="us" category={apiCategory} />
  );
}