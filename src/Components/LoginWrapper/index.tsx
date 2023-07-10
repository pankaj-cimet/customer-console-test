// import NewTypography from 'NewComponents/Common/NewTypography'
import NewTypography from 'Common/NewTypography'
import LoginImage from '../LoginImage'
import { PageWrapper, CustomerSection, SubPointsWrapper, SubPoint } from './styles'
import Icons from 'Common/Icons'

const keyPoints = ['View your application status', 'Provide additional data']
const LoginPageWrapper = ({ children }:{children:any}) => (
    <PageWrapper>
      <LoginImage />
      <CustomerSection>
      <NewTypography.H1>Customer Login</NewTypography.H1>
        <SubPointsWrapper>
          {keyPoints.map(keyPoint => (
            <SubPoint key={keyPoint}>
              <Icons
                type="IoIosCheckmarkCircle"
                svgOnly
                color={(theme:any) => theme.colors?.accent}
                size={15}
              />
              {keyPoint}
            </SubPoint>
          ))}
        </SubPointsWrapper>
        {children}
      </CustomerSection>
    </PageWrapper>
)
export default LoginPageWrapper
