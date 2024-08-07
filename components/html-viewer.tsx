"use client";

import { useEffect, useState } from "react";

import { shorten } from "@/utils/string";

interface HTMLViewerProps {
  html: string;
  plain?: boolean;
  length?: number;
  className?: string;
  auto?: boolean;
}

export default function HTMLViewer({
  html,
  auto,
  plain,
  length,
  className,
}: HTMLViewerProps) {
  const [_plainText, _setPlainText] = useState<string | false>("");
  const [isMore, setIsMore] = useState(false);

  const autoLength = length ?? 500;

  useEffect(() => {
    if (plain || auto) {
      const el = document.createElement("div");
      el.innerHTML = html;
      _setPlainText(el.innerText);
      return;
    }
    _setPlainText(false);
  }, [plain, auto, html]);

  if (_plainText && !auto) {
    return <div>{length ? shorten(_plainText, length) : _plainText}</div>;
  }

  const getHtml = () => {
    if (!auto) {
      return length ? shorten(html, length) : html;
    }

    if ((_plainText as string).length > autoLength) {
      return isMore ? html : shorten(html, autoLength);
    }

    return html;
  };

  return (
    <div className="relative ">
      <div
        dangerouslySetInnerHTML={{
          __html: getHtml(),
        }}
      />

      {auto && (_plainText as string).length > autoLength && (
        <button
          type="button"
          onClick={() => setIsMore((prev) => !prev)}
          className="mt-3 text-[14px] text-indigo-400 underline"
        >
          {isMore ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}

export { HTMLViewer };
