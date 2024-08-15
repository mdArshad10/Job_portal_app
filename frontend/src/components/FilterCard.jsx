import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
const filterData = [
  {
    filterType: "location",
    array: ["Kolkata", "Bangulare", "Pune", "Delhi"],
  },
  {
    filterType: "Industry",
    array: ["fullstack", "frontend", "backend", "DevOps"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "41-1lakh", "1lakh-5lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full rounded-md bg-white p-3">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((item, index) => {
          return (
            <div key={index} >
              <h1 className="text-lg font-bold">{item.filterType}</h1>
              {item.array.map((data, index) => (
                <div key={index} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={data} id={data} />
                  <Label htmlFor={data}>{data}</Label>
                </div>
              ))}
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
