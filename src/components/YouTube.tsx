import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
  width?: number;
  height?: number;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  width = 560,
  height = 600,
}) => {
  return (
    <div className="">
      <h1 className="text-center text-[4rem] max-[497px]:text-[3rem] max-[353px]:text-[2rem] font-[tangerine]  bg-[#0A112F] p-[3rem] text-[white]">
        Moyosoluwa&apos;s Proposal in Motion
      </h1>
      <div className="aspect-w-16 aspect-h-9 h-full max-h-screen aspect-video">
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?si=P32a2IaAJBYqG6kJ&mute=1&controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <p className="bg-[#0A112F] p-2 text-[#fff] text-center">
        Warning!!! Don&apos;t you dare click on the pictures below.
      </p>
    </div>
  );
};

export default YouTubeEmbed;
