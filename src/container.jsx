// import { useState } from "react";
// import classNames from "classnames";
import lightIcon from "./assets/images/icon-sun.svg";
import logo from "./assets/images/logo-darkmode.svg";
import Buttons from "./buttons";
import ToggleBtn from "./toggle";
import ExtensionCards from "./data.json";
import { useState } from "react";

function Container() {
  const [cardArray, setCardArray] = useState(ExtensionCards);
  // const [isSelected, setIsSelected] = useState(false);

  const activeBtn = (id) => {
 return   id ? true : false;
  };

  const toggleActive = (name) => {
    const newArray = cardArray.map((item) => {
      return item.name === name ? { ...item, isActive: !item.isActive } : item;
    });
    setCardArray(newArray);
  };
  const displayExtensions = (value, e) => {
    console.log(e);
    const activeExtension = cardArray.filter((extension) => {
      return extension.isActive === value;
    });
    setCardArray(activeExtension);
  };
  const displayAll = (value) => {
    setCardArray(value);
  };

  return (
    <div className="parent-container   bg-linear-to-br from-darkgradient1 to-darkgradient2">
      <div className="container h-auto   bg-linear-to-br from-darkgradient1 to-darkgradient2 text-Neutral0 w-9/10 mx-auto my-0 py-4 ">
        <header className="logo bg-Neutral7 rounded-lg p-2 flex flex-row justify-between">
          <img src={logo} alt="logo-icon" />
          <button>
            <img
              src={lightIcon}
              alt="theme-icon"
              className="bg-Neutral6 p-2 rounded-lg"
            />
          </button>
        </header>
        <nav>
          <h1 className="header py-4 capitalize font-bold text-3xl text-center">
            Extensions List
          </h1>
          <ul className="flex justify-between">
            <Buttons
              label="all"
              active={() => {
                activeBtn(1);
              }}
              display={() => {
                displayAll(cardArray, 1);
              }}
            />
            <Buttons
              label="active"
              active={() => {
                activeBtn();
              }}
              display={() => {
                displayExtensions(true, 2);
              }}
            />
            <Buttons
              label="inactive"
              display={() => {
                displayExtensions(false, 3);
              }}
            />
          </ul>
        </nav>
        <main className="flex flex-col gap-4 pt-4">
          {cardArray &&
            cardArray.map((card) => {
              return (
                <section
                  className="extension-card bg-Neutral7 p-4 rounded-xl  outline-Neutral6 outline-1 "
                  key={card.name}
                >
                  <div className="extension-card-header flex gap-4">
                    <figure>
                      <img src={card.logo} alt="card-logo" />
                      {/* {console.log(card.isActive)} */}
                    </figure>
                    <div className="card-details">
                      <h2 className="text-xl font-bold">{card.name}</h2>
                      <p className="text-sm">{card.description}</p>
                    </div>
                  </div>
                  <div className="extension-card-btns flex justify-between items-center pt-4">
                    <Buttons label="remove" />
                    <ToggleBtn
                      toggleActive={() => toggleActive(card.name)}
                      selected={card.isActive}
                    />
                  </div>
                </section>
              );
            })}
        </main>
      </div>
    </div>
  );
}
export default Container;
