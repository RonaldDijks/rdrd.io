import EmailButton from "@/components/email-button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-8 max-w-(--breakpoint-sm)">
      <div className="mb-12 flex">
        <Link
          href="/"
          className="block font-mono font-bold text-5xl transition-transform ease-in-out duration-300 hover:scale-110"
        >
          <span>rd</span>
          <span className="animate-rainbow text-logo">rd</span>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Ronald Dijks</h1>
        <div className="flex gap-4 text-sm text-muted">
          <a
            className="underline decoration-dotted"
            href="https://github.com/RonaldDijks"
          >
            GitHub
          </a>
          <a
            className="underline decoration-dotted"
            href="https://www.linkedin.com/in/ronalddijks/"
          >
            LinkedIn
          </a>
          <EmailButton className="underline decoration-dotted" />
          {/* <button>Download</button> */}
        </div>
        <p className="text-sm text-muted">
          I&apos;m a developer specializing in creating intuitive,
          high-performance software and websites that are both functional and
          visually appealing. I am passionate about usability and aesthetics in
          software and technology. I play with audio, embedded and web
          technologies.
        </p>
      </div>
    </main>
  );
}
