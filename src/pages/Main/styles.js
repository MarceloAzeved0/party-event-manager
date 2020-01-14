import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;

  width: 54%;
  height: 94%;

  @media (max-width: 671px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerButtons = styled.div`
  width: 15vw;
  height: 5.76vh;
  display: flex;
  flex-direction: column;
`;

export const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6.9vh;
  margin-left: 3.1vw;
  height: 0px;
  flex: 1;
`;

export const ButtonSignIn = styled.button`
  width: 15.1vw;
  height: 5.76vh;
  margin-right: 2.7vw;
  background: #e77cca;
  border-radius: 5px;

  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.5rem;
  /* identical to box height */

  text-align: center;

  color: #ffffff;

  @media (max-width: 671px) {
    flex-direction: column;
    width: 20.7vh;
    margin-bottom: 1.9vh;
    text-align: center;
    margin-left: 2.7vw;
    margin-right: 2.7vw;
  }
`;

export const LinkSignUp = styled.a`
  width: 7.15vw;
  height: 2.4vh;

  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.5rem;
  /* identical to box height */

  text-align: center;

  color: #e77cca;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;
  height: 13.5vh;
  width: 35.55vw;
  margin-top: 9.2vh;
  margin-left: 3.4vw;
`;

export const ContentCardParty = styled.div`
  display: flex;
  flex-direction: row;
  height: 13.5vh;
  width: 35.55vw;
  margin-top: 2.2vh;
  margin-left: 3.4vw;
`;

export const ContentButton = styled.div`
  width: 50vw;
  height: 5.9vh;
  display: flex;
  flex-direction: row;
  margin-top: 7.78vh;
  margin-left: 3.12vw;

  @media (max-width: 671px) {
    flex-direction: column;
    flex: 1;
  }
`;

export const Content = styled.div`
  /* background-color: #000000; */
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const ContentTitle = styled.div`
  /* background-color: #000000; */
  margin-left: 3.1vw;
  margin-top: 9.23vh;
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 671px) {
    justify-content: center;
    align-items: center;
  }
`;
export const Title = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 3vh;
  line-height: 4.5rem;
  color: #565656;

  @media (max-width: 671px) {
    color: #ffffff;
  }
`;

export const Line = styled.div`
  width: 516px;
  height: 0px;

  border: 1px solid #cccccc;

  @media (max-width: 671px) {
    display: none;
  }
`;

export const ImgIcon = styled.img`
  margin-left: 1.8vw;
`;

export const TextCard = styled.p`
  margin-top: 4.6vh;
  margin-right: 2.98vw;
  margin-bottom: 1.9vh;
  margin-left: 2.84vw;
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 2vh;
  line-height: 2rem;

  color: #848484;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 35.55vw;
  height: 13.55vh;
  min-width: 360px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 5px;

  @media (max-width: 671px) {
    display: none;
  }
`;

export const CardParty = styled.div`
  /* Rectangle 58 */
  display: flex;
  flex-direction: row;
  min-width: 360px;
  width: 35.55vw;
  height: 13.55vh;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 5px;

  @media (max-width: 671px) {
    display: none;
  }
`;

export const TextFooter = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 2vh;
  line-height: 2.2vh;
  /* identical to box height */

  text-align: center;

  color: #565656;
`;

export const ContentTriider = styled.div`
  margin-top: 13.7vh;
  margin-left: 3.88vw;
  display: flex;
  flex: 1;
`;
