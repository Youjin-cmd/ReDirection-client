import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import usePageStore from "../store/page";

function Header() {
  const navigate = useNavigate();
  const { currentPage } = usePageStore();

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="flex items-end w-full h-min-[100px] p-5 pt-12">
      <Button className="hover:cursor-pointer" onClick={handleClickHome}>
        <img
          className="w-[200px] min-w-[200px] mr-10"
          src="/assets/logo.svg"
          alt="logo"
        />
        <img
          className="absolute w-[34px] top-[40px] left-[30px] -z-10"
          src="/assets/logo_rectangle.svg"
          alt="decoration for logo"
        />
      </Button>
      <div className="w-full mr-[240px] -z-10 text-center">
        <span className="h-10 text-xl font-medium truncate">{currentPage}</span>
      </div>
    </div>
  );
}

export default Header;
