import CompleteIcon from "../shared/CompleteIcon";
import LoadingSpinner from "../shared/LoadingSpinner";
import useProgressStore from "../store/progress";

function EditProgress() {
  const { editStatus } = useProgressStore();

  return (
    <>
      {editStatus && (
        <li className="flex m-3 opacity-100">
          {editStatus === "in progress" ? (
            <>
              <LoadingSpinner />
              Editing video
            </>
          ) : (
            <>
              <CompleteIcon />
              Editing video complete
            </>
          )}
        </li>
      )}
    </>
  );
}

export default EditProgress;
