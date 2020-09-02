import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      height: 20px;
      width: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 80px;
  align-items: center;

  img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.section`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
    color: #f4ede8;
  }

  p {
    margin-top: 12px;
    color: #ff9000;
    display: flex;
    font-weight: 500;
    align-items: center;

    span + span {
      margin-left: 8px;
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 2px;
      height: 12px;
      background: #ff9000;
      margin-right: 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400px;
  }

  div {
    background: #3e3b47;
    border-radius: 10px;
    padding: 16px 24px;
    margin-top: 24px;

    display: flex;
    align-items: center;

    position: relative;

    &::before {
      position: absolute;
      height: 80%;
      width: 2px;
      left: 0;
      top: 10%;
      content: '';
      background: #ff9000;
      border-radius: 10px 0 0 10px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      font-size: 24px;
      color: #f4ede8;
    }

    span {
      margin-left: auto;
      color: #999591;
      display: flex;
      align-items: center;
      font-size: 20px;

      svg {
        height: 20px;
        width: 20px;
        color: #ff9000;
        margin-right: 12px;
      }
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;
`;