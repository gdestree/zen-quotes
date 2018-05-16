/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.33746a79-07da-4b63-baf0-6aa5f3695c7a';  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-US': {
        translation: {
            ZENS: [
                "A bird does not sing because it has an answer. It sings because it has a song.",
                "A book holds a house of gold.",
                "A book is like a garden carried in the pocket.",
                "A bit of fragrance clings to the hand that gives flowers.",
                "A filthy mouth will not utter decent language.",
                "A diamond with a flaw is worth more than a pebble without imperfections.",
                "A gem will be polished without carving and polishing, nor a man perfected without trials.",
                "Be not afraid of moving slowly, be afraid only of standing still.",
                "Deep doubts, deep wisdom; small doubts, little wisdom.",
                "When you drink the water, remember the spring.",
                "A thousand cups of wine do not suffice when true friends meet, but half a sentence is too much when there is no meeting of minds.",
                "If heaven made him, earth can find some use for him.",
                "Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime.",
                "Dig the well before you are thirsty.",
                "Each generation will reap what the former generation has sown.",
                "Do good, reap good; do evil, reap evil.",
                "If you don't want anyone to know, don't do it.",
                "Teachers open the door. You enter by yourself.",
                "Studying is like rowing upstream: no advance is to drop back.",
                "If you are patient in one moment of anger, you will escape a hundred days of sorrow.",
                "Walk as if you are kissing the Earth with your feet.",
                "Always now - just now - come into being. Always now - just now - give yourself to death. Practicing this is Zen practice.",
                "Flow with whatever may happen, and let your mind be free: Stay centered by accepting whatever you are doing. This is the ultimate.",
                "What we can change is our perceptions, which have the effect of changing everything.",
                "Worry is an addiction that interferes with compassion.",
                "What we think, we become.",
                "You can cheat an honest man but you can not make a fool out of him.",
                "Dream is the spark of passion; talent is the firework of its expression; perseverance, the sacred fire of its accomplishment.",
                "I'm a great believer in luck, and I find the harder I work the more I have of it.",
                "Genius is one percent inspiration and ninety-nine percent perspiration.",
                "Time isn't a commodity, something you pass around like cake. Time is the substance of life. When anyone asks you to give your time, they're really asking for a chunk of your life.",
                "Many people will walk in and out of your life, but only true friends will leave footprints in your heart.",
                "The wise adapt themselves to circumstances, as water molds itself to the pitcher.",
                "Better to light a candle than to curse the darkness.",
                "No man is free who is not master of himself.",
                "To talk much and arrive nowhere is the same as climbing a tree to catch a fish.",
                "Don't judge each day by the harvest you reap but by the seeds you plant.",
                "Keep your fears to yourself, but share your courage with others.",
                "...Not all those who wander are lost.",
                "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power. If you realize that you have enough, you are truly rich.",
                "Great things are done by a series of small things brought together.",
                "If you neglect your art for one day it will neglect you for two.",
                "You must be the change you want to see in the world.",
                "Following the Noble Path is like entering a dark room with a light in the hand; the darkness will all be cleared away, and the room will be filled with light.",
                "The only Zen you find on the tops of mountains is the Zen you bring up there.",
                "Some people live as though they are already dead. There are people moving around us who are consumed by their past, terrified of their future, and stuck in their anger and jealousy. They are not alive; they are just walking corpses.",
                "If you have time to be mindful, you have time to meditate.",
                "Sayings remain meaningless until they are embodied in habits.",
                "How bright and transparent the moonlight of wisdom.",
                "Zen is the vehicle of reality.",
                "In dwelling, be close to the land. In meditation, go deep in the heart.",
                "No fight: no blame.",
                "Nothing is softer or more flexible than water, yet nothing can resist it.",
                "One cannot reflect in streaming water. Only those who know internal peace can give it to others.",
                "The sage does not collect precious things. He does not hold on to ideas. He brings men back to what they have lost.",
                "To know and not to do is not yet to know.",
                "Who can wait quietly until the mud settles? Who can remain still until the moment of action?",
                "When you truly feel this equal love for all, when your heart has expanded so much that it embraces the whole of creation, you will certainly not feel like giving up this or that. You will simply drop off from secular life as a ripe fruit drops from the branch of a tree. You will feel that the whole world is your home.",
                "Rivers know this: there is no hurry. We shall get there some day.",
                "Zen has no gates. The purpose of Buddha's words is to enlighten others. Therefore Zen should be gateless. But, how does one pass through the gateless gate?",
                "If my heart can become pure and simple like that of a child, I think there probably can be no greater happiness than this.",
                "Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water.",
                "Don’t just do something, sit there.",
                "If something is boring after two minutes, try it for four: If still boring, try it for eight, sixteen, thirty-two, and so on. Eventually, one discovers that it is not boring but very interesting.",
                "It is through creating, not possessing, that life is revealed.",
                "In the beginner’s mind there are many possibilities, but in the expert’s mind there are few.",
                "The more one is absorbed in so-called philosophy, the greater one's delusion and blindness.",
                "Great knowledge is universal. Small knowledge is limited. Great words are inspiring; small words are chatter.",
                "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
                "The secret of health for both mind and body is not to mourn for the past, nor to worry about the future, but to live the present moment wisely and earnestly.",
                "Three things cannot be long hidden: the sun, the moon, and the truth.",
                "In the end these things matter most: How well did you love? How fully did you live? How deeply did you let go?",
                "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
                "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
                "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.",
                "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
                "If you truly loved yourself, you could never hurt another.",
                "Peace comes from within. Do not seek it without.",
                "There is nothing more dreadful than the habit of doubt. Doubt separates people. It is a poison that disintegrates friendships and breaks up pleasant relations. It is a thorn that irritates and hurts; it is a sword that kills.",
                "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
                "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
                "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
                "Let us rise up and be thankful, for if we didn’t learn a lot at least we learned a little, and if we didn’t learn a little, at least we didn’t get sick, and if we got sick, at least we didn’t die; so, let us all be thankful.",
                "To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.",
                "To enjoy good health, to bring true happiness to one’s family, to bring peace to all, one must first discipline and control one’s own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him.",
                "The mind is everything. What you think you become.",
                "Your purpose in life is to find your purpose and give your whole heart and soul to it",
                "You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You yourself, as much as anybody in the entire universe deserve your love and affection.",
                "Just as treasures are uncovered from the earth, so virtue appears from good deeds, and wisdom appears from a pure and peaceful mind. To walk safely through the maze of human life, one needs the light of wisdom and the guidance of virtue.",
                "When you dig a well, there’s no sign of water until you reach it, only rocks and dirt to move out of the way. You have removed enough; soon the pure water will flow.",
                "Whatever words we utter should be chosen with care for people will hear them and be influenced by them for good or ill.",
                "You only lose what you cling to.",
                "Your work is to discover your work and then with all your heart to give yourself to it.",
                "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.",
                "It is better to travel well than to arrive.",
                "Doubt everything. Find your own light.",
                "The whole secret of existence is to have no fear. Never fear what will become of you, depend on no one. Only the moment you reject all help are you freed.",
                "Every morning we are born again. What we do today is what matters most.",
                "A man is not called wise because he talks and talks again; but if he is peaceful, loving and fearless then he is in truth called wise.",
                "Better than a thousand hollow words, is one word that brings peace.",
                "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.",
                "Even death is not to be feared by one who has lived wisely.",
                "There is no fire like passion, there is no shark like hatred, there is no snare like folly, there is no torrent like greed.",
                "All wrong-doing arises because of mind. If mind is transformed can wrong-doing remain?",
                "Purity or impurity depends on oneself, No one can purify another.",
                "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
                "True love is born from understanding.",
                "To conquer oneself is a greater task than conquering others",
                "You will not be punished for your anger; you will be punished by your anger.",
                "There is no path to happiness: happiness is the path.",
                "If your compassion does not include yourself, it is incomplete.",
                "Pain is certain, suffering is optional.",
                "Long is the night to him who is awake; long is a mile to him who is tired; long is life to the foolish who do not know the true law.",
                "To understand everything is to forgive everything",
                "An idea that is developed and put into action is more important than an idea that exists only as an idea.",
                "When you realize how perfect everything is, you will tilt your head back and laugh at the sky",
                "Patience is key. Remember: A jug fills drop by drop.",
                "Teach this triple truth to all: A generous heart, kind speech, and a life of service and compassion are the things which renew humanity.",
                "Believe nothing, no matter where you read it, or who said it, no matter if I have said it, unless it agrees with your own reason and your own common sense.",
                "A dog is not considered a good dog because he is a good barker. A man is not considered a good man because he is a good talker.",
                "Have compassion for all beings, rich and poor alike; each has their suffering. Some suffer too much, others too little.",
                "Work out your own salvation. Do not depend on others.",
                "Every human being is the author of his own health or disease.",
                "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true.",
                "If we could see the miracle of a single flower clearly, our whole life would change.",
                "The darkest night is ignorance",
                "I never see what has been done, I only see what remains to be done.",
                "Happiness will never come to those who fail to appreciate what they already have,",
                "There is no shame in falling down, there is only shame in not getting up.",
                "Love and compassion are necessities, not luxuries. Without them humanity cannot survive.",
                "He is able who thinks he is able.",
                "All that we are is the result of what we have thought.",
                "If the problem can be solved why worry? If the problem cannot be solved worrying will do you no good.",
                "We all have to live together, so we might as well live together happily.",
                "I have always had this view about the modern education system: We pay attention to brain development, but the development of warmheartedness, we take for granted.",
                "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
                "Happiness is not something ready-made. It comes from your own actions.",
                "As you walk and eat and travel, be where you are. Otherwise you will miss most of your life.",
                "No matter how hard the past, you can always begin again.",
                "When watching after yourself, you watch after others. When watching after others, you watch after yourself.",
                "Whoever doesn’t flare up at someone who’s angry wins a battle hard to win.",
                "Choose to be optimistic, it feels better.",
                "The true hero is one who conquers his own anger and hatred.",
                "We will be more successful in all our endeavors if we can let go of the habit of running all the time, and take little pauses to relax and re-center ourselves. And we’ll also have a lot more joy in living.",
                "Failure teaches a man how to succeed.",
                "You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You, yourself, as much as anybody in the entire universe, deserve your love and affection.",
                "With realization of one’s own potential and self confidence in one’s ability, one can build a better world.",
                "We have more possibilities available in each moment than we realize.",
                "In every trial, let understanding fight for you.",
                "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act.",
                "Even if things don’t unfold the way you expected, don’t be disheartened or give up. One who continues to advance will win in the end.",
                "Impermanence is a principle of harmony. When we don’t struggle against it, we are in harmony with reality.",
                "Life is expressed in a perpetual sequence of changes. The birth of the child is the death of the baby, just as the birth of the adolescent is the death of the child.",
                "Someone else’s action should not determine your response.",
                "Happiness doesn’t always come from a pursuit. Sometimes it comes when we least expect it.",
                "Breath is the bridge which connects life to consciousness, which unites your body to your thoughts.",
                "Some people and events are difficult to deal with, but they can only stress us if we let them. Breathe in calm, breathe out chaos, and anchor yourself in peace.",
                "The basic root of happiness lies in our minds; outer circumstances are nothing more than adverse or favourable.",
                "There is no way to happiness. Happiness is the way.",
                "There is no glory for a lazy person, however good looking.",
                "Each morning we are born again. What we do today is what matters most.",
                "If it comes, let it. If it goes, let it."
            ],
            SKILL_NAME: 'Zen Quotes',
            GET_ZEN_MESSAGE: "Here's your zen quote: ",
            HELP_MESSAGE: 'You can say tell me a zen quote, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye from Zen Quotes!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetZen');
    },
    'GetNewZenIntent': function () {
        this.emit('GetZen');
    },
    'GetZen': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const zenArr = this.t('ZENS');
        const zenIndex = Math.floor(Math.random() * zenArr.length);
        const randomZen = zenArr[zenIndex];

        // Create speech output
        const speechOutput = this.t('GET_ZEN_MESSAGE') + randomZen;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomZen);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
