import { Button } from "./components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <div className="gap-2 dark:bg-slate-950 dark:text-slate-50 h-full flex flex-col items-center justify-center">
      <ModeToggle />
      <h1 className="text-2xl font-bold">work</h1>
      <h2 className="text-5xl font-bold font-mono">00:00</h2>
      <div className="flex gap-4">
        <Button>start</Button>
        <Button>reset</Button>
      </div>
    </div>
  );
}

export default App;
