import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setSingleCompany} from '../../redux/Slice/companySlice';

const CompanySetup = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = async (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setUserInput({ ...userInput, file: e.target?.files[0] });
  };

  const websiteDetailSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userInput.name);
    formData.append("description", userInput.description);
    formData.append("website", userInput.website);
    formData.append("location", userInput.location);
    if(userInput.file){
        formData.append("file", userInput.file);
    }
    try {
        // send the data to the server
        // if company details update successfully 
        if(false){
            toast.success("company data updated successfully")
            navigate('/admin/companies');
        }
    } catch (error) {
        toast.error("Failed to update company data")
        
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form action="">
          <div className="flex items-center gap-5 p-8">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-gray-500 font-semibold"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="">
              <Label>Company's Name: </Label>
              <Input
                type="text"
                placeholder="Your company name"
                name="name"
                value={userInput.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label>Company's Description: </Label>
              <Input
                type="text"
                placeholder="Your company name"
                name="description"
                value={userInput.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label>Company's Website: </Label>
              <Input
                type="text"
                placeholder="Your company name"
                name="website"
                value={userInput.website}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <Label>Company Name</Label>
              <Input
                type="text"
                placeholder="Your company name"
                name="name"
                value={userInput.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <Label>Company's Location</Label>
              <Input
                type="text"
                placeholder="Your company name"
                name="location"
                value={userInput.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="">
              <Label>Company's Logo</Label>
              <Input
                type="file"
                accept="image/*"
                checked={handleFileChange}
                name="name"
                value={userInput.name}
              />
            </div>
          </div>
          <Button
            variant="outline"
            type="submit"
            onClick={websiteDetailSubmitHandler}
            className="w-full my-8"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
