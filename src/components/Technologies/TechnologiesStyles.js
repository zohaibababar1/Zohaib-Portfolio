import styled from 'styled-components';

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(ellipse at center, rgba(79, 108, 176, 0.2) 0%, rgba(79, 108, 176, 0) 70%);
  width: 100%;
  padding: 80px 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media ${props => props.theme.breakpoints.lg} {
    padding: 60px 20px;
    margin-top: 30px;
  }
  @media ${props => props.theme.breakpoints.md} {
    padding: 40px 10px;
    margin-top: 20px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 20px;
    margin-top: 10px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 1200px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg} {
    margin: 2rem 0;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin: 2rem 0;
    gap: 30px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    gap: 20px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  color: #FFFFFF;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 22px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 8px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 300px;
  margin: 0 auto;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 26px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
    text-align: left;
    margin: 0;
  }
`;

export const ListItem = styled.li`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 280px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: row;
    align-items: flex-start;
    max-width: 100%;
  }
`;

export const ListIcon = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  margin-bottom: 12px;
  
  @media ${props => props.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 35px;
    height: 35px;
    margin-bottom: 0;
  }
`;
