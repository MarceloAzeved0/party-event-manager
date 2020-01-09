import styled from 'styled-components';
import joker from '../../assets/joker.svg';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
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

export const Content = styled.div`
  /* background-color: #000000; */
  display: flex;
  flex-direction: column;
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
  margin-left: 27px;
  right: 41px;
  top: 34px;
  bottom: 20px;
`;

export const TextCard = styled.p`
  width: 341px;
  height: 65px;
  left: 848px;
  top: 578px;
  margin-top: 48px;
  margin-right: 43px;
  margin-bottom: 20px;
  margin-left: 41px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;

  color: #848484;
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

export const CardParty = styled.div`
  /* Rectangle 58 */
  display: flex;
  flex-direction: row;

  position: absolute;
  width: 512px;
  height: 141px;
  left: 720px;
  top: 694px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
`;

export const TextFooter = styled.p`
  position: absolute;
  width: 206px;
  height: 23px;
  left: 727px;
  top: 982px;

  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #565656;
`;
