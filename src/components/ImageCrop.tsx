import ReactCrop, { type Crop } from 'react-image-crop';
import { useState } from 'react';
import { FaX } from "react-icons/fa6";


// export default function ImageCrop({ src }) {
//   const [crop, setCrop] = useState<Crop>()
//   return (
//     <ReactCrop crop={crop} onChange={c => setCrop(c)}>
//       <img src={src} />
//     </ReactCrop>
//   )
// }

type ImageCropProps = {
  src: string;
  setShowCrop: React.Dispatch<React.SetStateAction<string>>;
}

export default function ImageCrop({src, setShowCrop}:ImageCropProps) {
  const [crop, setCrop] = useState<Crop>()
  return (
    <>
      <h1>Crop your picture</h1>
      <ReactCrop crop={crop} onChange={c => setCrop(c)}>
        <img src={src} />
      </ReactCrop>
      <div>
        <button className="x-btn" onClick={()=> setShowCrop("hidden")}><FaX /></button>
      </div>

    </>
  )
}
