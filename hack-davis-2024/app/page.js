import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <nav className ="flex flex-row w-full justify-around items-center">
        <div className = "text-sm flex space-x-4 items-center size-1/3"> 
          <a><img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=900&t=st=1714013583~exp=1714014183~hmac=571c997a22933468fd64fa886123887f1a6ca763cf193e950a8534304e97abfd"></img></a>
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
        </div>
        <div className = "text-md flex space-x-4">
          <a className = "text-lime-500 bg-lime-100 px-3 py-3 rounded border-2 border-lime-300 hover:bg-orange-100 hover:boder-2 boder-orange-300 hover:text-orange-500" >button</a>
          <a className = "text-purple-500 bg-purple-100 px-3 py-3 rounded border-2 border-purple-300 hover:bg-orange-100 hover:boder-2 boder-orange-300 hover:text-orange-500">button</a>
        </div>

      </nav>
      <div className="h-max">
        <p className="text-2xl text-black">Accouting <span className="text-blue-600">makes simpler</span></p>
      </div>
    </main>
  );
}
