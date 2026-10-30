import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

const PageHeader = ({
  title,
  description,
  action,
  className,
}: PageHeaderProps) => {
  return (
    <div
      className={cn(
        "flex items-end justify-between gap-4 flex-wrap pb-8 md:pb-10",
        className,
      )}
    >
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          {title}
        </h1>
        {description && (
          <p className="text-sm md:text-base text-[#8AA0A0] max-w-xl">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
};

export default PageHeader;
