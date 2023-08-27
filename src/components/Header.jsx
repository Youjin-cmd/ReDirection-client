import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";

function Header() {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="flex items-end w-full h-min-[100px] p-5 pt-12">
      <Button className="hover:cursor-pointer" onClick={handleClickHome}>
        <img src="/assets/logo.svg" alt="logo" className="mr-10" />
        <img
          className="absolute w-8 top-[40px] left-[28px] -z-10"
          src="/assets/logo_rectangle.svg"
          alt="decoration for logo"
        />
      </Button>
      <div>
        <span className="truncate h-10">
          Convert your horizontal video to vertical video with motion analysis,
          for free!
        </span>
      </div>
    </div>
  );
}

export default Header;
