import classNames from "classnames";

const Buttons = ({ label, all }) => {
  return (
    <button
      className={classNames(
        "nav-btns bg-Neutral7 py-1.5 px-4 outline  outline-Neutral6 rounded-4xl capitalize",
        {
          "bg-Red5": all,
        }
      )}
    >
      {label}
    </button>
  );
};
export default Buttons;
