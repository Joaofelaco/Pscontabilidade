import React from "react";
import "./blog.css";

export function Blog() {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-container">
        <div className="blog-card">
          <img src="/blog1.svg" alt="Blog 1" />
          <h2>Título do Blog 1</h2>
          <p>Descrição do Blog 1</p>
        </div>
        <div className="blog-card">
          <img src="/blog2.svg" alt="Blog 2" />
          <h2>Título do Blog 2</h2>
          <p>Descrição do Blog 2</p>
        </div>
        <div className="blog-card">
          <img src="/blog3.svg" alt="Blog 3" />
          <h2>Título do Blog 3</h2>
          <p>Descrição do Blog 3</p>
        </div>
      </div>
    </div>
  );
}