import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function MyDropzone() {
  const [files, setFiles] = useState([]);
  const [rejectedError, setRejectedError] = useState(null);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [...previousFiles, ...acceptedFiles]);
      setRejectedError(null);
    }

    if (rejectedFiles?.length) {
      setRejectedError(
        "Invalid file type. Only .doc, .docx, and .pdf files are allowed."
      );
      addErrorAnimation();
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/pdf": [".pdf"],
      "text/doc": [".doc", ".docx"],
    },
  });

  const removeFile = (name) => {
    setFiles(files.filter((file) => file.name !== name));
  };

  const addErrorAnimation = () => {
    const dragbox = document.querySelector(".dragdrop-box")
    dragbox.classList.add("errorAnimation");
    setTimeout(removeErrorAnimation, 2000)
  }

  const removeErrorAnimation = () => {
    const dragbox = document.querySelector(".dragdrop-box")
    dragbox.classList.remove("errorAnimation");
  }

  return (
    <form>
      <div {...getRootProps({ className: "dragdrop-box" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      {/* Accepted Files */}
      <h3>Accepted Files</h3>
      <ul>
        {files.map((file) => {
          return (
            <li key={file.name}>
              {file.name}
              <button
                type="button"
                onClick={() => removeFile(file.name)}
                className="button-remove"
              ><FontAwesomeIcon icon={icon({name: 'xmark'})} /></button>
            </li>
          );
        })}
      </ul>

      {/* Rejected Files */}
      {rejectedError && <div>{rejectedError}</div>}
    </form>
  );
}

export default MyDropzone;
