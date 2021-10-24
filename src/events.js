import axios from "axios";

/**
 * GET EVENT
 * @param access_token
 * @param calendarId
 * @param eventId
 * @return {Promise<>}
 */
export const getEvent = async (access_token = '', calendarId = '', eventId) => {
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
export const createEvent = async (access_token = '', calendarId = '', event) => {
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
export const updateEvent = async (access_token = '', calendarId = '', event) => {
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
export const deleteEvent = async (access_token = '', calendarId = '', eventId) => {
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
