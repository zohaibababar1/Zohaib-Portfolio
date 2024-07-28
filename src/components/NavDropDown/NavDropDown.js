import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0; /* Adjusted to align with the parent container */
  top: 50px; /* Adjusted for a better vertical alignment */
  width: 300px; /* Increased width for better content fit */
  background-color: #ffffff; /* White background for a clean look */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added subtle shadow for better depth */
  z-index: 1000; /* Increased z-index for better layering */
  padding: 8px 0;
  cursor: default;
  overflow: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  transform-origin: top;
  transform: ${({ active }) => (active ? 'scaleY(1)' : 'scaleY(0.8)')}; /* Adjusted scaling for smoother transition */

  @media ${(props) => props.theme.breakpoints.md} {
    top: 40px; /* Adjusted for medium screens */
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    top: 30px; /* Adjusted for small screens */
    width: 250px; /* Adjusted width for small screens */
  }
`;

export const DropDownItem = styled.a`
  width: 100%;
  display: flex;
  align-items: center; /* Changed to center for better alignment */
  padding: 12px 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5; /* Light gray background for hover state */
    transform: scale(1.03); /* Slightly smaller scale for better effect */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow on hover */
  }
`;

export const DropDownIcon = styled.div`
  width: 40px; /* Increased width for better icon visibility */
  height: 40px; /* Increased height for better icon visibility */
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center; /* Centered icons vertically */
`;

export const DropDownTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropDownItemTitle = styled.h3` /* Changed to h3 for semantic consistency */
  color: #333; /* Darker color for better contrast */
  font-size: 16px; /* Slightly reduced font size for balance */
  line-height: 24px;
  margin: 0; /* Removed default margin */
`;

export const DropDownItemDesc = styled.p`
  color: #666; /* Medium gray for description text */
  opacity: 0.9; /* Increased opacity for better readability */
  font-size: 14px;
  line-height: 20px;
  margin: 0; /* Removed default margin */
`;
