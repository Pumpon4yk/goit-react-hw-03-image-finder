import { Component } from 'react';
import { getImg } from '../api/apiImg';

import { Container } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ButtonLoadMore from './Button';
import Loader from './Loader';
import Modal from './Modal';

export class App extends Component {
  state = {
    imgList: [],
    page: null,
    name: '',
    totalImg: null,
    loader: false,
    showModal: false,
    largeImg: '',
    tag: '',
  };

  componentDidUpdate() {
    if (this.state.page > 1) {
      window.scrollBy({
        top: window.innerHeight - 150,
        behavior: 'smooth',
      });
      return;
    }
    window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
  }

  getName = async (name, page = 1) => {
    this.setState({ loader: true });
    const list = await getImg(name, page);
    this.setState({
      imgList: list.hits,
      name: name,
      page: page,
      totalImg: list.totalHits,
      loader: false,
    });
  };

  onLoad = async () => {
    await this.setState(state => ({ page: (state.page += 1), loader: true }));

    const { name, page } = this.state;
    const resp = await getImg(name, page);

    this.setState(state => ({
      imgList: [...state.imgList, ...resp.hits],
      loader: false,
    }));
  };

  togglModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onClickImg = (link, tag) => {
    this.setState({ largeImg: link, tag });
    this.togglModal();
  };

  render() {
    const { imgList, page, totalImg, loader, showModal, largeImg, tag } =
      this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.getName} />
        <ImageGallery list={imgList} onClick={this.onClickImg} />
        {loader ? (
          <Loader />
        ) : (
          page &&
          imgList.length !== totalImg && (
            <ButtonLoadMore onClick={this.onLoad} />
          )
        )}

        {showModal && (
          <Modal onShow={this.togglModal}>
            <img src={largeImg} alt={tag} />
          </Modal>
        )}
      </Container>
    );
  }
}
