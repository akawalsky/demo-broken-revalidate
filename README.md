`npm i`

`npm run build`

`npm run start`

Open the browser and visit localhost:3006

Will use cache on refresh (you can tell based on the random numbers)

Revalidate cache with

`curl -X POST http://localhost:3006/api/revalidate -d '{"tags": ["pokemon/pikachu"]}' -H "Content-Type: application/json"`

This will always work locally, but its basically an exact corollary with the issue we're seeing in Vercel.

Hypothetically it should break in production as well.
