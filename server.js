const express = require('express');
// const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/blogs/:id', (req, res) => {
    const blogId = req.params.id;

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog Detail</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
        <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
        <main class="container">
            <h1>Blog Detail Page</h1>
            <p>This is the detail page for: <strong>${blogId}</strong></p>
            <a href="/blogs.html">Back to Blogs</a>
        </main>
        </body>
        </html>
    `);
});

    


app.get("/projects/:id", (req, res) => {
    const projectId = req.params.id;
  
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Project Detail</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <main class="container">
          <h1>Project Detail Page</h1>
          <p>This is the detail page for: <strong>${projectId}</strong></p>
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