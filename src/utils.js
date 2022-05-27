
 const addZeroDate = (value) =>{
    return value < 10 ? '0' + value : value;
}


const parseDateString = (updated_at) =>{

    const parseDate = new Date(Date.parse(updated_at));
    const date =
        addZeroDate(parseDate.getDate()) + '-' +
        (addZeroDate(parseDate.getMonth() + 1)) + '-' +
        addZeroDate(parseDate.getFullYear());
    const time =
        addZeroDate(parseDate.getHours()) + ':' +
        addZeroDate(parseDate.getMinutes()) + ':' +
        addZeroDate(parseDate.getSeconds())

    return {date, time};
}


export default parseDateString;