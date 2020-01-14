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
    width: 100%;
    height: 100%;
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

  color: #ffffff;

  @media (max-width: 671px) {
    background-color: Transparent;
    flex-direction: column;
    height: 8.9vh;
    width: 79.5vw;
    margin-bottom: 1.9vh;
    margin-left: 10.1vw;
    margin-right: 10.1vw;
    display: flex;
    justify-content: center;
    align-items: center;
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

  color: #e77cca;

  @media (max-width: 671px) {
    background: #ffffff;
    border-radius: 5px;
    height: 8.9vh;
    flex-direction: column;
    width: 79.5vw;
    margin-bottom: 1.9vh;
    margin-left: 10.1vw;
    margin-right: 10.1vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;
  height: 13.5vh;
  width: 35.55vw;
  margin-top: 9.2vh;
  margin-left: 3.4vw;
  @media (max-width: 671px) {
    display: none;
  }
`;

export const ContentCardParty = styled.div`
  display: flex;
  flex-direction: row;
  height: 13.5vh;
  width: 35.55vw;
  margin-top: 2.2vh;
  margin-left: 3.4vw;
  @media (max-width: 671px) {
    display: none;
  }
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
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-top: 37vh;
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
    margin-top: 16.4vh;
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
    width: 0px;
    height: 0px;
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

  color: #565656;
  @media (max-width: 671px) {
    color: #ffffff;
    font-size: 2rem;
    line-height: 2.2rem;
  }
`;

export const ContentTriider = styled.div`
  margin-top: 13.7vh;
  margin-left: 3.88vw;
  display: flex;
  flex: 1;

  @media (max-width: 671px) {
    display: flex;
    flex: 1;
    margin-top: 3vh;
    flex-direction: row;
  }
`;
