👋🏻 Hello there, welcome to my summer project where I created meaningful to me: a photography portfolio!

## 1. Introduction and Motives
This project is a personal photography showcase website that merges my passions for programming and photography. Over the summer of 2025, I was looking to improve my skillset by learning web development. With no prior experience, the beginning stages were tricky. I progressed through [The Odin Project's JavaScript pathway](https://www.theodinproject.com/paths/full-stack-javascript), and it helped me strengthen my understanding of HTML, CSS, and JavaScript fundamentals, Git, and other modern development practices. Ready to apply my learning outside of their guided projects, I began working on this photography portfolio website.

## 2. Technology & Functionality
**Technologies Used:**

[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
[![CSS](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7A400?logo=javascript&logoColor=fff)](#)
[![ReactJs](https://img.shields.io/badge/ReactJs-149ECA?logo=react&logoColor=fff)](#)
[![SQL](https://img.shields.io/badge/SQL-00694d?logo=mysql&logoColor=fff)](#)
[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](#)

The website begins with a 2x2 grid-based home page showcasing the four core categories of my camera journey: **portraits, sports, travel, and video**. Each image acts as an interactive button, leading to its respective category page with a carefully selected gallery of my favorite shots!

Each gallery implements **scroll-triggered animations**, causing photos to fade in smoothly as the user navigates through the collection. I felt that this design choice emphasizes the visual storytelling aspect and adds a little more taste to the website, contributing to an **immersive viewing experience**. A **contact form** is also in development to allow interested persons to reach out for inquiries or collaborations. 

From a technical standpoint, the project is structured with multiple **React.js components** and `.jsx` files. It uses a responsive CSS layout to ensure compatibility across devices. The website is not currently deployed anywhere, but this GitHub repository will be actively updated as I make progress.

## 3. Challenges & Reflections
It was amazing seeing how transferrable the skills I developed in other langauges, like `async await` in Swift for asynchronous programming and object-oriented programming in Java, were to learning JavaScript. My biggest obstacle was defining the grid layouts on the image pages. I played around with CSS Flexbox but found it very cumbersome to implement. I then pivoted to using a grid layout and appreciated its consistency and ease of use. CSS styling is so versatile, making it an exciting struggle to work with, especially when just beginning.

Above all, though, I learned the value of **doing things you're passionate about** and **intentionally strenghtening areas you're weak in**. At times, it was difficult staying consistent in learning new languages. My love for photography and goal of displaying my work proudly drove me to keep developing. That combination of curiosity and persistence made this a meaningful endeavor for me.

## 4. Moving Forward
Looking ahead, I plan to expand the technical scope of this project by deepening my understanding of **SQL** and learning **AWS services**. While I don't predict my website needing to be scaled up for a large number of users (yet), I know these technologies are foundational skills that will help me moving forward.

Beyond the technical goals, I hope to **grow my photography into something more meaningful** than a side gig. This website is not only a fun personal project but a platform where I can express myself and connect with others through my work. Photography—and the arts in general—is something I'm truly passionate about. I'd love to keep it going and give back to others in the process.

## 
Thanks for joining me on this journey, I'm excited for future progress and learning!

## 5. Contact Form + Supabase Setup
Use this workflow to store contact submissions in Supabase/PostgreSQL directly from the frontend.

### Supabase project and table
1) Create a free project at https://supabase.com and grab the `Project URL` and `anon` public API key (Settings → API).  
2) Run this SQL in the Supabase SQL editor to create the table:
```
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  first_name text,
  last_name text,
  email text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

alter table public.contact_messages enable row level security;
```
3) Add an insert policy for the `anon` role:
```
create policy "Allow anon inserts"
on public.contact_messages
for insert
to anon
with check (true);
```
4) (Optional) Add rate limits with Supabase Protection or PostgREST policies if you expect abuse.

### App configuration
1) Create `.env.local` in the project root and set:
```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```
2) Install dependencies and run the dev server:
```
npm install
npm run dev
```

### How it works
- The form lives in `src/pages/About.jsx` and posts to the `contact_messages` table using `@supabase/supabase-js` via `src/supabaseClient.js`.
- Basic client-side validation is included (required fields + simple email format).
- Success and error states render inline next to the submit button.
