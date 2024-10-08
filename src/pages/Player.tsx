import { MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Module } from "../components/Module";
import { Video } from "../components/Video";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6 ">
        <div className="flex items-center justify-between">
          <Header />
          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          {/* instalamos o pluging para customizar a scrollbar, e colocamos no config do tailwind, e para fazer com que toda a barra de troca de aulas funcionasse como desejado criamos também o aside de forma absoluta e demos um padding de 80 na main fazendo assim as coisas funcionarem com base no tamanho do player */}
          <aside className="w-80 absolute top-0  bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 divide-y-2 divide-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Module moduleIndex={0} title="Desvendando o Redux" amountOfLessons={3} />
            <Module moduleIndex={1} title="Desvendando o Redux" amountOfLessons={3} />
            <Module moduleIndex={2} title="Desvendando o Redux" amountOfLessons={3} />

          </aside>
        </main>
      </div>
    </div>
  );
}
