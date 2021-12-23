import React, {useState} from "react";
import {useDropzone} from 'react-dropzone';

function Dropzone(){

    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
        }
    });
    
    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{width: "270px",}} />
                <p>Obrázok vložený</p>
            </div>
        </div>
    ))

    return (
        <div>
            <div className="Dropzone" {...getRootProps()}> 
                <input {...getInputProps()} multiple/>           
                <p>Drag and Drop</p>          
            </div>
            <div className="previewImg">
                {images}          
            </div>        
        </div>
    ); 
};

export default Dropzone;
