import Introduction from "@/components/Introduction";
const introduction = {
  title: "Greetings! My name is Brandon. ",
  description: "I am from Southern California. I love to play soccer (futbol), swim, run, and go to the beach. My favorite music artist is Jack Johnson and my favorite band is blink-182. I am looking forward to learning about the full-stack of web development. "
}



export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>

      <p className="text-lg text-gray-700">
        This about page shares more information about my background and work.
      </p>

      <Introduction introduction={introduction} />
    </main>
  );
}