// Data project untuk setiap pop-up
const projectData = {
    project1: {
        title: "Program Nilai Rata-Rata",
        image: "imgs/SCHT1-NILAI RATA RATA.png",
        description: "Program ini dibuat menggunakan Scratch untuk menghitung nilai rata-rata dari beberapa input nilai siswa.",
        features: [
            "Input nilai dari user menggunakan variabel",
            "Perhitungan otomatis menggunakan operator matematika",
            "Menampilkan hasil rata-rata dengan format yang rapi",
            "Validasi input untuk memastikan data yang dimasukkan benar"
        ],
        tech: "Scratch Block-Based Programming",
        learnings: "Dari project ini saya belajar tentang penggunaan variabel, operator matematika dasar, dan logika perhitungan rata-rata dalam programming."
    },
    project2: {
        title: "Program Cek Bilangan Prima",
        image: "imgs/SCHT2-NILAI BILANGAN PRIMA at BUKAN.png",
        description: "Program untuk mengecek apakah sebuah bilangan merupakan bilangan prima atau bukan menggunakan algoritma sederhana.",
        features: [
            "Input angka dari user",
            "Algoritma pengecekan bilangan prima",
            "Output hasil berupa 'Prima' atau 'Bukan Prima'",
            "Menggunakan loop dan conditional statements"
        ],
        tech: "Scratch Block-Based Programming",
        learnings: "Project ini mengajarkan saya tentang algoritma, penggunaan loop (perulangan), conditional logic, dan cara berpikir komputasional dalam memecahkan masalah matematika."
    }
};

// Ambil elemen modal
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementsByClassName('close')[0];

// Ambil semua button dengan class Pop-up
const popupButtons = document.querySelectorAll('.Pop-up');

// Event listener untuk setiap button
popupButtons.forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            // Isi modal dengan data project
            modalBody.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                
                <h3>🎯 Fitur Utama:</h3>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <h3>💻 Teknologi:</h3>
                <p>${project.tech}</p>
                
                <h3>📚 Yang Saya Pelajari:</h3>
                <p>${project.learnings}</p>
                
                <div class="modal-footer">
                    <p>⭐ Project ini dibuat sebagai bagian dari pembelajaran TIK di sekolah</p>
                </div>
            `;
            
            // Tampilkan modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
});

// Close modal saat klik tombol X
closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal saat klik di luar modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal dengan tombol ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});