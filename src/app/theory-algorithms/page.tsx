"use client";


export default function Page() {

  return (
    <div className="theory-container">
      <h1>Computer Theory and Algorithms</h1>
        <div className="theory-description">
            <p>Discuss complex concepts like arrays, linked lists, binary code, binary trees, graphs, nodes huffman compression etc..</p>
            <p>Give project description, why I did the project this way, what the actual project assignment was, etc... link/download, possible page for showing in webpage... showing 3d animation of tree compression etc</p>
        </div>
        <br/>
        <p>Particles: YouTube and maybe some kind of teacher logos.</p>

      <style jsx>{`
        .theory-container {
          padding: 2rem;
        }
          .theory-description{
          margin-left: 3rem;
          }
      
        `}
      </style>

    </div>
  );
}
