import { FaCropSimple } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

type ImageRowProps = {
  file: FileWithImgURL;
  files: FileWithImgURL[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<FileWithImgURL[]>>;
}

interface FileWithImgURL {
  name: string;
  size: number;
  type: string;
  imageURL: string;
}


export default function ImageRow({ file, files, setUploadedFiles }: ImageRowProps) {

  const sizeInBytes = file.size;
  const sizeInKB = sizeInBytes / 1024;
  const sizeInMB = sizeInKB / 1024;
  let size = null;

  if (sizeInMB < 1) {
    size = `${sizeInKB.toFixed(2)} kb`;
  } else {
    size = `${sizeInMB.toFixed(2)} MB`;
  }

  const handleDelete = () => {
    const updatedFilesArray = files.filter(fileList => fileList.imageURL != file.imageURL);
    setUploadedFiles(updatedFilesArray);
  }

  return(
    <div className="image-row-wrapper">
      <div className="image-row">
        <img src={file.imageURL} alt={file.name} />
      </div>
      <div className="img-details">
        <div >
          <h3 className="img-name">{file.name}</h3>
          <p className="img-size">{size}</p>
        </div>
        <div className="img-action">
          <div className="crop div-with-dot"> <button> <span className="icon"><FaCropSimple /></span>Crop image</button> </div>
          <div className="delete"><button onClick={handleDelete}> <span className="icon"><FaRegTrashCan /></span>Delete</button></div>
        </div>
      </div>
    </div>

  )
}
