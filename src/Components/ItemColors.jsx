import Button from "react-bootstrap/esm/Button";

const ItemColors = ({ color }) => {

  const colorrr = color;
  const colorStyle = {
    backgroundColor: colorrr,
    height: "150px",
    width: "100%",
  };
  console.log(colorStyle)

  return (
    <>
      <div className="flex flex-col w-[10%] justify-evenly items-center gap-2 border p-3 rounded-md bg-slate-500 m-3">
        <h2 className="w-[5ch]">Color: {color}</h2>
        <div  style={colorStyle}></div>
        <Button className="p-3 bg-red-600 rounded-md w-[100%]">Eliminar</Button>
      </div>
    </>
  );
};

export default ItemColors;
