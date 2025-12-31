import Wrapper from '../../../_assets/wrapper/Blog2_28';
import Blog2_28 from './Blog2_28';

import { BlogContextProvider_28, useBlogContext_28 } from '../_blogContext_28';

const BlogList2_28 = () => {
  const { blogs_28 } = useBlogContext_28();
  return (
    <Wrapper>
      <div className='blogs-center'>
        {blogs_28?.map((item) => {
          const { id, title, descrip, category, img } = item;
          return (
            <Blog2_28
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

export default BlogList2_28;