export async function POST(req: Request) {
  const body: {query: String} = await req.json();
  console.log(body.query);
  const data = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${body.query}&search_precise=true`
  ).then((data) => data.json());

  return new Response(JSON.stringify(data))
}

// Link to API Docs for Game Search API
// https://api.rawg.io/docs/