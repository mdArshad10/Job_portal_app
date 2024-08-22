import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/Services/authServices.js";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/Slice/authSlice.js";
import { toast } from "sonner";

const Signup = () => {
  const [userInput, setUserInput] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { data }] = useRegisterMutation();

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
    formData.append("password", userInput.password);
    formData.append("phoneNumber", userInput.phoneNumber);
    formData.append("role", userInput.role);
    if (userInput.file) {
      formData.append("file", userInput.file);
    }

    try {
      const response = await register(formData).unwrap();
      console.log(response);
      if (response.success) {
        dispatch(setAuthUser(response.data.data));
        toast.success("Registration successful");
        navigate("/");
      } else {
        console.log(data);
        toast.error("something is wrong");
      }
    } catch (error) {
      toast(error.data?.data);
    }
  };

  return (
    <>
      
      <div className="flex items-center mx-auto justify-center max-w-7xl rounded">
        <form
          encType="multipart/form-data"
          onSubmit={submitSignupHandler}
          className="w-1/2 border border-gray-200 rounded-2xl p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="eg. Md Arshad"
              name="fullName"
              value={userInput.fullName}
              onChange={changeEventHandler}
              required
            />
          </div>
          <div className="my-3">
            <Label>Email </Label>
            <Input
              type="email"
              placeholder="eg. abcde@gmail.com"
              name="email"
              value={userInput.email}
              onChange={changeEventHandler}
              required
            />
          </div>
          <div className="my-3">
            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="eg. 123456789"
              name="phoneNumber"
              value={userInput.phoneNumber}
              onChange={changeEventHandler}
              required
            />
          </div>
          <div className="my-3">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="eg. Abcd@123"
              name="password"
              value={userInput.password}
              onChange={changeEventHandler}
              required
            />
          </div>

          <div className="flex items-center ">
            <RadioGroup className="flex gap-4 my-2 flex-row">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={userInput.role == "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  id="r1"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={userInput.role == "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  id="r2"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="picture">Profile</Label>
            <Input
              id="picture"
              type="file"
              accept="image/*"
              className="cursor-pointer"
              onChange={changeFileHandler}
              required
            />
          </div>

          <Button type="submit" className="w-full my-4 ">
            Sign up
          </Button>
          <span>
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-400 ">
              Login
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Signup;
