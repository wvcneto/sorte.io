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
  justify-content: space-between;

  > img {
    height: 64px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    a {
      text-decoration: none;
      color: #ff9000;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  button {
    background: transparent;
    border: 0;
    margin: 24px 24px 16px 24px;
    cursor: pointer;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 32px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;

  h1 {
    font-size: 36px;
  }

  p {
    color: #ff9000;
  }
`;

export const Sweepstakes = styled.div`
  margin-top: 32px;
`;

export const Item = styled.div`
  background: #3e3b47;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-radius: 10px;
  margin-top: 24px;
  position: relative;

  &::before {
    position: absolute;
    height: 80%;
    width: 3px;
    left: 0;
    top: 10%;
    content: '';
    background: #ff9000;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  strong {
    margin-left: 24px;
    color: #fff;
  }

  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #999591;
  }

  button {
    background: #ff9000;
    border-radius: 10px;
    border: 3px solid #fff;
    cursor: pointer;

    svg {
      color: #fff;
    }
  }

  svg {
    margin: 8px;
  }
`;
