export default function TimeToString(timing) {
    
    if (timing !== null) {
        const clocks = timing.split(" ")
        let stringClock = clocks[4].split(":")

        return stringClock = `${stringClock[0]}:${stringClock[1]}`
    }

    return "null"
    
}