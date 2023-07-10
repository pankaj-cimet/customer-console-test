import styled, { css } from 'styled-components'
import { FONT_WEIGHTS, LINE_HEIGHTS } from 'theme/constants'
import { media } from 'utils/media'

const CommonStyles = css`
  text-align: ${(props:any) => props.align};
  font-weight: ${(props:any) => props.weight};
  color: ${({ theme, color, variant }:any) => color || theme.fontColors?.[variant]};
  font-family: ${(props:any) => props.fontFamily};
  font-size: ${(props:any) => props.size};
  line-height: ${(props:any) => props.lineHeight};
  letter-spacing: ${(props:any) => props.letterSpacing};
  text-transform: ${(props:any) => props.textTransform};
`
const NewTypography = {
  H1: styled.h1`
    font-size: ${props =>{console.log(props);return props.theme.fontSizes.h1}};
 
  `,
  H2: styled.h2`
    font-size: ${props => props.theme.fontSizes.h2};
    font-weight: ${FONT_WEIGHTS.bold};
    font-family: ${props => props.theme.fontFamily?.heading || props.theme?.fontFamily?.body};
    line-height: ${LINE_HEIGHTS.h2};
    ${CommonStyles}
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p1};
      line-height: ${LINE_HEIGHTS.p1};
  `}
  `,
  H3SemiBold: styled.h3`
    font-size: ${props => props.theme.fontSizes.h3};
    font-weight: ${FONT_WEIGHTS.semibold};
    font-family: ${props => props.theme.fontFamily?.bold || props.theme?.fontFamily?.body};
    line-height: ${LINE_HEIGHTS.h3};
    ${CommonStyles}
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p1};
      line-height: ${LINE_HEIGHTS.p1};
    `}
  `,
  H3: styled.h3`
    font-size: ${props => props.theme.fontSizes.h3};
    font-weight: ${FONT_WEIGHTS.bold};
    font-family: ${props => props.theme.fontFamily?.heading || props.theme?.fontFamily?.body};
    line-height: ${LINE_HEIGHTS.h3};
    ${CommonStyles}
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p1};
      line-height: ${LINE_HEIGHTS.p1};
    `}
  `,
  P1: styled.p`
    font-size: ${props => props.theme.fontSizes.p1};
    font-weight: 400;
    line-height: ${LINE_HEIGHTS.p1};
    ${CommonStyles}
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p2};
      line-height: ${LINE_HEIGHTS.p2};
    `}
  `,
  P1Strong: styled.p`
    font-size: ${props => props.theme.fontSizes.p1};
    font-weight: ${FONT_WEIGHTS.semibold};
    font-family: ${props => props.theme.fontFamily?.semiBold || props.theme?.fontFamily?.body};
    line-height: ${LINE_HEIGHTS.p1};
    ${CommonStyles}
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p2};
      line-height: ${LINE_HEIGHTS.p2};
    `}
  `,
  P2: styled.p`
    font-size: ${props => props.theme.fontSizes.p2};
    font-weight: 400;
    line-height: ${LINE_HEIGHTS.p2};
    ${CommonStyles}
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p3};
      line-height: ${LINE_HEIGHTS.p3};
    `}
  `,
  P2Strong: styled.p`
    font-size: ${props => props.theme.fontSizes.p2};
    font-weight: ${FONT_WEIGHTS.semibold};
    font-family: ${props => props.theme.fontFamily?.bold || props.theme?.fontFamily?.body};
    line-height: ${LINE_HEIGHTS.p2};
    ${CommonStyles}
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p3};
      line-height: ${LINE_HEIGHTS.p3};
  `}
  `,
  P3: styled.p`
    font-size: ${props => props.theme.fontSizes.p3};
    font-weight: 400;
    line-height: ${LINE_HEIGHTS.p3};
    ${CommonStyles}
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p4};
      line-height: ${LINE_HEIGHTS.p4};
    `}
  `,
  P3Strong: styled.p`
    font-size: ${props => props.theme.fontSizes.p3};
    font-weight: ${FONT_WEIGHTS.semibold};
    font-family: ${props => props.theme.fontFamily?.bold || props.theme?.fontFamily?.body};
    line-height: ${LINE_HEIGHTS.p3};
    ${CommonStyles}
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p4};
      line-height: ${LINE_HEIGHTS.p4};
  `}
  `,
  P4: styled.p`
    font-size: ${props => props.theme.fontSizes.p4};
    font-weight: 400;
    font-family: ${props => props.theme.fontFamily?.semiBold || props.theme?.fontFamily?.body};
    line-height: ${LINE_HEIGHTS.p4};
    ${CommonStyles}
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p5};
      line-height: ${LINE_HEIGHTS.p5};
  `}
  `,
  P5: styled.p`
    font-size: ${props => props.theme.fontSizes.p5};
    font-weight: 400;
    font-family: ${props => props.theme.fontFamily?.semiBold || props.theme?.fontFamily?.body};
    line-height: ${LINE_HEIGHTS.p5};
    ${CommonStyles}
  `,
}

export default NewTypography
