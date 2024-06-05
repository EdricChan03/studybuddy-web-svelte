const intlFormatter = new Intl.DateTimeFormat('en-US');

export const formatDate = (date: Date) => intlFormatter.format(date);
