import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
    console.log("Recieved post request in POST!");
	const { description } = await request.json();

	//const userid = cookies.get('userid');
	//const { id } = await database.createTodo({ userid, description });

	return json({ id }, { status: 201 });
}

export const actions = {
	upload: async ({ cookies, request }) => {
		const data = await request.formData();
        console.log("Recieved post in actions!")
		console.log(data.get('description'));
        return json({number: 9});
	}
};