import { Link, useParams } from "react-router-dom";

import { subjects } from "../data/subjects";
import MainLayout from "../layouts/MainLayout";

export default function SubjectPage() {
  const { subjectId } = useParams();

  const subject = subjects.find((item) => item.id === subjectId);

  if (!subject) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-center">
        <p className="text-lg font-semibold text-primary">Subject not found.</p>
      </div>
    );
  }

  return (
    <MainLayout title={subject.name}>
      <section className="mb-8 sm:mb-10">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent sm:text-sm">
          Subject library
        </span>

        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl md:text-5xl">
          Select a grade
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Choose a grade to explore its books, chapters, and practice
          materials.
        </p>
      </section>

      <section
        aria-label="Available grades"
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
      >
        {subject.grades.map((grade) => (
          <Link
            key={grade.id}
            to={`/subject/${subject.id}/${grade.id}`}
            className="group flex min-h-28 items-center justify-center rounded-2xl border border-primary-light bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary-light hover:shadow-lg focus-visible:outline-none sm:min-h-36 sm:p-6"
          >
            <span className="text-base font-bold text-primary transition-colors group-hover:text-primary-dark sm:text-xl">
              {grade.name}
            </span>
          </Link>
        ))}
      </section>
    </MainLayout>
  );
}