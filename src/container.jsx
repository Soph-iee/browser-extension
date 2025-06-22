import lightIcon from "./assets/images/icon-sun.svg";
import logo from "./assets/images/logo-darkmode.svg";
import Buttons from "./buttons";
import ExtensionCards from "./data.json";

function Container() {
  return (
    <div className="parent-container h-full bg-linear-to-br from-darkgradient1 to-darkgradient2">
      <div className="container text-Neutral0 w-9/10 mx-auto my-0 py-4 ">
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
            <button className="nav-btns text-Neutral9 bg-Red4 py-1.5 px-4 outline  outline-Neutral6 rounded-4xl capitalize">
              all
            </button>

            <Buttons label="active" />
            <Buttons label="inactive" />
          </ul>
        </nav>
        <main className="flex flex-col gap-4 pt-4">
          {ExtensionCards &&
            ExtensionCards.map((card) => {
              return (
                <section
                  className="extension-card bg-Neutral7 p-4 rounded-xl  outline-Neutral6 outline-1 "
                  key={card.name}
                >
                  <div className="extension-card-header flex gap-4">
                    <figure>
                      <img src={card.logo} alt="card-logo" />
                      {console.log(card.logo)}
                    </figure>
                    <div className="card-details">
                      <h2 className="text-xl font-bold">{card.name}</h2>
                      <p className="text-sm">{card.description}</p>
                    </div>
                  </div>
                  <div className="extension-card-btns flex justify-between items-center pt-4">
                    <Buttons label="remove" />
                    {/* <label htmlFor=""></label>
                    <input className="bg-Red7" type="checkbox" placeholder="go" /> */}
                    <button
                      id="toggle-switch"
                      type="button"
                      role="switch"
                      aria-checked="false"
                      className="group flex w-9 h-5 p-0.5 rounded-full bg-Red5 transition-colors duration-200 ease-in-out overflow-hidden outline-none focus-visible:ring focus-visible:ring-purple-400 aria-checked:bg-blue-400"
                    >
                      <span className="w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out group-aria-checked:translate-x-full outline-Neutral9"></span>
                    </button>
                    {/* <label id="toggle-switch-label" for="toggle-switch">
                      Switch off
                    </label> */}
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
