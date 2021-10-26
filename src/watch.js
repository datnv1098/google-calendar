const axios = require("axios");
const {v4} = require("uuid");

/**
 * watchCalendar
 * @param access_token
 * @param address{'example: https://domain/googleCalendarWatch'}
 * @param email
 * @return {Promise<unknown>}
 */
const watchCalendar = async (access_token, address, email) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
    const response = await axios.post(`https://www.googleapis.com/calendar/v3/calendars/${email}/events/watch`, {
      "id": v4(),
      "type": "web_hook",
      "address": address,
    }, config);
    return response.data
  } catch (e) {
    console.log("new watch error", e?.message)
    return e
  }
}

/**
 * watchCalendarList
 * @param access_token
 * @param address{'example: https://domain/googleCalendarWatchList'}
 * @return {Promise<unknown>}
 */
const watchCalendarList = async (access_token, address) => {
  try {
    const response = await axios.post(`https://www.googleapis.com/calendar/v3/users/me/calendarList/watch`, {
      "id": v4(),
      "type": "web_hook",
      "address": address,
    }, {
      headers: {
        Authorization: "Bearer " + access_token
      }
    });
    return response.data
  } catch (e) {
    return e
  }
}

module.exports = {
  watchCalendar,
  watchCalendarList
}
