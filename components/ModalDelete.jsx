function ModalDelete(props) {
  function cancelHandler() {
    props.cancelConfirm();
  }

  function deleteHandler() {
    props.deleteConfirm();
  }

  return (
    <div className="fixed top-[250px] left-[480px] w-[500px] h-[160px] z-50 overflow-hidden text-center bg-neutral-50 rounded-[30px] flex justify-center items-center modal_mobile">
      <div className="flex flex-col items-center justify-center">
        <h2>Удаление Организации</h2>
        <p>Вы уверены, что хотите удалить организацию?</p>

        <div className="flex flex-row mt-[20px] gap-[30px]">
          <button onClick={cancelHandler}>Отмена</button>
          <button onClick={deleteHandler}>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
