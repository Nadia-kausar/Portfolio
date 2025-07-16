import React, { useRef } from 'react';
import './BlogSection.css';

const blogPosts = [
  {
    id: 1,
    title: 'Mastering HTML & CSS',
    points: [
      'Structure your content with semantic HTML.',
      'Style your pages using modern CSS3 techniques.',
      'Use Flexbox and Grid for layouts.',
      'Ensure responsive design with media queries.',
    ],
  },
  {
    id: 2,
    title: 'JavaScript Essentials',
    points: [
      'Understand variables, functions, and loops.',
      'Manipulate DOM elements dynamically.',
      'Handle events and asynchronous code.',
      'Utilize ES6 features like let, const, and arrow functions.',
    ],
  },
  {
    id: 3,
    title: 'React Fundamentals',
    points: [
      'Build reusable components.',
      'Manage state with hooks.',
      'Use props to pass data between components.',
      'Create dynamic UIs with conditional rendering.',
    ],
  },
  {
    id: 4,
    title: 'Node.js & Express.js',
    points: [
      'Build server-side applications using Node.js.',
      'Create REST APIs with Express.js.',
      'Handle routes and middleware.',
      'Integrate with frontend using JSON.',
    ],
  },
  {
    id: 5,
    title: 'Working with MongoDB',
    points: [
      'Store data using NoSQL collections.',
      'Perform CRUD operations with Mongoose.',
      'Use schemas and models to structure data.',
      'Connect MongoDB with Express servers.',
    ],
  },
  {
    id: 6,
    title: 'Figma & UI Design',
    points: [
      'Design clean, user-focused interfaces.',
      'Use Figma for wireframes and prototypes.',
      'Collaborate with developers and designers.',
      'Ensure UI consistency across pages.',
    ],
  },
  {
    id: 7,
    title: 'Bootstrap & Tailwind CSS',
    points: [
      'Use Bootstrap for responsive components.',
      'Apply utility-first classes with Tailwind.',
      'Speed up UI development with prebuilt kits.',
      'Customize designs efficiently.',
    ],
  },
  {
    id: 8,
    title: 'Communication & Leadership',
    points: [
      'Improve team collaboration.',
      'Practice clear and concise communication.',
      'Lead projects with confidence and structure.',
      'Adapt to feedback and foster growth.',
    ],
  },
  {
    id: 9,
    title: 'WordPress & CMS',
    points: [
      'Create websites with WordPress themes and plugins.',
      'Use Elementor and Gutenberg builders.',
      'Manage content with a visual editor.',
      'Optimize for SEO and performance.',
    ],
  },
];

const BlogSection = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="blog-section" id="blog">
      <h2 className="blog-heading">My Tech & Soft Skills Blog</h2>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>&laquo;</button>
        <div className="blog-carousel" ref={scrollRef}>
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <h3>{post.title}</h3>
              <ul>
                {post.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={() => scroll('right')}>&raquo;</button>
      </div>
    </section>
  );
};

export default BlogSection;
