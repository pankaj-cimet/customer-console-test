import styled, { css } from 'styled-components'
import { COLORS, FONT_WEIGHTS } from 'theme/constants'
import { flex } from 'theme/themeUtils'
import { media } from 'utils/media'

export const buttonSize = (sizeProp:string) => {
  switch (sizeProp) {
    case 'xs':
      return '10rem'
    case 'small':
      return '12.5rem'
    case 'medium':
      return '19.5rem'
    case 'large':
      return '23rem'
    case 'radiosmall':
      return '11.5rem'
    case 'radiolarge':
      return '24.5rem'
    default:
      return '19.5rem'
  }
}

const Button:any = styled.button`
  ${flex()}
  appearance:none;
  background: none;
  border: none;
  width: ${(props:any) => buttonSize(props.size)};
  max-width: 100%;
  height: ${(props:any) => props.height || '3.5rem'};
  font-family: inherit;
  font-size: ${props => props.theme.fontSizes.p2};
  text-align: center;
  border-radius: ${props => props.theme.borderRadius};
  font-family: ${props =>
    props.theme.fontFamily?.bold ||
    props.theme.fontFamily?.semibold ||
    props.theme.fontFamily?.body};
  font-weight: ${FONT_WEIGHTS.semibold};
  cursor: pointer;
  transition: 0.25s;

  ${media.phone`
    font-size: ${(props:any) => props.theme.fontSizes.p3};
    height: 2.75rem;
  `}

  ${(props:any) =>
    props.centerAlign &&
    css`
      margin: auto;
      display: block;
    `}

  &:disabled {
    background-color: ${COLORS.lightGray};
    color: ${COLORS.gray};
    pointer-events: none;
  }

  ${media.phone`
    padding: 0 0.625rem;
  `}
`

export const ButtonPrimary = styled(Button)`
  background-color: ${({ theme }) => theme.colors?.secondary};
  color: ${({ theme }) => theme.colors?.ctaFontColor || COLORS.white};
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 3px 6px ${({ theme }) => theme.colors?.secondary}40;
  }
`
