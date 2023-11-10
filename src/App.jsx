import Logo from "./components/Logo"
import ImagenPrinci from "./components/ImagenPrinci";
const App = () => { 
  return(
<div className=" bg bg-contain bg-no-repeat bg-white min-h-screen">
<header className="container mx-auto px-4">
<div className="flex justify-between pt-8">
<button>
  <Logo/>
</button>
<div className=" flex justify-between gap-4">
  <button>Features</button>
  <button> Team</button>
  <button>Sign in</button>
</div>

</div>
</header>

<main className="container mx-auto px-4 mt-8">
  <div className="bg-white rounded-md flex justify-between">
    <div>
    <h1 className="text-2xl font-bold">All your files in one secure location, accesible anywhere.</h1>
    <h3>Fylo stores your most important files in one secure location. Acces them wherever you need, share and collaborate with friends, family, and co-workers. </h3>
    <form className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 mt-8">
       <input className="w-full text-gray-400 outline-1 border"    type="text" placeholder="Enter your email..." />
     <button className="bg-blue-800 text-white rounded-sm">Get started</button>
     </form>
     
     </div>
     <div>
      <div >
    <button>
      <ImagenPrinci className="h-1 w-1"/>
    </button>
    </div>
    </div>
  </div>

</main>
</div>
  );
 };
 export default App;