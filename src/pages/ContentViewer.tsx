import { useParams } from "react-router-dom";

import { subjects } from "../data/subjects";
import ResourceCard from "../components/ResourceCard";
import MainLayout from "../layouts/MainLayout";

export default function ContentViewer() {
  const { subjectId, gradeId, contentId } = useParams();

  const subject = subjects.find((item) => item.id === subjectId);
  const grade = subject?.grades.find((item) => item.id === gradeId);
  const section = grade?.sections.find((item) => item.id === contentId);

  if (!subject || !grade || !section) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-center">
        <p className="text-lg font-semibold text-primary">
          Resource section not found.
        </p>
      </div>
    );
  }

  return (
    <MainLayout title={`${subject.name} - ${grade.name}`}>
      <section className="mb-8 sm:mb-10">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent sm:text-sm">
          Learning resources
        </span>

        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-primary sm:text-4xl md:text-5xl">
          {section.title}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Choose a resource to open or download the corresponding PDF.
        </p>
      </section>

      {section.resources.length > 0 ? (
        <section
          aria-label="Available resources"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
        >
          {section.resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              cover={resource.cover}
              pdf={resource.pdf}
            />
          ))}
        </section>
      ) : (
        <div className="rounded-2xl border border-primary-light bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-medium text-muted sm:text-base">
            No resources are available in this section yet.
          </p>
        </div>
      )}
    </MainLayout>
  );
}