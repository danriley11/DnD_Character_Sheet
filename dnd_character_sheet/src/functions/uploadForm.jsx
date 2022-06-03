import React, { useState } from 'react';

function UploadForm() {
  // const [selectedFile, setSelectedFile] = useState();
  // const [isSelected, setIsSelected] = useState(false);
  // console.log(selectedFile);

  // const changeHandler = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   setIsSelected(true);
  // };

  const handleFileClickAdded = (e) => {
    const { files } = e.target;

    const filesParsed = [];
    for (let i = 0, len = files.length; i < len; i += 1) {
      // const { current } = inputRef;
      const fileName = files[i].name;
      if (true) {
        const fileData = new FileReader();
        fileData.readAsText(files[i]);
        fileData.onload = () => {
          filesParsed.push({
            data: fileData.result,
            fileName,
          });
          if (len === filesParsed.length) {
            console.log(JSON.parse(filesParsed[0].data));
          }
        };
      }
    }
  };

  return (
    <div>
      {/* <input type="file" name="file" onChange={changeHandler} /> */}
      <input type="file" name="file" onChange={handleFileClickAdded} />
      {/* {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>lastModifiedDate: {selectedFile.lastModifiedDate.toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )} */}
    </div>
  );
}

export default UploadForm;
