import { useCallback } from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import "./App.css";

function App() {
  const onDrop = useCallback<NonNullable<DropzoneOptions["onDrop"]>>(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file: File) => {
        console.log(file);
        const reader: FileReader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = (event: any) => {
          // Do whatever you want with the file contents
          const content = event.target?.result;
          console.log(content);
        };
        reader.readAsText(file);
      });
    },
    []
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello 👋</p>
        <div {...getRootProps()} className="drag-area">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
