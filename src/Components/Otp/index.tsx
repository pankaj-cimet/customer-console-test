import { useState } from 'react'
import { useController, useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// import ErrorText from 'NewComponents/Form/ErrorText'
import { OtpBox, ResendWrapper, Resend, ResendText } from './styles'
import LoginPageWrapper from '../LoginWrapper'
import { ButtonPrimary, PhoneTitle, PhoneWrapper } from '../Login/styles'
import FlexBox from 'Common/FlexBox'
import { useNavigate } from 'react-router-dom'

const otpSize = 4

const OtpPage = () => {
  let navigate = useNavigate(); 

  const [showTimer, setShowTimer] = useState(false)

  const schema = object().shape({
    userOtp: string()
      .required('Please Enter OTP')
      .min(otpSize, `OTP must be at least ${otpSize} characters`),
  })
  const formData = useForm({
    resolver: yupResolver(schema),
    defaultValues: { userOtp: '' },
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formData

  const { field } = useController({
    name: 'userOtp',
    control,
  })
  const onSubmit = () => {
    navigate('/test/login')
  }
  const resendOtp = () => {
    setShowTimer(true)
  }

  return (
    <LoginPageWrapper>
      <PhoneWrapper>
        <PhoneTitle>Enter the {otpSize} digit OTP that has been sent to “0456 788 XXX “</PhoneTitle>
        <OtpBox>
          {/* <OtpInput
            {...field}
            numInputs={otpSize}
            inputStyle={{
              width: '3.75rem',
              height: '4.125rem',
              borderRadius: 7,
            }}
            isInputNum
          /> */}
          {/* {errors?.userOtp?.message && <ErrorText>{errors.userOtp.message}</ErrorText>} */}
        </OtpBox>
      </PhoneWrapper>
      <ButtonPrimary onClick={onSubmit} type="submit" size="small">
        Submit
      </ButtonPrimary>

      <ResendWrapper>
        {!showTimer ? 'Didn’t receive code?' : ''}
        <Resend onClick={resendOtp} disabled={showTimer}>
            <FlexBox align="stretch">
              <ResendText> Resend code.</ResendText>
            </FlexBox>
        </Resend>
      </ResendWrapper>
    </LoginPageWrapper>
  )
}
export default OtpPage
