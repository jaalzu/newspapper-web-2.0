// features/news/api/NewsApi.js
export async function fetchNews(params = {}) {
  try {
    // 🔹 Variable de entorno para Next.js (frontend y server)
    const apiKey = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;

    if (!apiKey) {
      throw new Error('API key not configured');
    }

    // 🔹 Construir URL dinámicamente
    let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=${params.country || 'us'}`;
    if (params.category) url += `&category=${params.category}`;
    if (params.q) url += `&q=${params.q}`;

    // 🔹 Timeout opcional (8 segundos)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`NewsData returned ${response.status}`);
    }

    const data = await response.json();

    // 🔹 Retornar artículos (array vacío si no hay)
    return data.results || [];
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    if (error instanceof TypeError) {
      throw new Error('Network error');
    }
    throw new Error(error.message || 'Error fetching news');
  }
}
