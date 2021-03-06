import { ContentSlide } from 'react-presents'
import styled from 'styled-components';

export default styled(ContentSlide)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  & h1 {
    font-size: 10rem;
    padding-right: initial;
  }

  & h2 {
    font-size: 6rem;
    padding-right: initial;
  }
`;
