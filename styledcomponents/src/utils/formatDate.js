export const formatDate = (date) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(date).toLocaleDateString('en-us', options);
}

export const updateDate = () => {
    return new Date().getDate();
}
