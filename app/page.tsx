import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (

    <div className="template">
      <ModeToggle />
      <h1>Template</h1>
      <p>
        This is a template for a Next.js project with TypeScript, ESLint, Prettier, and Tailwind CSS.
      </p>
      <Button>Click me</Button>
      
    </div>
  );
}
