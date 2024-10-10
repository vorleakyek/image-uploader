import React, {useRef, useState} from "react";
// import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'
import { FaWebflow } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import flag from "./img/canada-flag-icon.svg";
import './App.css';
import coverImage from './img/cover.jpg';
import profile from './img/pika.png';
import ImageRows from "./components/ImageRows";

import ImageCrop from "./components/ImageCrop";


function App() {

  interface FileWithImgURL {
    name: string;
    size: number;
    type: string;
    imageURL: string;
  }

  const [showModal, setShowModal] = useState<string>("hidden");
  const [showCrop, setShowCrop] = useState<string>("hidden");
  const [uploadedFiles, setUploadedFiles] = useState<FileWithImgURL[]>([]);
  const [currentCropImg, setCurrentCropImg] = useState<FileWithImgURL | null>(null);
  // const [imageURLs, setImageURLs] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleShowModal() {
    showModal === '' ? setShowModal('hidden') : setShowModal('');
  }

  function handleClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }


  const appendFile = (file: File) => {
    if (file) {
      const imageURL = URL.createObjectURL(file);
      const newFileObject: FileWithImgURL = {
        name: file.name,
        size: file.size,
        type: file.type,
        imageURL
      };
      console.log(newFileObject);
      const newFiles = [...uploadedFiles, newFileObject];
      setUploadedFiles(newFiles);
    }
  }

  function handleUploadFiles(event: React.ChangeEvent<HTMLInputElement>){
    if (event.target.files) {
      const file = event.target.files?.[0];
      if (uploadedFiles.length < 5) { appendFile(file); }
      event.target.value = '';
    }

  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event?.preventDefault();
    const file = event.dataTransfer.files[0];
    if (uploadedFiles.length < 5) {appendFile(file);}
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // This prevents default behavior (like opening the file)
  };

  return (
    <div className="main">
      <div className={`overlay ${showModal}`}></div>
      <header>
        <div className="header-container">
          <div className="background">
            <img className="background-img" src={coverImage} alt="background image" />
          </div>
          <div className='profile'>
            <img src={profile} alt="image profile" />
          </div>
        </div>
        <div className="upload-button">
          <button onClick={handleShowModal}>Update picture</button>
        </div>
        <div className="header-details">
          <div className='detais-info'>
            <h2 className="profile-name">Leslie Waller</h2>
            <div className="flex">
              <div className="username div-with-dot-lg-screen">
                <p>@lesliewaller</p>
              </div>
              <div className="title">
                <p>Senior Product Designer</p>
              </div>
              <div className="flex-row">
                <div className="workplace div-with-dot">
                  <p> <span className="gray">at</span> <FaWebflow className="work-icon" /> Webflow </p>
                </div>
                <div className="gender gray">
                  <p>She/Her</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mt-0 gray">
                <img src={flag} alt="flag" className="flag" />
                Vancouver, Canada</p>
            </div>
          </div>
        </div>
      </header>

      <div className={`upload-img-modal ${showModal}`}>
        <h2 className="modal-title">Upload image(s)</h2>
        <p className="mt-0 gray">You may upload up to 5 images</p>

        <div className="drop-zone">
          <div className="upload-btn-wrapper">
            <button className="upload-file" onClick={handleClick} >
              <FaCloudUploadAlt/>
            </button>
            <input ref={fileInputRef} className="input-tag" type="file" accept=".jpg,.jpeg,png" onChange={handleUploadFiles} />
          </div>
          <div className="modal-content" onDrop={handleDrop} onDragOver={handleDragOver} >
            <p className="bold">Click or drag and drop to upload</p>
            <p className="gray">PNG, or JPG (Max 5MB)</p>
          </div>
        </div>
        <div>
          <button className="x-btn" onClick={handleShowModal}><FaX/></button>
        </div>

        <div>
          <ImageRows files={uploadedFiles} setUploadedFiles={setUploadedFiles} setShowCrop={setShowCrop} setCurrentCropImg={setCurrentCropImg}/>
        </div>

      </div>

      <div className={`crop-img-modal ${showCrop}`}>
        <ImageCrop src={currentCropImg ? currentCropImg.imageURL : ''} setShowCrop={setShowCrop} />
      </div>
    </div>
  );
}

export default App;
