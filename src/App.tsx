import React, {useRef, useState} from "react";
import { FaWebflow } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import flag from "./img/canada-flag-icon.svg";
import './App.css';
import coverImage from './img/cover.jpg';
import profile from './img/pika.png';

function App() {

  const [showModal, setShowModal] = useState<string>("hidden");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleShowModal() {
    showModal === '' ? setShowModal('hidden') : setShowModal('');
  }

  function handleClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  function handleUploadFiles(event: React.ChangeEvent<HTMLInputElement>){
    const file = event.target.files?.[0];
    if (file) {
      const newFiles = [...uploadedFiles];
      newFiles.push(file);
      setUploadedFiles(newFiles);
    }
    event.target.value = '';
  }

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
        <div>
          {uploadedFiles[0] && <p>uploaded Files: {uploadedFiles[0].name}</p>}
        </div>
        <div className="drop-zone">
          <div className="upload-btn-wrapper">
            <button className="upload-file" onClick={handleClick} >
              <FaCloudUploadAlt/>
            </button>
            <input ref={fileInputRef} className="input-tag" type="file" accept=".jpg, .jpeg, png" onChange={handleUploadFiles} />
          </div>
          <div className="modal-content">
            <p className="bold">Click or drag and drop to upload</p>
            <p className="gray">PNG, or JPG (Max 5MB)</p>
          </div>
        </div>
        <div>
          <button className="x-btn" onClick={handleShowModal}><FaX/></button>
        </div>

      </div>
    </div>
  );
}

export default App;
