import { cn } from "@/shared/lib";
import { Star } from "lucide-react";
import { FC } from "react";

type TRating = 1 | 2 | 3 | 4 | 5;

interface RatingProps {
  rating: TRating;
  className?: string;
}

export const Rating: FC<RatingProps> = ({ rating, className }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: rating }).map((_, index) => (
        <Star
          className={cn("fill-yellow-400 stroke-yellow-400", className)}
          key={index}
        />
      ))}
    </div>
  );
};
