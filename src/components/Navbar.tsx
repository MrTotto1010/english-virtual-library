import { useNavigate } from "react-router-dom";

type NavbarProps = {
  title: string;
};

export default function Navbar({
  title,
}: NavbarProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      
      <div className="max-w-7xl mx-auto px-4 py-3">
        
        <div className="flex items-center justify-between gap-3">
          
          <button
            onClick={() => navigate(-1)}
            className="shrink-0 bg-gray-200 text-sm md:text-base px-3 md:px-4 py-2 rounded-xl hover:bg-gray-300 transition"
          >
            ← Volver
          </button>

          <h1 className="flex-1 text-center text-base sm:text-lg md:text-2xl font-bold truncate">
            {title}
          </h1>

          <button
            onClick={() => navigate("/")}
            className="shrink-0 bg-blue-500 text-white text-sm md:text-base px-3 md:px-4 py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Inicio
          </button>

        </div>

      </div>

    </header>
  );
}