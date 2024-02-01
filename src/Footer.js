import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-text p-2 ">
        This project was codded by{" "}
        <a
          href="https://www.linkedin.com/in/khrystyna-karieva-53aa5215a/"
          target="_blank"
        >
          Khrystyna Karieva
        </a>{" "}
        and is <a href="/">open-sourced on GitHub</a> and{" "}
        <a href="/">hosted on Netlify</a>{" "}
      </p>
    </div>
  );
}
