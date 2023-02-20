import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "m407z1ye",
  dataset: "mydata",
  apiVersion: "2023-02-13",
  useCdn: true,
});

export default client;
