function Footer(){
  const time = new Date();
  const times = time.getFullYear();
  const p =["lorem lorem lorem"]
   const pp = ["love love"];
   const slide= ()=>{
    
   };
    return (
      <>
        <footer className="bg-black text-white text-center h-16 mt-12">
          <div className="text-center text-sm text-white">
            Copyright © {times}<span className="font-bold"> Rainer Morales </span>All Right Reserved
          </div>
        </footer>
      </>
    );
}

export default Footer