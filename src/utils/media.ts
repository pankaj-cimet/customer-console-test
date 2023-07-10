import { css } from 'styled-components'

export const sizes: Record<string, number> = {
  desktop: 80, // lg 1280
  laptop: 68.25, // md 1092
  tablet: 48, // sm 768
  phone: 30, // xs 480
}

// iterate through the sizes and create a media template
let mediaObj = Object.keys(sizes).reduce((accumulator:any, label:string) => {
  // use rem in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const remSize = sizes[label]
  accumulator[label] = (...args:any) => css`
    @media (max-width: ${remSize}rem) {
      ${css({...args})};
    }
  `
  return accumulator
}, {})

mediaObj = {
  ...mediaObj,
  tabletOnly: (...args:any) => css`
    @media (min-width: ${sizes.tablet}rem) and (max-width: ${sizes.laptop}rem) {
      ${css({...args})};
    }
  `,
  tabletAbove: (...args:any) => css`
    @media (min-width: ${sizes.tablet}rem) {
      ${css({...args})};
    }
  `,
  phoneAbove: (...args:any) => css`
    @media (min-width: ${sizes.phone}rem) {
      ${css({...args})};
    }
  `,
  laptopAbove: (...args:any) => css`
    @media (min-width: ${sizes.laptop}rem) {
      ${css({...args})};
    }
  `,
}

export const media = mediaObj
