import users from "../db.json";

export async function POST(request) {
    const { username, password } = await request.json();

    const userFound = users.find(
        (u) => u.username === username && u.password === password
    );

    if (userFound) {
        return Response.json({ success: true, id: userFound.id });
    }

    return Response.json({ "accessoken ": 'ddisudisodoiu8we82092oijoei3880293890', success: false, status: 401 });
}
