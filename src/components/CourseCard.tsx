import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";

type CourseCardProps = {
  title: string;
  instructor: string;
  rating: number;
  ratingCount: number;
  hours: number;
  lectures: number;
  level: string;
  price: string;
};

const CourseCard = ({
  title,
  instructor,
  rating,
  ratingCount,
  hours,
  lectures,
  level,
  price,
}: CourseCardProps) => {
  return (
    <Card className="w-full max-w-[298px] sm:h-[420px] lg:h-[390px] p-[16px] border border-[#E2E8F0] flex flex-col mx-auto">

      <img
        src='src\assets\cources.jpg'
        alt={title}
        className="w-full h-[170px] object-cover p-2"
      />
      <CardHeader className="">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">
          By {instructor}
        </CardDescription>
      </CardHeader>

      <CardContent className="">
        <div className="flex flex-wrap items-center gap-1">
          {Array.from({ length: Math.round(rating) }).map((_, i) => (
            <span key={i} className="text-yellow-500 text-lg">★</span>
          ))}
          <span className="text-sm text-muted-foreground font-semibold flex wrap-break-word">
            ({ratingCount} Ratings)
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {hours} Total Hours. {lectures} Lectures. {level}
        </p>
      </CardContent>

      <CardFooter className="">
        <p className="text-xl font-bold">{price}</p>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
