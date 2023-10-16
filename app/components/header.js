"use client";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <header class="fixed-top w-100 text-center py-4 bg-dark text-white">
      <h1>Word of guidance</h1>
    </header>
  );
}
