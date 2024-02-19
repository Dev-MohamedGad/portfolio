import React, { useState } from "react";
import "./main.css";
import{ motion , AnimatePresence } from "framer-motion";
export default function Main() {
  const Myprojects = [
    {
      projecttitle: "E-commerce",
      category: "HTML & CSS",
      subtitle: "wdasdwsadwadsdasd",
      imgpath: "./OIG4.jpeg",
    }, {
      projecttitle: "E-commerce",
      category: "HTML & CSS",
      subtitle: "wdasdwsadwadsdasd",
      imgpath: "./OIG4.jpeg",
    }, {
      projecttitle: "E-commerce",
      category: "HTML & CSS",
      subtitle: "wdasdwsadwadsdasd",
      imgpath: "./OIG4.jpeg",
    }, {
      projecttitle: "E-commerce",
      category: "HTML & CSS",
      subtitle: "wdasdwsadwadsdasd",
      imgpath: "./OIG4.jpeg",
    },
    {
      projecttitle: "Quate",
      category: "JavaScript",
      subtitle: "dww1",
      imgpath: "./OIG4.jpeg",
    },
    {
      projecttitle: "Start_framwork",
      category: "ReactJS",
      subtitle: "1123sada",
      imgpath: "./OIG4.jpeg",
    },
  ];
  const [filteredarr, setFilteredArr] = useState(Myprojects);
  const [current, setCurrent] = useState("All projects");

  // Function to filter projects based on category
  const filterProjects = (category) => {
    if (category === "All projects") {
      setFilteredArr(Myprojects);
    } else {
      const filteredProjects = Myprojects.filter(
        (project) => project.category === category
      );
      setFilteredArr(filteredProjects);
    }
    setCurrent(category);
  };

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => filterProjects("All projects")}
          className={current === "All projects" ? "active" : null}
        >
          All projects
        </button>
        <button
          onClick={() => filterProjects("HTML & CSS")}
          className={current === "HTML & CSS" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => filterProjects("JavaScript")}
          className={current === "JavaScript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => filterProjects("ReactJS")}
          className={current === "ReactJS" ? "active" : null}
        >
          ReactJS{" "}
        </button>
        <button
          onClick={() => filterProjects("NodeJs & Express")}
          className={current === "NodeJs &Express" ? "active" : null}
        >
          NodeJs &Express{" "}
        </button>
      </section>
      <section className="right-section flex">

        <AnimatePresence>
          {filteredarr.map((item, index) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type:'spring' , damping:8,stiffness:50}}
                key={index}
                className="card"
              >
                <img src={item.imgpath} width={266} alt="" />
                <div className="box" style={{ width: "266px" }}>
                  <h1 className="title">{item.projecttitle}</h1>
                  <p className="sub-title">{item.subtitle}</p>
                  <div className="flex icons">
                    {" "}
                    <div className="flex">
                      {" "}
                      <div className="icon-link" />
                      <div className="icon-github" />
                    </div>
                    <a className="link flex" href="">
                      more{" "}
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
