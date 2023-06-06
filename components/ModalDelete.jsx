import { MdOutlineClose } from "react-icons/md";

function ModalDelete(props) {
  function cancelHandler() {
    props.cancelConfirm();
  }

  function deleteHandler() {
    props.deleteConfirm();
  }

  return (
    <div className="fixed top-[200px] left-[480px] w-[500px] h-[200px] z-50 overflow-hidden text-center bg-neutral-50 rounded-[10px] flex flex-col  items-center">
      <div className="flex justify-end w-[450px] mt-5 mb-1">
        <MdOutlineClose size={24} onClick={cancelHandler} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-sky-900 font-medium mb-5">Удаление организации</h2>
        <p>Вы уверены, что хотите удалить организацию?</p>

        <div className="flex flex-row mt-[20px] w-[450px] gap-[30px]">
          <button
            className="flex-2 px-8 text-sky-600 border-solid border-[1px]  rounded-md border-sky-600"
            onClick={cancelHandler}
            type="button"
          >
            Отменить
          </button>
          <button
            className="flex-1 p-2  bg-sky-600 text-white rounded-md"
            onClick={deleteHandler}
            type="button"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
