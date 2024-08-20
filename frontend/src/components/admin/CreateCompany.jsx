import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import {setSingleCompany} from '../../redux/Slice/companySlice';

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerNewCompany = async (e) => {
    e.preventDefault();
    try {
        // register the new company
        
      // if company created successfully
      if (false) {
        toast.success("company registered successfully");
        // add the single company detail into the store
        // dispatch(setSingleCompany())
        const companyId = "jdakjfkasdlk";
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {}
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-4 max-w-4xl mx-auto my-4">
        <h1 className="font-bold text-2xl">Your Company Name</h1>
        <p className="text-gray-500">
          What would you like to give your company name? your can change this
          later.
        </p>
        <div className="flex flex-col gap-2">
          <Label htmlFor="CompanyName">Company Name:</Label>
          <Input
            type="text"
            id="companyName"
            placeholder="eg. Microsoft, Google"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 my-1">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
