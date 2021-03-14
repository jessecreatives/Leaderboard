import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    max-width: 400px;
    margin: 0 auto;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 20px;
  border: 3px solid coral;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ID = styled.span`
    color: white;
    background: lightpink;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    vertical-align: middle;
    border-radius: 20px;
    margin-right: 15px;
`;

export const List = styled.ul`
  position: relative;
  list-style: none;
  width: 400px;
  margin: 0 auto;
`;
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.12);
  padding: 15px;
  border-radius: 15px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Order = styled.p`
  margin-right: 20px;
`;

export const Score = styled.div.attrs(props => ({
    width: `calc(${(props.numOfDigits + 2) * 9}px)`,
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'flex-end',
    alignItems: 'center',
    span: {
      display: 'inline-block',
      width: '100%',
      textAlign: 'right',
    }
}))`
&::after {
    content: 'pt';
    display: 'inline-block';
}
`;

export const Button = styled.button`
    display: block;
    margin: 40px auto;
    width: 120px;
    background: coral;
    font-size: 16px;
    color: white;
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.12);
`;