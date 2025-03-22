function Footer(){
  const time = new Date();
  const times = time.getFullYear();
    return (
      <>
        <footer className="bg-black text-white text-center h-16 mt-20 mb-20">
          <div className="text-center text-sm text-white">
            Copyright © {times}
            <span className="font-bold"> Rainer Morales </span>All Right
            Reserved
          </div>
        </footer>
      </>
    );
}

export default Footer