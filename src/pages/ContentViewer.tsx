import { subjects } from "../data/subjects";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ResourceCard from "../components/ResourceCard";

export default function ContentViewer() {
  const { subjectId, gradeId, contentId } = useParams();

  const subject = subjects.find(
    (subject) => subject.id === subjectId
  );

  const grade = subject?.grades.find(
    (grade) => grade.id === gradeId
  );

  const section = grade?.sections.find(
    (section) => section.id === contentId
  );

  if (!subject || !grade || !section) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Contenido no encontrado
      </div>
    );
  }

  return (
    <MainLayout
      title={`${subject.name} - ${grade.name}`}
    >
      
      <div className="mb-6 md:mb-10">
        
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          {section.title}
        </h2>

        <p className="text-sm md:text-base text-gray-600">
          Selecciona un recurso para descargar el PDF.
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {section.resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            cover={resource.cover}
            pdf={resource.pdf}
          />
        ))}
      </div>

    </MainLayout>
  );
}