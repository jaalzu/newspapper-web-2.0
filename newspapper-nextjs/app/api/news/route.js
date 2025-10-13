// Este archivo reemplaza tu call directo a newsapi desde el cliente

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const seccion = searchParams.get('seccion')
  
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${seccion}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    )
    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Error fetching news' }, { status: 500 })
  }
}