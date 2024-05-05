import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
// eslint-disable-next-line no-unused-vars
import { PlusCircle, CheckCircle, CheckCircle2, Trash2, PlusSquare, PenSquare } from "lucide-react";

import { useState } from "react";

export function TodoCard({ title, date, todos, isToday = false, isAdding = false }) {
  let cardClass = "min-w-[400px] max-w-[600px] drop-shadow-md flex flex-col shrink-0 grow basis-1";

  if (isToday) cardClass += " border-solid border border-indigo-600";

  return (
    <Card className={cardClass}>
      <CardHeader>
        <CardTitle className="flex justify-between w-full">
          <span>{title}</span>
          {isToday && <span>TODAY</span>}
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        {todos.map((td) => (
          <TodoItem key={td} text={td} />
        ))}
        {isAdding ? (
          <div className="flex justify-between items-center mt-3">
            <Input placeholder="What to do?" />
            <Button className="ml-3 h-[40px] w-[40px] p-0 pr-0.5 shrink-0 grow-0 bg-lime-700">
              <CheckCircle2 className="h-[22px] w-[22px]" />
            </Button>
            <Button className="ml-1 h-[40px] w-[40px] p-0 shrink-0 grow-0 bg-red-700">
              <PlusCircle className="h-[22px] w-[22px] rotate-45" />
            </Button>
          </div>
        ) : (
          <Button className="mt-3 h-[30px] w-[110px] p-0">
            <PlusCircle className="mr-2 h-5 w-5" />
            Add Todo
          </Button>
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        <CardDescription>{date}</CardDescription>
      </CardFooter>
    </Card>
  );
}

function TodoItem({ text }) {
  const [checked, setChecked] = useState(Math.random() > 0.7);

  let spanClass = "grow-1";
  spanClass += checked ? " line-through" : "";

  return (
    <div className="flex items-center justify-between pt-0.5 pb-0.5">
      <div className="flex items-center gap-2">
        <Checkbox className="shrink-0 grow-0" checked={checked} onCheckedChange={setChecked} />
        <span className={spanClass}>{text}</span>
      </div>
      <div className="flex items-center gap-2">
        <Button className="h-[24px] w-[24px] p-0 shrink-0 grow-0 bg-cyan-200">
          <PenSquare className="h-[16px] w-[16px] text-neutral-900" />
        </Button>
        <Button className="h-[24px] w-[24px] p-0 shrink-0 grow-0 bg-red-200">
          <Trash2 className="h-[16px] w-[16px] text-neutral-900" />
        </Button>
      </div>
    </div>
  );
}
