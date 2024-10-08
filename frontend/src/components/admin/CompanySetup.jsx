import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../../redux/Slice/companySlice";
import { useUpdateCompanyDetailMutation } from "@/redux/Services/companyServices";

const CompanySetup = () => {
  const [userInput, setUserInput] = useState({
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [updateCompanyDetail, { data, isError, isLoading, isSuccess, error }] =
    useUpdateCompanyDetailMutation();

  const handleInputChange = (e) => {
    setUserInput({ ...userInput, [e.target?.name]: e.target?.value });
  };

  const handleFileChange = (e) => {
    setUserInput({ ...userInput, file: e.target?.files[0] });
  };

  const websiteDetailSubmitHandler = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append("id", "kafdlkaldkfjalkdjlkasd");
    formDataToSend.append("description", userInput?.description);
    console.log("this is for testing");
    formDataToSend.append("name", true);
    formDataToSend.append("name", 72);
    console.log(formDataToSend.get("name"));
    console.log(formDataToSend);

    formDataToSend.append("website", userInput?.website);
    formDataToSend.append("location", userInput?.location);
    console.log(formDataToSend);

    if (userInput.file) {
      formDataToSend.append("file", userInput?.file);
    }
    console.log(formDataToSend.get("file"));

    // try {
    // send the data to the server
    // const response = await updateCompanyDetail(formDataToSend).unwrap();
    // console.log(response);

    // if company details update successfully
    // if (response?.success) {
    //   toast.success("company data updated successfully");
    //   navigate("/admin/companies");
    // } else {
    //   console.log(error);

    //   toast.error("Failed to update company data");
    // }
    // } catch (error) {
    //   console.log(error);

    //   toast.error("Some thing the wrong with updating the company");
    // }
  };

  return (
    <div>
      <div className="max-w-xl mx-auto my-10">
        <form
          encType="multipart/form-data"
          onSubmit={websiteDetailSubmitHandler}
        >
          <div className="flex items-center gap-5 p-8">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-gray-500 font-semibold"
              onClick={() => navigate("/admin/companies")}
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center">
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
                id="picture"
                type="file"
                accept="image/*"
                className="cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <Button variant="outline" type="submit" className="w-full my-8">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
