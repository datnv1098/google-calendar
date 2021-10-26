import axios from "axios";

/**
 * GET CALENDAR LIST
 * @param access_token
 * @return {Promise<>}
 */
export const getCalendarList = async (access_token = '') => {
  try{
    const res = await axios.get(`https://www.googleapis.com/calendar/v3/users/me/calendarList`, {
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
 * GET CALENDAR BY ID
 * @param access_token
 * @param calendarId
 * @return {Promise<>}
 */
export const getCalendarById = async (access_token = '', calendarId = '') => {
  try{
    const res = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}`, {
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
 * CREATE CALENDAR
 * @param access_token
 * @param calendar
 * @return {Promise<>}
 */
export const createCalendar = async (access_token = '', calendar) => {
  try{
    const res = await axios.post(`https://www.googleapis.com/calendar/v3/calendars`, calendar, {
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
 * UPDATE CALENDAR
 * @param access_token
 * @param calendarId
 * @param calendar
 * @return {Promise<>}
 */
export const updateCalendar = async (access_token = '', calendarId = '', calendar) => {
  try{
    const res = await axios.put(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}`, calendar, {
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
 * DELETE CALENDAR
 * @param access_token
 * @param calendarId
 * @return {Promise<>}
 */
export const deleteCalendar = async (access_token = '', calendarId = '') => {
  try{
    const res = await axios.delete(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}`, {
      headers: {
        Authorization: "Bearer " + access_token
      }
    })
    return res?.data
  }catch (e) {
    return e
  }
}
