import classNames from "classnames";

const ToggleBtn = ({ toggleActive, selected }) => {
  return (
    <button
      onClick={() => {toggleActive()
      }
        
      }
      id="toggle-switch"
      type="button"
      className={classNames(
        "flex w-10 h-5 bg-Neutral6 items-center px-0.5 rounded-full transition-all duration-5 00",
        {
          "bg-Red4": selected,
        }
      )}
    >
      <span
        className={classNames(
          "w-4 h-4 bg-Neutral1 rounded-full transition-all duration-500",
          {
            "ml-5": selected,
          }
        )}
      ></span>
    </button>
  );
};
export default ToggleBtn;
