const formatFileSize = (sizeBytes: number) => {
  if (sizeBytes === 0) {
    return "0 B";
  }

  const SIZE_NAME = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(sizeBytes) / Math.log(1024));
  const p = Math.pow(1024, i);
  const s = Math.round((sizeBytes / p) * 100) / 100;

  return `${s} ${SIZE_NAME[i]}`;
};

const ONE_MB_IN_BYTES = 1048576; // 1 MB

const ALLOWED_MIME_TYPES = {
  "image/*": [".jpg", ".jpeg", ".png"],
  "application/pdf": [],
  "application/msword": [],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
  "audio/*": [".mp3", ".mpeg", ".wav", ".webm"],
  "text/plain": [],
  "text/csv": [],
  "application/vnd.ms-excel": [],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
  "application/vnd.ms-powerpoint": [],
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    [],
  "video/*": [".mp4", ".webm"],
};

export { formatFileSize, ONE_MB_IN_BYTES, ALLOWED_MIME_TYPES };
