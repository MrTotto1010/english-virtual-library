import { useNavigate } from "react-router-dom";

type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-primary-light/70 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-4 md:px-8">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back to the previous page"
            className="inline-flex min-h-10 items-center justify-center rounded-xl border border-primary-light bg-white px-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary-light focus-visible:outline-none sm:px-4 sm:text-base"
          >
            <span aria-hidden="true" className="mr-1 text-base sm:text-lg">
              ←
            </span>

            <span>Back</span>
          </button>

          <h1 className="min-w-0 text-center text-sm font-extrabold leading-tight text-primary sm:text-lg md:text-2xl">
            <span className="block truncate">{title}</span>
          </h1>

          <button
            type="button"
            onClick={() => navigate("/")}
            aria-label="Go to the home page"
            className="inline-flex min-h-10 items-center justify-center rounded-xl bg-primary px-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none sm:px-4 sm:text-base"
          >
            Home
          </button>
        </div>
      </div>
    </header>
  );
}