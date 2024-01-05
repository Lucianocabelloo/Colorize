
import './App.css'
import FormColors from './Components/FormColors'
import ListColors from './Components/listColors'

function App() {


  return (
    <>
    <div className='p-5 min-h-[100vh] flex flex-col'>
      <header>
        <h1>Header</h1>
      </header>
      <main className=' flex-grow'>
        <FormColors/>
        <ListColors/>
      </main>
      <footer>
        <footer>Footer</footer>
      </footer>
    </div>
    </>
  )
}

export default App
