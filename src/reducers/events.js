import _ from 'lodash'
import {
READ_EVENTS,
<<<<<<< HEAD
READ_EVENT,
CREATE_EVENT,
UPDATE_EVENT,
=======
>>>>>>> e655a30f9d20615a80cc3294872046294834c742
DELETE_EVENT
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
<<<<<<< HEAD
=======
      console.log("IN REDUCER")
>>>>>>> e655a30f9d20615a80cc3294872046294834c742
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}
