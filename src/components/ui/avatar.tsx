import { FC } from "react";

interface AvatarProps {
  src?: string;
  alt: string;
  fallbackText: string;
}

export const Avatar: FC<AvatarProps> = ({ src, alt, fallbackText }) => {
  return (
    <div className="flex items-center">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="size-10 rounded-md object-cover"
          aria-label={alt}
        />
      ) : (
        <span
          className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center "
          aria-label="Fallback avatar"
        >
          {fallbackText.slice(0, 2).toUpperCase()}{" "}
        </span>
      )}
    </div>
  );
};

export default Avatar;
