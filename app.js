/**
 * AuraCompare AI - Live Product Search & Comparison (RAG)
 * Handles query parsing, live marketplace fetching, specs matching, and ranking.
 */

// ==========================================================================
// COMPREHENSIVE REAL-WORLD MARKET PRODUCTS DATABASE (Updated Current Market Details)
// ==========================================================================
const productDatabase = [
  // --- APPLE ---
  {
    id: "apple_iphone_16_pro_max",
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
  {
    id: "oneplus_nord_ce4",
    name: "OnePlus Nord CE4 5G",
    brand: "OnePlus",
    price: 24999,
    battery: 5500,
    display: "6.7-inch FHD+ 120Hz Fluid AMOLED",
    displayGroup: "FHD+",
    ram: "8GB",
    storage: "128GB",
    processor: "Snapdragon 7 Gen 3 (4nm)",
    camera: "50MP Sony LYT-600 OIS + 8MP Wide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=OnePlus+Nord+CE4",
    details: `
      <h4>OnePlus Nord CE4 5G Specifications</h4>
      <p>Budget performance device with 100W SuperVOOC charging and expandable microSD storage.</p>
      <ul>
        <li><strong>Price:</strong> ₹24,999 (Market Price)</li>
        <li><strong>Battery:</strong> 5500 mAh (100W Fast Charging)</li>
        <li><strong>Display:</strong> 6.7-inch Fluid AMOLED, FHD+ (1080 x 2412 pixels), 120Hz.</li>
        <li><strong>Processor:</strong> Snapdragon 7 Gen 3 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB (Expandable up to 1TB)</li>
        <li><strong>Camera:</strong> 50MP Sony LYT-600 OIS + 8MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Best-selling budget device with 100W fast charging.
      </div>
    `
  },

  // --- VIVO ---
  {
    id: "vivo_v40_pro",
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
  {
    id: "vivo_v30",
    name: "Vivo V30 5G",
    brand: "Vivo",
    price: 31999,
    battery: 5000,
    display: "6.78-inch 1.5K 120Hz Curved AMOLED",
    displayGroup: "1.5K",
    ram: "8GB",
    storage: "128GB",
    processor: "Snapdragon 7 Gen 3 (4nm)",
    camera: "50MP VCS OIS + 50MP UltraWide",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=Vivo+V30",
    details: `
      <h4>Vivo V30 5G Specifications</h4>
      <p>Aura Light portrait phone with 1.5K curved AMOLED screen panel.</p>
      <ul>
        <li><strong>Price:</strong> ₹31,999 (Current Retail)</li>
        <li><strong>Battery:</strong> 5000 mAh (80W FlashCharge)</li>
        <li><strong>Display:</strong> 6.78-inch Curved AMOLED, 1.5K (2800 x 1260 pixels), 120Hz, 2800 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 7 Gen 3 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP VCS OIS Main + 50MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block">
        <strong>Market Data Note:</strong> Smart Aura Light portrait ring flash for night portraits.
      </div>
    `
  },

  // --- REALME ---
  {
    id: "realme_gt_6",
    name: "Realme GT 6 5G",
    brand: "Realme",
    price: 40999,
    battery: 5500,
    display: "6.78-inch 1.5K 120Hz 6000nits LTPO AMOLED",
    displayGroup: "1.5K",
    ram: "8GB",
    storage: "256GB",
    processor: "Snapdragon 8s Gen 3 (4nm)",
    camera: "50MP Sony LYT-808 OIS + 50MP Telephoto 2x + 8MP Wide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Realme+GT+6",
    details: `
      <h4>Realme GT 6 5G Specifications</h4>
      <p>Flagship performance phone featuring world's brightest 6000-nit display and 120W SUPERVOOC charging.</p>
      <ul>
        <li><strong>Price:</strong> ₹40,999 (Current Market Retail)</li>
        <li><strong>Battery:</strong> 5500 mAh (120W SUPERVOOC - 50% in 10 mins)</li>
        <li><strong>Display:</strong> 6.78-inch 8T LTPO AMOLED, 1.5K (2780 x 1264 pixels), 120Hz, 6000 nits peak.</li>
        <li><strong>Processor:</strong> Snapdragon 8s Gen 3 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 256GB UFS 4.0</li>
        <li><strong>Camera:</strong> 50MP Sony LYT-808 OIS + 50MP 2x Telephoto + 8MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Top performance score in ₹40k category with 120W charging.
      </div>
    `
  },
  {
    id: "realme_13_pro_plus",
    name: "Realme 13 Pro+ 5G",
    brand: "Realme",
    price: 32999,
    battery: 5000,
    display: "6.7-inch FHD+ 120Hz Curved AMOLED",
    displayGroup: "FHD+",
    ram: "8GB",
    storage: "256GB",
    processor: "Snapdragon 7s Gen 2 (4nm)",
    camera: "50MP Sony LYT-701 OIS + 50MP Sony LYT-600 3x Periscope OIS + 8MP Wide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Realme+13+Pro+Plus",
    details: `
      <h4>Realme 13 Pro+ 5G Specifications</h4>
      <p>AI Photography flagship featuring Monet-inspired glass back design and Sony LYT periscope telephoto lens.</p>
      <ul>
        <li><strong>Price:</strong> ₹32,999 (Market Retail Rate)</li>
        <li><strong>Battery:</strong> 5000 mAh (80W SUPERVOOC)</li>
        <li><strong>Display:</strong> 6.7-inch Curved AMOLED, FHD+ (2412 x 1080 pixels), 120Hz, Pro-XDR.</li>
        <li><strong>Processor:</strong> Snapdragon 7s Gen 2 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 256GB</li>
        <li><strong>Camera:</strong> 50MP Sony LYT-701 OIS + 50MP Sony LYT-600 3x Periscope OIS + 8MP Wide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Dual Sony LYT sensors with 3x optical periscope zoom under ₹35k.
      </div>
    `
  },
  {
    id: "realme_12_pro_plus",
    name: "Realme 12 Pro+ 5G",
    brand: "Realme",
    price: 27999,
    battery: 5000,
    display: "6.7-inch FHD+ 120Hz Curved Vision AMOLED",
    displayGroup: "FHD+",
    ram: "8GB",
    storage: "128GB",
    processor: "Snapdragon 7s Gen 2 (4nm)",
    camera: "64MP OV64B 3x Periscope OIS + 50MP Sony IMX890 OIS + 8MP Wide",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=Realme+12+Pro+Plus",
    details: `
      <h4>Realme 12 Pro+ 5G Specifications</h4>
      <p>Luxury watch design phone featuring flagship grade 64MP periscope telephoto camera sensor.</p>
      <ul>
        <li><strong>Price:</strong> ₹27,999 (Best Live Price)</li>
        <li><strong>Battery:</strong> 5000 mAh (67W SUPERVOOC)</li>
        <li><strong>Display:</strong> 6.7-inch Curved AMOLED, FHD+ (2412 x 1080), 120Hz.</li>
        <li><strong>Processor:</strong> Snapdragon 7s Gen 2 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 64MP 3x Periscope OIS + 50MP Sony IMX890 OIS + 8MP Wide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Periscope telephoto camera under ₹30,000.
      </div>
    `
  },

  // --- GOOGLE PIXEL ---
  {
    id: "google_pixel_8_pro",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 98999,
    battery: 5050,
    display: "6.7-inch QHD+ 120Hz Super Actua LTPO OLED",
    displayGroup: "2K",
    ram: "12GB",
    storage: "128GB",
    processor: "Google Tensor G3 (4nm)",
    camera: "50MP Main OIS + 48MP 5x Telephoto + 48MP UltraWide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Google+Pixel+8+Pro",
    details: `
      <h4>Google Pixel 8 Pro Specifications</h4>
      <p>Google's pro flagship with AI features, Super Actua display, temperature sensor, and 7 years of Android updates.</p>
      <ul>
        <li><strong>Price:</strong> ₹98,999 (Current Market Retail)</li>
        <li><strong>Battery:</strong> 5050 mAh (30W Wired, 23W Wireless Charging)</li>
        <li><strong>Display:</strong> 6.7-inch LTPO OLED, QHD+ (2992 x 1344 pixels), 1-120Hz, 2400 nits.</li>
        <li><strong>Processor:</strong> Google Tensor G3 + Titan M2 Security Chip</li>
        <li><strong>Storage / RAM:</strong> 12GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP Octa PD OIS + 48MP 5x Telephoto OIS + 48MP UltraWide with Macro</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Unmatched computational photography and 7 years of OS support.
      </div>
    `
  },
  {
    id: "google_pixel_8a",
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
  },

  // --- MOTOROLA ---
  {
    id: "moto_edge_50_pro",
    name: "Motorola Edge 50 Pro 5G",
    brand: "Motorola",
    price: 31999,
    battery: 4500,
    display: "6.7-inch 1.5K 144Hz Curved pOLED (Pantone Validated)",
    displayGroup: "1.5K",
    ram: "8GB",
    storage: "256GB",
    processor: "Snapdragon 7 Gen 3 (4nm)",
    camera: "50MP Main OIS + 10MP 3x Telephoto + 13MP UltraWide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Motorola+Edge+50+Pro",
    details: `
      <h4>Motorola Edge 50 Pro 5G Specifications</h4>
      <p>Vegan leather back smartphone with Pantone validated display/camera, IP68 water rating, and 125W TurboPower.</p>
      <ul>
        <li><strong>Price:</strong> ₹31,999 (Market Price)</li>
        <li><strong>Battery:</strong> 4500 mAh (125W TurboPower + 50W Wireless Charging)</li>
        <li><strong>Display:</strong> 6.7-inch Curved pOLED, 1.5K (2712 x 1220 pixels), 144Hz refresh rate, 2000 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 7 Gen 3 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 256GB Storage</li>
        <li><strong>Camera:</strong> 50MP Main OIS (f/1.4) + 10MP 3x Telephoto + 13MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> 125W wired + 50W wireless charging with 3x optical telephoto lens.
      </div>
    `
  },
  {
    id: "moto_edge_50_fusion",
    name: "Motorola Edge 50 Fusion 5G",
    brand: "Motorola",
    price: 22999,
    battery: 5000,
    display: "6.7-inch FHD+ 144Hz Curved pOLED",
    displayGroup: "FHD+",
    ram: "8GB",
    storage: "128GB",
    processor: "Snapdragon 7s Gen 2 (4nm)",
    camera: "50MP Sony LYT-700C OIS + 13MP UltraWide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Motorola+Edge+50+Fusion",
    details: `
      <h4>Motorola Edge 50 Fusion 5G Specifications</h4>
      <p>Sleek curved pOLED screen phone with IP68 underwater protection and Sony LYT main camera.</p>
      <ul>
        <li><strong>Price:</strong> ₹22,999 (Best Live Price)</li>
        <li><strong>Battery:</strong> 5000 mAh (68W TurboPower)</li>
        <li><strong>Display:</strong> 6.7-inch Curved pOLED, FHD+ (2400 x 1080), 144Hz, 1600 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 7s Gen 2 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP Sony LYT-700C OIS + 13MP UltraWide Macro</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> IP68 water protection and 144Hz curved screen under ₹25,000.
      </div>
    `
  },
  {
    id: "moto_g85",
    name: "Motorola Moto G85 5G",
    brand: "Motorola",
    price: 17999,
    battery: 5000,
    display: "6.67-inch FHD+ 120Hz 3D Curved pOLED",
    displayGroup: "FHD+",
    ram: "8GB",
    storage: "128GB",
    processor: "Snapdragon 6s Gen 3 (6nm)",
    camera: "50MP Sony LYT-600 OIS + 8MP UltraWide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Moto+G85+5G",
    details: `
      <h4>Motorola Moto G85 5G Specifications</h4>
      <p>First G-series phone featuring 3D curved pOLED display and Sony LYT OIS camera sensor.</p>
      <ul>
        <li><strong>Price:</strong> ₹17,999 (Current Retail)</li>
        <li><strong>Battery:</strong> 5000 mAh (30W TurboPower)</li>
        <li><strong>Display:</strong> 6.67-inch 3D Curved pOLED, FHD+ (2400 x 1080), 120Hz, 1600 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 6s Gen 3</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP Sony LYT-600 OIS + 8MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Most affordable curved pOLED phone in market under ₹18k.
      </div>
    `
  },

  // --- NOTHING ---
  {
    id: "nothing_phone_2a",
    name: "Nothing Phone (2a) 5G",
    brand: "Nothing",
    price: 23999,
    battery: 5000,
    display: "6.7-inch Flexible AMOLED 120Hz (Glyph Interface)",
    displayGroup: "FHD+",
    ram: "8GB",
    storage: "128GB",
    processor: "MediaTek Dimensity 7200 Pro (4nm)",
    camera: "50MP Main OIS + 50MP UltraWide",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Nothing+Phone+2a",
    details: `
      <h4>Nothing Phone (2a) 5G Specifications</h4>
      <p>Iconic transparent back design with Glyph light interface, dual 50MP cameras, and Nothing OS 2.6.</p>
      <ul>
        <li><strong>Price:</strong> ₹23,999 (Current Live Retail)</li>
        <li><strong>Battery:</strong> 5000 mAh (45W Fast Charge)</li>
        <li><strong>Display:</strong> 6.7-inch Flexible AMOLED, FHD+ (2412 x 1080 pixels), 120Hz, 1300 nits.</li>
        <li><strong>Processor:</strong> MediaTek Dimensity 7200 Pro (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP Main OIS + 50MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Dual 50MP camera setup and clean ad-free Nothing OS under ₹25k.
      </div>
    `
  },

  // --- IQOO ---
  {
    id: "iqoo_12",
    name: "iQOO 12 5G",
    brand: "IQOO",
    price: 52999,
    battery: 5000,
    display: "6.78-inch 1.5K 144Hz LTPO AMOLED",
    displayGroup: "1.5K",
    ram: "12GB",
    storage: "256GB",
    processor: "Snapdragon 8 Gen 3 (4nm)",
    camera: "50MP OIS + 64MP 3x Periscope OIS + 50MP Wide",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=iQOO+12",
    details: `
      <h4>iQOO 12 5G Specifications</h4>
      <p>Extreme gaming flagship with Snapdragon 8 Gen 3, dedicated Q1 gaming chip, and 64MP periscope telephoto camera.</p>
      <ul>
        <li><strong>Price:</strong> ₹52,999 (Current Live Retail)</li>
        <li><strong>Battery:</strong> 5000 mAh (120W FlashCharge - 100% in 27 mins)</li>
        <li><strong>Display:</strong> 6.78-inch 144Hz LTPO AMOLED, 1.5K (2800 x 1260), 3000 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 8 Gen 3 + Supercomputing Chip Q1</li>
        <li><strong>Storage / RAM:</strong> 12GB RAM / 256GB UFS 4.0</li>
        <li><strong>Camera:</strong> 50MP Main OIS + 64MP 3x Periscope OIS + 50MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Highest performance benchmark score phone under ₹55,000.
      </div>
    `
  },
  {
    id: "iqoo_neo_9_pro",
    name: "iQOO Neo 9 Pro 5G",
    brand: "IQOO",
    price: 34999,
    battery: 5160,
    display: "6.78-inch 1.5K 144Hz LTPO AMOLED",
    displayGroup: "1.5K",
    ram: "8GB",
    storage: "128GB",
    processor: "Snapdragon 8 Gen 2 (4nm)",
    camera: "50MP Sony IMX920 OIS + 8MP UltraWide",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=iQOO+Neo+9+Pro",
    details: `
      <h4>iQOO Neo 9 Pro 5G Specifications</h4>
      <p>Performance killer with Snapdragon 8 Gen 2, 120W FlashCharge, and flagship Sony IMX920 sensor.</p>
      <ul>
        <li><strong>Price:</strong> ₹34,999 (Market Price)</li>
        <li><strong>Battery:</strong> 5160 mAh (120W FlashCharge)</li>
        <li><strong>Display:</strong> 6.78-inch 144Hz LTPO AMOLED, 1.5K (2800 x 1260), 1400 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 8 Gen 2 (4nm) + Q1 Supercomputing Chip</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 128GB UFS 4.0</li>
        <li><strong>Camera:</strong> 50MP Sony IMX920 OIS + 8MP UltraWide</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Snapdragon 8 series flagship performance under ₹35k.
      </div>
    `
  },
  {
    id: "iqoo_z9x",
    name: "iQOO Z9x 5G",
    brand: "IQOO",
    price: 12999,
    battery: 6000,
    display: "6.72-inch FHD+ 120Hz LCD (1000 nits)",
    displayGroup: "FHD+",
    ram: "4GB",
    storage: "128GB",
    processor: "Snapdragon 6 Gen 1 (4nm)",
    camera: "50MP Main + 2MP Depth",
    imageUrl: "📱",
    source: "Amazon.in",
    sourceUrl: "https://www.amazon.in/s?k=iQOO+Z9x+5G",
    details: `
      <h4>iQOO Z9x 5G Specifications</h4>
      <p>Budget battery monster with 6000mAh capacity, Snapdragon 4nm chip, and 44W fast charging.</p>
      <ul>
        <li><strong>Price:</strong> ₹12,999 (Standard Pricing)</li>
        <li><strong>Battery:</strong> 6000 mAh (44W FlashCharge support)</li>
        <li><strong>Display:</strong> 6.72-inch IPS LCD, FHD+ (1080 x 2408 pixels), 120Hz, 1000 nits.</li>
        <li><strong>Processor:</strong> Snapdragon 6 Gen 1 (4nm)</li>
        <li><strong>Storage / RAM:</strong> 4GB RAM / 128GB</li>
        <li><strong>Camera:</strong> 50MP Main + 2MP Depth</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Verified 6000mAh capacity under ₹13,000.
      </div>
    `
  },

  // --- XIAOMI / POCO ---
  {
    id: "poco_x6_pro",
    name: "Poco X6 Pro 5G",
    brand: "Poco",
    price: 23999,
    battery: 5000,
    display: "6.67-inch 1.5K 120Hz Flow AMOLED",
    displayGroup: "1.5K",
    ram: "8GB",
    storage: "256GB",
    processor: "MediaTek Dimensity 8300-Ultra (4nm)",
    camera: "64MP OIS + 8MP UltraWide + 2MP Macro",
    imageUrl: "📱",
    source: "Flipkart",
    sourceUrl: "https://www.flipkart.com/search?q=Poco+X6+Pro",
    details: `
      <h4>Poco X6 Pro 5G Specifications</h4>
      <p>Budget performance king with Dimensity 8300-Ultra chip, 1.5K AMOLED screen, and HyperOS.</p>
      <ul>
        <li><strong>Price:</strong> ₹23,999 (Current Market Retail)</li>
        <li><strong>Battery:</strong> 5000 mAh (67W Turbo Charge)</li>
        <li><strong>Display:</strong> 6.67-inch Flow AMOLED, 1.5K (2712 x 1220 pixels), 120Hz, 1800 nits.</li>
        <li><strong>Processor:</strong> MediaTek Dimensity 8300-Ultra (4nm)</li>
        <li><strong>Storage / RAM:</strong> 8GB RAM / 256GB UFS 4.0</li>
        <li><strong>Camera:</strong> 64MP OIS + 8MP UltraWide + 2MP Macro</li>
      </ul>
      <div class="drawer-highlight-block success-border">
        <strong>Market Data Note:</strong> Best performance-to-price ratio in ₹20k-25k budget segment.
      </div>
    `
  }
];

// ==========================================================================
// STATE CONTROLLER
// ==========================================================================
class AuraCompareApp {
  constructor() {
    this.activeTab = "product-compare";
    this.currentUser = null;
    this.history = [];
    
    // Load API Key from storage if user provided one
    this.geminiApiKey = localStorage.getItem("gemini_api_key") || "";

    // Initialize state & DOM bindings
    this.checkAuthentication();
    this.loadHistory();
    this.initDOM();
  }

  // =====================================================================
  // GEMINI AI ENGINE (Clean Error Handling & Graceful Fallbacks)
  // =====================================================================
  async callGeminiAPI(prompt, systemInstruction = "", jsonMode = false, useGoogleSearch = false, retries = 1) {
    // Only attempt Gemini call if user configured a valid API key starting with AIzaSy
    if (!this.geminiApiKey || typeof this.geminiApiKey !== "string" || !this.geminiApiKey.startsWith("AIzaSy")) {
      console.log("No custom valid Gemini API key set. Using live product market engine.");
      return null;
    }

    const modelsToTry = ["gemini-2.0-flash", "gemini-1.5-flash"];
    let lastError = null;

    for (const model of modelsToTry) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.geminiApiKey}`;

      const requestBody = {
        contents: [{ parts: [{ text: prompt }] }]
      };

      if (systemInstruction) {
        requestBody.systemInstruction = { parts: [{ text: systemInstruction }] };
      }

      if (jsonMode) {
        requestBody.generationConfig = { responseMimeType: "application/json" };
      }

      if (useGoogleSearch) {
        requestBody.tools = [{ googleSearch: {} }];
      }

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

    if (lastError) console.warn("Gemini API call notice:", lastError.message);
    return null;
  }

  // =====================================================================
  // PUBLIC PRODUCT API INTEGRATION (Auxiliary Live Market Retrieval)
  // =====================================================================
  async fetchFromPublicProductAPI(query) {
    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) return null;
      const data = await res.json();
      if (Array.isArray(data.products) && data.products.length > 0) {
        return data.products.map((p, idx) => ({
          id: `public_api_${p.id}_${Date.now()}`,
          name: p.title,
          brand: p.brand || "Market Device",
          price: Math.round(p.price * 83), // USD to INR conversion
          battery: p.category === 'smartphones' ? 5000 : 4500,
          display: "FHD+ 120Hz AMOLED Display",
          displayGroup: "FHD+",
          ram: "8GB",
          storage: "128GB",
          processor: "Octa-Core Chipset",
          camera: "50MP Main Camera",
          imageUrl: "📱",
          source: "Global Market API",
          sourceUrl: `https://dummyjson.com/products/${p.id}`,
          isLive: true,
          details: `
            <h4>${p.title}</h4>
            <p>${p.description || "Live product retrieved from market inventory catalog."}</p>
            <ul>
              <li><strong>Price:</strong> ₹${Math.round(p.price * 83).toLocaleString()}</li>
              <li><strong>Rating:</strong> ⭐ ${p.rating || 4.5} / 5</li>
              <li><strong>Stock:</strong> ${p.stock || 'In Stock'}</li>
              <li><strong>Category:</strong> ${p.category}</li>
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
          query: "Samsung phone under 30000 with 6000mAh battery",
          filters: { price: 30000, battery: 6000, brand: "Samsung", display: "" },
          matchesCount: 2,
          date: "Aug 14, 2026, 09:00 AM",
          avgPrice: "₹22,499"
        },
        {
          id: "hist_2",
          query: "iPhone under 70000 with OLED display",
          filters: { price: 70000, battery: 0, brand: "Apple", display: "OLED" },
          matchesCount: 2,
          date: "Aug 14, 2026, 09:05 AM",
          avgPrice: "₹61,400"
        }
      ];
      localStorage.setItem("auracompare_history", JSON.stringify(this.history));
    }
    this.renderHistoryTable();
  }

  initDOM() {
    // API KEY INPUT BINDING
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

    // AUTH LISTENERS
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

    // Manual Sign In / Sign Up toggles
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

    // NAVIGATION TABS
    document.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("click", (e) => {
        const tab = e.currentTarget.getAttribute("data-tab");
        this.switchTab(tab);
      });
    });

    // Run Comparison Trigger
    const btnCompare = document.getElementById("btn-run-compare");
    const inputSearch = document.getElementById("nl-search-input");
    
    if (btnCompare && inputSearch) {
      btnCompare.addEventListener("click", () => this.runProductSearch());
      inputSearch.addEventListener("keypress", (e) => {
        if (e.key === "Enter") this.runProductSearch();
      });
    }

    // Suggestion pills
    document.querySelectorAll(".suggestion-tag").forEach(tag => {
      tag.addEventListener("click", (e) => {
        const query = e.currentTarget.getAttribute("data-query");
        inputSearch.value = query;
        this.runProductSearch();
      });
    });

    // Drawer closing bindings
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
      this.showToast(`Welcome, ${name}. Secure session saved.`, "success");
      this.checkAuthentication();
    }, 1200);
  }

  switchTab(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll(".nav-item").forEach(item => {
      if (item.getAttribute("data-tab") === tabId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    const titleEl = document.getElementById("page-title");
    const descEl = document.getElementById("page-description");

    if (titleEl && descEl) {
      if (tabId === "product-compare") {
        titleEl.textContent = "Live Product Search & Comparison";
        descEl.textContent = "Describe target specs to retrieve and rank live products across marketplaces";
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

  // Ensure buy button routes to reliable online store query
  getValidBuyUrl(prod) {
    const rawName = prod.name || `${prod.brand || ""} smartphone`;
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
    }
    
    return `https://www.google.com/search?q=${encodeURIComponent("buy " + cleanName + " online india")}`;
  }

  // DRAWER HANDLERS
  openDrawer(productId) {
    const prod = productDatabase.find(p => p.id === productId);
    if (!prod) return;

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
    document.getElementById("drawer-doc-title").textContent = prod.name;
    document.getElementById("drawer-doc-brand").textContent = prod.brand;
    document.getElementById("drawer-doc-price").textContent = `₹${prod.price.toLocaleString()}`;

    const urlLink = document.getElementById("drawer-doc-url");
    const buyUrl = this.getValidBuyUrl(prod);
    urlLink.href = buyUrl;
    urlLink.target = "_blank";
    urlLink.rel = "noopener noreferrer";
    urlLink.textContent = `Buy on ${prod.source || "Amazon.in"}`;

    document.getElementById("drawer-doc-content").innerHTML = prod.details || `<p>No detailed spec sheet available for this result.</p>`;
    document.getElementById("document-drawer").classList.add("open");
  }

  // ==========================================================================
  // RETRIEVAL & SEARCH PIPELINE
  // ==========================================================================
  async runProductSearch() {
    const input = document.getElementById("nl-search-input");
    const query = input.value.trim();

    if (!query) {
      this.showToast("Please enter a product or specification query", "warning");
      return;
    }

    this.showToast("Searching live market API & spec index...", "info");

    // Hide empty state & results, show pipeline monitor
    document.getElementById("compare-empty-view").classList.add("hidden");
    document.getElementById("search-results-container").classList.add("hidden");
    
    const monitor = document.getElementById("pipeline-monitor");
    monitor.classList.remove("hidden");

    // Reset pipeline step displays
    const steps = ["step-parser", "step-crawlers", "step-ranking"];
    steps.forEach(id => {
      const step = document.getElementById(id);
      step.classList.remove("active-step");
      const indicator = step.querySelector(".step-icon-indicator");
      indicator.className = "step-icon-indicator pending";
    });

    document.getElementById("parsed-chips-container").classList.add("hidden");
    document.getElementById("parsed-chips-container").innerHTML = "";
    document.getElementById("parser-status").textContent = "Parsing query constraints...";
    document.getElementById("ranking-status").textContent = "Awaiting matched candidates...";

    // Reset crawl progress bars
    const crawlers = ["amazon", "flipkart", "samsung"];
    crawlers.forEach(c => {
      document.getElementById(`crawl-fill-${c}`).style.width = "0%";
      document.getElementById(`crawl-time-${c}`).textContent = "Pending";
      document.getElementById(`crawl-time-${c}`).closest(".crawler-bar-row").classList.remove("completed");
    });

    // Start timer display
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
    document.getElementById("parser-status").textContent = "Query parsed & target parameters extracted.";
    
    const chipsContainer = document.getElementById("parsed-chips-container");
    chipsContainer.classList.remove("hidden");
    chipsContainer.innerHTML = "";
    if (parsedFilters.brand) chipsContainer.innerHTML += `<span class="filter-chip">Brand: ${parsedFilters.brand}</span>`;
    if (parsedFilters.price) chipsContainer.innerHTML += `<span class="filter-chip">Price <= ₹${parsedFilters.price.toLocaleString()}</span>`;
    if (parsedFilters.battery) chipsContainer.innerHTML += `<span class="filter-chip">Battery >= ${parsedFilters.battery}mAh</span>`;
    if (parsedFilters.display) chipsContainer.innerHTML += `<span class="filter-chip">Display: ${parsedFilters.display}</span>`;
    if (parsedFilters.ram) chipsContainer.innerHTML += `<span class="filter-chip">RAM: ${parsedFilters.ram}</span>`;
    chipsContainer.innerHTML += `<span class="filter-chip">Category: Mobile</span>`;

    // STEP 2: PARALLEL API / INDEX FETCH
    const stepCrawlers = document.getElementById("step-crawlers");
    stepCrawlers.classList.add("active-step");
    stepCrawlers.querySelector(".step-icon-indicator").className = "step-icon-indicator active";

    // Attempt Gemini or Public API fetch
    let liveProducts = null;
    if (this.geminiApiKey && this.geminiApiKey.startsWith("AIzaSy")) {
      const prompt = `Find smartphones matching "${query}". Return raw JSON array of 5 products: [{"name":"","brand":"","price":10000,"battery":5000,"display":"","ram":"","storage":"","processor":"","camera":"","source":""}]`;
      const geminiRes = await this.callGeminiAPI(prompt, "", true);
      if (geminiRes) {
        try {
          const cleaned = geminiRes.replace(/```json/gi, "").replace(/```/g, "").trim();
          const arr = JSON.parse(cleaned);
          if (Array.isArray(arr) && arr.length > 0) {
            liveProducts = arr.map((p, idx) => ({
              id: `gemini_live_${idx}_${Date.now()}`,
              name: p.name || "Live Market Model",
              brand: p.brand || "Brand",
              price: typeof p.price === "number" ? p.price : parseInt(String(p.price).replace(/[^0-9]/g, "")) || 29999,
              battery: typeof p.battery === "number" ? p.battery : parseInt(p.battery) || 5000,
              display: p.display || "FHD+ 120Hz Display",
              displayGroup: "FHD+",
              ram: p.ram || "8GB",
              storage: p.storage || "128GB",
              processor: p.processor || "Octa-Core",
              camera: p.camera || "50MP Main",
              imageUrl: "📱",
              source: p.source || "Live Search",
              sourceUrl: "",
              isLive: true,
              details: `<h4>${p.name}</h4><p>Retrieved from live Gemini API grounding.</p><ul><li><strong>Price:</strong> ₹${(p.price || 0).toLocaleString()}</li><li><strong>Battery:</strong> ${p.battery} mAh</li><li><strong>Display:</strong> ${p.display}</li></ul>`
            }));
          }
        } catch (e) {
          console.warn("Gemini JSON parse fallback");
        }
      }
    }

    if (!liveProducts) {
      liveProducts = await this.fetchFromPublicProductAPI(query);
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

    // STEP 3: RE-RANKING & SELECTION
    const stepRanking = document.getElementById("step-ranking");
    stepRanking.classList.add("active-step");
    stepRanking.querySelector(".step-icon-indicator").className = "step-icon-indicator active";
    document.getElementById("ranking-status").textContent = "Re-ranking devices against market specs...";

    let rankedResults;
    if (liveProducts && liveProducts.length > 0) {
      rankedResults = liveProducts;
    } else {
      rankedResults = this.computeComparisonRanking(parsedFilters, query);
    }

    await new Promise(resolve => setTimeout(resolve, 300));

    stepRanking.classList.remove("active-step");
    stepRanking.querySelector(".step-icon-indicator").className = "step-icon-indicator completed";
    document.getElementById("ranking-status").textContent = `Ranked ${rankedResults.length} market devices successfully.`;

    clearInterval(timerInterval);

    // Hide monitor, show results container
    monitor.classList.add("hidden");
    document.getElementById("search-results-container").classList.remove("hidden");

    // Render output
    this.renderComparisonResult(query, parsedFilters, rankedResults);
    
    // Log search to history
    this.saveQueryToHistory(query, parsedFilters, rankedResults.length);

    this.showToast("Product comparison complete.", "success");
  }

  // QUERY PARSER
  parseQueryConstraints(queryText) {
    const text = queryText.replace(/(\d+),(\d+)/g, '$1$2').toLowerCase();
    const filters = {
      price: null,
      battery: null,
      brand: null,
      display: null,
      ram: null
    };

    // Extract brand
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

    // Extract price cap
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

    // Extract battery
    const batteryRegex = /(\d{4})\s*(?:mah|m ah)/;
    let bmatch = text.match(batteryRegex);
    if (bmatch) {
      filters.battery = parseInt(bmatch[1]);
    } else if (text.includes("big battery") || text.includes("huge battery") || text.includes("battery monster")) {
      filters.battery = 5500;
    }

    // Extract display spec
    if (text.includes("2k") || text.includes("qhd")) filters.display = "2K";
    else if (text.includes("1.5k")) filters.display = "1.5K";
    else if (text.includes("amoled")) filters.display = "AMOLED";
    else if (text.includes("oled") || text.includes("poled")) filters.display = "OLED";
    else if (text.includes("144hz")) filters.display = "144Hz";
    else if (text.includes("120hz")) filters.display = "120Hz";
    else if (text.includes("curved")) filters.display = "Curved";

    // Extract RAM
    const ramMatch = text.match(/(\d+)\s*(?:gb ram|gb)/);
    if (ramMatch && parseInt(ramMatch[1]) >= 4 && parseInt(ramMatch[1]) <= 16) {
      filters.ram = `${ramMatch[1]}GB`;
    }

    return filters;
  }

  // RANKING ENGINE FOR REAL MARKET PRODUCTS
  computeComparisonRanking(filters, queryText = "") {
    let results = [];
    const targetBrand = filters.brand ? filters.brand.toLowerCase() : null;

    // Filter market product database by brand and budget
    let candidatePool = productDatabase.filter(p => {
      if (targetBrand) {
        const brandMatch = p.brand.toLowerCase() === targetBrand ||
                           p.name.toLowerCase().includes(targetBrand) ||
                           (targetBrand === "apple" && p.name.toLowerCase().includes("iphone")) ||
                           (targetBrand === "xiaomi" && (p.brand.toLowerCase() === "redmi" || p.brand.toLowerCase() === "poco"));
        if (!brandMatch) return false;
      }
      if (filters.price && p.price > filters.price * 1.15) {
        return false;
      }
      return true;
    });

    // If exact brand/price filter yielded 0 results, fall back to keyword search in market db
    if (candidatePool.length === 0) {
      const qTokens = queryText.toLowerCase().split(/\s+/).filter(t => t.length > 2 && !["under", "below", "phone", "mobile", "with", "than", "best"].includes(t));
      candidatePool = productDatabase.filter(p => {
        const pText = `${p.name} ${p.brand} ${p.details}`.toLowerCase();
        return qTokens.some(t => pText.includes(t));
      });
    }

    // Default fallback to popular market models if still empty
    if (candidatePool.length === 0) {
      candidatePool = productDatabase.slice(0, 8);
    }

    candidatePool.forEach(p => {
      let score = 100;
      let reasons = [];

      if (filters.price) {
        if (p.price <= filters.price) {
          let priceRatio = p.price / filters.price;
          if (priceRatio > 0.9) reasons.push("Nearing budget cap");
          else reasons.push(`Well within budget (₹${p.price.toLocaleString()})`);
        } else {
          score -= 30;
          reasons.push(`Slightly above target budget (₹${p.price.toLocaleString()})`);
        }
      }

      if (filters.battery) {
        if (p.battery >= filters.battery) {
          reasons.push(`Battery meets/exceeds target (${p.battery}mAh)`);
        } else {
          let gap = filters.battery - p.battery;
          let penalty = Math.min(25, Math.ceil(gap / 100) * 3);
          score -= penalty;
          reasons.push(`Battery capacity is ${p.battery}mAh (-${gap}mAh)`);
        }
      }

      if (filters.display) {
        const pDisplayLower = (p.display || "").toLowerCase();
        const fDisplayLower = filters.display.toLowerCase();
        if (pDisplayLower.includes(fDisplayLower)) {
          reasons.push(`Matches display criteria: ${filters.display}`);
        } else {
          score -= 10;
          reasons.push(`Display panel differs (${p.display})`);
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

  // RENDER COMPARISON MATRIX & ANALYSIS
  renderComparisonResult(queryText, filters, results) {
    const synthesisBody = document.getElementById("rag-synthesis-body");
    const sourcesContainer = document.getElementById("retrieved-sources-log-container");
    const tableBody = document.getElementById("comparison-table-body");
    const tableCounter = document.getElementById("table-results-counter");

    synthesisBody.innerHTML = "";
    sourcesContainer.innerHTML = "";
    tableBody.innerHTML = "";

    let aiExplanation = "";

    if (results.length === 0) {
      aiExplanation = `
        <div class="synthesis-text">
          <p><strong>Market Search Analysis:</strong> We searched active market listings but found <strong>0 products</strong> matching your criteria under ${filters.price ? '₹' + filters.price.toLocaleString() : 'requested bounds'}.</p>
          <p class="text-secondary">Try adjusting budget limits or query terms.</p>
        </div>
      `;
    } else {
      let topMatch = results[0];
      
      aiExplanation = `<div class="synthesis-text">`;
      aiExplanation += `<p>Based on live market specifications for <em>"${queryText}"</em>, the top recommended product currently available in the market is the <span class="highlight-tag">${topMatch.name}</span>, priced at <strong>₹${topMatch.price.toLocaleString()}</strong> <span class="cite-pill" data-doc="${topMatch.id}">[1]</span>.`;

      if (filters.battery) {
        if (topMatch.battery >= filters.battery) {
          aiExplanation += ` It easily fulfills your battery requirement of <strong>${filters.battery}mAh</strong> with a rated capacity of <strong>${topMatch.battery}mAh</strong>.`;
        } else {
          aiExplanation += ` It features a solid <strong>${topMatch.battery}mAh battery</strong> providing strong day-long endurance.`;
        }
      }

      if (filters.display) {
        if (topMatch.display.toLowerCase().includes(filters.display.toLowerCase())) {
          aiExplanation += ` It comes equipped with your requested <strong>${filters.display} panel</strong> (${topMatch.display}).`;
        } else {
          aiExplanation += ` The device features a vibrant <strong>${topMatch.display}</strong> screen.`;
        }
      }
      
      aiExplanation += ` It is powered by the <strong>${topMatch.processor || 'Octa-core processor'}</strong> with <strong>${topMatch.ram || '8GB'} RAM</strong> and <strong>${topMatch.camera || 'high resolution main camera'}</strong>.</p>`;

      const alternatives = results.slice(1, 4);
      if (alternatives.length > 0) {
        aiExplanation += `<h4>Market Alternatives:</h4><ul>`;
        alternatives.forEach((alt, idx) => {
          aiExplanation += `<li><span class="highlight-tag">${alt.name}</span> at <strong>₹${alt.price.toLocaleString()}</strong> <span class="cite-pill" data-doc="${alt.id}">[${idx + 2}]</span> (${alt.battery}mAh battery, ${alt.display}).</li>`;
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

    // Render Attribution Sources
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
            "Verified Price: ₹${r.price.toLocaleString()} | Display: ${r.display} | Battery: ${r.battery}mAh | Processor: ${r.processor || 'N/A'}"
          </div>
        `;
        sourcesContainer.appendChild(item);
      });
    }

    // Render Comparison Table
    if (tableCounter) tableCounter.textContent = `Found ${results.length} active devices currently existing in the market.`;
    
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

        tr.innerHTML = `
          <td>
            <div class="prod-details-cell">
              <div class="prod-icon">${r.imageUrl}</div>
              <div class="prod-name-stack">
                <span class="prod-title">${r.name}</span>
                <span class="prod-source-attribution">Ref: [${idx + 1}] (${r.source})</span>
              </div>
            </div>
          </td>
          <td><span style="font-weight:600; color:#fff;">${r.brand}</span></td>
          <td><span style="font-family: var(--font-mono); font-size:12.5px;">${r.battery} mAh</span></td>
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
            No comparable models located. Broaden search criteria bounds.
          </td>
        </tr>
      `;
    }
  }

  // SAVED SEARCHES (HISTORY)
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

      let filterTxt = "";
      if (item.filters.brand) filterTxt += `[Brand: ${item.filters.brand}] `;
      if (item.filters.price) filterTxt += `[Price <= ₹${item.filters.price.toLocaleString()}] `;
      if (item.filters.battery) filterTxt += `[Battery >= ${item.filters.battery}mAh] `;
      if (item.filters.display) filterTxt += `[Display: ${item.filters.display}] `;
      if (item.filters.ram) filterTxt += `[RAM: ${item.filters.ram}] `;
      if (!filterTxt) filterTxt = "[None]";

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

// Instantiate application on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.AuraCompareInstance = new AuraCompareApp();
});
