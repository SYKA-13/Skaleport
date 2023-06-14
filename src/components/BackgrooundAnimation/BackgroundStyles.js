import styled from "styled-components"

export const BgStyles = styled.div`
border:none
`
export const LeftSection= styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: grid;
    flex-direction: row;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
