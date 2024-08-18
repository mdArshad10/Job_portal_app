import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead  >Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4].map((invoice, index) => (
            <TableRow key={index}>
              <TableCell >17-07-2024</TableCell>
              <TableCell>MERN Stack</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className="text-right">
                <Badge variant="outline">Pending</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
