import { Item, Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smolImg, tags, largeImg, onClick }) => {
  return (
    <Item
      onClick={() => {
        onClick(largeImg, tags);
      }}
    >
      <Img src={smolImg} alt={tags} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  smolImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ImageGalleryItem;
