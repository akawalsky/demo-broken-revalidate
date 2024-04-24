interface PokemonPageProps {
  params: {
    pokemon: string;
  };
}

export default async function PokemonPage({
  params: { pokemon },
}: PokemonPageProps) {
  const pokedata = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
    cache: "force-cache",
    next: { tags: [`pokemon/${pokemon}`] },
  }).then((res) => res.json());

  const randomData = await fetch(
    `http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5`,
    {
      cache: "force-cache",
      next: { tags: [`pokemon/${pokemon}`] },
    }
  ).then((res) => res.json());

  return (
    <main>
      <h1>{pokemon}</h1>
      <ul>
        {randomData.map((num: any) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      {pokedata && <pre>{JSON.stringify(pokedata, null, 2)}</pre>}
    </main>
  );
}
