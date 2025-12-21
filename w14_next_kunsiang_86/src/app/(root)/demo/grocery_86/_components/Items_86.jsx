import SingleItem from './SingleItem_86';

const Items = ({ items }) => {
  return (
    <div className='items'>
      {items?.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
