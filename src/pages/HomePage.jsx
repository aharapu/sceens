import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { TodoCard } from "../components/reusable/TodoCard";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { TooltipBasic } from "../components/reusable/Tooltip";

const now = new Date();

const mnow = moment().subtract(1, "day");

const getRandom = (maxVal) => Math.ceil(Math.random() * maxVal);

const numLists = 7;
const maxNumItems = 7;
const minNumItems = 3;

const tdl = new Array(numLists).fill().map((nill, idx) => ({
  id: idx,
  date: new Date(now.setDate(now.getDate() + idx)).toLocaleDateString("ro-RO"),
  title: mnow.add(1, "days").format("dddd"),
  todos: new Array(Math.max(getRandom(maxNumItems), minNumItems)).fill().map(() => faker.word.words(Math.max(3, getRandom(7)))),
}));

console.log("tdl", tdl);

export function HomePage() {
  return (
    <div id="poop" style={{ height: "100vh" }} className="flex">
      <Card className="w-[350px] drop-shadow-md rounded-none h-full flex flex-col">
        <CardHeader>
          <CardTitle>Power Organizer</CardTitle>
          <CardDescription>Sort your Todos by days using the view on the right.</CardDescription>
        </CardHeader>
        <CardContent>
          <span>Welcome Ana</span>
          <Separator className="mt-3 mb-1" />
          <TooltipBasic>
            <Button className="w-full mt-3 cursor-not-allowed" variant="secondary">
              Today
            </Button>
          </TooltipBasic>

          <Button className="w-full mt-3">Week</Button>

          <TooltipBasic>
            <Button className="w-full mt-3 cursor-not-allowed" variant="secondary">
              Month
            </Button>
          </TooltipBasic>
        </CardContent>
        <CardFooter className="flex justify-between mt-auto">
          <Button className="w-full">Sign Out</Button>
        </CardFooter>
      </Card>
      <div className="w-full flex gap-5 p-5 flex-wrap h-[100vh] overflow-y-scroll">
        {tdl.map((tl, idx) => (
          <TodoCard key={tl.id} date={tl.date} title={tl.title} todos={tl.todos} isToday={idx === 0} isAdding={idx === 4} />
        ))}
      </div>
    </div>
  );
}
