import ImageDropZone from "../SubComponents/ImageDropZone";
import FileSource from "../SubComponents/FileSource";
import FileName from "../SubComponents/FileName";
import ChooseIndustry from "../SubComponents/ChooseIndustry";
import FileDescription from "../SubComponents/FileDescription";
import ChooseConfidentiality from "../SubComponents/ChooseConfidentiality";
import OwnerName from "../SubComponents/OwnerName";
import FileDropZone from "../SubComponents/FileDropZone";

const ModelUpload = () => {
  return (
    <>
      <FileName />
      <FileDropZone />
      <OwnerName />
      <ChooseIndustry />
    </>
  );
};

const ModelUploadBackup = () => {
  return (
    <>
      <ImageDropZone />
      <FileSource />
      <FileName />
      <ChooseConfidentiality />
      <ChooseIndustry />
      <FileDescription />
    </>
  );
};

const SurroundingsUpload = () => {
  return (
    <>
      <ImageDropZone />
      <FileSource />
      <FileName />
      <ChooseConfidentiality />
      <ChooseIndustry />
    </>
  );
};

export { SurroundingsUpload, ModelUpload };
