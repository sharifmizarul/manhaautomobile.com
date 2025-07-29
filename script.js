// Car data
const cars = [
  {
    id: 1,
    name: "Toyota Prius PHV 2019",
    image: "cardetails-photos/ToyotaPrius2019red/car1.jpg",
    description: "Reliable and fuel-efficient sedan with modern features."
  },
  {
    id: 2,
    name: "Toyota Esquire 2019 Gi Premium",
    image: "cardetails-photos/GIP/car1.jpg",
    description: "Step into luxury with advanced features, spacious interiors, and a refined pearl white finish. Perfect for families or executive use.."
  },
  {
    id: 3,
    name: "Toyota Sienta G Cuero 2020",
    image: "cardetails-photos/tsienta/car1.jpg",
    description: "Comfort meets style in the 2020 Toyota Sienta G Cuero – where elegance, space, and smart design come together for every journey"
  },
  {
    id: 4,
    name: "Toyota Prius 2019 S Safety",
    image: "cardetails-photos/tprius/car1.jpg",
    description: "Drive smarter with the Toyota Prius 2019 S Safety — where style meets innovation."
  },
  {
    id: 5,
    name: "Toyota Aqua 2021 Z Package",
    image: "cardetails-photos/taqua/car1.jpg",
    description: "Elevate your drive with the 2021 Toyota Aqua Z Package – top-tier style, advanced features, and bold red attitude."
  },
  {
    id: 6,
    name: "Toyota Axio 2020",
    image: "cardetails-photos/taxio/car1.jpg",
    description: "Sleek, stylish, and smart."
  },
  {
    id: 7,
    name: "Toyota Prius 2020 (Incoming)",
    image: "cardetails-photos/tprius20/car1.jpg",
    description: "The 2020 Toyota Prius in elegant pearl."
  },
  {
    id: 8,
    name: "Toyota Corolla Cross 2022",
    image: "cardetails-photos/cc22p/car1.jpg",
    description: "The 2022 Toyota Corolla Cross in elegant pearl."
  },
   {
    id: 9,
    name: "Toyota Axio EX 2020 | Non Hybrid",
    image: "cardetails-photos/taxionon2020/car1.jpg",
    description: "The 2020 Toyota Axio in elegant White."
  },
   {
    id: 10,
    name: "Toyota Alphard Executive Lounge 2021",
    image: "cardetails-photos/alphard1/car1.jpg",
    description: "The 2021 Toyota Alphard Executive Lounge in elegant Pearl."
  },
    {
    id: 11,
    name: "Toyota Aqua 2020",
    image: "cardetails-photos/taqua2020/car1.jpg",
    description: "The 2020 Toyota Aqua in elegant Blue."
  },
     {
    id: 12,
    name: "Toyota Corolla Hybrid WXB 2020",
    image: "cardetails-photos/tcorolla/car1.jpg",
    description: "The 2020 Toyota Corolla in elegant Black."
  },
   {
    id: 13,
    name: "Toyota Prius 2020",
    image: "cardetails-photos/tprius3/car1.jpg",
    description: "The 2020 Toyota Prius in elegant Red Wine."
  },
   {
    id: 14,
    name: "Toyota Noah SI WXB 2021 (Incoming)",
    image: "cardetails-photos/tnoah/car1.jpg",
    description: "The 2021 Toyota Noah in elegant Mica Blue."
  }
];

// === Insert Cars Based on Page Type === //
const carList = document.getElementById('car-list');
if (carList) {
  const path = window.location.pathname.toLowerCase();

  let carsToShow = cars;

  if (path.includes("incoming")) {
    carsToShow = cars.filter(car => car.name.toLowerCase().includes("incoming"));
  } else if (path.includes("live-stock")) {
    carsToShow = cars.filter(car => !car.name.toLowerCase().includes("incoming"));
  }

  carsToShow.forEach(car => {
    const carDiv = document.createElement('div');
    carDiv.classList.add('car-item');
    carDiv.innerHTML = `
      <img src="${car.image}" alt="${car.name}" loading="lazy" />
      <h3>${car.name}</h3>
    `;
    carDiv.onclick = () => showCarDetails(car);
    carList.appendChild(carDiv);
  });
}

// === Show Car Details === //
function showCarDetails(car) {
  const detailDiv = document.getElementById('car-detail');
  const content = document.getElementById('car-detail-content');

  content.innerHTML = `
    <h2>${car.name}</h2>
    <img src="${car.image}" alt="${car.name}" style="width:100%; margin-top:1rem;" loading="lazy"/>
    <p style="margin-top:1rem;">${car.description}</p>
    <a href="car-details${car.id}.html" style="display:inline-block; margin-top:1rem; padding:0.5rem 1rem; background-color:#007BFF; color:white; text-decoration:none; border-radius:4px;">
      View Details
    </a>
  `;

  detailDiv.classList.remove('hidden');
  setTimeout(() => {
    detailDiv.style.opacity = 1;
  }, 10);
}

// === Close Car Details Modal === //
function closeDetails() {
  const detailDiv = document.getElementById('car-detail');
  detailDiv.style.opacity = 0;
  setTimeout(() => detailDiv.classList.add('hidden'), 300);
}

// === Toggle Mobile Menu === //
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

// === Auto-Collapse Mobile Nav on Link Click === //
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('show');
  });
});

// === Toggle Dropdown Menu === //
function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = event.target.closest('.dropdown');
  dropdown.classList.toggle('open');

  // Close other dropdowns
  document.querySelectorAll('.dropdown').forEach(item => {
    if (item !== dropdown) item.classList.remove('open');
  });
}

// === Close Dropdown When Clicking Outside === //
document.addEventListener('click', (e) => {
  const isDropdown = e.target.closest('.dropdown');
  if (!isDropdown) {
    document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
  }
});


