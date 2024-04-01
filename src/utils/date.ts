export const formatDate = (dateString: Date| null, format: 3 | 5) => {
   
    if (format === 3 && dateString) {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const date = new Date(dateString);
        const dayOfWeek = daysOfWeek[date.getDay()];
        const dayOfMonth = date.getDate();
        const month = date.toLocaleString('en', { month: 'short' });

        return `${dayOfWeek}, ${dayOfMonth} ${month}`;
    }
    if (format === 5 && dateString) {
        const date = new Date(dateString);

        const month = date.toLocaleString('en', { month: 'short' });
        const day = date.getDate();
        const hour = date.getHours() % 12 || 12;
        const minute = date.getMinutes();
        const period = date.getHours() >= 12 ? 'pm' : 'am';

        return `${month} ${day} at ${hour}:${minute < 10 ? '0' : ''}${minute} ${period}`;
    };

    if (!dateString) {
        return null;
    }
}