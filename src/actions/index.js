export const CREATE_EVENT = "CREATE_EVENT";

export function createEvent(event_body) {
  console.log("actions", event_body);
  return { type: CREATE_EVENT, payload: event_body };
}
