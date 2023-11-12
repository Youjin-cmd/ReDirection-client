/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import usePageStore from "../store/page";
import useProgressStore from "../store/progress";

import Button from "../shared/Button";

function Error() {
  const { resetAllStatus } = useProgressStore();
  const { setCurrentPage } = usePageStore();
  const location = useLocation();
  const navigate = useNavigate();
  const { errorCode, errorText } = location.state;

  useEffect(() => {
    setCurrentPage("Oops!");
  }, []);

  function handleClickHome() {
    resetAllStatus();
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
