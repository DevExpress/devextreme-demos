const getWednesdayThisWeek = () => {
    WEDNDESDAY_INDEX = 3;

    const date = new Date();

    var currentDay = date.getDay();
    var distance = WEDNDESDAY_INDEX - currentDay;
    date.setDate(date.getDate() + distance);

    date.setHours(11, 35, 0, 0);

    return date;
}

MockDate.set(getWednesdayThisWeek());