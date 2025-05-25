/**
 * Detects the credit card type based on the card number
 * @param cardNumber The card number without spaces
 * @returns The detected card type
 */
export function detectCardType(cardNumber: string): "visa" | "mastercard" | "amex" | "discover" | "unknown" {
  // Remove spaces and non-numeric characters
  const cleanNumber = cardNumber.replace(/\D/g, "")

  // Visa: Starts with 4
  if (/^4/.test(cleanNumber)) {
    return "visa"
  }

  // Mastercard: Starts with 51-55 or 2221-2720
  if (/^5[1-5]/.test(cleanNumber) || /^(222[1-9]|22[3-9]\d|2[3-6]\d\d|27[0-1]\d|2720)/.test(cleanNumber)) {
    return "mastercard"
  }

  // American Express: Starts with 34 or 37
  if (/^3[47]/.test(cleanNumber)) {
    return "amex"
  }

  // Discover: Starts with 6011, 622126-622925, 644-649, or 65
  if (/^(6011|65|64[4-9]|622(12[6-9]|1[3-9]\d|[2-8]\d\d|9[0-1]\d|92[0-5]))/.test(cleanNumber)) {
    return "discover"
  }

  return "unknown"
}

/**
 * Formats a credit card number with spaces after every 4 digits
 * @param value The input card number
 * @returns The formatted card number
 */
export function formatCardNumber(value: string): string {
  // Remove all non-digit characters
  const digitsOnly = value.replace(/\D/g, "")

  // Add a space after every 4 digits
  const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, "$1 ")

  return formatted
}
