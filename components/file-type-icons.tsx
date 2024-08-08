import { FiHeadphones } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { IoImagesOutline, IoDocumentTextOutline } from "react-icons/io5";
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftWordLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaRegFile as FileIcon } from "react-icons/fa";

const IMAGE_TYPES = ["png", "jpeg", "jpg", "svg", "gif", "jfif"];
const SHEET_TYPES = ["xls", "xlsx"];
const WORD_TYPES = ["doc", "docx"];
const PRESENTATION_TYPES = ["ppt", "pptx"];
const PDF_TYPES = ["pdf"];
const AUDIO_TYPES = ["wav", "mp3"];
const VIDEO_TYPES = ["mp4", "mkv", "webm"];
const OTHER_DOC_TYPES = ["csv", "txt"];

export { IMAGE_TYPES, AUDIO_TYPES, VIDEO_TYPES };

export default function FileTypeIcon({
  type,
  size = 30,
  className = "shrink-0",
}: {
  type?: string;
  size?: number;
  className?: string;
}) {
  const getIcon = () => {
    if (!type) return <FileIcon size={size} className={className} />;
    if (IMAGE_TYPES.includes(type))
      return <IoImagesOutline size={size} className={className} />;
    if (SHEET_TYPES.includes(type))
      return <PiMicrosoftExcelLogoFill size={size} className={className} />;
    if (PDF_TYPES.includes(type))
      return <FaRegFilePdf size={size} className={className} />;
    if (WORD_TYPES.includes(type))
      return <PiMicrosoftWordLogoFill size={size} className={className} />;
    if (PRESENTATION_TYPES.includes(type))
      return (
        <PiMicrosoftPowerpointLogoFill size={size} className={className} />
      );
    if (AUDIO_TYPES.includes(type))
      return <FiHeadphones size={size} className={className} />;
    if (VIDEO_TYPES.includes(type))
      return <AiOutlineVideoCamera size={size} className={className} />;
    if (OTHER_DOC_TYPES.includes(type))
      return <IoDocumentTextOutline size={size} className={className} />;
    return <FileIcon size={size} className={className} />;
  };

  return getIcon();
}
