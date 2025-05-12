import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CheckIcon,
  InfoIcon,
  WifiIcon,
  ZapIcon,
  DownloadIcon,
  UploadIcon,
} from "lucide-react";

interface Plan {
  id: string;
  name: string;
  downloadSpeed: number;
  uploadSpeed: number;
  dataCap: string;
  price: number;
  features: string[];
  recommended: boolean;
  description: string;
  bestFor: string[];
}

interface PlanComparisonTableProps {
  plans?: Plan[];
}

const defaultPlans: Plan[] = [
  {
    id: "basic",
    name: "Rural Basic",
    downloadSpeed: 10,
    uploadSpeed: 2,
    dataCap: "150 GB",
    price: 49.99,
    features: [
      "Standard Installation",
      "Basic Technical Support",
      "Email Service",
    ],
    recommended: false,
    description: "A reliable internet connection for basic browsing and email.",
    bestFor: ["Email and web browsing", "Social media", "Small households"],
  },
  {
    id: "standard",
    name: "Rural Plus",
    downloadSpeed: 25,
    uploadSpeed: 5,
    dataCap: "300 GB",
    price: 69.99,
    features: [
      "Standard Installation",
      "24/7 Technical Support",
      "Email Service",
      "WiFi Router Included",
    ],
    recommended: true,
    description:
      "Our most popular plan with enough speed for streaming and multiple devices.",
    bestFor: [
      "HD video streaming",
      "Online gaming",
      "Multiple devices",
      "Remote work",
    ],
  },
  {
    id: "premium",
    name: "Rural Pro",
    downloadSpeed: 50,
    uploadSpeed: 10,
    dataCap: "500 GB",
    price: 89.99,
    features: [
      "Priority Installation",
      "24/7 Premium Support",
      "Static IP Address",
      "WiFi Router Included",
      "Security Suite",
    ],
    recommended: false,
    description:
      "Our fastest rural internet plan for households with high bandwidth needs.",
    bestFor: [
      "4K video streaming",
      "Large file downloads",
      "Multiple users",
      "Home office",
      "Smart home devices",
    ],
  },
  {
    id: "unlimited",
    name: "Rural Unlimited",
    downloadSpeed: 25,
    uploadSpeed: 5,
    dataCap: "Unlimited",
    price: 99.99,
    features: [
      "Standard Installation",
      "24/7 Technical Support",
      "WiFi Router Included",
      "No Data Limits",
    ],
    recommended: false,
    description:
      "Unlimited data with our reliable Rural Plus speeds for heavy internet users.",
    bestFor: [
      "Video streaming",
      "Large families",
      "Work from home",
      "Frequent downloads",
    ],
  },
];

const PlanComparisonTable: React.FC<PlanComparisonTableProps> = ({
  plans = defaultPlans,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Plan;
    direction: "ascending" | "descending";
  } | null>(null);

  const sortedPlans = React.useMemo(() => {
    let sortablePlans = [...plans];
    if (sortConfig !== null) {
      sortablePlans.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortablePlans;
  }, [plans, sortConfig]);

  const requestSort = (key: keyof Plan) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setDialogOpen(true);
  };

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Internet Service Plans
        </h2>
        <p className="text-gray-600">
          Compare our plans to find the perfect fit for your rural connectivity
          needs
        </p>
      </div>

      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="w-[180px] cursor-pointer"
                  onClick={() => requestSort("name")}
                >
                  Plan
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => requestSort("downloadSpeed")}
                >
                  Download Speed
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => requestSort("uploadSpeed")}
                >
                  Upload Speed
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => requestSort("dataCap")}
                >
                  Data Cap
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => requestSort("price")}
                >
                  Monthly Price
                </TableHead>
                <TableHead>Features</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedPlans.map((plan) => (
                <TableRow
                  key={plan.id}
                  className={plan.recommended ? "bg-blue-50" : ""}
                >
                  <TableCell className="font-medium">
                    <div className="flex flex-col">
                      <span>{plan.name}</span>
                      {plan.recommended && (
                        <Badge className="mt-1 w-fit" variant="secondary">
                          Recommended
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <DownloadIcon size={16} className="text-blue-600" />
                      <span>{plan.downloadSpeed} Mbps</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <UploadIcon size={16} className="text-green-600" />
                      <span>{plan.uploadSpeed} Mbps</span>
                    </div>
                  </TableCell>
                  <TableCell>{plan.dataCap}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-bold">
                        ${plan.price.toFixed(2)}/mo
                      </span>
                      <span className="text-xs text-gray-500">
                        + taxes & fees
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc pl-5 text-sm">
                      {plan.features.slice(0, 2).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                      {plan.features.length > 2 && (
                        <li
                          className="text-blue-600 cursor-pointer"
                          onClick={() => handlePlanSelect(plan)}
                        >
                          +{plan.features.length - 2} more
                        </li>
                      )}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handlePlanSelect(plan)}>
                      Select Plan
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        {selectedPlan && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <WifiIcon className="text-blue-600" />
                {selectedPlan.name}
                {selectedPlan.recommended && (
                  <Badge variant="secondary" className="ml-2">
                    Recommended
                  </Badge>
                )}
              </DialogTitle>
              <DialogDescription>{selectedPlan.description}</DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-1">
                  <ZapIcon size={16} className="text-amber-500" />
                  Speed
                </h4>
                <p className="text-sm">
                  Download: {selectedPlan.downloadSpeed} Mbps
                </p>
                <p className="text-sm">
                  Upload: {selectedPlan.uploadSpeed} Mbps
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Price</h4>
                <p className="text-xl font-bold">
                  ${selectedPlan.price.toFixed(2)}/mo
                </p>
                <p className="text-xs text-gray-500">
                  + applicable taxes and fees
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Data Cap</h4>
                <p className="text-sm">{selectedPlan.dataCap}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-1">
                  <InfoIcon size={16} className="text-blue-600" />
                  Best For
                </h4>
                <ul className="text-sm space-y-1">
                  {selectedPlan.bestFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <CheckIcon size={14} className="text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-2">
              <h4 className="font-medium mb-2">All Features</h4>
              <ul className="grid grid-cols-2 gap-2">
                {selectedPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-1 text-sm">
                    <CheckIcon size={14} className="text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <DialogFooter className="mt-6">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Close
              </Button>
              <Button>Sign Up Now</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default PlanComparisonTable;
