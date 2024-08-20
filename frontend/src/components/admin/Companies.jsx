import React from "react";
import Navbar from "../shared/Navbar";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";


const Companies = () => {
    const navigate =useNavigate();
  return (
    <div>
      <Navbar />
      <div className=" max-w-7xl mx-auto my-10">
        <div className="flex justify-between items-center my-5">
          <Input className="w-fit" placeholder="filter the name" />
          <Button onClick={() => navigate(`/admin/companies/create`)}> New Company</Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;
