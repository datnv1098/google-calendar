const axios = require("axios");
const { v4 } = require("uuid");

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

/**
 * GET EVENTS CALENDAR ID
 * @param access_token
 * @param calendarId
 * @return {Promise<>}
 */
const getEventsCalendar = async (access_token = '', calendarId = '') => {
    try {
        const res = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
        return res?.data
    } catch (e) {
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
    try {
        const res = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
        return res?.data
    } catch (e) {
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
    try {
        const res = await axios.post(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, event, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
        return res?.data
    } catch (e) {
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
    try {
        const res = await axios.put(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${event.id}`, event, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
        return res?.data
    } catch (e) {
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
    try {
        const res = await axios.delete(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
        return res?.data
    } catch (e) {
        return e
    }
}

/**
 * GET CALENDAR LIST
 * @param access_token
 * @return {Promise<>}
 */
const getCalendarList = async (access_token = '') => {
    try {
        const res = await axios.get(`https://www.googleapis.com/calendar/v3/users/me/calendarList`, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
        return res?.data
    } catch (e) {
        return e
    }
}


/**
 * GET CALENDAR BY ID
 * @param access_token
 * @param calendarId
 * @return {Promise<>}
 */
const getCalendarById = async (access_token = '', calendarId = '') => {
    try {
        const res = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}`, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
        return res?.data
    } catch (e) {
        return e
    }
}

/**
 * CREATE CALENDAR
 * @param access_token
 * @param calendar
 * @return {Promise<>}
 */
const createCalendar = async (access_token = '', calendar) => {
    try {
        const res = await axios.post(`https://www.googleapis.com/calendar/v3/calendars`, calendar, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
        return res?.data
    } catch (e) {
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
const updateCalendar = async (access_token = '', calendarId = '', calendar) => {
    try {
        const res = await axios.put(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}`, calendar, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
        return res?.data
    } catch (e) {
        return e
    }
}

/**
 * DELETE CALENDAR
 * @param access_token
 * @param calendarId
 * @return {Promise<>}
 */
const deleteCalendar = async (access_token = '', calendarId = '') => {
    try {
        const res = await axios.delete(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}`, {
            headers: {
                Authorization: "Bearer " + access_token
            }
        })
        return res?.data
    } catch (e) {
        return e
    }
}
module.exports = {
    getEventsCalendar,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
    getCalendarList,
    getCalendarById,
    createCalendar,
    updateCalendar,
    deleteCalendar,
    watchCalendar,
    watchCalendarList
}
