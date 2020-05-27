export const CREATE_EVENT = "CREATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

export function createEvent(event_body) {
  return { type: CREATE_EVENT, payload: event_body };
}

export function deleteEvent(title) {
  return { type: DELETE_EVENT, payload: title };
}
