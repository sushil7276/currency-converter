import Convert from "./Convert";

const bgURL =
   "https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
   return (
      <>
         <div
            className={`bg-cover bg-center w-full h-[100vh] flex justify-center items-center`}
            style={{ backgroundImage: `url(${bgURL})` }}
         >
            <Convert />
         </div>
      </>
   );
}

export default App;
