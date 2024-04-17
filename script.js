/*-----------Affirmations------------*/
//definitions gotten from : https://www.allure.com/story/what-are-angel-numbers
const angelNumbers = {111:'111 is an angel number. One is a powerful manifestation figure. If you encounter one as an angel number (either within a set of three, four, or within a pattern), relish the opportunity to make a wish, set an intention, or plant a seed, as this is believed to indicate a "greenlight" from the universe. You are working with extraordinary support from your angels, guides, or ancestors, so — at that moment — the present and future are dynamically connected. ',
                      222: "222 is an angel number. Two suggests balance, trust, and alignment. Experiencing two in a sequence (either within a set of three, four, or within a pattern) could mean that someone — either in the physical realm or spiritual domain — is helping you get where you need to go. Seeing twos could indicate that it's an excellent time to reach out to your most trusted companion to see if divine collaboration is possible.",
                      333: "333 is an angel number. Three is an indication of magnetic creativity. Noticing three as an angel number (either within a set of three, four, or within a pattern) could mean that you have the opportunity to add your unique talents and abilities to a situation. Moreover, the presence of three indicates that by leaning into your innate gifts, you'll find more value and abundance in whatever circumstances you are navigating. Your artistic expression is critical!",
                      444: "444 is an angel number. Four symbolizes stabilization. Observing four as an angel number (either within a set of three, four, or within a pattern) suggests that you are in the process of grounding, rooting, and cultivating an infrastructure that's truly built to last. When interacting with four, don't be afraid to ask for help or assistance, especially if you're navigating long-term projects that require specific expertise. Fundamentally, this is about establishing trust that will empower you to reach new heights.",
                      555: "555 is an angel number. The presence of five suggests that major changes could be on the horizon. If you've been feeling stuck, stifled, or inspired, observing five as an angel number (either within a set of three, four, or within a pattern) reveals that massive shifts might be in the works. For now, these transformations may be occurring behind-the-scenes — in other words, key decision-makers are still weighing options — but five appear as an angel number suggests you’re on the right path. ",
                      666: "666 is an angel number. Although some may fear six (especially in a triplet) because of religious associations with the Devil or demon figures, within angel numbers, six (either within a set of three, four, or within a pattern) has a supportive, compassionate, and empathetic nature. Six can be a gentle, much-needed reminder to treat yourself with kindness and understanding. Sure, things may not always go according to plan, but with angel number six on your side, you know that you can choose how you want to interpret a situation, remembering that everything happens for a reason.",
                      777: "777 is an angel number. Seven is as lucky in angel numbers as it is at the casino! Experiencing seven as an angel number (either within a set of three, four, or within a pattern) means that good fortune — especially finance-wise — could be on the way. New monetary opportunities may arise, so seven invites you to branch out and explore possibilities beyond your comfort zone. Short-term gigs may become lucrative, consistent income streams, so integrating your spirituality with your values is the perfect expression of this energy.", 
                      888: "888 is an angel number. One of the most divine numbers in numerology is eight, and observing this digit as an angel number (either within a set of three, four, or within a pattern) could reflect a connection to the spiritual universe in a powerful way. Those who believe in an afterlife may see eights as a sign that they're receiving supernatural support from loved ones who've crossed on.  Fundamentally, eight is the symbol of infinity — the endless loop that transcends any singular lifetime — so don't be afraid to dive into your intuition when this angel number appears. ", 
                      999: "999 is an angel number. As the final digit in numerology, the presence of nine suggests a chapter may be coming to an end. Witnessing nine as an angel number (either within a set of three, four, or within a pattern) is sign that a meaningful cycle could come to a close, and you'll soon be beginning a brand new journey. Likewise, this is an excellent time to step outside your comfort zone, expand your horizons, and explore new territory. Whether you're interested in venturing into a new career or going back to school, the spiritual universe will be sure to support your courageous choices."};

/*------------Clock-------------*/
let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    sec.innerHTML = seconds;

    const minutes = now.getMinutes();
    min.innerHTML = minutes;

    const hours = now.getHours()%12 || 12;
    hrs.innerHTML = hours;

    const minHour = parseInt(hours.toString() + minutes.toString());
    console.log(minHour);
    
    if(minHour in angelNumbers){
        text.innerHTML = angelNumbers[minHour];
    }

}
setInterval(setDate, 1000);





