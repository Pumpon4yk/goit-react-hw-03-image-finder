import { Item, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ smolImg, tag, largeImg, onClick }) => {
  return (
    <Item
      onClick={() => {
        onClick(largeImg, tag);
      }}
    >
      <Img src={smolImg} alt={tag} />
    </Item>
  );
};

export default ImageGalleryItem;
