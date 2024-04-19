type Movie = { // 응답 결과 타이핑
  Title: string
  Plot: string
}

export default async function MovieDetails({
  params,
  searchParams // 쿼리스트링
}: {
  params: { movieId: string }
  searchParams: { plot?: 'short' | 'full' }
}) {
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&i=${params.movieId}&plot=${searchParams.plot || 'short'}`)
  const movie: Movie = await res.json()
  return (
    <>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
    </>
  )
}