import ImageRow from "./ImageRow";

export type ImageRowsProps = {
  files: FileWithImgURL[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<FileWithImgURL[]>>;
  setShowCrop: React.Dispatch<React.SetStateAction<string>>;
  setCurrentCropImg: React.Dispatch<React.SetStateAction<FileWithImgURL | null>>
}

interface FileWithImgURL {
  name: string;
  size: number;
  type: string;
  imageURL: string;
}

export default function ImageRows({ files, setUploadedFiles, setShowCrop, setCurrentCropImg }:ImageRowsProps) {
  return(
    <>
      {files.map(file => <ImageRow key={file.imageURL} file={file} files={files} setUploadedFiles={setUploadedFiles} setShowCrop={setShowCrop} setCurrentCropImg={setCurrentCropImg} />)}
    </>

  )
}
