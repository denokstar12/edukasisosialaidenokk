const loginPage = document.getElementById("loginPage");
const mainPage = document.getElementById("mainPage");
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const result = document.getElementById("result");

// LOGIN
function login() {
    const username = document.getElementById("username").value;
    if (username === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }
    loginPage.classList.remove("active");
    mainPage.classList.add("active");
}

// LOGOUT
function logout() {
    mainPage.classList.remove("active");
    loginPage.classList.add("active");
    preview.hidden = true;
    imageInput.value = "";
    result.innerHTML = "";
}

// PREVIEW IMAGE
imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.hidden = false;
    }
});

// SIMULASI AI CLASSIFICATION
function classifyImage() {
    if (!imageInput.files[0]) {
        alert("Silakan unggah gambar terlebih dahulu!");
        return;
    }

    const data = [
        {
            label: "Lingkungan Bersih 🌿",
            desc: "Lingkungan sehat mendukung kehidupan sosial dan kualitas hidup."
        },
        {
            label: "Lingkungan Tercemar 🏭",
            desc: "Pencemaran berdampak pada kesehatan dan ekonomi masyarakat."
        },
        {
            label: "Sampah Plastik ♻️",
            desc: "Pengelolaan sampah penting untuk menjaga ekosistem."
        }
    ];

    const random = data[Math.floor(Math.random() * data.length)];

    result.innerHTML = `
        <strong>Hasil AI:</strong><br>
        ${random.label}<br><br>
        <em>${random.desc}</em>
    `;
}
