# google-calendar

> calendar google api

[![NPM](https://img.shields.io/npm/v/google-calendar.svg)](https://www.npmjs.com/package/google-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save google-calendar-clf
```

## Usage
### Watch Calendar
```jsx
const {watchCalendar} = require('google-calendar-clf')

const result = await watchCalendar(access_token, address, email)
```

- Response successful:
  - 200 OK status code
  - Response:
  ```jsx
  {
    "kind": "api#channel",
    "id": "01234567-89ab-cdef-0123456789ab",
    "resourceId": "o3hgv1538sdjfh",
    "resourceUri": "https://www.googleapis.com/calendar/v3/calendars/my_calendar@gmail.com/events",
    "token": "target=myApp-myCalendarChannelDest",
    "expiration": 1426325213000,
    }
  ```
[Document google watch calendar](https://developers.google.com/calendar/api/v3/reference/events/watch)

### Watch Calendar List
```jsx
const {watchCalendar} = require('google-calendar-clf')

const result = await watchCalendarList(access_token, address)
```

- Response successful:
  - 200 OK status code
  - Response:
  ```jsx
  {
      "kind": "api#channel",
      "id": string,
      "resourceId": string,
      "resourceUri": string,
      "token": string,
      "expiration": number
  }
  ```
[Document google watch calendar list](https://developers.google.com/calendar/api/v3/reference/calendarList/watch)

### CRUD and GET events
```jsx
    const {
      getEventsCalendar,
      getEventById,
      createEvent,
      updateEvent,
      deleteEvent
    } = require('google-calendar-clf')

    const eventsCalendar = await getEventsCalendar(access_token, calendarId)
    const event = await getEventById(access_token, calendarId, eventId)
    const newEvent = await createEvent(access_token, calendarId, eventData)
    const eventUpdate = await updateEvent(access_token, calendarId, eventData)
    const deleteEvt = await deleteEvent(access_token, calendarId, eventId)
```
[Document google events](https://developers.google.com/calendar/api/v3/reference/events)

### CRUD and GET Calendars
```jsx
    const {
      getCalendarList,
      getCalendarById,
      createCalendar,
      updateCalendar,
      deleteCalendar
    } = require('google-calendar-clf')

    const listCals = await getCalendarList(access_token)
    const calById = await getCalendarById(access_token, calendarId)
    const newCal = await createCalendar(access_token, calendarData)
    const calUpdate = await updateCalendar(access_token, calendarId, calendarData)
    const deleteCal = await deleteCalendar(access_token, calendarId)
```
[Document google calendars](https://developers.google.com/calendar/api/v3/reference/calendars)

## License

MIT © [datnv1098](https://github.com/datnv1098) [Clasfunc](https://classfunc.com/)
