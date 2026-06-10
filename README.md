# WEB103 Project 1 - Personal Portfolio Website

Submitted by: COCO-WaterBird

About this web app: **A personal portfolio website that displays information about my web development learning journey. The app includes pages for blogs, projects, contact information, dynamic detail pages for each list item, and a custom 404 page.**

Time spent: 6 hours

## Required Features

The following **required** functionality is completed:

* [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
* [x] **The web app displays a title**
* [x] **The web app displays at least five unique list items, each with at least three displayed attributes such as title, text, and category or tech stack**
* [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**

  * [x] **Each detail view has a unique endpoint, such as `localhost:3000/blogs/express-server` and `localhost:3000/projects/personal-portfolio`**
  * [x] **The video walkthrough shows the unique URL for each detailed view**
* [x] **The web app serves an appropriate 404 page when no matching route is defined**
* [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

* [x] The web app displays items in a unique format, such as custom styled cards with borders, shadows, hover effects, and button-style links.

The following **additional** features are implemented:

* [x] Added multiple pages including Home, About, Blogs, Projects, and Contact.
* [x] Added dynamic routes for blog detail pages.
* [x] Added dynamic routes for project detail pages.
* [x] Added a custom 404 page for undefined routes.
* [x] Added custom CSS styling on top of PicoCSS to make the list items look more distinctive.

## Project Repository

GitHub Repository: https://github.com/COCO-WaterBird/personal-portfolio/tree/main

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://raw.githubusercontent.com/COCO-WaterBird/personal-portfolio/main/gif-p1.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **Kap**.

## Notes

One challenge I encountered while building the app was understanding how dynamic routes work in Express. At first, the blog and project items only displayed as static HTML content, but I later added routes such as `/blogs/:id` and `/projects/:id` so each item could have its own detail page.

Another challenge was making sure the app served a custom 404 page when users visited a route that did not exist. I solved this by adding a catch-all route at the end of `server.js`.

I also customized the list item styling with CSS so the blog and project entries appear as unique cards instead of plain default article elements.

## License

Copyright [2026] [COCO-WaterBird]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
