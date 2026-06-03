import { Link } from "react-router-dom";

import { subjects } from "../data/subjects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
        
        <div className="mb-8 md:mb-12">
          
          <h1 className="text-3xl md:text-6xl font-bold mb-3">
            Biblioteca Virtual
          </h1>

          <p className="text-sm md:text-lg text-gray-600">
            Accede a libros, capitulos y practicas de manera rapida y organizada.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              to={`/subject/${subject.id}`}
              className="bg-blue-500 text-white p-5 md:p-6 rounded-2xl text-base md:text-2xl font-semibold hover:scale-[1.03] transition duration-300 text-center shadow-lg flex items-center justify-center min-h-[110px] md:min-h-[140px]"
            >
              {subject.name}
            </Link>
          ))}
        </div>

      </div>

    </div>
  );
}