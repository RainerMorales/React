function Footer(){
    return (
      <>
        <footer className="bg-gray-950 text-white text-center h-16 mt-12">
          <div className="flex flex-row gap-3 w-20 justify-center items-center m-auto pb-3">
            <a href="">
              <img src="github.png" alt="" />
            </a>
            <a href="https://www.facebook.com/ka.rainerr">
              <img src="facebook.png" alt="" />
            </a>
            <a href="https://www.instagram.com/ka.rainer">
              <img src="instagram.png" alt="" />
            </a>
          </div>
          <span className="text-center text-white">©2025 Rainer Morales</span>
          
        </footer>
      </>
    );
}

export default Footer