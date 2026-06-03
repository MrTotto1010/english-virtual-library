import { Link, useParams } from "react-router-dom";

import { subjects } from "../data/subjects";

import MainLayout from "../layouts/MainLayout";

export default function GradePage() {
  const { subjectId, gradeId } = useParams();

  const subject = subjects.find(
    (subject) => subject.id === subjectId
  );

  const grade = subject?.grades.find(
    (grade) => grade.id === gradeId
  );

  if (!subject || !grade) {
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
          Selecciona una seccion
        </h2>

        <p className="text-sm md:text-base text-gray-600">
          Explora el contenido disponible para este grado.
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {grade.sections.map((section) => (
          <Link
            key={section.id}
            to={`/subject/${subject.id}/${grade.id}/${section.id}`}
            className="bg-purple-500 text-white p-5 md:p-6 rounded-2xl text-base md:text-2xl font-semibold hover:scale-[1.03] transition duration-300 text-center shadow-lg flex items-center justify-center min-h-[110px] md:min-h-[140px]"
          >
            {section.title}
          </Link>
        ))}
      </div>

    </MainLayout>
  );
}