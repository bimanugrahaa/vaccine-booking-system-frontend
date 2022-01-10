function DateToString(date) {
    
    const stringDate = `${date.day} - ${date.month} - ${date.year}`

    return stringDate
}

function LongDate(date) {
    
    let longDate = date.split(" - ")

    const months = [
        '',
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
    ]

    longDate = `${longDate[0]} ${months[longDate[1]]} ${longDate[2]}`

    return longDate
}

export { DateToString, LongDate }