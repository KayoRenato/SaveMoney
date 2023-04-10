export const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

export const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
})