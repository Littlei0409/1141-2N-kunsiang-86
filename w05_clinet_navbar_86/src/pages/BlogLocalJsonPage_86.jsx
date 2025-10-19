import { useState } from 'react';

import blogData_86 from '../assets/data/blogData.json';
import Blog_86 from '../components/Blog_86';

const BlogLocalJsonPage_86 = () => {
  const [name] = useState('kunsiang');
  const [id] = useState(213410086);
  const [blogs_86, setBlogs_86] = useState(blogData_86);

  return (
    <section className="blogs">
      <div className="section-title">
        <h2>blogs from local json -- {name}, {id}</h2>
      </div>

      <div className="blogs-center">
        {blogs_86.map((item) => {
          const { id: blogId, title, descrip, category, img } = item;
          return (
            <Blog_86
              key={blogId ?? title}
              id={blogId}
              title={title}
              descrip={descrip}
              category={category}
              img={img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogLocalJsonPage_86;
