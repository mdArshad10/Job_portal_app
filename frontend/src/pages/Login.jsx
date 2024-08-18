import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const submitEventHandler = (e) => {
    setUserInput({ ...userInput, [e.target?.name]: e.target?.value });
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Login form submitted");
    console.log(userInput);
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center mx-auto justify-center max-w-7xl rounded">
        <form
          onSubmit={submitLoginHandler}
          className="w-1/2 border border-gray-200 rounded-2xl p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-3">
            <Label>Email </Label>
            <Input
              type="email"
              placeholder="eg. abcde@gmail.com"
              name="email"
              value={userInput.email}
              onChange={submitEventHandler}
            />
          </div>

          <div className="my-3">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="eg. Abcd@123"
              name="password"
              value={userInput.password}
              onChange={submitEventHandler}
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
                  onChange={submitEventHandler}
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
                  onChange={submitEventHandler}
                  className="cursor-pointer"
                  id="r2"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          <Button className="w-full my-4 ">Login</Button>
          <span>
            Dont have an account ?
            <Link to="/Signup" className="text-blue-400 ">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
