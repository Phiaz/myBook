const User = require('./src/app/models/User')

const Review = require('./src/app/models/Review')
// async function test() {
//     let data = await User.followCount('1013', '1015')
//     // .then(data => console.log(data))
//     let reviews = await Review.testAllReviews('1015')
//     console.log(data)
//     console.log(reviews)
// }
// test()


// Promise.all([Review.testAllReviews('1015'), User.followCount('1013', '1015')])
// .then(([reviews, follower]) => {
//     console.log(reviews)
//     console.log(follower)
// })

async function test() {
    const data = await User.followCount('1013', '1015')
    await Review.allReviews('1015', (err, reviews) => {
        console.log(reviews)
        console.log(data)
    })
}

// User.followCount('1013', '1015')
// console.log(User.followCount('1013', '1015'))
test()