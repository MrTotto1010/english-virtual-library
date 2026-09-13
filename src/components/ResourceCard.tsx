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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-light bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex aspect-[17/22] items-center justify-center bg-primary-light/30 p-4 sm:p-5">
        <img
          src={cover}
          alt={`${title} cover`}
          loading="lazy"
          className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="line-clamp-3 text-base font-bold leading-snug text-primary sm:text-lg">
          {title}
        </h3>

        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-primary-dark focus-visible:outline-none sm:text-base"
        >
          Open PDF
        </a>
      </div>
    </article>
  );
}