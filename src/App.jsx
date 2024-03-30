import Matrix from "./Components/Matrix"



function App() {


  return (
    <div className="bg-black text-blue-900 w-full h-screen flex flex-col gap-24 items-center">
      <div className="flex justify-center p-10 ">
        <div className="flex flex-col justify-center items-center">
          
        <h1 className="text-4xl font-bold">Hare Krishna</h1>
        <div className="border border-orange-600 rounded-full w-1/2 flex justify-center"></div>
        </div>

      </div>

      <div>
        < Matrix />
      </div>
    </div>
  )
}

export default App
