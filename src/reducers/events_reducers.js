import { CREATE_EVENT } from "../actions";

export default function (
  state = [
    {
      title: "Lorem",
      date: "2020-05-17",
      category: "Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in arcu sit amet tortor faucibus dictum in rutrum mi. Ut mollis commodo faucibus. Suspendisse a rhoncus neque, nec ultrices mi. Nunc vestibulum quam eros, sed blandit orci sagittis id. Curabitur sed mi lectus. Integer in congue urna. Fusce eu lacinia erat. In vitae orci nisi. Ut tempor dapibus quam, ac aliquet nisl pharetra aliquet. Quisque lacinia, libero bibendum blandit vulputate, arcu libero sagittis mi, nec consectetur enim lectus quis magna. Etiam in tellus maximus, mollis odio nec, porttitor nisi. Integer dapibus vehicula tristique. Nunc venenatis fringilla lacus, quis laoreet nisi placerat a.",
    },
  ],
  action
) {
  switch (action.type) {
    case CREATE_EVENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
