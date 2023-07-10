import { FormProvider, useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { PhoneWithSpacesPattern } from 'utils/validator'
// import platformConfig from 'utils/platformConfig'
import { PhoneWrapper, PhoneTitle, ButtonPrimary } from './styles'
import LoginPageWrapper from '../LoginWrapper'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  let navigate = useNavigate(); 
  const schema = object({
    phone: string()
      .required('Please enter your phone number')
      .when((val:any, sch) =>
        val?.replace(/[_\s]+/g, '')?.length
          ? sch.matches(
              PhoneWithSpacesPattern,
              'Mobile no. must start from 04 and should be of 10 digits',
            )
          : sch,
      ),
  })
  const formData = useForm({
    resolver: yupResolver(schema),
    defaultValues: { phone: '' },
  })
  const { handleSubmit } = formData
  // const PlaceholderIcon = platformConfig?.leadPopPlaceholderImg
  const onSubmit = async () => {
    navigate('/test/otp');
  }
  return (
    <LoginPageWrapper>
      <FormProvider {...formData}>
        <PhoneWrapper>
          <PhoneTitle>Enter your phone number to login</PhoneTitle>
          {/* <LeadPhoneInput
            name="phone"
            type="tel"
            mask="9999 999 999"
            maskChar="_"
            placeholder="04xx xxx xxx"
            placeholderImage={PlaceholderIcon?.phone}
            inputMode="numeric"
          /> */}
        </PhoneWrapper>
        <ButtonPrimary onClick={onSubmit} type="submit" size="small">
          Send OTP
        </ButtonPrimary>
      </FormProvider>
    </LoginPageWrapper>
  )
}
export default LoginPage
