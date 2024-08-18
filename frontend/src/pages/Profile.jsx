import AppliedJobTable from "@/components/AppliedJobTable";
import Navbar from "@/components/shared/Navbar";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import UpdateProfileDialog from "@/components/UpdateProfileDialog";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { useState } from "react";

// const skills = ["html", "CSS", "javascript", "Reactjs"];
const skills = [];
const Profile = () => {
  const isHaveResume = true;
  const [dialogBox, setDialogBox] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div>
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </div>
            <div>
              <h1 className="font-medium text-xl">Md. Arshad</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt quasi volupta.
              </p>
            </div>
          </div>
          <Button
            onClick={() => setDialogBox(true)}
            className="text-light rounded-xl"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div>
          <div className="flex items-center gap-2 my-2">
            <Mail />
            <span>mdarshad@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 my-2">
            <Contact />
            <span>+9163350082</span>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          {skills.length >= 1 ? (
            skills.map((item, index) => {
              return (
                <Badge
                  variant="ghost"
                  className="text-[#7289b7] font-bold mr-2"
                  key={index}
                >
                  {item}
                </Badge>
              );
            })
          ) : (
            <span>No Skill added</span>
          )}
        </div>

        {/* resume */}
        <div className="grid w-full max-w-sm gap-1.5 items-center">
          <Label className="text-md font-bold">Resume</Label>
          {isHaveResume ? (
            <a
              href=""
              target="_blank"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              Md.Arshad
            </a>
          ) : (
            <>Resume not uploaded</>
          )}
        </div>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl ">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          {/* jobs tables */}
          <AppliedJobTable />
        </div>
        <UpdateProfileDialog
          dialogBox={dialogBox}
          setDialogBox={setDialogBox}
        />
      </div>
    </div>
  );
};

export default Profile;
