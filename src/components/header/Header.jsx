import { useEffect, useState } from "react";
import "./header.css";
export default function Header() {
  const [showmodel, setshowmodel] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem("currentMode")?? "dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        className="menu flex icon-menu"
        onClick={() => {
          setshowmodel(true);
        }}
      />

      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          settheme(localStorage.getItem("currentMode"));
        }}
      >
       {theme === "dark"? ( <span className="icon-moon-o"/>):( <span className="icon-sun"/>)}
      </button>

      {showmodel && (
        <div className="fixed">
          <ul className="model">
            <li>
              {" "}
              <button
                className="icon-close"
                onClick={() => {
                  setshowmodel(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>{" "}
        </div>
      )}
    </header>
  );
}
