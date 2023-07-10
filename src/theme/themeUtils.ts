import { css } from 'styled-components'

export const flex = (
  direction = 'row',
  align = 'center',
  justify = 'center',
  wrap = 'nowrap',
) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  flex-wrap: ${wrap};
`

export const getFontSizes = (p3 = '14px') => {
  let number = Number(p3.split('px')[0])

  number = number === 0 ? 14 : number

  const fontSizes = {
    p1: `${number + 4}px`, // 18px
    p2: `${number + 2}px`, // 16px
    p3: `${number}px`, // 14px
    p4: `${number - 2}px`, // 12px
    p5: `${number - 4}px`, // 10px
    h1: `${Math.round(number * 3.2142)}px`, // 45px
    h2: `${number * 2}px`, // 28px
    h3: `${Math.round(number * 1.7145)}px`, // 24px
  }

  return fontSizes
}

const getAdditionalData = (json:any) => {
  const defaultObject = {
    fontFamily: {},
    colors: {},
    theme: {},
    config: {},
  }
  try {
    const parsedObject = json ? JSON.parse(json) : {}
    return { ...defaultObject, ...parsedObject }
  } catch {
    return defaultObject
  }
}

export const getBaseTheme = (data:any) => {
  const additionalData = getAdditionalData(data?.config?.other)
  const theme = data?.theme

  const themeData = {
    fonts:
      `${theme?.style?.import_config}` ||
      `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap')`,
    fontFamily: {
      heading: `${theme?.style?.header_font_name}` || 'Poppins, sans-serif',
      body: `${theme?.style?.body_font_name}` || 'Poppins, sans-serif',
      ...additionalData.fontFamily,
    },
    colors: {
      primary: theme?.color?.primary_color || '#003459',
      secondary: theme?.color?.secondary_color || '#FDA212',
      accent: theme?.color?.accent_color || '#00A8E8',
      ctaFontColor: theme?.color?.cta_font_color || '#fff',
      footerBgColor: theme?.color?.footerbgcolor || theme?.color?.primary_color,
      ...additionalData.colors,
    },
    baseFontSize: `${theme?.style?.base_font_size}px`,
    borderRadius: `${theme?.style?.border_radius}px`,
    ...additionalData.theme,
  }

  return themeData
}