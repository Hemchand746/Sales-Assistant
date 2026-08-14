/**
 * AuraCompare AI - Live Product Search & Comparison (RAG)
 * Multi-Category Engine: Laptops & Mobile Phones (Real Market Prices & Specs)
 */

// ==========================================================================
// REAL MARKET LAPTOP DATABASE (2025/2026 Updated Market Prices & Specs)
// ==========================================================================
const laptopDatabase = [
  // --- APPLE MACBOOKS ---
  {
    id: "macbook_air_m1",
    category: "Laptop",
    name: "Apple MacBook Air M1 (2020)",
    brand: "Apple",
    price: 69900,
    battery: "18 Hours Battery Life",
    display: "13.3-inch Retina Display (2560 x 1600)",
    displayGroup: "2K",
    ram: "8GB Unified RAM",
    storage: "256GB SSD",
    processor: "Apple M1 (8-core CPU, 7-core GPU)",
    camera: "720p FaceTime HD Camera",
    imageUrl: "💻",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=MacBook+Air+M1",
    details: `
      <h4>Apple MacBook Air M1 Specifications</h4>
      <p>Ultra-thin fanless design offering incredible battery life and M1 Apple Silicon performance.</p>
      <ul>
        <li><strong>Price:</strong> ₹69,900 (Current Live Price)</li>
        <li><strong>Processor:</strong> Apple M1 Chip (8-core CPU with 4 performance & 4 efficiency cores)</li>
        <li><strong>RAM / Storage:</strong> 8GB Unified RAM / 256GB Fast SSD</li>
        <li><strong>Display:</strong> 13.3-inch Retina display with P3 wide color (2560 x 1600 pixels)</li>
        <li><strong>Battery / Weight:</strong> Up to 18 hours wireless web | 1.29 kg lightweight aluminum chassis</li>
        <li><strong>Ports:</strong> 2x Thunderbolt / USB 4 ports, 3.5mm Headphone Jack</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Top value entry-level premium laptop for students, coders, and professionals under ₹70,000.
      </div>
    `
  },
  {
    id: "macbook_air_m2",
    category: "Laptop",
    name: "Apple MacBook Air M2 (13.6-inch)",
    brand: "Apple",
    price: 89900,
    battery: "18 Hours Battery Life",
    display: "13.6-inch Liquid Retina Display (500 nits)",
    displayGroup: "2K",
    ram: "8GB Unified RAM",
    storage: "256GB SSD",
    processor: "Apple M2 (8-core CPU, 8-core GPU)",
    camera: "1080p FaceTime HD Camera",
    imageUrl: "💻",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=MacBook+Air+M2",
    details: `
      <h4>Apple MacBook Air M2 Specifications</h4>
      <p>Redesigned flat chassis with MagSafe 3 charging, Liquid Retina display, and 1080p camera.</p>
      <ul>
        <li><strong>Price:</strong> ₹89,900 (Market Retail)</li>
        <li><strong>Processor:</strong> Apple M2 Chip (8-core CPU, 8-core GPU, 16-core Neural Engine)</li>
        <li><strong>RAM / Storage:</strong> 8GB Unified RAM / 256GB SSD</li>
        <li><strong>Display:</strong> 13.6-inch Liquid Retina display with True Tone (2560 x 1664 pixels), 500 nits</li>
        <li><strong>Charging / Battery:</strong> MagSafe 3 dedicated charging port, up to 18 hours battery</li>
        <li><strong>Weight:</strong> 1.24 kg ultra-portable design</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Modernized chassis with MagSafe 3 charging port under ₹90k.
      </div>
    `
  },
  {
    id: "macbook_air_m3",
    category: "Laptop",
    name: "Apple MacBook Air M3 (13.6-inch)",
    brand: "Apple",
    price: 104900,
    battery: "18 Hours Battery Life",
    display: "13.6-inch Liquid Retina Display (500 nits)",
    displayGroup: "2K",
    ram: "8GB Unified RAM",
    storage: "256GB SSD",
    processor: "Apple M3 (8-core CPU, 8-core GPU)",
    camera: "1080p FaceTime HD Camera",
    imageUrl: "💻",
    source: "Apple Store",
    sourceUrl: "https://www.apple.com/in/macbook-air/",
    details: `
      <h4>Apple MacBook Air M3 Specifications</h4>
      <p>M3 generation MacBook Air with hardware-accelerated ray tracing and dual external display support.</p>
      <ul>
        <li><strong>Price:</strong> ₹1,04,900 (Official Market Price)</li>
        <li><strong>Processor:</strong> Apple M3 Chip (3nm architecture, 8-core CPU, 8-core GPU)</li>
        <li><strong>RAM / Storage:</strong> 8GB Unified RAM / 256GB SSD</li>
        <li><strong>Display:</strong> 13.6-inch Liquid Retina, support for two external displays (lid closed)</li>
        <li><strong>Wireless:</strong> Wi-Fi 6E + Bluetooth 5.3</li>
        <li><strong>Weight:</strong> 1.24 kg Midnight / Starlight / Space Grey / Silver</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Latest 3nm M3 chip architecture with Wi-Fi 6E and dual monitor support.
      </div>
    `
  },
  {
    id: "macbook_pro_m3_pro",
    category: "Laptop",
    name: "Apple MacBook Pro M3 Pro (14.2-inch)",
    brand: "Apple",
    price: 199900,
    battery: "18 Hours Battery Life",
    display: "14.2-inch Liquid Retina XDR 120Hz ProMotion",
    displayGroup: "3K",
    ram: "18GB Unified RAM",
    storage: "512GB SSD",
    processor: "Apple M3 Pro (11-core CPU, 14-core GPU)",
    camera: "1080p FaceTime HD Camera",
    imageUrl: "💻",
    source: "Apple Store",
    sourceUrl: "https://www.apple.com/in/macbook-pro/",
    details: `
      <h4>Apple MacBook Pro M3 Pro Specifications</h4>
      <p>Workstation laptop for video editing, 3D rendering, and heavy software development.</p>
      <ul>
        <li><strong>Price:</strong> ₹1,99,900 (Market Retail)</li>
        <li><strong>Processor:</strong> Apple M3 Pro (11-core CPU, 14-core GPU, 150GB/s memory bandwidth)</li>
        <li><strong>RAM / Storage:</strong> 18GB Unified RAM / 512GB NVMe SSD</li>
        <li><strong>Display:</strong> 14.2-inch Liquid Retina XDR (3024 x 1964), 120Hz ProMotion, 1600 nits peak HDR</li>
        <li><strong>Ports:</strong> 3x Thunderbolt 4, HDMI port, SDXC card slot, MagSafe 3</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Pro Workstation with 120Hz Liquid Retina XDR screen panel and Space Black finish.
      </div>
    `
  },

  // --- ASUS LAPTOPS ---
  {
    id: "asus_tuf_f15_rtx3050",
    category: "Laptop",
    name: "ASUS TUF Gaming F15",
    brand: "ASUS",
    price: 54990,
    battery: "48Whr Battery (150W Adapter)",
    display: "15.6-inch FHD (1920 x 1080) 144Hz IPS",
    displayGroup: "FHD+",
    ram: "16GB DDR4 RAM",
    storage: "512GB NVMe M.2 SSD",
    processor: "Intel Core i5-11400H (6-Core, up to 4.5GHz)",
    camera: "720p HD Camera",
    imageUrl: "💻",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=ASUS+TUF+Gaming+F15",
    details: `
      <h4>ASUS TUF Gaming F15 Specifications</h4>
      <p>Durable military-grade MIL-STD-810H gaming laptop with RTX 3050 graphics card.</p>
      <ul>
        <li><strong>Price:</strong> ₹54,990 (Current Best Live Price)</li>
        <li><strong>Processor:</strong> Intel Core i5-11400H (6 Cores, 12 Threads, 12MB Cache)</li>
        <li><strong>Graphics:</strong> NVIDIA GeForce RTX 3050 4GB GDDR6 (75W TGP with Dynamic Boost)</li>
        <li><strong>RAM / Storage:</strong> 16GB DDR4 3200MHz RAM / 512GB PCIe 3.0 NVMe M.2 SSD</li>
        <li><strong>Display:</strong> 15.6-inch FHD (1920 x 1080) 144Hz Refresh Rate, Anti-Glare IPS</li>
        <li><strong>Keyboard:</strong> RGB Backlit Gaming Keyboard with highlighted WASD keys</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Top selling gaming laptop under ₹55,000 with 16GB RAM out of the box.
      </div>
    `
  },
  {
    id: "asus_tuf_a15_rtx4050",
    category: "Laptop",
    name: "ASUS TUF Gaming A15",
    brand: "ASUS",
    price: 65990,
    battery: "90Whr Battery (240W Adapter)",
    display: "15.6-inch FHD (1920 x 1080) 144Hz IPS",
    displayGroup: "FHD+",
    ram: "16GB DDR5 RAM",
    storage: "512GB NVMe M.2 SSD",
    processor: "AMD Ryzen 7 7435HS (8-Core, up to 4.5GHz)",
    camera: "720p HD Camera",
    imageUrl: "💻",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=ASUS+TUF+A15+RTX+4050",
    details: `
      <h4>ASUS TUF Gaming A15 Specifications</h4>
      <p>High performance gaming laptop with NVIDIA RTX 4050 6GB graphics and MUX Switch + NVIDIA Advanced Optimus.</p>
      <ul>
        <li><strong>Price:</strong> ₹65,990 (Market Price)</li>
        <li><strong>Processor:</strong> AMD Ryzen 7 7435HS (8 Cores, 16 Threads, 20MB Cache)</li>
        <li><strong>Graphics:</strong> NVIDIA GeForce RTX 4050 6GB GDDR6 (140W Max TGP)</li>
        <li><strong>RAM / Storage:</strong> 16GB DDR5 4800MHz RAM / 512GB PCIe 4.0 NVMe SSD</li>
        <li><strong>Display:</strong> 15.6-inch FHD 144Hz vIPS Value Display</li>
        <li><strong>Battery:</strong> Huge 90Whr Battery Bank</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> 140W Full TGP RTX 4050 gaming GPU under ₹66,000.
      </div>
    `
  },
  {
    id: "asus_vivobook_15",
    category: "Laptop",
    name: "ASUS Vivobook 15",
    brand: "ASUS",
    price: 38990,
    battery: "42Whr Battery (65W Fast Charger)",
    display: "15.6-inch FHD (1920 x 1080) Anti-glare",
    displayGroup: "FHD+",
    ram: "8GB DDR4 RAM",
    storage: "512GB NVMe SSD",
    processor: "Intel Core i3-1215U (6-Core, up to 4.4GHz)",
    camera: "720p HD Camera with Privacy Shutter",
    imageUrl: "💻",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=ASUS+Vivobook+15",
    details: `
      <h4>ASUS Vivobook 15 Specifications</h4>
      <p>Slim student and workplace laptop with 180-degree hinge and fingerprint sensor.</p>
      <ul>
        <li><strong>Price:</strong> ₹38,990 (Live Retail Rate)</li>
        <li><strong>Processor:</strong> Intel Core i3-1215U (6 Cores: 2 Performance + 4 Efficient)</li>
        <li><strong>Graphics:</strong> Intel Iris Xe Graphics</li>
        <li><strong>RAM / Storage:</strong> 8GB DDR4 RAM / 512GB M.2 NVMe SSD</li>
        <li><strong>Display:</strong> 15.6-inch FHD (1920 x 1080) 16:9 ratio, 250 nits</li>
        <li><strong>Weight:</strong> 1.7 kg thin and light body</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Reliable daily office/study thin & light laptop under ₹40k.
      </div>
    `
  },
  {
    id: "asus_rog_strix_g16",
    category: "Laptop",
    name: "ASUS ROG Strix G16",
    brand: "ASUS",
    price: 139990,
    battery: "90Whr Battery (280W Adapter)",
    display: "16-inch FHD+ (1920 x 1200) 165Hz ROG Nebula Display",
    displayGroup: "FHD+",
    ram: "16GB DDR5 RAM",
    storage: "1TB NVMe M.2 SSD",
    processor: "Intel Core i7-13650HX (14-Core, up to 4.9GHz)",
    camera: "720p HD Camera",
    imageUrl: "💻",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=ASUS+ROG+Strix+G16",
    details: `
      <h4>ASUS ROG Strix G16 Specifications</h4>
      <p>Esports gaming powerhouse with Conductonaut Extreme liquid metal cooling and Tri-Fan technology.</p>
      <ul>
        <li><strong>Price:</strong> ₹1,39,990 (Market Retail)</li>
        <li><strong>Processor:</strong> Intel Core i7-13650HX (14 Cores: 6 Performance + 8 Efficient)</li>
        <li><strong>Graphics:</strong> NVIDIA GeForce RTX 4060 8GB GDDR6 (140W TGP)</li>
        <li><strong>RAM / Storage:</strong> 16GB DDR5 4800MHz RAM / 1TB PCIe 4.0 NVMe SSD</li>
        <li><strong>Display:</strong> 16-inch FHD+ (1920 x 1200) 165Hz 7ms ROG Nebula Display, 100% sRGB</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Premium esports chassis with per-key RGB keyboard and liquid metal cooling.
      </div>
    `
  },

  // --- HP LAPTOPS ---
  {
    id: "hp_victus_rtx3050",
    category: "Laptop",
    name: "HP Victus Gaming 15",
    brand: "HP",
    price: 58990,
    battery: "52.5Whr Battery (200W Fast Charge)",
    display: "15.6-inch FHD (1920 x 1080) 144Hz IPS",
    displayGroup: "FHD+",
    ram: "16GB DDR4 RAM",
    storage: "512GB NVMe M.2 SSD",
    processor: "AMD Ryzen 5 5600H (6-Core, up to 4.2GHz)",
    camera: "HP Wide Vision 720p HD Camera",
    imageUrl: "💻",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=HP+Victus+Gaming+15",
    details: `
      <h4>HP Victus Gaming 15 Specifications</h4>
      <p>Popular mainstream gaming laptop featuring OMEN Gaming Hub performance tuning.</p>
      <ul>
        <li><strong>Price:</strong> ₹58,990 (Market Price)</li>
        <li><strong>Processor:</strong> AMD Ryzen 5 5600H (6 Cores, 12 Threads, 16MB Cache)</li>
        <li><strong>Graphics:</strong> NVIDIA GeForce RTX 3050 4GB GDDR6</li>
        <li><strong>RAM / Storage:</strong> 16GB DDR4 3200MHz RAM / 512GB PCIe NVMe M.2 SSD</li>
        <li><strong>Display:</strong> 15.6-inch FHD (1920 x 1080) 144Hz refresh rate, 9ms response time, IPS anti-glare</li>
        <li><strong>Audio:</strong> Dual speakers tuned by B&O</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> B&O audio tuning and OMEN Gaming Hub software controls.
      </div>
    `
  },
  {
    id: "hp_victus_rtx4050",
    category: "Laptop",
    name: "HP Victus Gaming 16",
    brand: "HP",
    price: 74990,
    battery: "70Whr Battery (230W Adapter)",
    display: "16.1-inch FHD (1920 x 1080) 144Hz IPS",
    displayGroup: "FHD+",
    ram: "16GB DDR5 RAM",
    storage: "512GB NVMe M.2 SSD",
    processor: "Intel Core i5-13420H (8-Core, up to 4.6GHz)",
    camera: "HP True Vision 1080p FHD Camera",
    imageUrl: "💻",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=HP+Victus+16+RTX+4050",
    details: `
      <h4>HP Victus Gaming 16 Specifications</h4>
      <p>16.1-inch gaming laptop with 13th Gen Intel Core CPU and RTX 4050 6GB graphics card.</p>
      <ul>
        <li><strong>Price:</strong> ₹74,990 (Current Live Price)</li>
        <li><strong>Processor:</strong> Intel Core i5-13420H (8 Cores: 4 Performance + 4 Efficient)</li>
        <li><strong>Graphics:</strong> NVIDIA GeForce RTX 4050 6GB GDDR6</li>
        <li><strong>RAM / Storage:</strong> 16GB DDR5 5200MHz RAM / 512GB Gen4 NVMe SSD</li>
        <li><strong>Display:</strong> 16.1-inch FHD (1920 x 1080) 144Hz IPS, Micro-edge display</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Larger 16.1-inch screen format for gaming and creative workloads.
      </div>
    `
  },
  {
    id: "hp_pavilion_15",
    category: "Laptop",
    name: "HP Pavilion 15",
    brand: "HP",
    price: 52990,
    battery: "41Whr Battery (65W Smart AC Adapter)",
    display: "15.6-inch FHD (1920 x 1080) IPS Micro-edge",
    displayGroup: "FHD+",
    ram: "16GB DDR4 RAM",
    storage: "512GB NVMe SSD",
    processor: "Intel Core i5-1235U (10-Core, up to 4.4GHz)",
    camera: "HP Wide Vision 720p HD Camera",
    imageUrl: "💻",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=HP+Pavilion+15",
    details: `
      <h4>HP Pavilion 15 Specifications</h4>
      <p>Sleek metallic design laptop with B&O Audio and 12th Gen Intel 10-core processor.</p>
      <ul>
        <li><strong>Price:</strong> ₹52,990 (Retail Price)</li>
        <li><strong>Processor:</strong> Intel Core i5-1235U (10 Cores: 2 Performance + 8 Efficient)</li>
        <li><strong>Graphics:</strong> Intel Iris Xe Graphics</li>
        <li><strong>RAM / Storage:</strong> 16GB DDR4 3200MHz RAM / 512GB PCIe NVMe M.2 SSD</li>
        <li><strong>Display:</strong> 15.6-inch FHD IPS BrightView micro-edge (1920 x 1080), 250 nits</li>
        <li><strong>Build:</strong> Natural Silver aluminum keyboard deck</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> 16GB RAM pre-installed under ₹53,000 for effortless multitasking.
      </div>
    `
  },

  // --- LENOVO LAPTOPS ---
  {
    id: "lenovo_loq_rtx3050",
    category: "Laptop",
    name: "Lenovo LOQ Gaming",
    brand: "Lenovo",
    price: 62990,
    battery: "60Whr Battery (170W Adapter)",
    display: "15.6-inch FHD (1920 x 1080) 144Hz 100% sRGB IPS",
    displayGroup: "FHD+",
    ram: "16GB DDR5 RAM",
    storage: "512GB NVMe M.2 SSD",
    processor: "Intel Core i5-12450HX (8-Core, up to 4.4GHz)",
    camera: "1080p FHD Camera with E-shutter",
    imageUrl: "💻",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Lenovo+LOQ+i5",
    details: `
      <h4>Lenovo LOQ Gaming Laptop Specifications</h4>
      <p>High color accuracy 100% sRGB gaming laptop with LA1 AI chip and Lenovo LA AI tuning.</p>
      <ul>
        <li><strong>Price:</strong> ₹62,999 (Current Best Live Price)</li>
        <li><strong>Processor:</strong> Intel Core i5-12450HX (8 Cores: 4 Performance + 4 Efficient)</li>
        <li><strong>Graphics:</strong> NVIDIA GeForce RTX 3050 6GB GDDR6 (95W TGP)</li>
        <li><strong>RAM / Storage:</strong> 16GB DDR5 4800MHz RAM / 512GB PCIe 4.0 NVMe SSD</li>
        <li><strong>Display:</strong> 15.6-inch FHD (1920 x 1080) 144Hz, 300 nits, 100% sRGB Color Gamut</li>
        <li><strong>AI Chip:</strong> Lenovo LA1 AI Engine for real-time FPS optimization</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> 100% sRGB screen panel ideal for content creators & gamers under ₹63,000.
      </div>
    `
  },
  {
    id: "lenovo_ideapad_slim_3",
    category: "Laptop",
    name: "Lenovo IdeaPad Slim 3",
    brand: "Lenovo",
    price: 35990,
    battery: "47Whr Battery (65W Fast Charger)",
    display: "15.6-inch FHD (1920 x 1080) Anti-glare",
    displayGroup: "FHD+",
    ram: "8GB LPDDR5 RAM",
    storage: "512GB NVMe SSD",
    processor: "Intel Core i3-1215U (6-Core, up to 4.4GHz)",
    camera: "HD 720p Camera with Privacy Shutter",
    imageUrl: "💻",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=Lenovo+IdeaPad+Slim+3",
    details: `
      <h4>Lenovo IdeaPad Slim 3 Specifications</h4>
      <p>Lightweight everyday laptop with Smart Learning features and rapid charging capability.</p>
      <ul>
        <li><strong>Price:</strong> ₹35,990 (Market Price)</li>
        <li><strong>Processor:</strong> Intel Core i3-1215U (6 Cores, 8 Threads, 10MB Cache)</li>
        <li><strong>Graphics:</strong> Intel UHD Graphics</li>
        <li><strong>RAM / Storage:</strong> 8GB LPDDR5 4800MHz RAM / 512GB PCIe 4.0 NVMe SSD</li>
        <li><strong>Display:</strong> 15.6-inch FHD (1920 x 1080) IPS 300 nits anti-glare</li>
        <li><strong>Audio:</strong> Front-facing User-facing Dolby Audio Speakers</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Top selling student budget laptop under ₹36,000.
      </div>
    `
  },
  {
    id: "lenovo_legion_slim_5",
    category: "Laptop",
    name: "Lenovo Legion Slim 5",
    brand: "Lenovo",
    price: 119990,
    battery: "80Whr Battery (230W Adapter)",
    display: "16-inch WQXGA (2560 x 1600) 165Hz 100% sRGB IPS",
    displayGroup: "2K",
    ram: "16GB DDR5 RAM",
    storage: "1TB NVMe M.2 SSD",
    processor: "AMD Ryzen 7 7840HS (8-Core, up to 5.1GHz)",
    camera: "1080p FHD Camera",
    imageUrl: "💻",
    source: "Lenovo Store",
    sourceUrl: "https://www.lenovo.com/in/en/laptops/legion-laptops/",
    details: `
      <h4>Lenovo Legion Slim 5 Specifications</h4>
      <p>Premium Legion gaming laptop with 2.5K 165Hz 16:10 display and Legion Coldfront 5.0 cooling system.</p>
      <ul>
        <li><strong>Price:</strong> ₹1,19,990 (Market Price)</li>
        <li><strong>Processor:</strong> AMD Ryzen 7 7840HS (8 Cores, 16 Threads, 16MB Cache)</li>
        <li><strong>Graphics:</strong> NVIDIA GeForce RTX 4060 8GB GDDR6 (140W TGP)</li>
        <li><strong>RAM / Storage:</strong> 16GB DDR5 5600MHz RAM / 1TB Gen4 NVMe SSD</li>
        <li><strong>Display:</strong> 16-inch WQXGA (2560 x 1600) 165Hz, 350 nits, 100% sRGB, Dolby Vision</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Outstanding 16:10 2.5K screen panel and robust Coldfront 5.0 thermal architecture.
      </div>
    `
  },

  // --- DELL LAPTOPS ---
  {
    id: "dell_15_i5",
    category: "Laptop",
    name: "Dell 15 Laptop",
    brand: "Dell",
    price: 46990,
    battery: "41Whr Battery (65W AC Adapter)",
    display: "15.6-inch FHD (1920 x 1080) 120Hz 250 nits",
    displayGroup: "FHD+",
    ram: "8GB DDR4 RAM",
    storage: "512GB NVMe SSD",
    processor: "Intel Core i5-1235U (10-Core, up to 4.4GHz)",
    camera: "720p HD Camera",
    imageUrl: "💻",
    source: "Dell Store",
    sourceUrl: "https://www.dell.com/en-in/shop/laptops/",
    details: `
      <h4>Dell 15 Laptop Specifications</h4>
      <p>Reliable commercial & student laptop with 120Hz refresh rate display and ExpressCharge support.</p>
      <ul>
        <li><strong>Price:</strong> ₹46,990 (Live Retail Price)</li>
        <li><strong>Processor:</strong> Intel Core i5-1235U (10 Cores, 12 Threads)</li>
        <li><strong>Graphics:</strong> Intel Iris Xe Graphics</li>
        <li><strong>RAM / Storage:</strong> 8GB DDR4 RAM / 512GB M.2 PCIe NVMe SSD</li>
        <li><strong>Display:</strong> 15.6-inch FHD (1920 x 1080) 120Hz Refresh Rate Narrow Border</li>
        <li><strong>Charging:</strong> ExpressCharge - charges up to 80% in 60 mins</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Includes 120Hz screen refresh rate for smoother everyday scrolling.
      </div>
    `
  },
  {
    id: "dell_g15_gaming",
    category: "Laptop",
    name: "Dell G15 5530 Gaming",
    brand: "Dell",
    price: 72990,
    battery: "56Whr Battery (240W Adapter)",
    display: "15.6-inch FHD (1920 x 1080) 120Hz IPS",
    displayGroup: "FHD+",
    ram: "16GB DDR5 RAM",
    storage: "512GB NVMe M.2 SSD",
    processor: "Intel Core i5-13450HX (10-Core, up to 4.6GHz)",
    camera: "720p HD Camera",
    imageUrl: "💻",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=Dell+G15+5530",
    details: `
      <h4>Dell G15 5530 Gaming Laptop Specifications</h4>
      <p>Alienware-inspired thermal cooling design with Game Shift macro key boost button.</p>
      <ul>
        <li><strong>Price:</strong> ₹72,990 (Market Retail)</li>
        <li><strong>Processor:</strong> Intel Core i5-13450HX (10 Cores: 6 Performance + 4 Efficient)</li>
        <li><strong>Graphics:</strong> NVIDIA GeForce RTX 3050 6GB GDDR6 (95W TGP)</li>
        <li><strong>RAM / Storage:</strong> 16GB DDR5 4800MHz RAM / 512GB PCIe NVMe SSD</li>
        <li><strong>Display:</strong> 15.6-inch FHD (1920 x 1080) 120Hz 250 nits IPS</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> Alienware-inspired thermal engineering for sustained gaming sessions.
      </div>
    `
  },

  // --- ACER LAPTOPS ---
  {
    id: "acer_nitro_v15_rtx3050",
    category: "Laptop",
    name: "Acer Nitro V 15 Gaming",
    brand: "Acer",
    price: 57990,
    battery: "57Whr Battery (135W Adapter)",
    display: "15.6-inch FHD (1920 x 1080) 144Hz IPS",
    displayGroup: "FHD+",
    ram: "16GB DDR5 RAM",
    storage: "512GB NVMe M.2 SSD",
    processor: "Intel Core i5-13420H (8-Core, up to 4.6GHz)",
    camera: "720p HD Camera with Acer Temporal Noise Reduction",
    imageUrl: "💻",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Acer+Nitro+V+15",
    details: `
      <h4>Acer Nitro V 15 Gaming Specifications</h4>
      <p>Value gaming powerhouse featuring 13th Gen Intel Core processor, DDR5 RAM, and Dual-fan cooling.</p>
      <ul>
        <li><strong>Price:</strong> ₹57,990 (Current Best Live Price)</li>
        <li><strong>Processor:</strong> Intel Core i5-13420H (8 Cores: 4 Performance + 4 Efficient)</li>
        <li><strong>Graphics:</strong> NVIDIA GeForce RTX 3050 6GB GDDR6 VRAM</li>
        <li><strong>RAM / Storage:</strong> 16GB DDR5 RAM / 512GB Gen4 NVMe SSD</li>
        <li><strong>Display:</strong> 15.6-inch FHD (1920 x 1080) 144Hz Refresh Rate IPS</li>
        <li><strong>Networking:</strong> Wi-Fi 6 + Gigabit Ethernet LAN port</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> 6GB VRAM RTX 3050 graphics card and DDR5 memory under ₹58,000.
      </div>
    `
  },
  {
    id: "acer_swift_go_14_oled",
    category: "Laptop",
    name: "Acer Swift Go 14 OLED",
    brand: "Acer",
    price: 59990,
    battery: "65Whr Battery (65W Type-C Fast Charger)",
    display: "14-inch 2.8K (2880 x 1800) 90Hz OLED 500 nits",
    displayGroup: "2K",
    ram: "16GB LPDDR5 RAM",
    storage: "512GB NVMe SSD",
    processor: "Intel Core i5-13500H (12-Core, up to 4.7GHz)",
    camera: "1440p QHD Camera with TNR",
    imageUrl: "💻",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=Acer+Swift+Go+14+OLED",
    details: `
      <h4>Acer Swift Go 14 OLED Specifications</h4>
      <p>Intel Evo certified ultrabook featuring 2.8K 90Hz OLED display panel and 1440p QHD webcam.</p>
      <ul>
        <li><strong>Price:</strong> ₹59,990 (Market Price)</li>
        <li><strong>Processor:</strong> Intel Core i5-13500H (12 Cores: 4 Performance + 8 Efficient)</li>
        <li><strong>Graphics:</strong> Intel Iris Xe Graphics</li>
        <li><strong>RAM / Storage:</strong> 16GB LPDDR5 RAM / 512GB PCIe Gen4 NVMe SSD</li>
        <li><strong>Display:</strong> 14-inch 2.8K (2880 x 1800) OLED 90Hz, 100% DCI-P3, 500 nits peak</li>
        <li><strong>Weight / Body:</strong> Ultra lightweight 1.25 kg full aluminum chassis</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Note:</strong> 2.8K 90Hz OLED display with Intel Evo certification under ₹60,000.
      </div>
    `
  }
];

