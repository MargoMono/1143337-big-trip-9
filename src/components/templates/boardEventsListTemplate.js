import {boardEventTemplate} from './boardEventTemplate.js';

const boardEventsListTemplate = () => {
  let eventsCount = 3;
  let boardEvents = ``;
  for (let i = 0; i < eventsCount; i++) {
    boardEvents += boardEventTemplate();
  }
  return boardEvents;
};

export {boardEventsListTemplate};
