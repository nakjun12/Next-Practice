import NavBar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar></NavBar>
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>

      <h1>Hello</h1>
    </div>
  );
}
