import findPhoneNumbersInText, { CountryCode } from 'libphonenumber-js'
export function whatsappUrl (text: string, country_code: CountryCode): string {
    const numbers = findPhoneNumbersInText(text, <CountryCode> country_code)
    return "https://wa.me/" + (numbers === undefined ? "" : numbers.number.substring(1))
}
export const action: Action = (input, options) => {
    return whatsappUrl(input.text, options.country as CountryCode)
}
