import "./App.css";

function App() {
  function Submit(e) {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const formdata = new FormData(form);
    

    fetch(
      "https://script.google.com/macros/s/AKfycbwDEbhY-sRVH1KJUoOo1cRUHLpxLmUX41oxmpjbECDhclFK5LNg7wim9O_vLCua91zD/exec",
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

  const sheetval = () => {
    let sheeturl = "https://docs.google.com/spreadsheets/d/1ulq4B2DLJMCnToNkjqutXgSDg9ro6-3ZtMd_TNQel6Y/edit?gid=0#gid=0";
    window.open(sheeturl);
  }

  return (
    
    <div className="App">

      <div className="component">
        <h1 className="Heading">Registration Form</h1>
        <form className="form" onSubmit={Submit}>
          <div className="one bhai">
            <input type="text" className="name" name="Name" placeholder="Name" required />
            <input type="email" className="email" name="Email" placeholder="Email" required />
          </div>
          <br />
          <div className="two bhai">
            <input type="Number" className="phone" name="Phone" placeholder="Phone" required />
            <input type="text" className="campus" name="Campus" placeholder="Campus" required />
          </div>
          <br />
          <div className="three bhai">
            <input type="text" className="school" name="School" placeholder="School" required />
            <input type="text" className="education" name="Education" placeholder="Last Education" required />
          </div>
          <br />
          <div className="button bhai">
            <button className="btn1" type="submit">Submit</button>
            <button className="btn2" type="click" onClick={sheetval}>Check Data</button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default App;
