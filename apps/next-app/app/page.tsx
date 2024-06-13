"use client"
import Link from "next/link";

function App() {

  return (
    <>
      <Link href={"/video-streaming"}>video-streaming</Link>
      <br />
      <Link href={"/xtocks"}>xtocks</Link>
    </>
  );
}

export default App;