
const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

const blogs = {
  "express-server": {
    title: "How I Built My First Express Server",
    category: "Backend Development",
    description:
      "In this post, I explain how a Node and Express server works and how it serves static HTML files to the browser.",
  },
  "frontend-backend": {
    title: "Frontend vs Backend Responsibilities",
    category: "Fullstack Development",
    description:
      "This post explains the difference between what the client handles and what the server handles in a web application.",
  },
  "static-html": {
    title: "Why Static HTML Still Matters",
    category: "Web Fundamentals",
    description:
      "Static HTML is the foundation of the web. Before using frameworks like React, it is important to understand how basic pages are served.",
  },
  "css-styling": {
    title: "What I Learned About CSS Styling",
    category: "Frontend Development",
    description:
      "In this post, I talk about how CSS helps control the layout, spacing, colors, and overall appearance of a website.",
  },
  "javascript-interactive": {
    title: "Using JavaScript to Make Pages Interactive",
    category: "JavaScript",
    description:
      "This post explains how JavaScript can be used to add interactivity to a website, such as buttons, dynamic content, and user actions.",
  },
};

const projects = {
  "personal-portfolio": {
    title: "Personal Portfolio Website",
    techStack: "HTML, CSS, JavaScript, Node.js, Express",
    description:
      "A personal portfolio website served by an Express backend. It includes pages for blogs, projects, and contact information.",
  },
  "gift-recommendation": {
    title: "Gift Recommendation Website",
    techStack: "HTML, CSS, JavaScript, Node.js, Express",
    description:
      "A static MVP for a gift recommendation platform that organizes gift ideas by audience, category, and price point.",
  },
  "fullstack-blog": {
    title: "Fullstack Blog Platform",
    techStack: "Node.js, Express, PostgreSQL",
    description:
      "A future version of this portfolio that stores blog posts and projects in a database.",
  },
  "todo-list": {
    title: "Interactive To-Do List App",
    techStack: "HTML, CSS, JavaScript",
    description:
      "A simple to-do list application that allows users to add, complete, and remove tasks from the page.",
  },
  "weather-app": {
    title: "Weather Information App",
    techStack: "HTML, CSS, JavaScript, API",
    description:
      "A small web application that displays weather information based on a user's selected city or location.",
  },
};

app.get("/blogs/:id", (req, res) => {
  const blogId = req.params.id;
  const blog = blogs[blogId];

  if (!blog) {
    return res.status(404).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 - Blog Not Found</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <main class="container">
          <h1>404 - Blog Not Found</h1>
          <p>The blog post you are looking for does not exist.</p>
          <a href="/blogs.html">Back to Blogs</a>
        </main>
      </body>
      </html>
    `);
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${blog.title}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <main class="container">
        <h1>${blog.title}</h1>
        <p><strong>Category:</strong> ${blog.category}</p>
        <p>${blog.description}</p>
        <a href="/blogs.html">Back to Blogs</a>
      </main>
    </body>
    </html>
  `);
});

app.get("/projects/:id", (req, res) => {
  const projectId = req.params.id;
  const project = projects[projectId];

  if (!project) {
    return res.status(404).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 - Project Not Found</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <main class="container">
          <h1>404 - Project Not Found</h1>
          <p>The project you are looking for does not exist.</p>
          <a href="/projects.html">Back to Projects</a>
        </main>
      </body>
      </html>
    `);
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${project.title}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <main class="container">
        <h1>${project.title}</h1>
        <p><strong>Tech Stack:</strong> ${project.techStack}</p>
        <p>${project.description}</p>
        <a href="/projects.html">Back to Projects</a>
      </main>
    </body>
    </html>
  `);
});

app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>404 - Page Not Found</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <main class="container">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/">Back to Home</a>
      </main>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
