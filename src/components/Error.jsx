/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../shared/Button";
import usePageStore from "../store/page";
import { useEffect } from "react";

function Error() {
  const { setCurrentPage } = usePageStore();
  const location = useLocation();
  const navigate = useNavigate();
  const { errorCode, errorText } = location.state;

  useEffect(() => {
    setCurrentPage("Oops!");
  }, []);

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <h1 className="mb-5 text-xl">
        {errorCode < 500 ? errorText : "something went wrong"}
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

export default Error;
