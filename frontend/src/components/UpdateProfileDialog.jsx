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
import { useUpdateProfileMutation } from "@/redux/Services/authServices";
import { setAuthUser } from "@/redux/Slice/authSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const UpdateProfileDialog = ({ dialogBox, setDialogBox }) => {
  const user = useSelector((store) => store.users?.user?.data);
  const [updateProfile] = useUpdateProfileMutation();

  const [userInput, setUserInput] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills.map((skill) => skill),
    file: user?.profile?.profilePhoto,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setUserInput({ ...userInput, [e.target?.name]: e.target?.value });
  };

  const changeFileHandler = (e) => {
    setUserInput({ ...userInput, file: e.target?.files[0] });
  };

  const submitSignupHandler = async (e) => {
    e.preventDefault();
    console.log(userInput);
    const formData = new FormData();
    formData.append("fullName", userInput.fullName);
    formData.append("email", userInput.email);
    formData.append("phoneNumber", userInput.phoneNumber);
    if (userInput.file) {
      formData.append("file", userInput.file);
    }
    try {
      const resp = await updateProfile(formData).unwrap();
      if (resp.success) {
        toast.success(resp.message);
        dispatch(setAuthUser(resp.data));
      }
    } catch (error) {
      toast.error(error.message);
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
          <form onSubmit={submitSignupHandler} encType="multipart/form-data">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Name:
                </Label>
                <Input
                  id="username"
                  type="text"
                  name="fullName"
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
                  name={userInput.file}
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
