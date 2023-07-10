import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "Pages/login";
import { getBaseTheme, getFontSizes } from 'theme/themeUtils';
import { FONT_COLORS } from 'theme/constants';
import { media } from 'utils/media';
import OTP from 'Pages/otp';


function App({rest}:any) {
  const theme = rest?.[0].theme
  const themeData = {
        "theme": {
            "color": {
                "primary_color": "#003459",
                "secondary_color": "#fda212",
                "accent_color": "#00a8e8",
                "cta_font_color": "#ffffff",
                "footerbgcolor": "#003459"
            },
            "style": {
                "border_radius": "5",
                "import_config": "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap')",
                "header_font_name": "Poppins, sans-serif",
                "body_font_name": "Poppins, sans-serif",
                "base_font_size": "14"
            }
        },
        "config": {
            "logo": {
                "header_logo": "https://cimet-uat-content-pub.s3.ap-southeast-2.amazonaws.com/affiliate/190/logo/1684558871econnex-horizontal-logo.png",
                "favicon_logo": "https://cimet-uat-content-pub.s3.ap-southeast-2.amazonaws.com/affiliate/favicon/190/logo/1684558871econnex_logo_CC-colourway.png",
                "footer_logo": "https://cimet-uat-content-pub.s3.ap-southeast-2.amazonaws.com/affiliate/footer/190/logo/1684558871footer logo.png"
            },
            "url": {
                "copyright_content": "Copyright © 2023 Econnex Comparison. All Rights Reserved.",
                "terms_conditions_url": "https://www.econnex.com.au/terms-and-conditions/",
                "privacy_policy_url": "https://www.econnex.com.au/privacy-policy/"
            },
            "homeUrl": {
                "energy": "https://csapp-uat01.cimet.io/energy",
                "mobile": "https://app.econnex.com.au/mobile/basic-info",
                "broadband": "https://csapp-uat01.cimet.io/broadband",
                "solar": "https://csapp-uat01.cimet.io/solar"
            },
            "other": "",
            "name": "Econnex",
            "version": "4.9",
            "services": [
                {
                    "id": 1,
                    "service_title": "Energy",
                    "meta_title": "Econnex - Compare Electricity and Gas Plans",
                    "meta_content": "With Econnex, you get to compare gas and electricity providers and ascertain their rates and prices online. Electricity comparison made easy.",
                    "footer_content": "This Econnex Comparison platform is powered by CIMET Sales Pty Ltd ABN 72 620 395 726. We do not compare all brands in the market, or all products offered by all brands. At times certain brands or products may not be available or offered to you. If you proceed with an energy plan through the Econnex Comparison platform; Econnex Comparison, CIMET Sales and CIMET Sales partners may each receive a referral fee.",
                    "ivr_number": "1800 013 000"
                },
                {
                    "id": 2,
                    "service_title": "Mobile",
                    "meta_title": "Econnex - Mobile Comparison | Compare Mobile Plans",
                    "meta_content": "You’ll love saving on your Mobile bills. Compare Mobile plans, sign up, and start saving! You can easily compare between different mobile plan providers in your area.",
                    "footer_content": "This econnex platform is powered by CIMET. We do not compare all brands in the market, or all products offered by all brands. At times certain brands or products may not be available or offered to you. If you proceed with a retailer plan through the econnex platform; econnex, CIMET and CIMET partners may each receive a referral fee.",
                    "ivr_number": "18000 13000"
                },
                {
                    "id": 3,
                    "service_title": "Broadband",
                    "meta_title": "Econnex - Broadband Comparison | Compare Broadband Plans",
                    "meta_content": "You’ll love saving on your Internet bills. Compare Internet plans, sign up, and start saving! You can easily compare between different broadband providers in your area.",
                    "footer_content": "This econnex platform is powered by CIMET. We do not compare all brands in the market, or all products offered by all brands. At times certain brands or products may not be available or offered to you. If you proceed with a retailer plan through the econnex platform; econnex, CIMET and CIMET partners may each receive a referral fee.",
                    "ivr_number": "1800 881 424"
                },
                {
                    "id": 4,
                    "service_title": "Solar",
                    "meta_title": "Compare, Select, and Save | Econnex",
                    "meta_content": "Discover the best solar solutions for your home. Compare and select from a range of top-tier products and services. Start saving on your energy bills and harness the power of solar with Econnex. Get a personalized solar solution today.",
                    "footer_content": "This Econnex Comparison platform is powered by CIMET Sales Pty Ltd ABN 72 620 395 726. We do not compare all brands in the market, or all products offered by all brands. At times certain brands or products may not be available or offered to you. If you proceed with an energy plan through the Econnex Comparison platform; Econnex Comparison, CIMET Sales and CIMET Sales partners may each receive a referral fee.",
                    "ivr_number": "1300 365 767"
                }
            ]
        }
}
  const baseThemeData = theme ? theme : getBaseTheme(themeData)
  const fontSizes = getFontSizes(baseThemeData?.baseFontSize)
  const modfiedTheme = { fontSizes, fontColors: FONT_COLORS, ...baseThemeData }

  const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${props =>
      props.theme.fontFamily?.body}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${FONT_COLORS.primary};
  }

  body{
    font-size: ${props => props.theme.fontSizes.p3};
    
    ${media.phone`
      font-size: ${(props:any) => props.theme.fontSizes.p4};
    `}
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  //reset css
  * {
    padding:0;
    margin:0;
    box-sizing: border-box;
  }
`

  return (
    <ThemeProvider theme={modfiedTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Login />} />
          <Route path="/test/login" element={<Login />} />
          <Route path="/test/otp" element={<OTP />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
