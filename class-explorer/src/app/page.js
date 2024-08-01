import Image from "next/image";
import Welcome from "./components/Welcome"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-1 bg-white">
      <Welcome/>
    </main>
  
  );
}
