function Container() {
  return (
    <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500">
      <header>
        <h3>Browser Extension</h3>
        <span>light theme</span>
      </header>
      <nav>
        <h1>Extension List</h1>
        <ul>
          <li>all</li>
          <li>active</li>
          <li>inactive</li>
        </ul>
      </nav>
      <main>
        <section className="extension-card">
          <div className="extension-card-header">
            <figure>image</figure>
            <div className="card-details">
              <h2>Devlens</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias dolorum error veli
              </p>
            </div>
          </div>
          <div className="extension-card-btns">
            <button>remove</button>
            <input type="text" placeholder="go" />
          </div>
        </section>
      </main>
    </div>
  );
}
export default Container;
