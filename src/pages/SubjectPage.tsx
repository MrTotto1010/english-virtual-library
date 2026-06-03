import { Link, useParams } from "react-router-dom";

import { subjects } from "../data/subjects";

import MainLayout from "../layouts/MainLayout";

export default function SubjectPage() {
  const { subjectId } = useParams();

  const subject = subjects.find(
    (subject) => subject.id === subjectId
  );

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Materia no encontrada
      </div>
    );
  }

  return (
    <MainLayout title={subject.name}>
      
      <div className="mb-6 md:mb-10">
        
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Selecciona un grado
        </h2>

        <p className="text-sm md:text-base text-gray-600">
          Accede al contenido disponible para cada nivel.
        </p>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {subject.grades.map((grade) => (
          <Link
            key={grade.id}
            to={`/subject/${subject.id}/${grade.id}`}
            className="bg-green-500 text-white p-5 md:p-6 rounded-2xl text-base md:text-2xl font-semibold hover:scale-[1.03] transition duration-300 text-center shadow-lg flex items-center justify-center min-h-[110px] md:min-h-[140px]"
          >
            {grade.name}
          </Link>
        ))}
      </div>

    </MainLayout>
  );
}