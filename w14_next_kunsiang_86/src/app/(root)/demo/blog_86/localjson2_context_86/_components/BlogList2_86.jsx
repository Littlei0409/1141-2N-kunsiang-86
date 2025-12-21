import Wrapper from '../../../_assets/Wrapper/Blog2_86';
import Blog2_86 from './Blog2_86';

import { BlogContextProvider_86, useBlogContext_86 } from '../_blogContext_86';

const BlogList2_86 = () => {
  const { blogs_86 } = useBlogContext_86();
  return (
    <Wrapper>
      <div className='blogs-center'>
        {blogs_86?.map((item) => {
          const { id, title, descrip, category, img } = item;
          return (
            <Blog2_86
              key={id}
              id={id}
              title={title}
              descrip={descrip}
              category={category}
              img={img}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default BlogList2_86;