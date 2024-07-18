import "./App.css";

function App() {
  function Submit(e) {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    

    fetch(
      "https://script.google.com/macros/s/AKfycby1XeaDKGAA7bap5vZby3Jt3HGfpXDgQozUFn-1mFUr-uF5cU_b2a6L36SM8RSy15fa/exec",
      {
        method: "POST",
        body: formdata,
      }
    )
      .then((response) => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  }

  return (
    <div className="App">
      <div className="form-container">
        <h1>Registration Form</h1>
        <form className="form" onSubmit={Submit}>
          <input
            className="input-field"
            name="Name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            className="input-field"
            name="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            className="input-field"
            name="Phone"
            type="tel"
            placeholder="Enter your Phone Number"
            required
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
          <div className="footer">
            <p>&copy; 2024 Rishav Tiwari. All rights reserved.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
