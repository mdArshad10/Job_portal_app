import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center flex-col gap-10 my-2">
        <span className=" mx-auto px-4 py-2 rounded-full bg-gray-200 text-[#F83002] font-medium">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          corrupti. Voluptas obcaecati ducimus voluptatum modi! Quos ducimus
          magni est dolore quisquam saepe tenetur animi, magnam adipisci
          explicabo impedit, quibusdam optio.
        </p>

        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto ">
          <Input
            type="text"
            placeholder="find your dream jobs"
            className="mx-auto outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5 text-gray-50 hover:text-black" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
