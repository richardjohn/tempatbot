/**
 * TempaTBot v2.0
 * Next hype
 *
 * Requires irc module: npm install irc
 */

var config = {
    channels: ["#channel"],
    server: "irc.example.com",
    nick: "TempaTBot",
    realName: "Tempa T"
};

var irc = require("irc");

var TempaTBot = new irc.Client(config.server, config.nick, {
    userName: config.nick,
    channels: config.channels,
    realName: config.realName});

TempaTBot.randomPhrase = function() {
    var phrases = [
        "TEEEEEMPZ!",
        "NEXT HYPE!",
        "Yeah yeah yeah, I'm still about",
        "What kind of things that you have?",
        "Better hand over the bag, your boys don't wanna see you shot",
        "Catch man on the field flying his kite, run man down on the grass with a knife",
        "I said 'GET OUT THE CAR!'",
        "I said 'THIS AIN'T A PAR!'",
        "Sleeewwwww demmmm",
        "'09!"
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
}

TempaTBot.addListener("message#", function (nick, channel, text, message) {
    if (text.substring(text.length - 1) == '?') {
        TempaTBot.say(channel, "Are you fucking mad?!");
    } else if (text == "!clear") {
        TempaTBot.say(channel, "CLEAR! All the things in your house");
        TempaTBot.say(channel, "CLEAR! All the things in your fridge");
        TempaTBot.say(channel, "SMASH! All your plates from your rack");
        TempaTBot.say(channel, "CLEAR! All your kids' toys");
        TempaTBot.say(channel, "CLEAR! All your CD rack");
        TempaTBot.say(channel, "Won't get none of your CDs back!");
    } else if (text.search(/TV/i) > -1) {
        TempaTBot.action(channel, "kicks your HD TV off the stand");
    } else if (text.search(/TempaTBot|Tempa T|Tempz|par/i) > -1) {
        TempaTBot.say(channel, this.randomPhrase());
    }
});

TempaTBot.addListener("join", function(channel, nick) {
    TempaTBot.say(channel, this.randomPhrase());
});

TempaTBot.addListener("part", function(channel, nick, reason, message) {
    TempaTBot.say(channel, "PAR");
});

TempaTBot.addListener('error', function(message) {
    console.log('Error: ', message);
});


