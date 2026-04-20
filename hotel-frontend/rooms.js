const apiUrl = "http://127.0.0.1:8080";

async function getRooms() {
    const res = await fetch(`${apiUrl}/rooms`);
    const rooms = await res.json();

    console.log(rooms)

    /*tömma listan innan vi fyller på den igen*/
    document.getElementById("booking-list").innerHTML += "";    

    for (const b of bookings) {
        document.getElementById("booking-list").innerHTML += `
            <li>${b.booking_id} - 
            ${b.start_date} -
            rum : ${b.room_number} -
            ${b.nights} nätter</li>
        `;
    }
}
getBookings();



async function getRooms() {
    const res = await fetch(`${apiUrl}/rooms`);
    const rooms = await res.json();

    console.log(rooms)

    for (const r of rooms) {
        document.getElementById("room-list").innerHTML += `
            <option value="${r.room_id}">${r.room_id} - 
            ${r.room_name} - 
            ${r.price} €
            </option>
        `;
    }
}
getRooms();

async function getGuests() {
    const res = await fetch(`${apiUrl}/guests`);
    const guests = await res.json();

    console.log(guests);

    for (const g of guests) {
        document.getElementById("guest-list").innerHTML += `
            <option value="${g.guest_id}">
            ${g.guest_first_name} -
            ${g.guest_last_name}
            </option>
        `;
    }
}
getGuests();

async function saveBooking() {

    const booking = { 
        room_id: document.getElementById("room-list").value,
        guest_id: document.getElementById("guest-list").value,
        start_date: document.getElementById("from-date").value,
        end_date: document.getElementById("to-date").value,
    }
    const res = await fetch(`${apiUrl}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking)
    });
    const data = await res.json();

    console.log(data);
    getBookings();
}

document.getElementById("btn-save").addEventListener("click", saveBooking);
