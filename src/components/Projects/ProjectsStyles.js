import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: auto;  // Maintain aspect ratio
  object-fit: cover;
  border-radius: 10px 10px 0 0;  // Rounded corners on top
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 2rem;  // Adjust row-gap for better spacing
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;  // Restrict max width
  background-color: #fff;  // Ensure background color
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;  // Ensure content aligns vertically
  height: 100%;  // Take full height of the grid item
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  padding: 1rem;
  flex: 1 0 auto;  // Allow flex to grow and shrink
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 1px;
  color: #333;
  padding: 0.5rem 0;
  font-size: ${(props) => props.title ? '2.5rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 60px;
  height: 4px;
  margin: 1rem auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 1rem auto;
  color: #666;
  font-family: 'Droid Serif', serif;
  font-size: 14px;
  font-style: italic;
  line-height: 1.5;
`;

export const CardInfo = styled.p`
  padding: 1rem 1.5rem;
  color: #666;
  font-size: 1.2rem;  // Increase font size
  line-height: 1.6;
  text-align: justify;
  flex: 1 0 auto;  // Allow flex to grow and shrink

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #fff;
  font-size: 1.2rem;
  padding: 0.8rem 1.2rem;
  background: #6b3030;
  border-radius: 15px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background: #801414;
    transform: scale(1.05);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 0.5rem;
`;

export const Tag = styled.li`
  color: #333;
  background: #e0e0e0;
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;
