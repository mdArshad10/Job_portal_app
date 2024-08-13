import { LogOut, User2 } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white ">
      <div className="flex flex-row justify-between items-center mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Arshad MernStack</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id, modi.
                    </p>
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex gap-1 items-center">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex gap-1 items-center">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex flex-row gap-2 items-center">
              <Button className="hover:outline-black hover:outline-2">SignIn</Button>
              <Button className="bg-[#6A38C2] hover:bg-[#6A38e4] text-white rounded-xl">
                Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
