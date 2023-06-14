import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
   
  
    grid-template-columns: 0fr 1fr;
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2`

  font-weight: 800;
  font-size: ${(props) => props.main ? '50px' : '56px'};
  line-height: ${(props) => props.main ? '70px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '50px' : '42px'};
    line-height: ${(props) => props.main ? '58px' : '43px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 30px;
    padding: ${(props) => props.main ? '30px 20px 20px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 100px;
    padding-left:20px;
  }
`

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? 'linear-gradient(270deg, #FF4F70 0%, #FF4F70 100%)'
      : 'linear-gradient(270deg, #59B953 0%, #FF4F70 100%)'};
  margin: ${(props) => (props.divider ? '4rem 0' : '')};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
export const SecondaryBtn = styled.button`
  color: #0f1624;
  background: ${({ alt }) =>
    alt
      ? 'linear-gradient(270deg, #ff4f70 0%, #ff4f70 33%, #ffecb3 33%, #ffecb3 66%, #59b953 66%, #59b953 100%)' /* Mixture of Shady Pink, Light Yellow, and Green */
      : 'none'};
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  
  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
    background: ${({ alt }) =>
      alt
        ? 'linear-gradient(270deg, #ff4f70 0%, #ff4f70 33%, #ffecb3 33%, #ffecb3 66%, #59b953 66%, #59b953 100%)' /* Mixture of Shady Pink, Light Yellow, and Green */
        : '#ffecb3' /* Light Yellow */};
    border: 1px solid ${({ alt }) => (alt ? '#ff4f70' : '#59b953')}; /* Shady Pink or Green */
  }

  &:active {
    background: ${({ alt }) => (alt ? '#ff4f70' : '#ffecb3')}; /* Shady Pink or Light Yellow */
    border: 1px solid ${({ alt }) => (alt ? '#ff4f70' : '#ffecb3')}; /* Shady Pink or Light Yellow */
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ButtonBack = styled.div`
  width: ${({ alt }) => (alt ? '150px' : '262px')};
  height: ${({ alt }) => (alt ? '52px' : '64px')};
  border-radius: 50px;
  font-size: ${({ alt }) => (alt ? '20px' : '24px')};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form ? '0' : '0 0 80px')};
  color: #fff;
  background: ${({ alt }) =>
    alt
      ? 'linear-gradient(270deg, #ff4f70 0%, #ff4f70 100%)' /* Shady Pink */
      : 'linear-gradient(270deg, #ff4f70 0%, #ff4f70 100%)' /* Shady Pink */};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? '150px' : '184px')};
    height: ${({ alt }) => (alt ? '52px' : '48px')};
    font-size: ${({ alt }) => (alt ? '20px' : '16px')};
    margin-bottom: ${({ alt }) => (alt ? '0' : '64px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => (alt ? '0' : '32px')};
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) =>
    alt
      ? 'linear-gradient(270deg, #ff4f70 0%, #ff4f70 100%)' /* Shady Pink */
      : 'linear-gradient(270deg, #eae632 0%, #59b953 100%)' /* Light Yellow to Green Gradient */};
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  transition: 0.4s ease;
  font-size: ${({ alt }) => (alt ? '20px' : '24px')};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)'
      : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #ff4f70 0%, #ff4f70 100%); /* Shady Pink */
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? '20px' : '16px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;





export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`