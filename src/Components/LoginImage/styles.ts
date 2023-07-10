import styled from 'styled-components'
import { media } from 'utils/media'

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 25rem;
  height: 25rem;
  align-self: center;

  & img {
    max-width: 100%;
    object-fit: cover;
  }

  ${media.tablet`
    display: none;
  `}
`

export const Image = styled.img`
`
