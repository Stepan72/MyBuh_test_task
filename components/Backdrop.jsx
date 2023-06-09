function Backdrop(props) {
  function clickHandler() {
    props.cancel();
  }

  return (
    <div
      onClick={clickHandler}
      className="fixed top-0 left-0 w-[100%] h-[100%] z-10 bg-neutral-600 opacity-[0.7]"
    ></div>
  );
}

export default Backdrop;
