// // Menambahkan efek fade-in pada gambar saat halaman dimuat
// window.onload = function() {
//     const images = document.querySelectorAll('.home img, .about_photo img');
//     images.forEach((img) => {
//         img.style.opacity = 0; // Set opacity awal ke 0
//         img.style.transition = 'opacity 1s ease-in'; // Atur transisi
//         img.onload = () => {
//             img.style.opacity = 1; // Ubah opacity ke 1 setelah gambar dimuat
//         };
//     });
// };

// // Menambahkan animasi saat scroll
// const animateOnScroll = () => {
//     const elements = document.querySelectorAll('.animate-on-scroll');
//     const windowHeight = window.innerHeight;

//     elements.forEach((element) => {
//         const elementTop = element.getBoundingClientRect().top;

//         if (elementTop < windowHeight - 100) {
//             element.classList.add('fade-in'); // Tambahkan kelas untuk animasi
//         }
//     });
// };

// // Menambahkan event listener untuk scroll
// window.addEventListener('scroll', animateOnScroll);

// // Memanggil fungsi saat halaman dimuat
// document.addEventListener('DOMContentLoaded', animateOnScroll);



// ANIMATED
const container = document.querySelectorAll('.fade');

window.addEventListener('scroll',containerScroll);

containerScroll();

function containerScroll() {
    const trigger = window.innerHeight / 5 * 4 ;
    container.forEach((container, idx) => {
        const content = container.getBoundingClientRect().top;
        if(content < trigger) {
            container.classList.add('show');
        } else {
            container.classList.remove('show')
        }
    })
}