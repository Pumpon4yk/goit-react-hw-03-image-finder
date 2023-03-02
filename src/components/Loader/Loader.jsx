import { Container } from './Loader.styled';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Container>
      <InfinitySpin color="#3f51b5" />
    </Container>
  );
};
export default Loader;
