import ImageRow from "./ImageRow";

// interface FileWithImgURL extends File {
//   imageURL: string;
// }

type ImageRowsProps = {
  files: FileWithImgURL[];
}

interface FileWithImgURL {
  name: string;
  size: number;
  type: string;
  imageURL: string;
}

export default function ImageRows({files}:ImageRowsProps) {
  return(
    <>
      {files.map(file => <ImageRow key={file.imageURL} file={file}/>)}
    </>

  )
}
