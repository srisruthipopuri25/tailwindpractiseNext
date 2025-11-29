import users from "../db.json";

export async function POST(request) {
    const { username, password } = await request.json();

    const userFound = users.find(
        (u) => u.username === username && u.password === password
    );

    if (userFound) {
        return Response.json({ success: true });
    }

    return Response.json({ "idotit": 'nott', success: false, status: 401 });
}
