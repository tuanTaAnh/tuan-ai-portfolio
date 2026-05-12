export default function Footer() {
  return (
    <footer className="border-t-[1.5px] border-[#151515] bg-[#151515] px-5 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm md:flex-row md:items-center">
        <p>
          © 2026 Tuan Ta Anh. Built with Next.js, React, TypeScript, Tailwind CSS,
          and Motion.
        </p>

        <div className="flex gap-4">
          <a href="#home" className="text-white/70 hover:text-white">
            Back to top
          </a>

          <a
            href="mailto:anhtuan19981998@gmail.com"
            className="text-white/70 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}