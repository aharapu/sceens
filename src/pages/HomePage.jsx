import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function HomePage() {
  return (
    <div id="poop" style={{ height: "100vh" }}>
      <Card className="w-[350px] drop-shadow-md rounded-none h-full flex flex-col">
        <CardHeader>
          <CardTitle>Power Organizer</CardTitle>
          <CardDescription>Sort your Todos by days using the view on the right.</CardDescription>
        </CardHeader>
        <CardContent>
          <span>Welcome Ana</span>
          <Separator className="mt-3 mb-1" />
        </CardContent>
        <CardFooter className="flex justify-between mt-auto">
          <Button className="w-full">Sign Out</Button>
        </CardFooter>
      </Card>
      <div
        style={{
          marginTop: 50,
          width: "calc(100vw - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      ></div>
    </div>
  );
}
