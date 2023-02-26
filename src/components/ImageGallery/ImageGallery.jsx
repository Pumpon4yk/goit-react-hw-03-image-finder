import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';


const ImageGallery = ({ list, onClick }) => {
  return (
    <List>
      {list.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smolImg={webformatURL}
          largeImg={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </List>
  );
};

ImageGallery.propTyps = {
list: PropTypes.shape({
  smolImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
}),
onClick: PropTypes.func.isRequired
}

export default ImageGallery;
