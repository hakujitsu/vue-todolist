import { UserId, IMessage, IUser } from '../types';


interface IMessages {
    lastUpdated?: Date;
    lookup: { [userId: string]: IMessage[] };
}


export const messages: IMessages = {
    lastUpdated: undefined,
    // This is the hack which allows force refreshing new properties
    lookup: {},
};

export function receiveMessage(msg: IMessage) {
    const userMsgs = messages.lookup[msg.sender] || [];
    userMsgs.push(msg);
    messages.lookup[msg.sender] = userMsgs;
    messages.lastUpdated = new Date();
}

export function sendMessage(msg: IMessage, to: UserId) {
    // Your solution here.

}



// Configuration of message frequency, interval and shape.

const MIN_TIME = 500;
const MAX_TIME = 8000;
const INITIAL_MESSAGE_COUNT = 30;


import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 4,
      min: 1,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
});


// DO NOT TOUCH, BASICALLY A FAKE SERVER.

import Axios from 'axios';
import _ from 'lodash';

const friends: IUser[] = [];
const ids: string[] = [];

Axios.get('/friends.json')
.then ( (resp) => {
    const data = resp.data as IUser[]; // How you declare the type of data that's sent to you.
    friends.push(...data);
    ids.push(...data.map( (x) => x.id ));

    // Initial data
    for (const i of _.range(INITIAL_MESSAGE_COUNT)) {
        const message = getRandomMessage();
        receiveMessage(message);
    }

    // Randomly add more messages.
    randomlyAddMessages();
});



function generateRandomInteger(max: number, min: number): number {
    return min + Math.floor( Math.random() * (max - min) );
}

function getRandomMessage() {
    const msg = lorem.generateParagraphs(1);
    const message: IMessage = {
        sender: _.sample(ids)!, // ! asserts that it will exist.
        msg,
    };
    return message;
}

function randomlyAddMessages() {
    const message = getRandomMessage();
    receiveMessage(message);

    const delay = generateRandomInteger(MAX_TIME, MIN_TIME);
    // Call this function again with a random delay.
    setTimeout(randomlyAddMessages, delay);
}


