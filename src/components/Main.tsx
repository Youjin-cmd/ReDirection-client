import { useEffect } from "react";

import usePageStore from "../store/page";
import useEditStore from "../store/edit";
import useModalStore from "../store/modal";

import Visual from "../MainItems/Visual";
import Introduction from "../MainItems/Introduction";
import DropInput from "../MainItems/DropInput";
import Button from "../shared/Button";
import TrialModal from "../Modal/TrialModal";

function Main() {
  const { setCurrentPage } = usePageStore();
  const { resetEditData } = useEditStore();
  const { showTrialModal, setShowTrialModal } = useModalStore();

  useEffect(() => {
    setCurrentPage("");
    resetEditData();
  }, [setCurrentPage, resetEditData]);

  return (
    <>
      <Visual />
      <Introduction />
      <DropInput />
      <Button
        className="fixed bottom-10 right-10 w-28 h-28 text-xl z-20 text-red rounded-full font-pacifico ring-2 ring-red bg-white transition ease-in-out hover:ring-2 hover:ring-white hover:bg-red hover:text-white hover:animate-dancing"
        onClick={() => setShowTrialModal(true)}
      >
        try demo
      </Button>
      {showTrialModal && <TrialModal />}
    </>
  );
}

export default Main;
