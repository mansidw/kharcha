import React, { useState, ChangeEvent } from "react";
import Papa from "papaparse";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

const FileUploader: React.FC = () => {
  const [data, setData] = useState<any[][]>([]);
  const [error, setError] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();

  // This function will be called when
  // the file input changes
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");

    // Check if user has entered the file
    if (e.target.files && e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it's not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If the input type is correct set the state
      setFile(inputFile);
    }
  };

  const handleParse = () => {
    // If the user clicks the parse button without
    // a file we show an error
    if (!file) return alert("Enter a valid file");

    // Initialize a reader which allows the user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = ({ target }) => {
      const csv = Papa.parse(target?.result as string, {
        header: true,
      });
      const parsedData = csv?.data;
      let finarr: any = [];

      for (let i = 0; i < parsedData.length; i++) {
        let rows = Object.keys(parsedData[i] as string);
        let columns = Object.values(parsedData[i] as string);
        let res: any = rows.reduce((acc: any, e: string, i: number) => {
          return [...acc, { [e]: columns[i] }];
        }, []);

        finarr.push(res);
      }
      console.log(finarr);
      setData(finarr);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <p>FileUploader</p>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleParse}>Parse</button>
    </div>
  );
};

export default FileUploader;
