"use client";

export default function Page() {
  const data = [
    "Study Group",
    "Computer Programming (C#)",
    "MIT projects",
  ];

  // Generate URL-friendly IDs from text
  const generateId = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div className="youtube-container">
      <h1>YouTube Videos</h1>
        <div className="youtube-description">
            <p>This is where I will add a YouTube Gallery with all youtube videos</p>
            <p>Ill create different sections/rows with some info about each row/section</p>
        </div>

        <ul className="youtube-list">
            {data.map((item) => (
            <li key={item} id={generateId(item)} className="youtube-li">
                {item}
            </li>
            ))}
        </ul>

        <p className="particles">Particles: -Create new- C#, SQL, Nodes, Binary Trees, etc Logos</p>

    <style jsx>{`
        .youtube-container {
          padding: 2rem;
        }
        .youtube-description {
          margin-left: 3rem;
        }
        .youtube-list {
          margin-left: 4rem;
          list-style: none;
          padding: 0;
        }
        .youtube-li {
          margin: 1.5rem 0;
          font-size: 1.2rem;
        }
        .particles {
          margin-top: 2rem;
        }
      `}
    </style>

    </div>
  );
}
