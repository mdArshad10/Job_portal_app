import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const userSkills = ["javascript", "html", "CSS", "Reactjs"];
const UpdateProfileDialog = ({ dialogBox, setDialogBox }) => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    fullName: "arsha",
    email: "arsha@gmail.com",
    phoneNumber: "123456789",
    bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, at.",
    skills: userSkills.map((skill) => skill),
    file: "https:loremdaladld",
  });

  const changeEventHandler = (e) => {
    setUserInput({ ...userInput, [e.target?.name]: e.target?.value });
  };

  const changeFileHandler = (e) => {
    setUserInput({ ...userInput, file: e.target?.files[0] });
  };

  const submitSignupHandler = (e) => {
    e.preventDefault();
    console.log(userInput);
    const formData = new FormData();
    formData.append("fullName", userInput.fullName);
    formData.append("email", userInput.email);
    formData.append("phoneNumber", userInput.phoneNumber);
    if (userInput.file) {
      formData.append("file", userInput.file);
    }
  };

  return (
    <div>
      <Dialog open={dialogBox}>
        <DialogContent
          className="ms:max-w-[425px]"
          onInteractOutside={() => setDialogBox(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submitSignupHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Name:
                </Label>
                <Input
                  id="username"
                  type="text"
                  name="fullName"
                  value={userInput.fullName}
                  className="col-span-2"
                  defaultValue={userInput.fullName}
                  onChange={changeEventHandler}
                  
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email:
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={userInput.email}
                  className="col-span-2"
                  defaultValue={userInput.email}
                  onChange={changeEventHandler}
                  
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone No.:
                </Label>
                <Input
                  id="phoneNumber"
                  type="text"
                  name="phoneNumber"
                  value={userInput.phoneNumber}
                  className="col-span-2"
                  defaultValue={userInput.phoneNumber}
                  onChange={changeEventHandler}
                
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio:
                </Label>
                <Input
                  id="bio"
                  type="text"
                  name="bio"
                  value={userInput.bio}
                  className="col-span-2"
                  defaultValue={userInput.bio}
                  onChange={changeEventHandler}
                  
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills:
                </Label>
                <Input
                  id="skills"
                  type="text"
                  name="skills"
                  value={userInput.skills}
                  className="col-span-2"
                  defaultValue={userInput.skills}
                  onChange={changeEventHandler}
                  
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="resume" className="text-right">
                  Resume:
                </Label>
                <Input
                  id="resume"
                  type="file"
                  accept="application/pdf"
                  name="file"
                  className="col-span-2"
                  onChange={changeFileHandler}
                  
                />
              </div>
            </div>
          </form>
          <DialogFooter>
            <Button className="w-full" type="submit">
              Update
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
