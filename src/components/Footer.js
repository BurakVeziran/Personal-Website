import React from "react"
import { Link } from "gatsby"




const Footer = () => {
    return (
        <footer style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
            <div style={{ margin: "auto" }}>
                <Link to="/">Home</Link> {" | "}
                <a
                    href="https://www.linkedin.com/in/burakveziran/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                {" | "}
                <a
                    href="https://github.com/BurakVeziran"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </div>
            <span
                style={{
                    margin: "auto",
                    fontSize: "xx-small",
                    textAlign: "center",
                    paddingBottom: "10px",
                }}
            >
        © 2021-{new Date().getFullYear()} Burak Veziran {" | "} Source code distributed under MIT License
      </span>
        </footer>
    )
}


export default Footer
