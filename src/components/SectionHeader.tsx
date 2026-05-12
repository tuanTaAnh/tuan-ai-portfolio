type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-4xl">
      <div className="mb-4 inline-flex items-center gap-3 rounded-full border-[1.5px] border-[#151515] bg-[#fffdf7] px-4 py-2 text-xs font-black uppercase tracking-[0.24em]">
        <span className="h-2 w-2 rounded-full bg-[#ff6b35]" />
        {label}
      </div>

      <h2 className="section-title">{title}</h2>

      {description ? (
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6b645c]">
          {description}
        </p>
      ) : null}
    </div>
  );
}