import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}
// para ajudar na aplicação do collpsable nos utilizamos o npm install @radix-ui/react-collapsible e agora vamos implementa-lo
export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  return (
    // colocando essa prop grup no class name estamos dizendo que esse root e tudo que está dentro dele é um grupo e ai conseguimos acessar o data-[state=open] nos componentes filhos
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4 ">
        <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </span>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className=" text-xs text-zinc-400">
            {amountOfLessons} aulas
          </span>
        </div>
        {/* a aplicação agora disso fica da seguinte forma */}
        <ChevronDown className="w-4 h-4 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="Fundamentos do Redux" duration="09:13" />
          <Lesson title="Fundamentos do Redux" duration="09:13" />
          <Lesson title="Fundamentos do Redux" duration="09:13" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
