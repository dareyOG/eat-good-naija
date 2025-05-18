import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

function MealCard({
  name,
  image,
  price,
}: {
  name: string;
  image: StaticImageData;
  price: number;
}) {
  return (
    <div className="border border-destructive">
      <Image src={image} alt={name} className="border border-destructive" />
      <div className="flex w-full max-w-[23.2rem] flex-col gap-y-[1.6rem] rounded-[.8rem] border border-destructive px-[1.6rem] py-[1rem]">
        <div className="relative flex items-start justify-between">
          <div className="flex w-full justify-end">
            <span className="text-[1.2rem]">4.8(32)</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-[2.7rem]">
          <h2 className="text-[1.6rem]">{name}</h2>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Button
                variant={"secondary"}
                className="flex gap-x-[.4rem] rounded-[.8rem] border px-[.8rem] py-[.4rem]"
              >
                <span className="text-[1.4rem]">Add</span>
                <span className="text-[1.4rem]">+</span>
              </Button>
            </div>
            <div className="flex flex-col">
              <span className="text-[1.6rem]">{price}</span>
              <span className="text-end text-[1.2rem]">/500kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
