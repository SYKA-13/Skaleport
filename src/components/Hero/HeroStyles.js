import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const CircularImage = styled.div`
@media ${(props) => props.theme.breakpoints.sm} {
  width: 120px; /* Adjust the size as needed */
  height: 120px; /* Adjust the size as needed */
  border-radius: 90%;
  overflow: hidden;
  margin-bottom:10px;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 120px; /* Adjust the size as needed */
  height: 120px; /* Adjust the size as needed */
  border-radius: 100%;
  overflow: hidden;
  margin-bottom:10px;

}
@media ${(props) => props.theme.breakpoints.xl} {
  width: 140px; /* Adjust the size as needed */
  height: 140px; /* Adjust the size as needed */
  border-radius: 100%;
  overflow: hidden;
  margin-bottom:22px;
}

`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateY(2%);
`;