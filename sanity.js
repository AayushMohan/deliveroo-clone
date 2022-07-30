import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url/";

const client = sanityClient({
  projectId: "k7gbqbry",
  dataset: "production",
  useCdn: true,
  apiVersion: "2020-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Run THIS to add exception for localhost 3000 CORS policy
// Sanity cors add http://localhost:3000

export default client;
