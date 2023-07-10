import React from 'react'
import { string, bool, number, oneOfType } from 'prop-types'
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  align-items: ${(props:any) => props.align || 'normal'};
  padding: ${(props:any) => props.padding || null};
  flex: ${(props:any) => props.flex || '0 1 auto'};
  flex-direction: ${(props:any) => props.direction || 'row'};
  flex-wrap: ${(props:any) => (props.flexWrap ? 'wrap' : 'nowrap')};
  height: ${(props:any) => props.height || 'auto'};
  justify-content: ${(props:any) => props.justify || 'normal'};
  gap: ${(props:any) => (props.gap ? props.gap : null)};
`

const FlexBox:any = (props:any) => {
  const { className, children, wrap, ...rest } = props
  return (
    <Box className={className} flexWrap={wrap ? 1 : 0} {...rest}>
      {children}
    </Box>
  )
}

FlexBox.propTypes = {
  align: string,
  className: string,
  direction: string,
  flex: oneOfType([number, string]),
  justify: string,
  responsive: bool,
  wrap: bool,
  gap: string,
  padding: string,
}

export default FlexBox
