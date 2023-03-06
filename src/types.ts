
export type TArtItem = {
  path: string;
  title?: string;
  artist?: string;
}

export type TArtItemProps = {
  index: number;
  position: [number, number]
} & TArtItem;


export type TGalleryWallProps = {
  artList: TArtItem[];
  backgroundColor: number;
  gap: number;
}