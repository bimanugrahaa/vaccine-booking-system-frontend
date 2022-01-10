export const Calendar = {
    
    /* Months list by order */
    months: [
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
    ],
      
    /* Week days by order */
    weekDays: [
        {
        name: 'Minggu', // Used for accessibility 
        short: 'M', // Displayed at the top of days' rows
        isWeekend: true, // Is it a formal weekend or not?
        },
        {
        name: 'Senin',
        short: 'S',
        },
        {
        name: 'Selasa',
        short: 'S',
        },
        {
        name: 'Rabu',
        short: 'R',
        },
        {
        name: 'Kamis',
        short: 'K',
        },
        {
        name: 'Jumat',
        short: 'J',
        },
        {
        name: 'Sabtu',
        short: 'S',
        isWeekend: true,
        },
    ],
      
        weekStartingIndex: 0,
      
        /* Return a { year: number, month: number, day: number } object */
        getToday(gregorainTodayObject) {
          return gregorainTodayObject;
        },
      
        /* Return a native JavaScript date here */
        toNativeDate(date) {
          return new Date(date.year, date.month - 1, date.day);
        },
      
        /* Return a number for date's month length */
        getMonthLength(date) {
          return new Date(date.year, date.month, 0).getDate();
        },
      
        /* Return a transformed digit to your locale */
        transformDigit(digit) {
          return digit;
        },
      
        /* Texts in the date picker */
        nextMonth: 'Bulan selanjutnya',
        previousMonth: 'Bulan sebelumnya',
        openMonthSelector: 'Pemilihan bulan',
        openYearSelector: 'Pemilihan tahun',
        closeMonthSelector: 'Tutup pemilihan bulan',
        closeYearSelector: 'Tutup pemilihan tahun',
        defaultPlaceholder: 'Pilih...',
      
        /* For input range value */
        from: 'dari',
        to: 'sampai',
      
      
        /* Used for input value when multi dates are selected */
        digitSeparator: ',',
      
        /* If your provide -2 for example, year will be 2 digited */
        yearLetterSkip: 0,
      
        /* Is your language rtl or ltr? */
        isRtl: false,
    }