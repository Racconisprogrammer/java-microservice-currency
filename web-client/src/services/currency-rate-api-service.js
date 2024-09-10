export function getCurrencyRate(country) {
    return fetch(`/currency/rate/${country}`)
}
