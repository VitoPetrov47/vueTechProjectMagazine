export default function dateFilter(value, format, region) {
    let options = {}

    if(format == 'date') {
        options.year = "numeric";
        options.month = "2-digit";
        options.day = "2-digit";
    } else if (format == 'time') {
        options.hour = "2-digit";
        options.minute = "2-digit";
        // options.second = "2-digit";
    } else {
        options.year = "numeric";
        options.month = "short";
        options.day = "2-digit";
    }
    // let options = {
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     second: "2-digit",
    // }

    return new Intl.DateTimeFormat(region, options).format(new Date(value));
}