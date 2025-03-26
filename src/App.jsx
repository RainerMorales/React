
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import SocialMedia from "./component/SocialMedia";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            marginTop:"50px",
            background: "#1e293b", // Dark blue
            color: "#fff",
          },
        }}
      />
      <Header></Header>
      <Content></Content>
      <SocialMedia></SocialMedia>
      <Footer></Footer>
    </>
  );
}

export default App;
