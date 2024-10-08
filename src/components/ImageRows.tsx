import ImageRow from "./ImageRow";

export type ImageRowsProps = {
  files: FileWithImgURL[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<FileWithImgURL[]>>;
}

interface FileWithImgURL {
  name: string;
  size: number;
  type: string;
  imageURL: string;
}

export default function ImageRows({ files, setUploadedFiles }:ImageRowsProps) {
  return(
    <>
      {files.map(file => <ImageRow key={file.imageURL} file={file} files={files} setUploadedFiles={setUploadedFiles} />)}
    </>

  )
}
