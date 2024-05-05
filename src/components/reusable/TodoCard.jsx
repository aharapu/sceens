import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// eslint-disable-next-line no-unused-vars
import { PlusCircle, CheckCircle, Trash2, PlusSquare } from "lucide-react";

import { useState } from "react";

export function TodoCard({ title, date, todos }) {
  return (
    // <Card className="min-w-[400px] max-w-[600px] drop-shadow-md flex flex-col shrink-0 grow basis-1 ">
    <Card className="min-w-[400px] max-w-[600px] min-h-[400px] h-fit drop-shadow-md flex flex-col shrink-0 grow basis-1 border-solid border border-indigo-600">
      <CardHeader>
        {/* <CardTitle> */}
        <CardTitle className="flex justify-between w-full">
          <span>{title}</span>
          <span>TODAY</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {todos.map((td) => (
          <TodoItem key={td} text={td} />
        ))}
        <div className="flex justify-between items-center mt-3">
          <Input placeholder="What to do?" />
          <Button className="ml-3 h-[40px] w-[40px] p-0 pr-0.5 shrink-0 grow-0 bg-lime-700">
            <PlusCircle className="h-[22px] w-[22px]" />
          </Button>
          <Button className="ml-1 h-[40px] w-[40px] p-0 shrink-0 grow-0 bg-red-700">
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
        {/* <Button className="mt-3 h-[30px] w-[110px] p-0">
          <PlusCircle className="mr-2 h-5 w-5" />
          Add Todo
        </Button> */}
      </CardContent>
      <CardFooter className="mt-auto">
        <CardDescription>{date}</CardDescription>
      </CardFooter>
    </Card>
  );
}

function TodoItem({ text }) {
  const [checked, setChecked] = useState(Math.random() > 0.7);

  const spanClass = checked ? "line-through" : "";

  return (
    <div className="flex items-center gap-2">
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <span className={spanClass}>{text}</span>
    </div>
  );
}
