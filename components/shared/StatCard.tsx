import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  className?: string;
}

const StatCard = ({ label, value, change, className }: StatCardProps) => {
  const isNegative = change?.trim().startsWith("-");

  return (
    <Card
      className={cn(
        "bg-[#547F7F26] border border-[#547F7F66] py-5 gap-2 transition-colors hover:border-[#06F9F9]/50",
        className,
      )}
    >
      <CardHeader className="px-5">
        <CardTitle className="text-[#8AA0A0] text-[11px] font-medium tracking-wide uppercase">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5">
        <p className="text-xl md:text-2xl font-semibold text-white">{value}</p>
        {change && (
          <p
            className={cn(
              "text-xs mt-1",
              isNegative ? "text-[#FF6B6B]" : "text-[#38C00A]",
            )}
          >
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
