"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  const data = [
    "Impactful Projects",
    "Python",
    "Computer Programming (C#)",
    "Cyber Security",
    "Next",
    "React",
  ];

  // Create valid id strings for each item (e.g. "impactful-projects")
  const generateId = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p>* Add a -click for more details button for each to take them to full page info about the project section - Python Courses: Why, How it helpted etc - Impactful Projects: Why, what it means to be, my aspirations etc.....</p>
      <div className="projects-list">
        <ul>
          {data.map((item, index) => (
            <li key={index} id={generateId(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <br />
      <p>Particles: Tech Stack Logos - Possibly different for each row??</p>

      <style jsx>{`
        .projects-container {
          padding: 2rem;
        }
        .projects-list {
          margin-left: 3rem;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 1rem 0;
          font-size: 1.2rem;
          height: 50vh;
        }
      `}</style>
    </div>
  );
}
