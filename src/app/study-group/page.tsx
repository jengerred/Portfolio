"use client";


export default function Page() {

  return (
    <div className="study-container">
      <h1>Intro to Programing Study Group</h1>
        <div className="study-description">
            <p>Discuss why I started the study group possibly how much I love teaching. Discuss how beginner I was -back then. How I used slack but now stick with click up. Etc...</p>
            <p>YouTube gallery for study group videos</p>
        </div>
        <br/>
        <p>Particles: YouTube and maybe some kind of teacher logos.</p>

      <style jsx>{`
        .study-container {
          padding: 2rem;
        }
          .study-description{
          margin-left: 3rem;
          }
      
        `}
      </style>

    </div>
  );
}
