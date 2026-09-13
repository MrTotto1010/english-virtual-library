import { Link, useParams } from "react-router-dom";

import { subjects } from "../data/subjects";
import MainLayout from "../layouts/MainLayout";

export default function GradePage() {
  const { subjectId, gradeId } = useParams();

  const subject = subjects.find((item) => item.id === subjectId);
  const grade = subject?.grades.find((item) => item.id === gradeId);

  if (!subject || !grade) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-center">
        <p className="text-lg font-semibold text-primary">
          Grade not found.
        </p>
      </div>
    );
  }

  return (
    <MainLayout title={`${subject.name} - ${grade.name}`}>
      <section className="mb-8 sm:mb-10">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent sm:text-sm">
          Grade library
        </span>

        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl md:text-5xl">
          Select a section
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Explore the books, chapters, and practice materials available for
          this grade.
        </p>
      </section>

      <section
        aria-label="Available sections"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {grade.sections.map((section) => (
          <Link
            key={section.id}
            to={`/subject/${subject.id}/${grade.id}/${section.id}`}
            className="group flex min-h-32 items-center justify-center rounded-2xl border border-primary-light bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary-light hover:shadow-lg focus-visible:outline-none sm:min-h-40"
          >
            <span className="text-lg font-bold text-primary transition-colors group-hover:text-primary-dark sm:text-xl">
              {section.title}
            </span>
          </Link>
        ))}
      </section>
    </MainLayout>
  );
}