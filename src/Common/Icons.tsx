import styled, { css, useTheme } from 'styled-components'

import {
  AiFillCheckCircle,
  AiFillMinusCircle,
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineClose,
  AiOutlineDollar,
  AiOutlineDollarCircle,
  AiOutlineEye,
  AiOutlineInfoCircle,
  AiOutlinePlusCircle,
  AiOutlineFile,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
  AiOutlineRight,
  AiOutlineUnorderedList,
  AiFillWarning,
  AiFillCloseCircle,
  AiOutlineFileAdd,
} from 'react-icons/ai'
import {
  BiSpreadsheet,
  BiWifi,
  BiShareAlt,
  BiCheck,
  BiChevronLeft,
  BiInfoCircle,
  BiSliderAlt,
} from 'react-icons/bi'
import {
  BsCaretDownFill,
  BsCheck,
  BsTelephoneFill,
  BsCheck2Circle,
  BsFillCheckCircleFill,
  BsTelephone,
  BsCreditCard,
  BsFillCreditCardFill,
  BsFillExclamationTriangleFill,
  BsFillExclamationCircleFill,
  BsExclamationCircle,
} from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import {
  FaCheckCircle,
  FaTools,
  FaRegFilePdf,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelopeOpen,
  FaPhoneVolume,
  FaCalendarAlt,
  FaInstagram,
  FaTwitter,
  FaFilter,
  FaHouseDamage,
  FaExpandArrowsAlt,
  FaChevronDown,
  FaIdCard,
} from 'react-icons/fa'
import { VscRefresh } from 'react-icons/vsc'
import { FcFile } from 'react-icons/fc'
import {
  FiEdit,
  FiCheckCircle,
  FiUpload,
  FiYoutube,
  FiMessageSquare,
  FiHeart,
  FiFilter,
  FiChevronDown,
  FiArrowRight,
} from 'react-icons/fi'
import { GiPhone, GiElectric, GiCancel } from 'react-icons/gi'
import { GoTriangleDown, GoTriangleRight } from 'react-icons/go'
import { HiOutlineMenu, HiOutlineLockClosed, HiLockClosed } from 'react-icons/hi'
import { ImSpinner2, ImSpinner3 } from 'react-icons/im'
import { IoChevronDown, IoClose, IoRadioButtonOffOutline } from 'react-icons/io5'
import {
  IoIosArrowBack,
  IoIosArrowDropleftCircle,
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosAddCircle,
  IoIosCall,
  IoIosCloseCircle,
  IoIosCheckmarkCircle,
  IoIosInformationCircle,
  IoIosWarning,
  IoMdRemoveCircleOutline,
} from 'react-icons/io'
import {
  MdLocationOn,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdDateRange,
  MdOutlineMailOutline,
  MdKeyboardArrowRight,
  MdSort,
  MdSearch,
  MdEmail,
} from 'react-icons/md'
import {
  RiCloseFill,
  RiMoneyDollarCircleLine,
  RiCloseLine,
  RiAddLine,
  RiSubtractLine,
  RiRadioButtonFill,
} from 'react-icons/ri'
import { SiElasticstack } from 'react-icons/si'
import { TbFilter } from 'react-icons/tb'
import { media } from 'utils/media'

const getIcons:any = {
  AiFillCheckCircle,
  AiFillMinusCircle,
  AiOutlineFileAdd,
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineClose,
  AiOutlineDollar,
  AiOutlineDollarCircle,
  AiOutlineEye,
  AiOutlineInfoCircle,
  AiOutlinePlusCircle,
  AiOutlineFile,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
  AiOutlineRight,
  AiOutlineUnorderedList,
  AiFillWarning,
  AiFillCloseCircle,
  BiCheck,
  BiChevronLeft,
  BiInfoCircle,
  BiSliderAlt,
  BiShareAlt,
  BiSpreadsheet,
  BiWifi,
  BsCaretDownFill,
  BsCheck,
  BsTelephoneFill,
  BsCheck2Circle,
  BsFillCheckCircleFill,
  BsTelephone,
  BsCreditCard,
  BsFillExclamationTriangleFill,
  BsFillCreditCardFill,
  BsFillExclamationCircleFill,
  BsExclamationCircle,
  CgClose,
  FaCheckCircle,
  FaExpandArrowsAlt,
  FaChevronDown,
  FaFacebookF,
  FaFilter,
  FaHouseDamage,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelopeOpen,
  FaPhoneVolume,
  FaCalendarAlt,
  FaRegFilePdf,
  FaTools,
  FaTwitter,
  VscRefresh,
  FcFile,
  FiCheckCircle,
  FiEdit,
  FiMessageSquare,
  FiUpload,
  FiHeart,
  FiYoutube,
  FiFilter,
  FiChevronDown,
  FiArrowRight,
  GiElectric,
  GiPhone,
  GiCancel,
  GoTriangleDown,
  GoTriangleRight,
  HiOutlineMenu,
  HiLockClosed,
  HiOutlineLockClosed,
  ImSpinner2,
  ImSpinner3,
  IoChevronDown,
  IoIosAddCircle,
  IoIosArrowBack,
  IoIosArrowDropleftCircle,
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosCheckmarkCircle,
  IoMdRemoveCircleOutline,
  IoIosCloseCircle,
  IoIosInformationCircle,
  IoIosWarning,
  IoIosCall,
  IoClose,
  IoRadioButtonOffOutline,
  MdLocationOn,
  MdKeyboardArrowRight,
  MdSort,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineMailOutline,
  RiCloseLine,
  RiAddLine,
  RiSubtractLine,
  RiRadioButtonFill,
  RiCloseFill,
  RiMoneyDollarCircleLine,
  SiElasticstack,
  MdDateRange,
  TbFilter,
  MdSearch,
  MdEmail,
  FaIdCard,
}

const BaseStyle = css`
  color: ${(props:any) => props.color || 'currentColor'};
  font-size: ${(props:any) => props.size};
`

// changed it to span as div creates HTML tag error
export const Icon = styled.span`
  display: ${(props:any) => props.display || 'flex'};

  & .icon {
    ${BaseStyle}
  }
`
const Icons = ({ display, type, size, color, svgOnly = false, ...props }:any) => {
  const ReactIcon = getIcons[type]
  const theme:any = useTheme()
  const getColor:any = () => {
    if (typeof color === 'function') return color(theme)
    return color
  }
  if (!ReactIcon) {
    return null
  }
  if (svgOnly) {
    return <ReactIcon className="icon" size={size} color={getColor(theme)} {...props} />
  }
  return (
      <ReactIcon className="icon" size={size} color={getColor(theme)} {...props} />
  )
}

export const IconWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.p3};
  align-items: center;
  column-gap: 4px;
  cursor: ${({ cursor }:any) => cursor || 'auto'};
  ${media.phone`
    column-gap: 2px;
  `}
`

export default Icons
