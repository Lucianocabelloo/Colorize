/* eslint-disable react/prop-types */
import ItemColors from './ItemColors';

const ListColors = ({ colors }) => {
  console.log(colors);
  return (
    <div className='w-[100%] h-[100%] bg-red-500 estilo'>
      {colors.map((color, index) => (
        <ItemColors key={index} color={color} />
      ))}
    </div>
  );
};

export default ListColors;
