import { FaCropSimple } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

type ImageRowProps = {
  file: FileWithImgURL;
}

interface FileWithImgURL {
  name: string;
  size: number;
  type: string;
  imageURL: string;
}


export default function ImageRow({file}: ImageRowProps) {
  return(
    <div className="image-row-wrapper">
      <div className="image-row">
        <img src={file.imageURL} alt={file.name} />
      </div>
      <div className="img-details">
        <div >
          <h3 className="img-name">{file.name}</h3>
          <p className="img-size">256kb</p>
        </div>
        <div className="img-action">
          <div className="crop div-with-dot"> <button> <span className="icon"><FaCropSimple /></span>Crop image</button> </div>
          <div className="delete"><button> <span className="icon"><FaRegTrashCan /></span>Delete</button></div>
        </div>
      </div>
    </div>

  )
}
