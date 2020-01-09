import styled from 'styled-components';
import joker from '../../assets/joker.svg';

export const Container = styled.div`
  display: flex;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonSignIn = styled.button`
  position: absolute;
  width: 218px;
  height: 60px;
  left: 716px;
  top: 302px;

  background: #e77cca;
  border-radius: 5px;

  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

export const LinkSignUp = styled.a`
  position: absolute;
  width: 103px;
  height: 25px;
  left: 974px;
  top: 319px;

  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height */

  text-align: center;

  color: #e77cca;
`;

export const ImgSide = styled.div`
  background: url(${joker});
  left: 0px;
  width: 671px;
  height: 1024px;
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 671px;
  height: 1024px;
  background: linear-gradient(161.88deg, #fc66a4 0%, #993cff 98.7%);
  opacity: 0.8;
`;

export const Content = styled.div`
  /* background-color: #000000; */
  width: 54%;
  height: 94%;
`;

export const Title = styled.p`
  margin-top: 156px;
  margin-left: 45px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  color: #565656;
`;

export const Line = styled.div`
  position: absolute;
  width: 516px;
  height: 0px;
  left: 716px;
  top: 434px;

  border: 1px solid #cccccc;
`;

export const ImgIcon = styled.img`
  position: absolute;
  left: 51.88%;
  right: 43.96%;
  top: 55.08%;
  bottom: 37.21%;

  background: #e77cca;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 512px;
  height: 141px;
  left: 720px;
  top: 530px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
`;

export const TextCard = styled.p`
  position: absolute;
  width: 512px;
  height: 141px;
  left: 720px;
  top: 530px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
`;
