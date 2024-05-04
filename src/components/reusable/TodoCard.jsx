import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export function TodoCard({ title, date, todos }) {
  return (
    <Card className="min-w-[400px] max-w-[600px] drop-shadow-md flex flex-col shrink-0 grow basis-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {todos.map((td) => (
          <TodoItem key={td} text={td} />
        ))}
        <Button className="mt-3 pt-1">Add Todo</Button>
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
