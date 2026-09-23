// Gadget data list
const gadgets = [
    {
        name: "Xiaomi Ai Glasses",
        image: "image/xiaomi-ai-glasses.jpg",
        price: "RM 1179.00",
        description: "Cip Snapdragon AR1, kamera 12 MP 2K, RAM 4GB, storan 32GB, bateri 8 jam."
    },
    {
        name: "VR Meta Quest 3",
        image: "image/vr-meta-quest-3.jpg",
        price: "RM 2514.00",
        description: "Paparan 2064×2208 px, RAM 8GB, XR2 Gen 2, bateri 2–3 jam."
    },
    {
        name: "Insta360 X4",
        image: "image/insta-360-x4.jpg",
        price: "RM 2499.00",
        description: "Rakam 8K, foto 72 MP, bateri 2290 mAh, kalis air 10m."
    },
    {
        name: "iPhone 17 Pro Max",
        image: "image/iphone-17-pro-max.jpg",
        price: "RM 9999.00",
        description: "Skrin 6.9″ OLED 120Hz, cip A19 Pro, RAM 12GB, storan hingga 2TB."
    }
];

// Render gadget cards
const gallery = $("#gallery");

gadgets.forEach((item, index) => {
    gallery.append(`
        <div class="col-6 col-md-3 mb-4">
            <div class="card gadget-card text-center p-2" data-index="${index}">
                <img src="${item.image}" class="img-fluid rounded mb-2 gadget-img"
                     alt="${item.name}" onerror="this.src='image/no-image.png'">
                <h6>${item.name}</h6>
                <p class="text-info">${item.price}</p>
                <button class="btn btn-sm btn-primary view-details" data-index="${index}">
                    View Details
                </button>
            </div>
        </div>
    `);
});

// Show modal details
$(document).on("click", ".view-details", function () {
    const index = $(this).data("index");
    const gadget = gadgets[index];

    $("#productModalLabel").text(gadget.name);
    $("#productImage").attr("src", gadget.image);
    $("#productDescription").text(gadget.description);
    $("#productPrice").text("Price: " + gadget.price);

    new bootstrap.Modal(document.getElementById("productModal")).show();
});

// Page Navigation
function showAbout() {
    $("#gallery-section").fadeOut(() => {
        $("#about-section").fadeIn();
    });
}

function showGallery() {
    $("#about-section").fadeOut(() => {
        $("#gallery-section").fadeIn();
    });
}
