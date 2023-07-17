import { j as json } from "../../chunks/index.js";
async function POST({ request, cookies }) {
  console.log("Recieved post request in POST!");
  const { mtnName } = await request.json();
  console.log(mtnName);
  return json({ num: 12 }, { status: 201 });
}
export {
  POST
};
