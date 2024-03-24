import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function RegisterPage() {
  return (
    <div
      style={{
        marginTop: 50,
        width: "calc(100vw - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Card className="w-[350px] drop-shadow-md">
        <CardHeader>
          <CardTitle>Register account</CardTitle>
          <CardDescription>Enter your details below to sign up.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input type="password" id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="name">Confirm Password</Label>
                <Input type="password" id="name" placeholder="Name of your project" />
              </div>
            </div>
          </form>
          <Separator className="mt-3 mb-1" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Back To Sign In</Button>
          <Button>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
