type ResourceCardProps = {
  title: string;
  cover: string;
  pdf: string;
};

export default function ResourceCard({
  title,
  cover,
  pdf,
}: ResourceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] transition duration-300">
      
      <div className="bg-gray-50 p-2 md:p-4">
        <img
          src={cover}
          alt={title}
          className="w-full aspect-[17/22] object-contain"
        />
      </div>

      <div className="p-3 md:p-5 flex flex-col flex-1">
        
        <h4 className="text-base md:text-xl font-semibold mb-4 line-clamp-2">
          {title}
        </h4>

        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block text-center bg-blue-500 text-white text-sm md:text-base py-2 md:py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Abrir PDF
        </a>

      </div>
    </div>
  );
}