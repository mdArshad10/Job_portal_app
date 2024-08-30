import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import { useGetCompanyByUserIdQuery } from "@/redux/Services/companyServices";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import {
  setCompanies,
  setSearchCompanyByText,
} from "@/redux/Slice/companySlice";
import { useEffect, useState } from "react";

const Companies = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    data: companyDetail,
    error,
    isError,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetCompanyByUserIdQuery();

  useEffect(() => {
    console.log(input);
    dispatch(setSearchCompanyByText(input));
  }, [input]);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isSuccess && !isError) {
    dispatch(setCompanies(companyDetail?.data));
  }

  if (isError || error) {
    toast.error(error.message);
  }

  return (
    <div>
      <div className=" max-w-7xl mx-auto my-10">
        <div className="flex justify-between items-center my-5">
          <Input
            className="w-fit"
            onChange={(e) => setInput(e.target.value)}
            name="companyName"
            placeholder="filter the name"
          />
          <Button onClick={() => navigate(`/admin/companies/create`)}>
            New Company
          </Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;
