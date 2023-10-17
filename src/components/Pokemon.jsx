/* eslint-disable react/prop-types */
// Destructure pokemon props here :)
export const Pokemon = ({ data }) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <img src={data.imageUrl} alt={data.name} />
    </div>
  );
};
