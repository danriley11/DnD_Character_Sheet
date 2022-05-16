export default function handleFormSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(document.getElementById('test'));
  
    const formJSON = Object.fromEntries(data.entries());
  
    // for multi-selects, we need special handling
    formJSON.snacks = data.getAll('snacks');
  
    //convert from inputs and outputs to clean innerText
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
    console.log(results.innerText)
  }