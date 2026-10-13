function orderWhatsApp(productName, price) {
    const phoneNumber = "923000000000"; // Client ka WhatsApp number
    const message = `Hello Lenszora! I am interested in ordering: ${productName} (${price})`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function toggleSearch() {
    alert("Search feature active: Type lens shade or collection name!");
}

function toggleAuth() {
    alert("User account portal preview!");
}

function toggleCart() {
    alert("Cart feature active! Items added will show here.");
}