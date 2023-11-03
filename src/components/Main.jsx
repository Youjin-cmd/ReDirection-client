import { useEffect } from "react";
import DropInput from "../MainItems/DropInput";
import usePageStore from "../store/page";
import Introduction from "../MainItems/Introduction";
import Visual from "../MainItems/Visual";

function Main() {
  const { setCurrentPage } = usePageStore();

  useEffect(() => {
    setCurrentPage("");
  }, [setCurrentPage]);

  return (
    <>
      <Visual />
      <Introduction />
      <DropInput />
    </>
  );
}

export default Main;
