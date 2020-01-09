import styled from 'styled-components';
import joker from '../../assets/joker.svg';

export const ImgSide = styled.div`
  background: url(${joker});
  display: flex;
  position: absolute;
  background-repeat: no-repeat;
  width: 46.6%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  position: absolute;
  display: flex;
  width: 46.6%;
  height: 100%;
  background: linear-gradient(161.88deg, #fc66a4 0%, #993cff 98.7%);
  opacity: 0.8;
`;
