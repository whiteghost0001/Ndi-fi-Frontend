import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

const SectionHeading = ({
  title,
  description,
  action,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "flex items-end justify-between gap-4 flex-wrap",
        className,
      )}
    >
      <div className="space-y-1">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          {title}
        </h2>
        {description && <p className="text-sm text-[#8AA0A0]">{description}</p>}
      </div>
      {action}
    </div>
  );
};

export default SectionHeading;
