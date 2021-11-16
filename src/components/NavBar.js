import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((word)=>{
    return <a href={`#${word}`} key={word}>{word}</a>
  })

  return <nav>{linkElements}</nav>;
}

export default NavBar;
