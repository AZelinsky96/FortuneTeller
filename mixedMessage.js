// This program will be a mixed fortune teller messaging app. It will output random fortunes as if you opened a fortune cookie!

let messages = {
    "positive": [
        "A beautiful, smart, and loving person will be coming into your life.",
        "A lifetime friend shall soon be made.",
        "A golden egg of opportunity falls into your lap this month.",
        "A lifetime of happiness lies ahead of you.",
        "A pleasant surprise is waiting for you.",
        "A smooth long journey! Great expectations.",
        "All the effort you are making will ultimately pay off.",
        "All will go well with your new project.",
        "All your hard work will soon pay off.",
        "Allow compassion to guide your decisions.",
        "An important person will offer you support.",
        "At the touch of love, everyone becomes a poet.",
        "Because you demand more from yourself, others respect you deeply.",
        "Believe it can be done.",
        "Bide your time, for success is near.",
        "Competence like yours is underrated.",
        "Congratulations! You are on your way.",
        "Don’t be discouraged, because every wrong attempt discarded is another step forward.",
        "Don’t worry; prosperity will knock on your door soon.",
        "Each day, compel yourself to do something you would rather not do.",
        "Embrace this love relationship you have!",
        "Every flower blooms in its own sweet time."
    ],
    "negative": [
        "A dubious friend may be an enemy in camouflage.",
        "A friend asks only for your time not your money.",
        "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
        "A person of words and not deeds is like a garden full of weeds.",
        "A small donation is called for.It’s the right thing to do.",
        "A soft voice may be awfully persuasive.",
        "Advice, when most needed, is least heeded.",
        "All the troubles you have will pass away very quickly.",
        "An agreeable romance might begin to take on the appearance.",
        "Be careful or you could fall for some tricks today.",
        "Carve your name on your heart and not on marble.",
        "Depart not from the path which fate has you assigned.",
        "Determination is what you need now.",
        "Diligence and modesty can raise your social status.",
        "Disbelief destroys the magic.",
        "Distance yourself from the vain.",
        "Do not be intimidated by the eloquence of others.",
        "Do not demand for someone’s soul if you already got their heart.",
        "Do not let ambitions overshadow small success.",
        "Do not make extra work for yourself.",
        "Do you know that the busiest person has the largest amount of time ?",
        "Don’t confuse recklessness with confidence.",
        "Don’t just spend time.Invest it.",
        "Don’t let friends impose on you, work calmly and silently.",
        "Don’t let the past and useless detail choke your existence.",
        "Don’t let your limitations overshadow your talents."
    ],
    "advice": [
        "A faithful friend is a strong defense.",
        "A feather in the hand is better than a bird in the air.",
        "A fresh start will put you on your way.",
        "A friend is a present you give yourself.",
        "A good friendship is often more important than a passionate romance.",
        "A good time to finish up old tasks.",
        "A hunch is creativity trying to tell you something.",
        "A light heart carries you through all the hard times.",
        "A new perspective will come with the new year.",
        "A person is never to old to learn.",
        "A short pencil is usually better than a long memory any day.",
        "A smile is your personal welcome mat.",
        "A truly rich life contains love and art in abundance.",
        "Accept something that you cannot change, and you will feel better.",
        "Adventure can be real happiness.",
        "Advice is like kissing.It costs nothing and is a pleasant thing to do.",
        "An acquaintance of the past will affect you in the near future.",
        "An inch of time is an inch of gold.",
        "Any decision you have to make tomorrow is a good decision.",
        "Beauty in its various forms appeals to you.",
        "Believe in yourself and others will too.",
        "Better ask twice than lose yourself once.",
        "Change is happening in your life, so go with the flow!",
        "Courtesy begins in the home.",
        "Courtesy is contagious.",
        "Curiosity kills boredom.Nothing can kill curiosity.",
        "Dedicate yourself with a calm mind to the task at hand.",
        "Do not underestimate yourself.Human beings have unlimited potentials.",
        "Don’t just think, act!",
        "Education is the ability to meet life’s situations.",
        "Emulate what you admire in your parents.",
        "Emulate what you respect in your friends."
    ]
}

function main() {
    // let vibe = Math.floor(

    // )
    let vibes = Object.keys(messages)
    let vibeChosen = Math.floor(
        Math.random() * vibes.length
    )
    let fortuneList = messages[vibes[vibeChosen]]
    let fortuneChosen = Math.floor(
        Math.random() * fortuneList.length
    )
    let fortuneMessage = fortuneList[fortuneChosen]

    console.log(fortuneMessage)
}

main()