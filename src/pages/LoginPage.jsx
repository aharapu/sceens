import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function LoginPage() {
  return (
    <div
      style={{
        // height: "100%",
        marginTop: 50,
        width: "calc(100vw - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        // background: `url(public/postits.avif)`,
      }}
    >
      <Card className="w-[350px] drop-shadow-md">
        <CardHeader>
          <CardTitle>Power organizer</CardTitle>
          <CardDescription>Unleash your productivity.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input disabled id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input disabled type="password" id="name" placeholder="Name of your project" />
                <Button disabled style={{ marginTop: 0 }} variant="link" className="text-blue-400 text-xs pl-1 pt-1" href="#abc">
                  Forgot password?
                </Button>
              </div>
            </div>
          </form>
          <Separator className="mt-3 mb-1" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button disabled variant="outline">
            Sign Up
          </Button>
          <Button disabled>
            <div
              style={{
                width: 16,
                height: 16,
                border: "3px solid white",
                borderRadius: "50%",
                clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)",
              }}
              className=" animate-spin mr-2"
            />
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
