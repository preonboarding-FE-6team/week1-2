import styled from 'styled-components';
import { flexBox } from '../styles/mixin';

function Banner({ imgSrc, href }) {
  return (
    <a href={href}>
      <Advertisement>
        <span>ad</span>
        <img alt="광고" src={imgSrc} />
      </Advertisement>
    </a>
  );
}

function useBanner({ order, imgSrc, href }) {
  return (list) => {
    if (list.length < order - 1) {
      return list;
    }
    const bannerInsertedList = [...list];
    bannerInsertedList.splice(order - 1, 0, <Banner key={`banner-${order}`} imgSrc={imgSrc} href={href} />);
    return bannerInsertedList;
  };
}

const Advertisement = styled.div`
  position: relative;
  ${flexBox()}
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;

  > span {
    position: absolute;
    left: 10px;
    top: 10px;
    padding: 3px 8px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.pointColor};
    color: white;
    font-size: 14px;
  }

  > img {
    height: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;

export default useBanner;