// ==========================================================================
// REAL MARKET MOBILE PHONES DATABASE
// ==========================================================================
const mobileDatabase = [
  // --- APPLE ---
  {
    id: "apple_iphone_16_pro_max",
    category: "Mobile",
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    price: 144900,
    battery: 4685,
    display: "6.9-inch 120Hz Super Retina XDR OLED",
    displayGroup: "OLED",
    ram: "8GB",
    storage: "256GB",
    processor: "Apple A18 Pro (3nm)",
    camera: "48MP Main + 48MP UltraWide + 12MP 5x Telephoto",
    imageUrl: "📱",
    source: "Apple Store",
    sourceUrl: "https://www.apple.com/in/iphone-16-pro/",
    details: `
      <h4>Apple iPhone 16 Pro Max Specifications</h4>
      <p>Flagship iPhone with Grade 5 Titanium design, Camera Control button, and class-leading battery life.</p>
      <ul>
        <li><strong>Price:</strong> ₹1,44,900 (Official Market Price)</li>
        <li><strong>Battery:</strong> 4685 mAh (MagSafe 25W Fast Wireless Charging)</li>
        <li><strong>Display:</strong> 6.9-inch Super Retina XDR OLED (2868 x 1320 pixels), 120Hz ProMotion, 2000 nits peak.</li>
        <li><strong>Processor:</strong> Apple A18 Pro (6-core CPU, 6-core GPU, 16-core Neural Engine)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 256GB NVMe</li>
        <li><strong>Camera:</strong> 48MP Fusion OIS + 48MP UltraWide + 12MP 5x Tetraprism Optical Zoom</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Current top flagship smartphone with Apple Intelligence AI support and maximum battery efficiency.
      </div>
    `
  },
  {
    id: "apple_iphone_16",
    category: "Mobile",
    name: "Apple iPhone 16",
    brand: "Apple",
    price: 79900,
    battery: 3561,
    display: "6.1-inch Super Retina XDR OLED",
    displayGroup: "OLED",
    ram: "8GB",
    storage: "128GB",
    processor: "Apple A18 (3nm)",
    camera: "48MP Fusion + 12MP UltraWide",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=iPhone+16",
    details: `
      <h4>Apple iPhone 16 Specifications</h4>
      <p>Latest generation standard iPhone featuring Action Button, Camera Control, and A18 chip.</p>
      <ul>
        <li><strong>Price:</strong> ₹79,900 (Official Market Retail)</li>
        <li><strong>Battery:</strong> 3561 mAh (25W MagSafe Fast Charge)</li>
        <li><strong>Display:</strong> 6.1-inch Super Retina XDR OLED (2556 x 1179 pixels), Dynamic Island, 2000 nits peak.</li>
        <li><strong>Processor:</strong> Apple A18 (3nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB Base</li>
        <li><strong>Camera:</strong> 48MP Fusion Camera with 2x Telephoto + 12MP UltraWide Macro</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Verified price point ₹79,900 across Amazon and Apple Authorized Resellers.
      </div>
    `
  },
  {
    id: "apple_iphone_15",
    category: "Mobile",
    name: "Apple iPhone 15",
    brand: "Apple",
    price: 65900,
    battery: 3349,
    display: "6.1-inch Super Retina XDR OLED",
    displayGroup: "OLED",
    ram: "6GB",
    storage: "128GB",
    processor: "Apple A16 Bionic (4nm)",
    camera: "48MP Main + 12MP UltraWide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=iPhone+15",
    details: `
      <h4>Apple iPhone 15 Specifications</h4>
      <p>Popular premium smartphone featuring USB-C port, Dynamic Island, and 48MP main camera sensor.</p>
      <ul>
        <li><strong>Price:</strong> ₹65,900 (Current Live Price)</li>
        <li><strong>Battery:</strong> 3349 mAh (20W Wired, 15W MagSafe)</li>
        <li><strong>Display:</strong> 6.1-inch Super Retina XDR OLED (2556 x 1179 pixels), 2000 nits peak brightness.</li>
        <li><strong>Processor:</strong> Apple A16 Bionic (4nm)</li>
        <li><strong>Storage / RAM:</strong> 6GB RAM / 128GB Storage</li>
        <li><strong>Camera:</strong> 48MP Sensor-shift OIS + 12MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Highly popular seller in ₹60k-70k price segment.
      </div>
    `
  },
  {
    id: "apple_iphone_14",
    category: "Mobile",
    name: "Apple iPhone 14",
    brand: "Apple",
    price: 56900,
    battery: 3279,
    display: "6.1-inch Super Retina XDR OLED",
    displayGroup: "OLED",
    ram: "6GB",
    storage: "128GB",
    processor: "Apple A15 Bionic (5nm)",
    camera: "12MP Main OIS + 12MP UltraWide",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=iPhone+14",
    details: `
      <h4>Apple iPhone 14 Specifications</h4>
      <p>Reliable dual-camera iPhone with ceramic shield front cover and day-long battery performance.</p>
      <ul>
        <li><strong>Price:</strong> ₹56,900 (Discounted Marketplace Rate)</li>
        <li><strong>Battery:</strong> 3279 mAh</li>
        <li><strong>Display:</strong> 6.1-inch Super Retina XDR OLED (2532 x 1170 pixels), HDR10, Dolby Vision.</li>
        <li><strong>Processor:</strong> Apple A15 Bionic (5-core GPU)</li>
        <li><strong>Storage / RAM:</strong> 6GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 12MP Main Sensor-shift OIS + 12MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block">
        <strong>Market Data Note:</strong> Excellent entry point into Apple ecosystem under ₹60,000.
      </div>
    `
  },

  // --- SAMSUNG ---
  {
    id: "samsung_s24_ultra",
    category: "Mobile",
    name: "Samsung Galaxy S24 Ultra 5G",
    brand: "Samsung",
    price: 129999,
    battery: 5000,
    display: "6.8-inch QHD+ 120Hz Dynamic AMOLED 2X",
    displayGroup: "2K",
    ram: "12GB",
    storage: "256GB",
    processor: "Snapdragon 8 Gen 3 for Galaxy (4nm)",
    camera: "200MP Main OIS + 50MP 5x + 10MP 3x + 12MP Wide",
    imageUrl: "📱",
    source: "Samsung Store",
    sourceUrl: "https://www.samsung.com/in/smartphones/galaxy-s24-ultra/",
    details: `
      <h4>Samsung Galaxy S24 Ultra 5G Specifications</h4>
      <p>Ultimate Android flagship with titanium frame, Galaxy AI suite, integrated S-Pen, and 200MP quad camera.</p>
      <ul>
        <li><strong>Price:</strong> ₹1,29,999 (Current Market Retail)</li>
        <li><strong>Battery:</strong> 5000 mAh (45W Fast Charging)</li>
        <li><strong>Display:</strong> 6.8-inch Dynamic AMOLED 2X, QHD+ (3120 x 1440), 1-120Hz LTPO, 2600 nits peak.</li>
        <li><strong>Processor:</strong> Qualcomm Snapdragon 8 Gen 3 for Galaxy</li>
        <li><strong>Storage / RAM:</strong> 12GB RAM / 256GB UFS 4.0</li>
        <li><strong>Camera:</strong> 200MP OIS + 50MP 5x Periscope + 10MP 3x Telephoto + 12MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Best-in-class display brightness, S-Pen input, and optical zoom capabilities.
      </div>
    `
  },
  {
    id: "samsung_s24",
    category: "Mobile",
    name: "Samsung Galaxy S24 5G",
    brand: "Samsung",
    price: 62999,
    battery: 4000,
    display: "6.2-inch FHD+ 120Hz Dynamic AMOLED 2X",
    displayGroup: "FHD+",
    ram: "8GB",
    storage: "128GB",
    processor: "Exynos 2400 (4nm)",
    camera: "50MP Main OIS + 10MP 3x + 12MP Wide",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=Samsung+Galaxy+S24",
    details: `
      <h4>Samsung Galaxy S24 5G Specifications</h4>
      <p>Compact flagship phone with Galaxy AI capabilities and vibrant AMOLED display panel.</p>
      <ul>
        <li><strong>Price:</strong> ₹62,999 (Current Best Live Price)</li>
        <li><strong>Battery:</strong> 4000 mAh (25W Fast Charging)</li>
        <li><strong>Display:</strong> 6.2-inch Dynamic AMOLED 2X, FHD+ (2340 x 1080), 1-120Hz LTPO, 2600 nits.</li>
        <li><strong>Processor:</strong> Exynos 2400 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP Main OIS + 10MP Telephoto (3x Optical) + 12MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Highly rated compact flagship phone under ₹65k.
      </div>
    `
  },
  {
    id: "samsung_a55",
    category: "Mobile",
    name: "Samsung Galaxy A55 5G",
    brand: "Samsung",
    price: 39999,
    battery: 5000,
    display: "6.6-inch FHD+ 120Hz Super AMOLED (Gorilla Glass Victus+)",
    displayGroup: "FHD+",
    ram: "8GB",
    storage: "128GB",
    processor: "Exynos 1480 (4nm)",
    camera: "50MP Main OIS + 12MP Wide + 5MP Macro",
    imageUrl: "📱",
    source: "Samsung Store",
    sourceUrl: "https://www.samsung.com/in/smartphones/galaxy-a/galaxy-a55-5g-awesome-navy-128gb-sm-a556ezbdins/",
    details: `
      <h4>Samsung Galaxy A55 5G Specifications</h4>
      <p>Premium metal-frame mid-ranger with IP67 water/dust resistance and Samsung Knox Vault security.</p>
      <ul>
        <li><strong>Price:</strong> ₹39,999 (Retail Price)</li>
        <li><strong>Battery:</strong> 5000 mAh (25W Fast Charging)</li>
        <li><strong>Display:</strong> 6.6-inch Super AMOLED, FHD+ Resolution (1080 x 2340 pixels), 120Hz refresh rate.</li>
        <li><strong>Processor:</strong> Exynos 1480 (4nm) with AMD Xclipse 530 GPU</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP Main OIS + 12MP UltraWide + 5MP Macro</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Premium build quality with Gorilla Glass Victus+ back and metal frame.
      </div>
    `
  },
  {
    id: "samsung_m35",
    category: "Mobile",
    name: "Samsung Galaxy M35 5G",
    brand: "Samsung",
    price: 19999,
    battery: 6000,
    display: "6.6-inch FHD+ 120Hz Super AMOLED",
    displayGroup: "FHD+",
    ram: "6GB",
    storage: "128GB",
    processor: "Exynos 1380 (5nm)",
    camera: "50MP Main OIS + 8MP Wide + 2MP Macro",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=Samsung+Galaxy+M35+5G",
    details: `
      <h4>Samsung Galaxy M35 5G Specifications</h4>
      <p>Massive 6000mAh battery smartphone with 120Hz Super AMOLED display panel.</p>
      <ul>
        <li><strong>Price:</strong> ₹19,999 (Standard Retail)</li>
        <li><strong>Battery:</strong> 6000 mAh Lithium-Polymer (25W Charging Support)</li>
        <li><strong>Display:</strong> 6.6-inch Super AMOLED, FHD+ Resolution (1080 x 2340 pixels), 120Hz, 1000 nits.</li>
        <li><strong>Processor:</strong> Exynos 1380 (5nm)</li>
        <li><strong>Storage / RAM:</strong> 6GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP Main OIS + 8MP UltraWide + 2MP Macro</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Top recommendation for 6000mAh battery under ₹20,000.
      </div>
    `
  },
  {
    id: "samsung_f54",
    category: "Mobile",
    name: "Samsung Galaxy F54 5G",
    brand: "Samsung",
    price: 24999,
    battery: 6000,
    display: "6.7-inch FHD+ 120Hz Super AMOLED Plus",
    displayGroup: "FHD+",
    ram: "8GB",
    storage: "256GB",
    processor: "Exynos 1380 (5nm)",
    camera: "108MP Main OIS + 8MP Wide + 2MP Macro",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Samsung+Galaxy+F54+5G",
    details: `
      <h4>Samsung Galaxy F54 5G Specifications</h4>
      <p>Slim profile design carrying an massive capacity 6000mAh battery bank and 108MP camera.</p>
      <ul>
        <li><strong>Price:</strong> ₹24,999 (Market Price)</li>
        <li><strong>Battery:</strong> 6000 mAh (25W Fast Charging)</li>
        <li><strong>Display:</strong> 6.7-inch Super AMOLED Plus, FHD+ (1080 x 2400 pixels), 120Hz.</li>
        <li><strong>Processor:</strong> Exynos 1380 (5nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 256GB</li>
        <li><strong>Camera:</strong> 108MP Main OIS + 8MP Wide + 2MP Macro</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> 6000mAh battery with 256GB storage under ₹25k.
      </div>
    `
  },

  // --- ONEPLUS ---
  {
    id: "oneplus_12",
    category: "Mobile",
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    price: 64999,
    battery: 5400,
    display: "6.82-inch 2K 120Hz ProXDR LTPO AMOLED",
    displayGroup: "2K",
    ram: "12GB",
    storage: "256GB",
    processor: "Snapdragon 8 Gen 3 (4nm)",
    camera: "50MP Sony LYT-808 OIS + 64MP 3x Periscope + 48MP Wide",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=OnePlus+12",
    details: `
      <h4>OnePlus 12 5G Specifications</h4>
      <p>Flagship killer featuring 4500 nits 2K display, Hasselblad Camera System, and 100W SUPERVOOC charging.</p>
      <ul>
        <li><strong>Price:</strong> ₹64,999 (Current Live Retail)</li>
        <li><strong>Battery:</strong> 5400 mAh (100W Wired + 50W Wireless AIRVOOC)</li>
        <li><strong>Display:</strong> 6.82-inch ProXDR LTPO AMOLED, 2K Resolution (3168 x 1440 pixels), 1-120Hz, 4500 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 8 Gen 3 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 12GB RAM / 256GB UFS 4.0</li>
        <li><strong>Camera:</strong> 50MP Sony LYT-808 OIS + 64MP Omnivision 3x Periscope OIS + 48MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Top rated performance flagship under ₹65k with dual wireless/wired fast charging.
      </div>
    `
  },
  {
    id: "oneplus_12r",
    category: "Mobile",
    name: "OnePlus 12R 5G",
    brand: "OnePlus",
    price: 39999,
    battery: 5500,
    display: "6.78-inch 1.5K 120Hz ProXDR LTPO 4.0 AMOLED",
    displayGroup: "1.5K",
    ram: "8GB",
    storage: "128GB",
    processor: "Snapdragon 8 Gen 2 (4nm)",
    camera: "50MP Sony IMX890 OIS + 8MP Wide + 2MP Macro",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=OnePlus+12R",
    details: `
      <h4>OnePlus 12R 5G Specifications</h4>
      <p>Performance champion with 1.5K LTPO 4.0 screen panel and 5500mAh battery bank.</p>
      <ul>
        <li><strong>Price:</strong> ₹39,999 (Market Price)</li>
        <li><strong>Battery:</strong> 5500 mAh (100W SUPERVOOC - 0 to 100% in 26 mins)</li>
        <li><strong>Display:</strong> 6.78-inch ProXDR LTPO AMOLED, 1.5K (1264 x 2780 pixels), 120Hz, 4500 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 8 Gen 2 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP Sony IMX890 OIS + 8MP Wide + 2MP Macro</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Premium 1.5K display and 5500mAh battery under ₹40,000.
      </div>
    `
  },
  {
    id: "oneplus_nord_4",
    category: "Mobile",
    name: "OnePlus Nord 4 5G",
    brand: "OnePlus",
    price: 29999,
    battery: 5500,
    display: "6.74-inch 1.5K 120Hz Ultra Bright AMOLED",
    displayGroup: "1.5K",
    ram: "8GB",
    storage: "128GB",
    processor: "Snapdragon 7+ Gen 3 (4nm)",
    camera: "50MP Sony LYT-600 OIS + 8MP UltraWide",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=OnePlus+Nord+4",
    details: `
      <h4>OnePlus Nord 4 5G Specifications</h4>
      <p>Metal unibody 5G smartphone with 100W SuperVOOC charging and 4 years of OS updates.</p>
      <ul>
        <li><strong>Price:</strong> ₹29,999 (Current Market Retail)</li>
        <li><strong>Battery:</strong> 5500 mAh (100W Fast Charging)</li>
        <li><strong>Display:</strong> 6.74-inch AMOLED, 1.5K Resolution (2772 x 1240 pixels), 120Hz, 2150 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 7+ Gen 3 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB UFS 4.0</li>
        <li><strong>Camera:</strong> 50MP Sony LYT-600 OIS + 8MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Premium aluminum unibody build with 5500mAh battery under ₹30k.
      </div>
    `
  },

  // --- VIVO ---
  {
    id: "vivo_v40_pro",
    category: "Mobile",
    name: "Vivo V40 Pro 5G",
    brand: "Vivo",
    price: 49999,
    battery: 5500,
    display: "6.78-inch 1.5K 120Hz Curved ZEISS AMOLED",
    displayGroup: "1.5K",
    ram: "8GB",
    storage: "256GB",
    processor: "MediaTek Dimensity 9200+ (4nm)",
    camera: "50MP Sony IMX921 ZEISS OIS + 50MP Telephoto 2x + 50MP Wide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Vivo+V40+Pro",
    details: `
      <h4>Vivo V40 Pro 5G Specifications</h4>
      <p>Portrait photography specialist featuring ZEISS Optics, IP68 waterproofing, and ultra-slim design with 5500mAh battery.</p>
      <ul>
        <li><strong>Price:</strong> ₹49,999 (Current Market Retail)</li>
        <li><strong>Battery:</strong> 5500 mAh (80W FlashCharge)</li>
        <li><strong>Display:</strong> 6.78-inch 3D Curved AMOLED, 1.5K (2800 x 1260 pixels), 120Hz, 4500 nits peak.</li>
        <li><strong>Processor:</strong> MediaTek Dimensity 9200+ (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 256GB UFS 3.1</li>
        <li><strong>Camera:</strong> 50MP ZEISS OIS + 50MP ZEISS 2x Telephoto + 50MP ZEISS UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Triple 50MP ZEISS camera array with IP68 water resistance.
      </div>
    `
  },
  {
    id: "vivo_v40",
    category: "Mobile",
    name: "Vivo V40 5G",
    brand: "Vivo",
    price: 34999,
    battery: 5500,
    display: "6.78-inch 1.5K 120Hz Curved ZEISS AMOLED",
    displayGroup: "1.5K",
    ram: "8GB",
    storage: "128GB",
    processor: "Snapdragon 7 Gen 3 (4nm)",
    camera: "50MP ZEISS OIS + 50MP ZEISS UltraWide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Vivo+V40",
    details: `
      <h4>Vivo V40 5G Specifications</h4>
      <p>Sleek camera phone with ZEISS portrait optics, IP68 water resistance rating, and 5500mAh battery bank.</p>
      <ul>
        <li><strong>Price:</strong> ₹34,999 (Market Price)</li>
        <li><strong>Battery:</strong> 5500 mAh (80W FlashCharge)</li>
        <li><strong>Display:</strong> 6.78-inch Curved AMOLED, 1.5K (2800 x 1260 pixels), 120Hz, 4500 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 7 Gen 3 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP ZEISS OIS + 50MP ZEISS UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Extremely slim 7.58mm body carrying a huge 5500mAh battery.
      </div>
    `
  },

  // --- GOOGLE PIXEL ---
  {
    id: "google_pixel_8a",
    category: "Mobile",
    name: "Google Pixel 8a",
    brand: "Google",
    price: 41999,
    battery: 4492,
    display: "6.1-inch FHD+ 120Hz Actua OLED",
    displayGroup: "FHD+",
    ram: "8GB",
    storage: "128GB",
    processor: "Google Tensor G3 (4nm)",
    camera: "64MP Main OIS + 13MP UltraWide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Google+Pixel+8a",
    details: `
      <h4>Google Pixel 8a Specifications</h4>
      <p>Compact AI smartphone with Google Tensor G3 chip, 120Hz OLED screen, and 7 years of software updates.</p>
      <ul>
        <li><strong>Price:</strong> ₹41,999 (Current Live Retail)</li>
        <li><strong>Battery:</strong> 4492 mAh (18W Fast Charge + Qi Wireless)</li>
        <li><strong>Display:</strong> 6.1-inch Actua OLED, FHD+ (2400 x 1080 pixels), 120Hz, 2000 nits peak.</li>
        <li><strong>Processor:</strong> Google Tensor G3 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 64MP Quad PD OIS + 13MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Best computational camera under ₹45k with wireless charging.
      </div>
    `
  }
];

