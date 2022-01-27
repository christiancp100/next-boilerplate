import Text from 'src/components/Text';

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-secondary text-4xl first-letter:text-6xl">
        Hello Next.JS
      </h1>
      <Text>by Atomics</Text>
    </div>
  );
}
