import SectionHeading from "./SectionHeading";

interface APILink {
  name: string;
  url: string;
  description: string;
}

const apiLinks: APILink[] = [
  {
    name: "cataas.com",
    url: "https://cataas.com/",
    description: "Cat as a Service API for random cat images",
  },
  {
    name: "dog.ceo",
    url: "https://dog.ceo/dog-api/",
    description: "Dog CEO API for random dog images",
  },
];

export default function APIsSection() {
  return (
    <>
      <SectionHeading>APIs Used</SectionHeading>
      <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-2">
        {apiLinks.map((api) => (
          <li key={api.name}>
            <a
              href={api.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {api.name}
            </a>{" "}
            - {api.description}
          </li>
        ))}
      </ul>
    </>
  );
}
