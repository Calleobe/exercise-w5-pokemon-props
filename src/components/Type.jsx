// Destructure pokemon types props here :)
/* eslint-disable react/prop-types */
export const Type = ({ types }) => {
  return (
    <div>
      {types.map((type, index) => (
        <span key={index} className="pokemon-type">
          {type}
        </span>
      ))}
    </div>
  );
};
