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

export default function FileTypeIcon({ type }: { type?: string }) {
  const IMAGE_TYPES = ["png", "jpeg", "jpg", "svg"];
  const SHEET_TYPES = ["xls", "xlsx"];
  const WORD_TYPES = ["doc", "docx"];
  const PRESENTATION_TYPES = ["ppt", "pptx"];
  const PDF_TYPES = ["pdf"];
  const AUDIO_TYPES = ["wav", "mp3"];
  const VIDEO_TYPES = ["mp4", "mkv", "webm"];
  const OTHER_DOC_TYPES = ["csv", "txt"];

  const getIcon = () => {
    if (!type) return <FileIcon size={30} className="shrink-0" />;
    if (IMAGE_TYPES.includes(type))
      return <IoImagesOutline size={30} className="shrink-0" />;
    if (SHEET_TYPES.includes(type))
      return <PiMicrosoftExcelLogoFill size={30} className="shrink-0" />;
    if (PDF_TYPES.includes(type))
      return <FaRegFilePdf size={30} className="shrink-0" />;
    if (WORD_TYPES.includes(type))
      return <PiMicrosoftWordLogoFill size={30} className="shrink-0" />;
    if (PRESENTATION_TYPES.includes(type))
      return <PiMicrosoftPowerpointLogoFill size={30} className="shrink-0" />;
    if (AUDIO_TYPES.includes(type))
      return <FiHeadphones size={30} className="shrink-0" />;
    if (VIDEO_TYPES.includes(type))
      return <AiOutlineVideoCamera size={30} className="shrink-0" />;
    if (OTHER_DOC_TYPES.includes(type))
      return <IoDocumentTextOutline size={30} className="shrink-0" />;
    return <FileIcon size={30} className="shrink-0" />;
  };

  return getIcon();
}
