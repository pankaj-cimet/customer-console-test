import styled from 'styled-components'
import { media } from 'utils/media'
import { CONTAINER_WIDTH } from 'theme/constants'
import { flex } from 'theme/themeUtils'

export const PageWrapper = styled.div`
${flex('row')}

  gap: 3rem;
  max-width: ${CONTAINER_WIDTH};
  justify-content: space-around;
  margin: 5rem;
  padding: 5rem 6.25rem;
  ${media.laptop`
    padding: 0 0.75rem;
    margin: 5rem 0.5rem;
  `}
`

export const CustomerSection = styled.div`
  min-width: 50%;
`

export const SubPointsWrapper = styled.div`
  margin-top: 1rem;
`

export const SubPoint = styled.div`
${flex('row', 'center', 'none')}

  margin: 0.5rem 0rem;
  gap: 0.5rem;
`
