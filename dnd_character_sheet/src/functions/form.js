export default function handleFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(document.getElementById('test'));

  const formJSON = Object.fromEntries(data.entries());

  // for multi-selects, we need special handling
  formJSON.snacks = data.getAll('snacks');

  //convert from inputs and outputs to clean innerText
  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, null, 2);

  // console.log(results.innerText)
  const formOutput = results.innerText
  console.log(formOutput);
  downloadFormContent(formOutput, formJSON.name) //this will hold name of download

  function downloadFormContent(formOutput, filename) {
    const dataStr = "data:text/JSON;charset=utf-8," + encodeURIComponent(formOutput)
    const downloadAnchorNode = document.createElement('a')
    if (filename === '') {filename = 'DnD Character'}
    downloadAnchorNode.setAttribute("href", dataStr)
    downloadAnchorNode.setAttribute("download", filename + ".json")
    document.body.appendChild(downloadAnchorNode) //firefox proofing
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }
}
