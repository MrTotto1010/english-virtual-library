import { Link } from "react-router-dom";

import airplane from "../assets/home/airplane.svg";
import openBook from "../assets/home/book.svg";
import books from "../assets/home/books.svg";
import stars from "../assets/home/stars.svg";

import { subjects } from "../data/subjects";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream">
      <main className="relative isolate min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        {/* Decorative blue shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-24 -z-10 h-64 w-64 rounded-full bg-primary-light/70 sm:-left-32 sm:top-36 sm:h-80 sm:w-80"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 -z-10 h-80 w-80 rounded-full bg-primary-light/80 sm:-right-40 sm:-top-32 sm:h-96 sm:w-96"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-72 w-72 rotate-[-25deg] rounded-[42%] bg-primary-light/75 sm:-bottom-40 sm:-left-32 sm:h-96 sm:w-96"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-24 -z-10 h-72 w-72 rotate-[25deg] rounded-[45%] bg-primary-light/80 sm:-bottom-40 sm:-right-32 sm:h-96 sm:w-96"
        />

        {/* Main content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <section className="mb-8 text-center sm:mb-10 md:mb-12">
            <span className="mb-3 inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary sm:text-sm">
              English Learning Resources
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-primary sm:text-5xl md:text-6xl">
              Virtual Library
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
              Access your books, exercises, and learning resources quickly and
              easily.
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-accent" />
          </section>

          <section
            aria-label="Available subjects"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                to={`/subject/${subject.id}`}
                className="group flex min-h-28 items-center justify-center rounded-2xl border border-primary-light bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-none sm:min-h-32"
              >
                <span className="text-base font-bold text-primary transition-colors group-hover:text-primary-dark sm:text-lg">
                  {subject.name}
                </span>

                <span
                  aria-hidden="true"
                  className="ml-3 text-lg text-primary transition-transform duration-300 group-hover:translate-x-1 sm:text-xl"
                >
                  →
                </span>
              </Link>
            ))}
          </section>
        </div>

        {/* Decorative illustrations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          {/* Stars */}
          <img
            src={stars}
            alt=""
            className="absolute left-4 top-[43%] w-20 opacity-90 sm:left-[20%] sm:top-[56%] sm:w-24 md:left-[21%] md:top-[58%] md:w-28"
          />

          {/* Paper airplane */}
          <img
            src={airplane}
            alt=""
            className="absolute right-[-0.75rem] top-[42%] w-40 opacity-95 sm:right-[8%] sm:top-[53%] sm:w-52 md:right-[9%] md:top-[54%] md:w-60"
          />

          {/* Stack of books and mug */}
          <img
            src={books}
            alt=""
            className="absolute bottom-[-0.75rem] left-[-0.75rem] w-44 max-w-[48%] sm:bottom-[-1.25rem] sm:left-[8%] sm:w-64 md:bottom-[-1.5rem] md:left-[18%] md:w-80"
          />

          {/* Open book */}
          <img
            src={openBook}
            alt=""
            className="absolute bottom-[-0.75rem] right-[-0.75rem] w-48 max-w-[52%] sm:bottom-[-1.25rem] sm:right-[7%] sm:w-64 md:bottom-[-1.5rem] md:right-[10%] md:w-80"
          />
        </div>
      </main>
    </div>
  );
}