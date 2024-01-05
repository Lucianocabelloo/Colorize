import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormColors = () => {

  const [color, setColor] = useState([])
  const [change, setChange] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    setChange(e.target.value)
    console.log(change)
  }

  const handleAddColor = (event) => {
    event.preventDefault()
    console.log("añadidor color")
  }




  return (
      <div className='flex flex-col justify-center items-center bg-slate-100'>
        <h2 className=' text-2xl font-semibold'>Administrar colores</h2>

      <Form onSubmit={handleAddColor} className='flex gap-5 items-center w-[100%] justify-evenly'>
    <Form.Group className="mb-3 flex flex-col" controlId="formBasicEmail">
    <Form.Label className='text-center font-semibold text-lg' htmlFor="exampleColorInput">Color picker</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#563d7c"
        title="Choose your color"
        className='h-[100px] w-[100px]'
        
        />

    </Form.Group>
    <Form.Group className='flex gap-5'>
      <Form.Control onChange={handleChange} value={change} type="text" className='w-[30vw] p-3 rounded-md' placeholder="Ingrese el color" />
    </Form.Group>

    <Button className=' bg-orange-600 p-3 rounded-md' type="submit">
      Seleccionar
    </Button>
  </Form>
        </div>
  )
}

export default FormColors