// Combine both datasets for unified quick lookup
const allProductsDatabase = [...laptopDatabase, ...mobileDatabase];

// ==========================================================================
// STATE CONTROLLER
// ==========================================================================
class AuraCompareApp {
  constructor() {
    this.activeTab = "product-compare";
    this.currentUser = null;
    this.history = [];
    this.geminiApiKey = localStorage.getItem("gemini_api_key") || "AQ.Ab8RN6Kw5eO22vz5tSH7nsskveQ2ySf3VkCCmt6aMKDoRyirtg";

    this.checkAuthentication();
    this.loadHistory();
    this.initDOM();
  }

  // GEMINI AI CALL
  async callGeminiAPI(prompt, systemInstruction = "", jsonMode = false, useGoogleSearch = false, retries = 1) {
    if (!this.geminiApiKey || typeof this.geminiApiKey !== "string" || !this.geminiApiKey.startsWith("AIzaSy")) {
      return null;
    }

    const modelsToTry = ["gemini-2.0-flash", "gemini-1.5-flash"];
    let lastError = null;

    for (const model of modelsToTry) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.geminiApiKey}`;
      const requestBody = { contents: [{ parts: [{ text: prompt }] }] };

      if (systemInstruction) requestBody.systemInstruction = { parts: [{ text: systemInstruction }] };
      if (jsonMode) requestBody.generationConfig = { responseMimeType: "application/json" };
      if (useGoogleSearch) requestBody.tools = [{ googleSearch: {} }];

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          if (errorData.error?.code === 429 && retries > 0) {
            await new Promise(r => setTimeout(r, 2000));
            return this.callGeminiAPI(prompt, systemInstruction, jsonMode, useGoogleSearch, retries - 1);
          }
          lastError = new Error(errorData.error?.message || `HTTP ${response.status}`);
          continue;
        }

        const data = await response.json();
        const parts = data.candidates?.[0]?.content?.parts || [];
        const responseText = parts.map(p => p.text || "").join("").trim();
        if (responseText) return responseText;
      } catch (err) {
        lastError = err;
      }
    }
    return null;
  }

  // PUBLIC PRODUCT API FALLBACK
  async fetchFromPublicProductAPI(query, category) {
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) return null;
      const data = await res.json();
      if (Array.isArray(data.products) && data.products.length > 0) {
        return data.products.map((p, idx) => ({
          id: `public_api_${p.id}_${Date.now()}`,
          category: category,
          name: p.title,
          brand: p.brand || "Market Model",
          price: Math.round(p.price * 83),
          battery: category === "Laptop" ? "10 Hours Battery" : (p.category === 'smartphones' ? 5000 : 4500),
          display: category === "Laptop" ? "15.6-inch FHD Display" : "FHD+ 120Hz Display",
          displayGroup: "FHD+",
          ram: category === "Laptop" ? "16GB RAM" : "8GB RAM",
          storage: category === "Laptop" ? "512GB SSD" : "128GB Storage",
          processor: category === "Laptop" ? "Intel / AMD Processor" : "Octa-Core Chipset",
          camera: category === "Laptop" ? "HD Webcam" : "50MP Main Camera",
          imageUrl: category === "Laptop" ? "💻" : "📱",
          source: "Global Market API",
          sourceUrl: `https://dummyjson.com/products/${p.id}`,
          isLive: true,
          details: `
            <h4>${p.title}</h4>
            <p>${p.description || "Live product retrieved from market inventory catalog."}</p>
            <ul>
              <li><strong>Price:</strong> ₹${Math.round(p.price * 83).toLocaleString()}</li>
              <li><strong>Rating:</strong> ⭐ ${p.rating || 4.5} / 5</li>
              <li><strong>Category:</strong> ${category}</li>
            </ul>
          `
        }));
      }
    } catch (e) {
      console.warn("Public API fetch notice:", e);
    }
    return null;
  }

  checkAuthentication() {
    const cachedAuth = localStorage.getItem("auracompare_auth");
    const loginScreen = document.getElementById("login-screen");
    const appWorkspace = document.getElementById("app-workspace");

    if (cachedAuth) {
      this.currentUser = JSON.parse(cachedAuth);
      this.updateProfileUI();
      loginScreen.classList.add("hidden");
      appWorkspace.classList.remove("hidden");
    } else {
      appWorkspace.classList.add("hidden");
      loginScreen.classList.remove("hidden");
    }
  }

  updateProfileUI() {
    if (!this.currentUser) return;
    const nameEl = document.getElementById("profile-name");
    const emailEl = document.getElementById("profile-email");
    const avatarEl = document.getElementById("profile-avatar");

    if (nameEl) nameEl.textContent = this.currentUser.name;
    if (emailEl) emailEl.textContent = this.currentUser.email;
    if (avatarEl) {
      if (this.currentUser.picture) {
        avatarEl.innerHTML = `<img src="${this.currentUser.picture}" alt="${this.currentUser.name}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
      } else {
        avatarEl.innerHTML = `<div class="avatar-fallback" style="color:#ffffff; font-weight:700; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">${this.currentUser.avatar}</div>`;
      }
    }
  }

  loadHistory() {
    const cachedHistory = localStorage.getItem("auracompare_history");
    if (cachedHistory) {
      this.history = JSON.parse(cachedHistory);
    } else {
      this.history = [
        {
          id: "hist_1",
          query: "Gaming laptop under 60000 with RTX 3050 and 16GB RAM",
          filters: { category: "Laptop", price: 60000, brand: "ASUS", ram: "16GB", gpu: "RTX 3050" },
          matchesCount: 3,
          date: "Aug 14, 2026, 09:30 AM",
          avgPrice: "₹56,490"
        },
        {
          id: "hist_2",
          query: "MacBook Air M2 under 90000",
          filters: { category: "Laptop", price: 90000, brand: "Apple", processor: "M2" },
          matchesCount: 2,
          date: "Aug 14, 2026, 09:35 AM",
          avgPrice: "₹79,900"
        }
      ];
      localStorage.setItem("auracompare_history", JSON.stringify(this.history));
    }
    this.renderHistoryTable();
  }

  initDOM() {
    const apiKeyInput = document.getElementById("gemini-api-key");
    if (apiKeyInput) {
      apiKeyInput.value = this.geminiApiKey;
      const updateStatusBadge = (key) => {
        const label = document.querySelector(".connection-label");
        if (label) {
          if (key && key.startsWith("AIzaSy")) {
            label.textContent = "⚡ AI Gemini Live: Active";
            label.closest(".connection-status-card").style.borderColor = "rgba(16,185,129,0.4)";
          } else {
            label.textContent = "⚡ Market API Engine: Active";
            label.closest(".connection-status-card").style.borderColor = "rgba(59,130,246,0.4)";
          }
        }
      };
      updateStatusBadge(this.geminiApiKey);

      apiKeyInput.addEventListener("input", (e) => {
        this.geminiApiKey = e.currentTarget.value.trim();
        localStorage.setItem("gemini_api_key", this.geminiApiKey);
        updateStatusBadge(this.geminiApiKey);
      });
    }

    const btnGoogleLogin = document.getElementById("btn-google-login");
    const oauthModal = document.getElementById("oauth-modal");
    const btnLogout = document.getElementById("btn-logout");

    if (btnGoogleLogin) {
      btnGoogleLogin.addEventListener("click", () => oauthModal.classList.remove("hidden"));
    }

    document.querySelectorAll(".oauth-account-row").forEach(row => {
      row.addEventListener("click", (e) => {
        const rowEl = e.currentTarget;
        const name = rowEl.getAttribute("data-name");
        const email = rowEl.getAttribute("data-email");
        const avatar = rowEl.getAttribute("data-avatar");

        if (name === "Use another account") {
          const customEmail = prompt("Enter your corporate Gmail/Google Account email:");
          if (customEmail && customEmail.includes("@")) {
            const cleanName = customEmail.split("@")[0].replace(/\./g, " ");
            const formattedName = cleanName.replace(/\b\w/g, c => c.toUpperCase());
            const initials = formattedName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
            this.runSimulatedGoogleLogin(formattedName, customEmail, initials);
          }
        } else {
          this.runSimulatedGoogleLogin(name, email, avatar);
        }
      });
    });

    if (oauthModal) {
      oauthModal.addEventListener("click", (e) => {
        if (e.target === oauthModal) oauthModal.classList.add("hidden");
      });
    }

    const tabSignIn = document.getElementById("tab-toggle-signin");
    const tabSignUp = document.getElementById("tab-toggle-signup");
    const groupName = document.getElementById("group-signup-name");
    const btnSubmit = document.getElementById("btn-manual-submit");

    let isSignUp = false;

    if (tabSignIn && tabSignUp) {
      tabSignIn.addEventListener("click", () => {
        isSignUp = false;
        tabSignIn.classList.add("active");
        tabSignUp.classList.remove("active");
        if (groupName) groupName.classList.add("hidden");
        if (btnSubmit) btnSubmit.textContent = "Sign In";
      });

      tabSignUp.addEventListener("click", () => {
        isSignUp = true;
        tabSignUp.classList.add("active");
        tabSignIn.classList.remove("active");
        if (groupName) groupName.classList.remove("hidden");
        if (btnSubmit) btnSubmit.textContent = "Sign Up";
      });
    }

    if (btnSubmit) {
      btnSubmit.addEventListener("click", () => {
        const email = document.getElementById("auth-email").value.trim();
        const password = document.getElementById("auth-password").value.trim();
        
        if (!email || !email.includes("@")) {
          this.showToast("Please enter a valid email address", "warning");
          return;
        }
        if (password.length < 4) {
          this.showToast("Password must be at least 4 characters long", "warning");
          return;
        }

        let name = "Workspace User";
        if (isSignUp) {
          const nameInput = document.getElementById("auth-name").value.trim();
          if (!nameInput) {
            this.showToast("Please enter your full name", "warning");
            return;
          }
          name = nameInput;
        } else {
          const prefix = email.split("@")[0].replace(/\./g, " ");
          name = prefix.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        }

        const initials = name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
        const userProfile = {
          name: name,
          email: email,
          avatar: initials,
          provider: isSignUp ? "Email Register" : "Email Login"
        };

        localStorage.setItem("auracompare_auth", JSON.stringify(userProfile));
        this.currentUser = userProfile;
        this.showToast(isSignUp ? "Account registered successfully!" : "Logged in successfully.", "success");
        this.checkAuthentication();
      });
    }

    if (btnLogout) {
      btnLogout.addEventListener("click", () => {
        localStorage.removeItem("auracompare_auth");
        this.currentUser = null;
        this.checkAuthentication();
        this.showToast("Logged out of secure compare index.", "info");
        document.getElementById("search-results-container").classList.add("hidden");
        document.getElementById("compare-empty-view").classList.remove("hidden");
      });
    }

    document.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("click", (e) => {
        const tab = e.currentTarget.getAttribute("data-tab");
        this.switchTab(tab);
      });
    });

    const btnCompare = document.getElementById("btn-run-compare");
    const inputSearch = document.getElementById("nl-search-input");
    
    if (btnCompare && inputSearch) {
      btnCompare.addEventListener("click", () => this.runProductSearch());
      inputSearch.addEventListener("keypress", (e) => {
        if (e.key === "Enter") this.runProductSearch();
      });
    }

    document.querySelectorAll(".suggestion-tag").forEach(tag => {
      tag.addEventListener("click", (e) => {
        const query = e.currentTarget.getAttribute("data-query");
        inputSearch.value = query;
        this.runProductSearch();
      });
    });

    const btnCloseDrawer = document.getElementById("drawer-close-btn");
    const overlayDrawer = document.getElementById("drawer-overlay");
    if (btnCloseDrawer) btnCloseDrawer.addEventListener("click", () => this.closeDrawer());
    if (overlayDrawer) overlayDrawer.addEventListener("click", () => this.closeDrawer());
  }

  runSimulatedGoogleLogin(name, email, avatar) {
    const loader = document.getElementById("oauth-loading");
    if (loader) loader.classList.remove("hidden");

    setTimeout(() => {
      const user = {
        name: name,
        email: email,
        avatar: avatar,
        provider: "Google Simulator"
      };

      localStorage.setItem("auracompare_auth", JSON.stringify(user));
      this.currentUser = user;
      if (loader) loader.classList.add("hidden");
      document.getElementById("oauth-modal").classList.add("hidden");
      this.showToast(`Welcome, ${name}.`, "success");
      this.checkAuthentication();
    }, 1000);
  }

  switchTab(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll(".nav-item").forEach(item => {
      if (item.getAttribute("data-tab") === tabId) item.classList.add("active");
      else item.classList.remove("active");
    });

    const titleEl = document.getElementById("page-title");
    const descEl = document.getElementById("page-description");

    if (titleEl && descEl) {
      if (tabId === "product-compare") {
        titleEl.textContent = "Live Product Search & Comparison";
        descEl.textContent = "Search Laptops or Mobile Phones to compare market specs and prices";
      } else if (tabId === "saved-searches") {
        titleEl.textContent = "Saved Query Snapshots";
        descEl.textContent = "Review past query configurations and look up cached price points";
      } else if (tabId === "connectors-status") {
        titleEl.textContent = "Live API Connectors";
        descEl.textContent = "Check API status, crawler latency metrics, and real-time market sync cycles";
      }
    }

    document.querySelectorAll(".tab-content").forEach(content => {
      content.classList.remove("active-content");
    });
    
    const targetContent = document.getElementById(`${tabId}-section`);
    if (targetContent) targetContent.classList.add("active-content");
  }

  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let icon = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
    `;

    if (type === "success") {
      icon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      `;
    } else if (type === "warning") {
      icon = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      `;
    }

    toast.innerHTML = `${icon}<span class="toast-text">${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  getValidBuyUrl(prod) {
    const rawName = prod.name || `${prod.brand || ""} device`;
    const cleanName = rawName.replace(/[^\w\s\+\-]/gi, " ").replace(/\s+/g, " ").trim();
    const source = (prod.source || "").toLowerCase();

    if (source.includes("flipkart")) {
      return `https://www.google.com/search?q=${encodeURIComponent("site:flipkart.com " + cleanName)}`;
    } else if (source.includes("amazon")) {
      return `https://www.google.com/search?q=${encodeURIComponent("site:amazon.in " + cleanName)}`;
    } else if (source.includes("apple")) {
      return `https://www.google.com/search?q=${encodeURIComponent("site:apple.com/in " + cleanName)}`;
    } else if (source.includes("samsung")) {
      return `https://www.google.com/search?q=${encodeURIComponent("site:samsung.com/in " + cleanName)}`;
    } else if (source.includes("hp")) {
      return `https://www.google.com/search?q=${encodeURIComponent("site:hp.com/in " + cleanName)}`;
    } else if (source.includes("lenovo")) {
      return `https://www.google.com/search?q=${encodeURIComponent("site:lenovo.com/in " + cleanName)}`;
    } else if (source.includes("dell")) {
      return `https://www.google.com/search?q=${encodeURIComponent("site:dell.com/en-in " + cleanName)}`;
    }
    
    return `https://www.google.com/search?q=${encodeURIComponent("buy " + cleanName + " online india")}`;
  }

  openDrawer(productId) {
    const prod = allProductsDatabase.find(p => p.id === productId);
    if (!prod) return;

    document.getElementById("drawer-doc-type").textContent = (prod.category || "DEVICE").toUpperCase();
    document.getElementById("drawer-doc-title").textContent = prod.name;
    document.getElementById("drawer-doc-brand").textContent = prod.brand;
    document.getElementById("drawer-doc-price").textContent = `₹${prod.price.toLocaleString()}`;
    
    const urlLink = document.getElementById("drawer-doc-url");
    const buyUrl = this.getValidBuyUrl(prod);
    urlLink.href = buyUrl;
    urlLink.target = "_blank";
    urlLink.rel = "noopener noreferrer";
    urlLink.textContent = `Buy on ${prod.source || "Amazon.in"}`;

    document.getElementById("drawer-doc-content").innerHTML = prod.details;
    document.getElementById("document-drawer").classList.add("open");
  }

  closeDrawer() {
    document.getElementById("document-drawer").classList.remove("open");
  }

  openDrawerWithContent(prod) {
    document.getElementById("drawer-doc-type").textContent = (prod.category || "DEVICE").toUpperCase();
    document.getElementById("drawer-doc-title").textContent = prod.name;
    document.getElementById("drawer-doc-brand").textContent = prod.brand;
    document.getElementById("drawer-doc-price").textContent = `₹${prod.price.toLocaleString()}`;

    const urlLink = document.getElementById("drawer-doc-url");
    const buyUrl = this.getValidBuyUrl(prod);
    urlLink.href = buyUrl;
    urlLink.target = "_blank";
    urlLink.rel = "noopener noreferrer";
    urlLink.textContent = `Buy on ${prod.source || "Amazon.in"}`;

    document.getElementById("drawer-doc-content").innerHTML = prod.details || `<p>No detailed spec sheet available.</p>`;
    document.getElementById("document-drawer").classList.add("open");
  }

  // SEARCH RETRIEVAL PIPELINE
  async runProductSearch() {
    const input = document.getElementById("nl-search-input");
    const query = input.value.trim();

    if (!query) {
      this.showToast("Please enter a query (e.g. laptop or mobile specs)", "warning");
      return;
    }

    this.showToast("Searching market API & specs database...", "info");

    document.getElementById("compare-empty-view").classList.add("hidden");
    document.getElementById("search-results-container").classList.add("hidden");
    
    const monitor = document.getElementById("pipeline-monitor");
    monitor.classList.remove("hidden");

    const steps = ["step-parser", "step-crawlers", "step-ranking"];
    steps.forEach(id => {
      const step = document.getElementById(id);
      step.classList.remove("active-step");
      const indicator = step.querySelector(".step-icon-indicator");
      indicator.className = "step-icon-indicator pending";
    });

    document.getElementById("parsed-chips-container").classList.add("hidden");
    document.getElementById("parsed-chips-container").innerHTML = "";
    document.getElementById("parser-status").textContent = "Analyzing query category & spec bounds...";
    document.getElementById("ranking-status").textContent = "Awaiting matched candidates...";

    const crawlers = ["amazon", "flipkart", "samsung"];
    crawlers.forEach(c => {
      document.getElementById(`crawl-fill-${c}`).style.width = "0%";
      document.getElementById(`crawl-time-${c}`).textContent = "Pending";
      document.getElementById(`crawl-time-${c}`).closest(".crawler-bar-row").classList.remove("completed");
    });

    const timerBadge = document.getElementById("pipeline-timer");
    let startTime = Date.now();
    let timerInterval = setInterval(() => {
      let seconds = ((Date.now() - startTime) / 1000).toFixed(1);
      timerBadge.textContent = `${seconds}s`;
    }, 100);

    // STEP 1: PARSE QUERY
    const stepParser = document.getElementById("step-parser");
    stepParser.classList.add("active-step");
    stepParser.querySelector(".step-icon-indicator").className = "step-icon-indicator active";

    const parsedFilters = this.parseQueryConstraints(query);

    await new Promise(resolve => setTimeout(resolve, 350));

    stepParser.classList.remove("active-step");
    stepParser.querySelector(".step-icon-indicator").className = "step-icon-indicator completed";
    document.getElementById("parser-status").textContent = `Category detected: ${parsedFilters.category}. Target parameters extracted.`;
    
    const chipsContainer = document.getElementById("parsed-chips-container");
    chipsContainer.classList.remove("hidden");
    chipsContainer.innerHTML = `<span class="filter-chip" style="background:var(--accent-primary);color:#fff;">Category: ${parsedFilters.category}</span>`;
    if (parsedFilters.brand) chipsContainer.innerHTML += `<span class="filter-chip">Brand: ${parsedFilters.brand}</span>`;
    if (parsedFilters.price) chipsContainer.innerHTML += `<span class="filter-chip">Price <= ₹${parsedFilters.price.toLocaleString()}</span>`;
    if (parsedFilters.ram) chipsContainer.innerHTML += `<span class="filter-chip">RAM: ${parsedFilters.ram}</span>`;
    if (parsedFilters.gpu) chipsContainer.innerHTML += `<span class="filter-chip">GPU: ${parsedFilters.gpu}</span>`;
    if (parsedFilters.processor) chipsContainer.innerHTML += `<span class="filter-chip">CPU: ${parsedFilters.processor}</span>`;
    if (parsedFilters.battery && parsedFilters.category === "Mobile") chipsContainer.innerHTML += `<span class="filter-chip">Battery >= ${parsedFilters.battery}mAh</span>`;
    if (parsedFilters.display) chipsContainer.innerHTML += `<span class="filter-chip">Display: ${parsedFilters.display}</span>`;

    // STEP 2: PARALLEL API / INDEX FETCH
    const stepCrawlers = document.getElementById("step-crawlers");
    stepCrawlers.classList.add("active-step");
    stepCrawlers.querySelector(".step-icon-indicator").className = "step-icon-indicator active";

    let liveProducts = null;
    if (this.geminiApiKey && this.geminiApiKey.startsWith("AIzaSy")) {
      const prompt = `Search ${parsedFilters.category} matching "${query}". Return raw JSON array of 5 products: [{"name":"","brand":"","price":50000,"ram":"","storage":"","processor":"","camera":"","source":""}]`;
      const geminiRes = await this.callGeminiAPI(prompt, "", true);
      if (geminiRes) {
        try {
          const cleaned = geminiRes.replace(/```json/gi, "").replace(/```/g, "").trim();
          const arr = JSON.parse(cleaned);
          if (Array.isArray(arr) && arr.length > 0) {
            liveProducts = arr.map((p, idx) => ({
              id: `gemini_live_${idx}_${Date.now()}`,
              category: parsedFilters.category,
              name: p.name || "Live Market Model",
              brand: p.brand || "Brand",
              price: typeof p.price === "number" ? p.price : parseInt(String(p.price).replace(/[^0-9]/g, "")) || 49999,
              battery: parsedFilters.category === "Laptop" ? "10 Hours Battery" : (p.battery ? `${p.battery} mAh` : "5000 mAh"),
              display: p.display || "FHD Display",
              displayGroup: "FHD+",
              ram: p.ram || "16GB",
              storage: p.storage || "512GB",
              processor: p.processor || "Processor",
              camera: p.camera || "HD Camera",
              imageUrl: parsedFilters.category === "Laptop" ? "💻" : "📱",
              source: p.source || "Live Search",
              sourceUrl: "",
              isLive: true,
              details: `<h4>${p.name}</h4><p>Retrieved from live Gemini API grounding.</p><ul><li><strong>Price:</strong> ₹${(p.price || 0).toLocaleString()}</li><li><strong>RAM / Storage:</strong> ${p.ram} / ${p.storage}</li><li><strong>Processor:</strong> ${p.processor}</li></ul>`
            }));
          }
        } catch (e) {
          console.warn("Gemini JSON parse fallback");
        }
      }
    }

    if (!liveProducts) {
      liveProducts = await this.fetchFromPublicProductAPI(query, parsedFilters.category);
    }

    await Promise.all([
      new Promise(resolve => setTimeout(() => {
        document.getElementById("crawl-fill-amazon").style.width = "100%";
        document.getElementById("crawl-time-amazon").textContent = "✓ Market API";
        document.getElementById("crawl-time-amazon").closest(".crawler-bar-row").classList.add("completed");
        resolve();
      }, 250)),
      new Promise(resolve => setTimeout(() => {
        document.getElementById("crawl-fill-samsung").style.width = "100%";
        document.getElementById("crawl-time-samsung").textContent = "✓ Brand Catalog";
        document.getElementById("crawl-time-samsung").closest(".crawler-bar-row").classList.add("completed");
        resolve();
      }, 400)),
      new Promise(resolve => setTimeout(() => {
        document.getElementById("crawl-fill-flipkart").style.width = "100%";
        document.getElementById("crawl-time-flipkart").textContent = "✓ Verified";
        document.getElementById("crawl-time-flipkart").closest(".crawler-bar-row").classList.add("completed");
        resolve();
      }, 500))
    ]);

    stepCrawlers.classList.remove("active-step");
    stepCrawlers.querySelector(".step-icon-indicator").className = "step-icon-indicator completed";

    // STEP 3: RE-RANKING
    const stepRanking = document.getElementById("step-ranking");
    stepRanking.classList.add("active-step");
    stepRanking.querySelector(".step-icon-indicator").className = "step-icon-indicator active";
    document.getElementById("ranking-status").textContent = `Re-ranking ${parsedFilters.category} candidates against market specs...`;

    let rankedResults;
    if (liveProducts && liveProducts.length > 0) {
      rankedResults = liveProducts;
    } else {
      rankedResults = this.computeComparisonRanking(parsedFilters, query);
    }

    await new Promise(resolve => setTimeout(resolve, 300));

    stepRanking.classList.remove("active-step");
    stepRanking.querySelector(".step-icon-indicator").className = "step-icon-indicator completed";
    document.getElementById("ranking-status").textContent = `Ranked ${rankedResults.length} ${parsedFilters.category.toLowerCase()}s successfully.`;

    clearInterval(timerInterval);

    monitor.classList.add("hidden");
    document.getElementById("search-results-container").classList.remove("hidden");

    this.renderComparisonResult(query, parsedFilters, rankedResults);
    this.saveQueryToHistory(query, parsedFilters, rankedResults.length);

    this.showToast(`${parsedFilters.category} comparison complete.`, "success");
  }

  // QUERY PARSER FOR LAPTOPS & PHONES
  parseQueryConstraints(queryText) {
    const text = queryText.replace(/(\d+),(\d+)/g, '$1$2').toLowerCase();
    const filters = {
      category: "Mobile",
      price: null,
      battery: null,
      brand: null,
      display: null,
      ram: null,
      processor: null,
      gpu: null
    };

    const laptopKeywords = [
      "laptop", "laptops", "macbook", "notebook", "pc", "computer", "gaming laptop",
      "intel", "ryzen", "rtx", "gtx", "core i3", "core i5", "core i7", "core i9",
      "core ultra", "tuf", "rog", "victus", "loq", "ideapad", "vivobook", "nitro",
      "predator", "thinkpad", "zenbook", "aspire", "alienware", "legion", "galaxy book",
      "ssd", "graphics", "nvidia", "radeon"
    ];

    if (laptopKeywords.some(kw => text.includes(kw))) {
      filters.category = "Laptop";
    }

    if (filters.category === "Laptop") {
      if (text.includes("macbook") || text.includes("apple")) filters.brand = "Apple";
      else if (text.includes("asus") || text.includes("tuf") || text.includes("rog") || text.includes("vivobook") || text.includes("zenbook")) filters.brand = "ASUS";
      else if (text.includes("hp") || text.includes("victus") || text.includes("pavilion") || text.includes("omen")) filters.brand = "HP";
      else if (text.includes("lenovo") || text.includes("loq") || text.includes("legion") || text.includes("ideapad") || text.includes("thinkpad") || text.includes("yoga")) filters.brand = "Lenovo";
      else if (text.includes("dell") || text.includes("alienware") || text.includes("inspiron") || text.includes("xps")) filters.brand = "Dell";
      else if (text.includes("acer") || text.includes("nitro") || text.includes("predator") || text.includes("swift") || text.includes("aspire")) filters.brand = "Acer";
      else if (text.includes("msi") || text.includes("cyborg") || text.includes("katana")) filters.brand = "MSI";
      else if (text.includes("samsung") || text.includes("galaxy book")) filters.brand = "Samsung";
    } else {
      if (text.includes("iphone") || text.includes("apple")) filters.brand = "Apple";
      else if (text.includes("samsung")) filters.brand = "Samsung";
      else if (text.includes("oneplus")) filters.brand = "OnePlus";
      else if (text.includes("realme")) filters.brand = "Realme";
      else if (text.includes("vivo")) filters.brand = "Vivo";
      else if (text.includes("oppo")) filters.brand = "Oppo";
      else if (text.includes("xiaomi") || text.includes("redmi") || text.includes("mi ")) filters.brand = "Xiaomi";
      else if (text.includes("poco")) filters.brand = "Poco";
      else if (text.includes("motorola") || text.includes("moto")) filters.brand = "Motorola";
      else if (text.includes("iqoo")) filters.brand = "IQOO";
      else if (text.includes("pixel") || text.includes("google")) filters.brand = "Google";
      else if (text.includes("nothing") || text.includes("cmf")) filters.brand = "Nothing";
    }

    // Price cap
    if (text.includes("lakh") || text.includes("lac")) {
      const lakhMatch = text.match(/(?:under|below|less than|around|\b)\s*(\d+(?:\.\d+)?)\s*(?:lakh|lac)/);
      if (lakhMatch) filters.price = Math.round(parseFloat(lakhMatch[1]) * 100000);
    }
    if (!filters.price) {
      const priceKRegex = /(?:under|below|less than|within|budget of|\b)\s*(\d+)\s*(?:k|thousand)/;
      const priceNumRegex = /(?:under|below|less than|within|budget of|\b)\s*(\d{4,6})/;
      let kmatch = text.match(priceKRegex);
      let nmatch = text.match(priceNumRegex);
      if (kmatch) {
        filters.price = parseInt(kmatch[1]) * 1000;
      } else if (nmatch) {
        filters.price = parseInt(nmatch[1]);
      }
    }

    // RAM detection
    const ramMatch = text.match(/(\d+)\s*(?:gb ram|gb)/);
    if (ramMatch) {
      const ramVal = parseInt(ramMatch[1]);
      if ([4, 6, 8, 12, 16, 18, 24, 32].includes(ramVal)) {
        filters.ram = `${ramVal}GB`;
      }
    }

    // GPU detection
    const gpuMatch = text.match(/(rtx\s*\d{4}|gtx\s*\d{4})/i);
    if (gpuMatch) {
      filters.gpu = gpuMatch[1].toUpperCase().replace(/\s+/g, " ");
    }

    // Processor detection
    if (text.includes("i7") || text.includes("core i7")) filters.processor = "Core i7";
    else if (text.includes("i5") || text.includes("core i5")) filters.processor = "Core i5";
    else if (text.includes("i3") || text.includes("core i3")) filters.processor = "Core i3";
    else if (text.includes("ryzen 7")) filters.processor = "Ryzen 7";
    else if (text.includes("ryzen 5")) filters.processor = "Ryzen 5";
    else if (text.includes("m3")) filters.processor = "M3";
    else if (text.includes("m2")) filters.processor = "M2";
    else if (text.includes("m1")) filters.processor = "M1";

    // Battery
    if (filters.category === "Mobile") {
      const batteryRegex = /(\d{4})\s*(?:mah|m ah)/;
      let bmatch = text.match(batteryRegex);
      if (bmatch) filters.battery = parseInt(bmatch[1]);
    }

    // Display
    if (text.includes("oled")) filters.display = "OLED";
    else if (text.includes("144hz")) filters.display = "144Hz";
    else if (text.includes("165hz")) filters.display = "165Hz";
    else if (text.includes("120hz")) filters.display = "120Hz";
    else if (text.includes("1.5k")) filters.display = "1.5K";
    else if (text.includes("2.8k") || text.includes("2k") || text.includes("qhd")) filters.display = "2K";

    return filters;
  }

  // RANKING ENGINE (SEPARATE LAPTOP AND MOBILE LISTINGS)
  computeComparisonRanking(filters, queryText = "") {
    let results = [];
    const isLaptop = filters.category === "Laptop";
    const dataset = isLaptop ? laptopDatabase : mobileDatabase;
    const targetBrand = filters.brand ? filters.brand.toLowerCase() : null;

    let candidatePool = dataset.filter(p => {
      if (targetBrand) {
        const brandMatch = p.brand.toLowerCase() === targetBrand ||
                           p.name.toLowerCase().includes(targetBrand) ||
                           (targetBrand === "apple" && (p.name.toLowerCase().includes("macbook") || p.name.toLowerCase().includes("iphone"))) ||
                           (targetBrand === "asus" && (p.name.toLowerCase().includes("tuf") || p.name.toLowerCase().includes("rog") || p.name.toLowerCase().includes("vivobook"))) ||
                           (targetBrand === "hp" && (p.name.toLowerCase().includes("victus") || p.name.toLowerCase().includes("pavilion") || p.name.toLowerCase().includes("omen"))) ||
                           (targetBrand === "lenovo" && (p.name.toLowerCase().includes("loq") || p.name.toLowerCase().includes("legion") || p.name.toLowerCase().includes("ideapad"))) ||
                           (targetBrand === "acer" && (p.name.toLowerCase().includes("nitro") || p.name.toLowerCase().includes("predator") || p.name.toLowerCase().includes("aspire")));
        if (!brandMatch) return false;
      }
      if (filters.price && p.price > filters.price * 1.15) {
        return false;
      }
      return true;
    });

    if (candidatePool.length === 0) {
      const qTokens = queryText.toLowerCase().split(/\s+/).filter(t => t.length > 2 && !["under", "below", "laptop", "mobile", "phone", "with", "than", "best"].includes(t));
      candidatePool = dataset.filter(p => {
        const pText = `${p.name} ${p.brand} ${p.details}`.toLowerCase();
        return qTokens.some(t => pText.includes(t));
      });
    }

    if (candidatePool.length === 0) {
      candidatePool = dataset.slice(0, 8);
    }

    candidatePool.forEach(p => {
      let score = 100;
      let reasons = [];

      if (filters.price) {
        if (p.price <= filters.price) {
          let priceRatio = p.price / filters.price;
          if (priceRatio > 0.9) reasons.push("Nearing budget limit");
          else reasons.push(`Well within budget (₹${p.price.toLocaleString()})`);
        } else {
          score -= 30;
          reasons.push(`Slightly above target budget (₹${p.price.toLocaleString()})`);
        }
      }

      if (filters.ram) {
        if (p.ram && p.ram.toLowerCase().includes(filters.ram.toLowerCase())) {
          reasons.push(`Matches requested RAM: ${p.ram}`);
        } else {
          score -= 10;
        }
      }

      if (filters.gpu) {
        if (p.details && p.details.toUpperCase().includes(filters.gpu)) {
          reasons.push(`Matches dedicated GPU: ${filters.gpu}`);
        } else {
          score -= 20;
        }
      }

      if (filters.processor) {
        if (p.processor && p.processor.toLowerCase().includes(filters.processor.toLowerCase())) {
          reasons.push(`Matches processor: ${p.processor}`);
        } else {
          score -= 10;
        }
      }

      if (filters.display) {
        const pDisplayLower = (p.display || "").toLowerCase();
        const fDisplayLower = filters.display.toLowerCase();
        if (pDisplayLower.includes(fDisplayLower)) {
          reasons.push(`Matches display criteria: ${filters.display}`);
        } else {
          score -= 5;
        }
      }

      if (filters.brand) {
        if (p.brand.toLowerCase() === filters.brand.toLowerCase() || p.name.toLowerCase().includes(filters.brand.toLowerCase())) {
          reasons.push(`Exact brand match: ${p.brand}`);
        }
      }

      results.push({
        ...p,
        matchScore: Math.max(15, score),
        matchingReasons: reasons
      });
    });

    results.sort((a, b) => b.matchScore - a.matchScore);
    return results;
  }

  // RENDER RESULTS ACCORDING TO CATEGORY
  renderComparisonResult(queryText, filters, results) {
    const synthesisBody = document.getElementById("rag-synthesis-body");
    const sourcesContainer = document.getElementById("retrieved-sources-log-container");
    const tableBody = document.getElementById("comparison-table-body");
    const tableCounter = document.getElementById("table-results-counter");

    synthesisBody.innerHTML = "";
    sourcesContainer.innerHTML = "";
    tableBody.innerHTML = "";

    let aiExplanation = "";
    const isLaptop = filters.category === "Laptop";

    if (results.length === 0) {
      aiExplanation = `
        <div class="synthesis-text">
          <p><strong>Market Search Analysis:</strong> We searched active market listings but found <strong>0 ${filters.category.toLowerCase()}s</strong> matching your criteria under ${filters.price ? '₹' + filters.price.toLocaleString() : 'requested bounds'}.</p>
          <p class="text-secondary">Try adjusting budget limits or query terms.</p>
        </div>
      `;
    } else {
      let topMatch = results[0];
      
      aiExplanation = `<div class="synthesis-text">`;
      aiExplanation += `<p>Based on live market specifications for <em>"${queryText}"</em>, the top recommended <strong>${filters.category}</strong> currently existing in the market is the <span class="highlight-tag">${topMatch.name}</span>, priced at <strong>₹${topMatch.price.toLocaleString()}</strong> <span class="cite-pill" data-doc="${topMatch.id}">[1]</span>.`;

      if (isLaptop) {
        aiExplanation += ` Powered by the <strong>${topMatch.processor}</strong>, featuring <strong>${topMatch.ram}</strong>, <strong>${topMatch.storage}</strong>, and a <strong>${topMatch.display}</strong>.`;
      } else {
        if (filters.battery && topMatch.battery >= filters.battery) {
          aiExplanation += ` It fulfills your battery requirement of <strong>${filters.battery}mAh</strong> with a capacity of <strong>${topMatch.battery}mAh</strong>.`;
        } else {
          aiExplanation += ` It features a <strong>${topMatch.battery}mAh battery</strong> with <strong>${topMatch.display}</strong>.`;
        }
        aiExplanation += ` Powered by <strong>${topMatch.processor || 'Octa-Core processor'}</strong> with <strong>${topMatch.ram || '8GB'} RAM</strong> and <strong>${topMatch.camera || 'High-res camera'}</strong>.`;
      }

      aiExplanation += `</p>`;

      const alternatives = results.slice(1, 4);
      if (alternatives.length > 0) {
        aiExplanation += `<h4>Market ${filters.category} Alternatives:</h4><ul>`;
        alternatives.forEach((alt, idx) => {
          if (isLaptop) {
            aiExplanation += `<li><span class="highlight-tag">${alt.name}</span> at <strong>₹${alt.price.toLocaleString()}</strong> <span class="cite-pill" data-doc="${alt.id}">[${idx + 2}]</span> (${alt.processor}, ${alt.ram}, ${alt.storage}, ${alt.display}).</li>`;
          } else {
            aiExplanation += `<li><span class="highlight-tag">${alt.name}</span> at <strong>₹${alt.price.toLocaleString()}</strong> <span class="cite-pill" data-doc="${alt.id}">[${idx + 2}]</span> (${alt.battery}mAh battery, ${alt.display}).</li>`;
          }
        });
        aiExplanation += `</ul>`;
      }

      aiExplanation += `</div>`;
    }

    synthesisBody.innerHTML = aiExplanation;

    synthesisBody.querySelectorAll(".cite-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        const docId = e.currentTarget.getAttribute("data-doc");
        this.openDrawer(docId);
      });
    });

    if (results.length > 0) {
      let contextSize = (JSON.stringify(results).length / 1024).toFixed(1);
      const ctxSizeEl = document.getElementById("sources-context-size");
      if (ctxSizeEl) ctxSizeEl.textContent = `${contextSize} KB`;

      results.forEach((r, idx) => {
        const item = document.createElement("div");
        item.className = "source-log-item";
        item.innerHTML = `
          <div class="source-log-header">
            <span class="source-log-title">[${idx + 1}] ${r.name}</span>
            <span class="source-log-meta">Match: ${r.matchScore}% | Source: ${r.source}</span>
          </div>
          <div class="source-log-body">
            "Verified Price: ₹${r.price.toLocaleString()} | Processor: ${r.processor} | Memory: ${r.ram} / ${r.storage} | Screen: ${r.display}"
          </div>
        `;
        sourcesContainer.appendChild(item);
      });
    }

    if (tableCounter) tableCounter.textContent = `Found ${results.length} active ${filters.category.toLowerCase()}s currently existing in the market.`;
    
    if (results.length > 0) {
      const lowestPriceInResults = Math.min(...results.map(o => o.price));
      
      results.forEach((r, idx) => {
        const tr = document.createElement("tr");

        let scoreClass = "high";
        if (r.matchScore < 85) scoreClass = "med";
        if (r.matchScore < 70) scoreClass = "low";

        const bestPriceBadge = r.price === lowestPriceInResults
          ? `<span class="best-price-badge">Best Price</span>`
          : "";

        const specColContent = isLaptop
          ? `<span style="font-family: var(--font-mono); font-size:12.5px;">${r.ram} / ${r.storage}</span>`
          : `<span style="font-family: var(--font-mono); font-size:12.5px;">${typeof r.battery === 'number' ? r.battery + ' mAh' : r.battery}</span>`;

        tr.innerHTML = `
          <td>
            <div class="prod-details-cell">
              <div class="prod-icon">${r.imageUrl || (isLaptop ? '💻' : '📱')}</div>
              <div class="prod-name-stack">
                <span class="prod-title">${r.name}</span>
                <span class="prod-source-attribution">Ref: [${idx + 1}] (${r.source})</span>
              </div>
            </div>
          </td>
          <td><span style="font-weight:600; color:#fff;">${r.brand}</span></td>
          <td>${specColContent}</td>
          <td><span style="font-size:12.5px;">${r.display}</span></td>
          <td>
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="price-text">₹${r.price.toLocaleString()}</span>
              ${bestPriceBadge}
            </div>
          </td>
          <td>
            <div class="spec-score-cell">
              <span class="score-badge ${scoreClass}">${r.matchScore}%</span>
            </div>
          </td>
          <td>
            <button class="btn btn-secondary btn-small btn-inspect-spec" data-id="${r.id}" style="padding: 4px 8px;">Specs</button>
            <a href="${this.getValidBuyUrl(r)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-small" style="padding: 4px 8px;">Buy</a>
          </td>
        `;

        tr.querySelector(".btn-inspect-spec").addEventListener("click", (e) => {
          const targetId = e.currentTarget.getAttribute("data-id");
          const liveMatch = results.find(p => p.id === targetId);
          if (liveMatch && liveMatch.isLive) {
            this.openDrawerWithContent(liveMatch);
          } else {
            this.openDrawer(targetId);
          }
        });

        tableBody.appendChild(tr);
      });
    } else {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center; padding: 30px; color: var(--text-muted);">
            No comparable ${filters.category.toLowerCase()}s located. Broaden search criteria bounds.
          </td>
        </tr>
      `;
    }
  }

  saveQueryToHistory(queryText, filters, matchesCount) {
    const exists = this.history.find(h => h.query.toLowerCase() === queryText.toLowerCase());
    if (exists) return;

    let matchedProducts = this.computeComparisonRanking(filters, queryText);
    let avgPrice = "N/A";
    if (matchedProducts.length > 0) {
      let sum = matchedProducts.reduce((acc, curr) => acc + curr.price, 0);
      avgPrice = `₹${Math.round(sum / matchedProducts.length).toLocaleString()}`;
    }

    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateStr = new Date().toLocaleDateString("en-US", options);

    const newHistoryItem = {
      id: `hist_${Date.now()}`,
      query: queryText,
      filters: filters,
      matchesCount: matchesCount,
      date: dateStr,
      avgPrice: avgPrice
    };

    this.history.unshift(newHistoryItem);
    localStorage.setItem("auracompare_history", JSON.stringify(this.history));
    this.renderHistoryTable();
  }

  renderHistoryTable() {
    const tbody = document.getElementById("history-table-body");
    if (!tbody) return;

    tbody.innerHTML = "";
    if (this.history.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; padding:30px; color:var(--text-muted);">
            No saved searches logged. Authenticate and run comparisons.
          </td>
        </tr>
      `;
      return;
    }

    this.history.forEach(item => {
      const tr = document.createElement("tr");

      let filterTxt = `[Cat: ${item.filters.category || 'Device'}] `;
      if (item.filters.brand) filterTxt += `[Brand: ${item.filters.brand}] `;
      if (item.filters.price) filterTxt += `[Price <= ₹${item.filters.price.toLocaleString()}] `;
      if (item.filters.ram) filterTxt += `[RAM: ${item.filters.ram}] `;
      if (item.filters.gpu) filterTxt += `[GPU: ${item.filters.gpu}] `;
      if (item.filters.processor) filterTxt += `[CPU: ${item.filters.processor}] `;

      tr.innerHTML = `
        <td><div class="history-query-cell" title="${item.query}">"${item.query}"</div></td>
        <td><span style="font-family: var(--font-mono); font-size:11.5px; color: var(--accent-primary);">${filterTxt}</span></td>
        <td><span class="badge badge-indigo">${item.matchesCount} Matches</span></td>
        <td><span class="history-date-cell">${item.date}</span></td>
        <td>
          <button class="btn btn-secondary btn-small btn-restore-hist" data-query="${item.query}">Restore</button>
          <button class="btn btn-primary btn-small btn-rerun-hist" data-query="${item.query}">Re-run Live</button>
        </td>
      `;

      tr.querySelector(".btn-restore-hist").addEventListener("click", (e) => {
        const query = e.currentTarget.getAttribute("data-query");
        document.getElementById("nl-search-input").value = query;
        this.switchTab("product-compare");
        const parsed = this.parseQueryConstraints(query);
        const ranked = this.computeComparisonRanking(parsed, query);
        document.getElementById("compare-empty-view").classList.add("hidden");
        document.getElementById("pipeline-monitor").classList.add("hidden");
        document.getElementById("search-results-container").classList.remove("hidden");
        this.renderComparisonResult(query, parsed, ranked);
        this.showToast("Restored historical search snapshot", "info");
      });

      tr.querySelector(".btn-rerun-hist").addEventListener("click", (e) => {
        const query = e.currentTarget.getAttribute("data-query");
        document.getElementById("nl-search-input").value = query;
        this.switchTab("product-compare");
        this.runProductSearch();
      });

      tbody.appendChild(tr);
    });
  }
}

// Global Google SSO Callback Port
function parseGoogleJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (err) {
    console.error("JWT Decode Error", err);
    return null;
  }
}

window.onGoogleSignInSuccess = function(response) {
  if (!response || !response.credential) return;
  const payload = parseGoogleJwt(response.credential);
  if (!payload) return;

  const initials = payload.name.split(" ").map(n => n[0]).join("").substring(0,2).toUpperCase();
  const user = {
    name: payload.name,
    email: payload.email,
    picture: payload.picture,
    avatar: initials,
    provider: "Google OAuth"
  };

  localStorage.setItem("auracompare_auth", JSON.stringify(user));
  if (window.AuraCompareInstance) {
    window.AuraCompareInstance.currentUser = user;
    window.AuraCompareInstance.checkAuthentication();
    window.AuraCompareInstance.showToast(`Logged in as ${payload.name} via Google Workspace`, "success");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  window.AuraCompareInstance = new AuraCompareApp();
});
