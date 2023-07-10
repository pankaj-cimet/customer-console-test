import styled from 'styled-components'
import { COLORS } from 'theme/constants'
import { flex } from 'theme/themeUtils'
import NewTypography from 'Common/NewTypography'

export const OtpBox = styled.div`
  ${flex('column', 'flex-start', 'none')}
  > div {
    ${flex('row')}
    gap: 0.75rem;
  }

  input {
    text-align: center;
    outline: none;
    border: 1.25px solid ${COLORS.lightGray};
    &:focus {
      border-color: ${props => props.theme.colors?.accent};
    }
  }
`
export const ResendWrapper = styled(NewTypography.P3)`
  ${flex('row', 'center', 'none')}
  margin-top: 1rem;
`
export const ResendDefault = styled.button`
  color: ${props => props.theme.colors?.secondary};
  border: none;
  background: none;
  text-decoration: underline;
  margin: 0 auto 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  text-decoration-color: ${props => props.theme.colors?.secondary};
  svg {
    transform: rotate3d(2, 2, 0, 180deg);
    vertical-align: text-bottom;
    font-size: ${props => props.theme.fontSizes.p2};
    margin-right: 0.3rem;
  }
`

export const Resend = styled(ResendDefault)`
  margin: 0 0.5rem;
  text-decoration-color: ${props => props.theme.colors?.accent};
  color: ${props => props.theme.colors?.accent};
`

export const ResendText = styled(NewTypography.P3)`
  font-family: ${props => props.theme.fontFamily?.bold || props.theme?.fontFamily?.body};
`
