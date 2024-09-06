//includes the nav bar in all pages
document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);

           
            const currentPage = window.location.pathname.split('/').pop().toLowerCase().replace('.html', '');
            console.log('Current page:', currentPage);

            
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

            navLinks.forEach(link => {
                
                const linkPage = link.getAttribute('href').split('/').pop().toLowerCase().replace('.html', '');
                console.log('Link page:', linkPage);

                
                if (linkPage === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        })
        .catch(error => console.error('Error loading the navbar:', error));
});


// generate vacation cards
document.addEventListener('DOMContentLoaded', function () {
    const cardData = [
        // Page 1 data with images
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Moath Kalil", submittedOn: "5/3/2024", duration: "3 Weeks (10/4/2023 - 1/5/2023)", salary: "2000 AED", imgSrc: "material/Ronaldo.jpg" },
        { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", imgSrc: "material/Elon_Musk.jpg" },
    ];

    let currentPage = 1;
    const cardsPerPage = 12;

    function generateCards(page) {
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '';

        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        for (let i = start; i < end; i++) {
            if (cardData[i]) {
                const card = `
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="card vacation-card">
                            <img src="${cardData[i].imgSrc}" class="card-img-top rounded-circle mx-auto d-block mt-3" alt="${cardData[i].name} Imag">
                            <div class="card-body1 text-center">
                                <h5>${cardData[i].name}</h5>
                                    <p>Submitted on: <strong> ${cardData[i].submittedOn} </strong></p>
                                    <p>Duration: <strong>${cardData[i].duration}</strong></p>
                                    <p>Salary: <strong>${cardData[i].salary}</strong></p>
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-outline-success">Decline</button>
                                    <button class="btn btn-success">Approve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                cardContainer.innerHTML += card;
            }
        }
        const cards = document.querySelectorAll('.selectable-card');
    cards.forEach(card => {
        card.addEventListener('click', function (event) {
            if (!event.target.closest('.btn')) {
                this.classList.toggle('selected-card');
            }
        });
    });
    }

    function changePage(pageNum) {
        if (pageNum >= 1 && pageNum <= 3) {
            currentPage = pageNum;
            generateCards(currentPage);
        }
    }

    document.getElementById('page-1').addEventListener('click', function () {
        changePage(1);
    });

    document.getElementById('page-2').addEventListener('click', function () {
        changePage(2);
    });

    document.getElementById('page-3').addEventListener('click', function () {
        changePage(3);
    });

    document.getElementById('prev-page').addEventListener('click', function () {
        if (currentPage > 1) {
            changePage(currentPage - 1);
        }
    });

    document.getElementById('next-page').addEventListener('click', function () {
        if (currentPage < 3) {
            changePage(currentPage + 1);
        }
    });

   
    generateCards(currentPage);
});












