interface Introduction {
  title: string;
  description: string;
}


interface IntroductionProps {
  introduction: Introduction
}


export default function Introduction({ introduction }: IntroductionProps) {
  return (
    <section className="mt-8 border-[color:var(--border)] rounded-3xl border-2 border-solid bg-[color:var(--surface)] p-6">
      <h2 className="mb-3 text-2xl font-bold ">{introduction.title}</h2>

      <p className="text-lg leading-relaxed text-blue-300">{introduction.description}</p>
    </section>
  )
}