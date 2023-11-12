import { useEffect } from "react";

import usePageStore from "../store/page";
import useEditStore from "../store/edit";

import Visual from "../MainItems/Visual";
import Introduction from "../MainItems/Introduction";
import DropInput from "../MainItems/DropInput";

function Main() {
  const { setCurrentPage } = usePageStore();
  const { resetEditData } = useEditStore();

  useEffect(() => {
    setCurrentPage("");
    resetEditData();
  }, [setCurrentPage, resetEditData]);

  return (
    <>
      <Visual />
      <Introduction />
      <DropInput />
    </>
  );
}

export default Main;
