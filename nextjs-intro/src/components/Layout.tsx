import NavBar from "./Navbar";
import { ReactElement } from "react";

interface props {
  children?: ReactElement<any>;
}

export default function Layout({ children }: props) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
