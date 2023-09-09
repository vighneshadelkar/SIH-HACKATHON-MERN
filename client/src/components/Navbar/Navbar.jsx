import React from "react";
import "./Navbar.css"


export default function Navbar() {
  return (
    <nav>
      <div class="">
        <form role="search">
          <input
            class="search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
}
