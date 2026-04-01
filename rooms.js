const apiUrl = "http://127.0.0.1:8080";

async function getRooms() {
    const res = await fetch(`${apiUrl}/rooms`);
    const rooms = await res.json();

    console.log(rooms)

    for (room of rooms) {
        document.getElementById("room-list").innerHTML += `
            <li>${room.room_id} - ${room.room_name} - ${room.price} €</li>
        `;
    }
}
getRooms();