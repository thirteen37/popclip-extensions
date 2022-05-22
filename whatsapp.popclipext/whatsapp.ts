import findPhoneNumbersInText from 'libphonenumber-js'
export function whatsappUrl (text: string): string {
    const numbers = findPhoneNumbersInText(text, 'SG')
    return "https://wa.me/" + (numbers === undefined ? "" : numbers.number.substring(1))
}
export const action: Action = (input) => {
    return whatsappUrl(input.text)
}
