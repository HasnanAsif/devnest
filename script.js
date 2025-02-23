// Toggle the visibility of a dropdown menu
const toggleDropdown = (dropdown, menu, isOpen) => {
    dropdown.classList.toggle("open", isOpen);
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
};

// Close all open dropdowns
const closeAllDropdowns = () => {
    document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
        toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
    });
};

// Attach click event to all dropdown toggles
document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
  
      const dropdown = dropdownToggle.closest(".dropdown-container");
      const menu = dropdown.querySelector(".dropdown-menu");
      const isOpen = dropdown.classList.contains("open");
  
      closeAllDropdowns(); // Close all open dropdowns
      toggleDropdown(dropdown, menu, !isOpen); // Toggle current dropdown visibility
    });
});

// Attach click event to sidebar toggle buttons
document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach((button) => {
    button.addEventListener("click", () => {
      closeAllDropdowns(); // Close all open dropdowns
      document.querySelector(".sidebar").classList.toggle("collapsed"); // Toggle collapsed class on sidebar
    });
});

// Collapse sidebar by default on small screens
if (window.innerWidth <= 1024) document.querySelector(".sidebar").classList.add("collapsed");


// random fact generator
const facts = [
    "The first computer network was ARPANET, created by the U.S. Department of Defense in 1969.",
    "The fastest internet speed ever recorded was 319 terabits per second, achieved by researchers in Japan.",
    "The average data packet on the internet travels at the speed of light, reaching destinations in milliseconds.",
    "The total length of undersea cables carrying internet traffic worldwide exceeds 1.2 million kilometers.",
    "More than 5 billion people use the internet today, making up nearly two-thirds of the world’s population.",
    "The Internet of Things (IoT) is expected to have more than 75 billion connected devices by 2025.",
    "The world’s first Wi-Fi hotspot was introduced in 1991 at a coffee shop in the U.S.",
    "The domain name system (DNS) translates over 330 billion requests each day.",
    "Google processes over 3.5 billion searches per day on the internet.",
    "A single Facebook user’s data traffic can exceed 100MB per day.",
    "The total number of IP addresses in IPv4 is about 4.3 billion, but IPv6 can support around 340 undecillion addresses.",
    "CEthernet, the most common LAN technology, was originally invented in 1973 by Xerox engineers.",
    "Each second, more than 1.7 million new devices connect to the internet.",
    "The first-ever email was sent by Ray Tomlinson to himself in 1971.",
    "The average person spends more than 6 hours per day online, according to global internet usage data.",
    "The majority of internet traffic is now encrypted, with HTTPS adoption rising to over 90%.",
    "3G networks cover about 87% of the world's population, while 4G covers around 85%.",
    "Data centers around the world use about 1% of the world’s total energy consumption.",
    "The total number of global Wi-Fi hotspots exceeds 500 million, far outpacing wired internet connections.",
    "Quantum computing could potentially break traditional encryption methods used in networking in the near future."
    
];
  
function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("htmlfact").textContent = facts[randomIndex];
}
  
// Show a fact immediately on page load
showRandomFact();

// Change the fact every 7 seconds
setInterval(showRandomFact, 7000);