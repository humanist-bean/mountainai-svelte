import { json } from '@sveltejs/kit';

// NOTE ON SVELTEKIT API CALLS
// It looks like +page.server.js defines <form> actions
// while +server.js is for defining POST calls generally,
// but neither can do both.


export async function POST({ request, cookies }) {
    console.log("Recieved post request in POST!");
	const { mtnName } = await request.json();
	console.log(mtnName);

	//const userid = cookies.get('userid');
	//const { id } = await database.createTodo({ userid, description });

	return json({ num: 12 }, { status: 201 });
}
