import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ list, onClick }) => {
  return (
    <List id="gallery">
      {list.map(({ id, webformatURL, largeImageURL, tag }) => (
        <ImageGalleryItem
          key={id}
          smolImg={webformatURL}
          largeImg={largeImageURL}
          tag={tag}
          onClick={onClick}
        />
      ))}
    </List>
  );
};

export default ImageGallery;
