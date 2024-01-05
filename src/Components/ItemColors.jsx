import Button from "react-bootstrap/esm/Button"

const ItemColors = () => {

  const color = "bg-red-600 h-[150px] w-[100%] "

  return (
    <>
    <div className="flex flex-col w-[10%] justify-center items-center gap-2 border p-3 rounded-md bg-slate-300 m-3">
      <h2>Color: (Nombre de color)</h2>
      <div className={color}></div>
      <Button className="p-3 bg-red-600 rounded-md w-[100%]">Eliminar</Button>
    </div>
    </>
  )
}

export default ItemColors