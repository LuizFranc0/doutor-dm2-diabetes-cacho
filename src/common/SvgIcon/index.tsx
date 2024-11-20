import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, isVideo = false }: SvgIconProps) => (
  isVideo ? (
    <video width={width} height={height} src={src} autoPlay loop muted />
  ) : (
    <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
  )
);
