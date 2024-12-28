import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

interface AdvancedSearchProps {
  onClose: () => void;
  onSearch: (filters: any) => void;
}

const AdvancedSearch = ({ onClose, onSearch }: AdvancedSearchProps) => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Order Number</Label>
              <Input placeholder="Enter order number" />
            </div>
            <div className="space-y-2">
              <Label>Customer Name</Label>
              <Input placeholder="Enter customer name" />
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <select className="w-full p-2 rounded-md border">
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Date Range</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Select date range
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="range" numberOfMonths={2} />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Min Amount</Label>
              <Input type="number" placeholder="$0.00" />
            </div>
            <div className="space-y-2">
              <Label>Max Amount</Label>
              <Input type="number" placeholder="$0.00" />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => onSearch({})}>Apply Filters</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvancedSearch;
