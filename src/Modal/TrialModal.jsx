import Modal from "./Modal";

import useModalStore from "../store/modal";

function TrialModal() {
  const { setShowTrialModal } = useModalStore();

  return (
    <Modal onClick={() => setShowTrialModal(false)}>
      <div className="flex flex-col items-center">
        <span>texttexttexttexttexttexttexttexttexttexttexttext</span>
      </div>
    </Modal>
  );
}

export default TrialModal;
