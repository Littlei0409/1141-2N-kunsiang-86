import { useState, useEffect } from 'react';
// import blogData_86 from '../assets/data/blogData.json';
import Blog_86 from '../components/Blog_86';
import Wrapper from '../assets/wrappers/Blog2_86';

const api_url = 'http://localhost:5000/api/blog_86';

const BlogNodePage_86 = () => {
  const [name, setName] = useState('kunsiang');
  const [id, setID] = useState(213410086);
  const [blogs_86, setBlogs_86] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs', data);
      setBlogs_86(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromNodeServer();
  }, []);

  return (
    <Wrapper>
    <section className='blogs'>
      <div className='section-title'>
        <h2>
          blogs from Node -- {name}, {id}
        </h2>
      </div>

      <div className='blogs-center'>
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
    </Wrapper>
  );
};

export default BlogNodePage_86;
