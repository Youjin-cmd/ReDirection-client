/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import usePageStore from "../store/page";
import { useEffect } from "react";

function PageNotFound() {
  const navigate = useNavigate();
  const { setCurrentPage } = usePageStore();

  useEffect(() => {
    setCurrentPage("Page Not Found");
  }, []);

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <h1 className="mb-5 text-xl">
        {`The page you are looking for doesn't exist`}
      </h1>
      <Button
        className="w-40 h-8 rounded-xl bg-blue text-white hover:"
        onClick={handleClickHome}
      >
        Back to Home
      </Button>
    </div>
  );
}

export default PageNotFound;
