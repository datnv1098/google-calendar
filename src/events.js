import axios from "axios";

/**
 * GET EVENTS CALENDAR ID
 * @param access_token
 * @param calendarId
 * @return {Promise<>}
 */
const getEventsCalendar = async (access_token = '', calendarId = '') => {
  try{
    const res = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
      headers: {
        Authorization: "Bearer " + access_token
      }
    })
    return res?.data
  }catch (e) {
    return e
  }
}

/**
 * GET EVENT
 * @param access_token
 * @param calendarId
 * @param eventId
 * @return {Promise<>}
 */
const getEventById = async (access_token = '', calendarId = '', eventId) => {
  try{
    const res = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`, {
      headers: {
        Authorization: "Bearer " + access_token
      }
    })
    return res?.data
  }catch (e) {
    return e
  }
}

/**
 * CREATE EVENT
 * @param access_token
 * @param calendarId
 * @param event
 * @return {Promise<>}
 */
const createEvent = async (access_token = '', calendarId = '', event) => {
  try{
    const res = await axios.post(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, event, {
      headers: {
        Authorization: "Bearer " + access_token
      }
    })
    return res?.data
  }catch (e) {
    return e
  }
}

/**
 * UPDATE EVENT
 * @param access_token
 * @param calendarId
 * @param event
 * @return {Promise<>}
 */
const updateEvent = async (access_token = '', calendarId = '', event) => {
  try{
    const res = await axios.put(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${event.id}`, event, {
      headers: {
        Authorization: "Bearer " + access_token
      }
    })
    return res?.data
  }catch (e) {
    return e
  }
}

/**
 * DELETE EVENT
 * @param access_token
 * @param calendarId
 * @param eventId
 * @return {Promise<>}
 */
const deleteEvent = async (access_token = '', calendarId = '', eventId) => {
  try{
    const res = await axios.delete(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`, {
      headers: {
        Authorization: "Bearer " + access_token
      }
    })
    return res?.data
  }catch (e) {
    return e
  }
}

module.exports = {
  getEventsCalendar,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
}
