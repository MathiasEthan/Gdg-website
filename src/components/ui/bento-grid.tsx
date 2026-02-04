import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[14rem] lg:auto-rows-[16rem] xl:auto-rows-[18rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-2 sm:space-y-3 md:space-y-4 rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 transition duration-200 hover:shadow-xl",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1 md:group-hover/bento:translate-x-2">
        {icon}
        <div className="text-xs sm:text-sm md:text-base font-semibold text-white mb-1 sm:mb-1.5 md:mb-2 leading-tight">
          {title}
        </div>
        <div className="text-[11px] sm:text-xs md:text-sm text-gray-400 leading-relaxed line-clamp-3">
          {description}
        </div>
      </div>
    </div>
  );
};
