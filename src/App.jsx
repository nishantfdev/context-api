import { useContext } from "react";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";

function App() {
  const { setUser } = useContext(UserContext);
  function loginHandler() {
    setUser({
      name: "Nishant",
      email: "nishant@gmail.com",
      img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png",
    });
  }
  return (
    <>
      <div className="border-b py-3 max-w-[500px]">
        <div className="flex justify-between max-w-4xl mx-5">
          <h3>Context API</h3>
          <div>
            <button onClick={loginHandler} className="">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="mt-44 mx-5">
        <Profile />
      </div>
    </>
  );
}

export default App;
