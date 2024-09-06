export const SelectTravelesList = [
    {

        id: 1,
        title: 'Just Me',
        desc: 'A Sole travelers in exploration',
        icon: '✈',
        people: '1 People'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two traveles in tandem',
        icon: '🍷',
        people: '2 People'

    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adv',
        icon: '🏠︎',
        people: '3 to 5 People'

    },
    {

        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekes',
        icon: '🍺',
        people: '5 to 10 People'
    },
]


export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '🌟',

    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average stats',
        icon: '💰',

    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Dont worry about cost',
        icon: '👑',
    },

]

export const AI_PROMPT = 'Generate Travel plan for Location :{Location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details , Flight price with Booking url, Hotels options list with HotelName, Hotel address, price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, place Details, place Image Url, Geo Coordinates, ticket pricing, Time t travel each of the loaction for {totalDays} days and {totalNight} night with  each day plan with best time to visit in JSON format.'