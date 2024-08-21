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
import { useSelector } from "react-redux";

// const skills = ["html", "CSS", "javascript", "Reactjs"];
const skills = [];
const Profile = () => {
  const isHaveResume = true;
  const user = useSelector((store) => store.users?.user?.data);

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
                  src={user?.profile?.profilePhoto}
                  alt={user?.fullName}
                />
              </Avatar>
            </div>
            <div>
              <h1 className="font-medium text-xl">{user?.fullName}</h1>
              <p>{user?.profile?.bio ? user?.profile?.bio : "Add the bio"}</p>
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
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-2 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          {user?.profile?.skill?.length >= 1 ? (
            user?.profile?.skill?.map((item, index) => {
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
            <span className="text-xs">No Skill added</span>
          )}
        </div>

        {/* resume */}
        <div className="grid w-full max-w-sm gap-1.5 items-center">
          <Label className="text-md font-bold">Resume</Label>
          {user?.profile?.resumeOriginalName ? (
            <a
              href={`${user.profile?.resume}`}
              target="_blank"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
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
