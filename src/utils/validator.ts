export const PhonePattern = /^04[0-9]{8}$/g

export const PhoneWithSpacesPattern = /^04[0-9]{2} [0-9]{3} [0-9]{3}$/g

export const PhonePatternWithoutPrefix = /^[0-9]{8}$/g

export const HomePhoneStartingPattern = /^0[2378]\d+$/

export const OnlyLettersAndSpacesPattern = /^[a-zA-Z\s]*$/

export const NamePattern = /^[A-Za-zÀ-ÿ'-\s]*$/

export const NumericOnlyPattern = /^[0-9]+$/

export const DatePattern =
  /(?:(?:(?:0[1-9]|1\d|2[0-8])\/(?:0[1-9]|1[0-2])|(?:29|30)\/(?:0[13-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/[1-9]\d{3}|29\/02(?:\/[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00))/

export const ExpiryDatePattern = /(?:0[1-9]|1[0-2])\/[0-9]{4}/

export const AlphaNumericPattern = /^[a-z0-9A-Z]*$/

export const MirnNumberPattern = /^[15]/

export const NmiNumberPattern = /^[2-46-8n]|^[\bqb\b]{2}/i

export const PossiblePhonePrefix = /^(006|\+61|0)\s*/

export const NumberWithAnOptionalCharacter = /^(\d+)([A-Za-z]?)$/

export const AccountNumberPattern = /^\d{5,9}$/

export const MedicareNumberPattern = /^[0-9]{10}$/
