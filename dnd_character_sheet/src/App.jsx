import './styles/App.css'
import handleFormSubmit from './functions/form'

function App() {
  return (
    <>
      <form id="test">
      <div className="input-group">
        <input id="salutation-mr" name="salutation" type="radio" value="Mr." />
        <label className="inline" htmlFor="salutation-mr">Mr.</label>

        <input id="salutation-mrs" name="salutation" type="radio" value="Mrs." />
        <label className="inline" htmlFor="salutation-mrs">Mrs.</label>

        <input id="salutation-ms" name="salutation" type="radio" value="Ms." />
        <label className="inline" htmlFor="salutation-ms">Ms.</label>
      </div>

      <div className="input-group">
        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" type="text" />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" />
      </div>

      <div className="input-group">
        <label htmlFor="subject">How can I help you?</label>
        <select id="subject" name="subject">
          <option>I have a problem.</option>
          <option>I have a general question.</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="message">Enter a Message</label>
        <textarea id="message" name="message" rows="6" cols="65"></textarea>
      </div>

      <div className="input-group">
        <p className="group-label">Please send me:</p>
        <input id="snacks-pizza" name="snacks" type="checkbox" value="pizza" />
        <label className="inline" htmlFor="snacks-pizza">Pizza</label>
        <input id="snacks-cake" name="snacks" type="checkbox" value="cake" />
        <label className="inline" htmlFor="snacks-cake">Cake</label>
      </div>
      {/* <input name="secret" type="hidden" value="1b3a9374-1a8e-434e-90ab-21aa7b9b80e7" /> */}
      <button type="submit" onClick={(e) => handleFormSubmit(e)} >Send It!</button>
      </form>
      
      <div className="results">
        <h2>Form Data</h2>
        <pre></pre>
      </div>
    </>
  );
}

export default App;
