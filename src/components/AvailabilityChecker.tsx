import React, { useState } from "react";
import { Search, MapPin, CheckCircle, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface AvailabilityCheckerProps {
  onCheckAvailability?: (address: string) => Promise<AvailabilityResult>;
  className?: string;
}

interface AvailabilityResult {
  available: boolean;
  plans?: Plan[];
  message?: string;
}

interface Plan {
  id: string;
  name: string;
  speed: string;
  price: number;
}

const AvailabilityChecker: React.FC<AvailabilityCheckerProps> = ({
  onCheckAvailability,
  className,
}) => {
  const [address, setAddress] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<AvailabilityResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Mock data for default props
  const mockPlans: Plan[] = [
    { id: "1", name: "Rural Basic", speed: "25 Mbps", price: 49.99 },
    { id: "2", name: "Rural Plus", speed: "50 Mbps", price: 69.99 },
    { id: "3", name: "Rural Pro", speed: "100 Mbps", price: 89.99 },
  ];

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!address.trim()) {
      setError("Please enter a valid address");
      return;
    }

    setIsChecking(true);
    setError(null);

    try {
      if (onCheckAvailability) {
        const result = await onCheckAvailability(address);
        setResult(result);
      } else {
        // Mock response for demo purposes
        setTimeout(() => {
          // Randomly determine if service is available for demo
          const isAvailable = Math.random() > 0.3;
          setResult({
            available: isAvailable,
            plans: isAvailable ? mockPlans : undefined,
            message: isAvailable
              ? "Great news! Service is available at your location."
              : "Unfortunately, service is not yet available at this location. Join our waitlist to be notified when coverage expands to your area.",
          });
        }, 1500);
      }
    } catch (err) {
      setError(
        "An error occurred while checking availability. Please try again.",
      );
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <Card className={`w-full max-w-md mx-auto bg-white ${className || ""}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Check Availability</CardTitle>
        <CardDescription>
          Enter your address to see if our high-speed rural internet service is
          available in your area.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <MapPin
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              type="text"
              placeholder="Enter your full address"
              value={address}
              onChange={handleAddressChange}
              className="pl-10"
              disabled={isChecking}
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isChecking}>
            {isChecking ? (
              <>
                <span className="animate-pulse mr-2">Checking</span>
                <div className="h-5 w-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
              </>
            ) : (
              <>
                <Search className="mr-2" size={18} />
                Check Availability
              </>
            )}
          </Button>
        </form>

        {result && (
          <div className="mt-6 p-4 border rounded-lg">
            {result.available ? (
              <div className="space-y-4">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="mr-2" size={20} />
                  <span className="font-medium">{result.message}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Available Plans:</h4>
                  <ul className="space-y-2">
                    {result.plans?.map((plan) => (
                      <li
                        key={plan.id}
                        className="p-3 bg-gray-50 rounded-md flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium">{plan.name}</p>
                          <p className="text-sm text-gray-600">{plan.speed}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">
                            ${plan.price.toFixed(2)}/mo
                          </p>
                          <Button size="sm" variant="outline" className="mt-1">
                            Select
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center text-amber-600">
                  <XCircle className="mr-2" size={20} />
                  <span className="font-medium">{result.message}</span>
                </div>

                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Join Waitlist
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center text-sm text-gray-500">
        Not sure about your address? Call us at (555) 123-4567
      </CardFooter>
    </Card>
  );
};

export default AvailabilityChecker;
