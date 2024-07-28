import styled from 'styled-components';

// Container for the carousel
export const CarouselContainer = styled.ul`
  max-width: 1200px; /* Increased width for better display */
  background: #0F1624;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden; /* Hide the overflow */

  margin-left: 0; /* Remove margin on the left */
  margin-bottom: 80px;

  // Hide scrollbar
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    margin-bottom: 8px;
  }
`;

// Wrapper for each carousel item
export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => (final ? '120%' : 'calc(100% / 3)')}; /* Adjusted width */
  }
`

// Individual carousel item styling
export const CarouselItem = styled.div`
  background: #0F1624;
  border-radius: 8px; /* Increased border-radius for a modern look */
  max-width: 300px; /* Increased width for better visibility */
  margin-right: 16px; /* Added margin between items */
  padding: 20px; /* Added padding for content spacing */

  @media ${props => props.theme.breakpoints.md} {
    max-width: 200px; /* Adjusted width for medium screens */
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 16px;
    min-width: 200px; /* Ensured minimum width for small screens */
    background: #0E131F;
    padding: 12px; /* Adjusted padding */
    align-content: start;
    scroll-snap-align: start;
    border-radius: 8px;
    overflow: visible;
    position: relative;
    height: fit-content;
    opacity: ${({ active, index }) => (active === index ? '1' : '0.5')};
  }
`

// Title for each carousel item
export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px; /* Increased margin for better spacing */

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px; /* Adjusted margin for medium screens */
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`

// Styling for image in carousel item
export const CarouselItemImg = styled.svg`
  margin-left: 0; /* Removed margin */
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
  }
`

// Text content in carousel item
export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 12px; /* Adjusted padding for medium screens */
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`

// Buttons for carousel navigation
export const CarouselButtons = styled.div`
  width: 288px;
  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

// Individual button for navigating carousel
export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${({ active, index }) => (active === index ? '1' : '0.33')};
  transform: ${({ active, index }) => (active === index ? 'scale(1.6)' : 'scale(1)')};
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff; /* Added focus style for accessibility */
  }
`

// Dot for carousel buttons
export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 8px; /* Increased size for better visibility */
  height: 8px; /* Increased size for better visibility */
  transition: background-color 0.3s ease;
`
