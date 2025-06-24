import classNames from "classnames";

const Buttons = ({ label, active,display }) => {
  return (
    <button onClick={display}
      className={classNames(
        "nav-btns bg-Neutral7 py-1.5 px-4 outline  outline-Neutral6 rounded-4xl capitalize",
        {
          "bg-Red5": active,
        }
      )}
    >
      {label}
    </button>
  );
};
export default Buttons;
