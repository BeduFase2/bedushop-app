//*Dropzone.js*//

import React from "react";
import { useDropzone } from "react-dropzone";
import '../css/Dropzone.css';

function Dropzone({ onDrop, accept, open }) {
  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept,
      onDrop,
    });

  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input className="input-zone" {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p className="dropzone-content">
              Arrastra tu imagen aqui
            </p>
          ) : (
            <p className="dropzone-content">
              Inserta la imagen de tu producto
            </p>
          )}
          <button type="button" onClick={open} className="btn">
            Seleccionar imagen
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dropzone;