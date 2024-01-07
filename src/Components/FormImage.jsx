import { useState } from 'react'

const FormImage = () => {

    const [selectedImage, setSelectedImage] = useState(null);


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
      
  return (
    <div className='flex justify-center items-center bg-slate-100 p-3 rounded-md'>
            <input type="file" name="imagensubida" accept="image/png, .jpeg, .jpg, image/gif"  onChange={handleImageUpload}></input>
            <div>
  {selectedImage && (
  <div>
    <h3>Imagen seleccionada:</h3>
    <img src={selectedImage} alt="Imagen seleccionada" style={{ maxWidth: '100%', maxHeight: '300px' }} />
  </div>
)}
  </div>
    </div>
  )
}

export default FormImage