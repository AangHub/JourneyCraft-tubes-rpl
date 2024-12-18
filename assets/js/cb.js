class GeminiChatbot {
  constructor() {
    this.API_KEY = "AIzaSyCzAe7PevMoSYguwJzAOxj1rIwIWVWFt_A";
    this.destinations = [
        {
          name: "Batu Night Spectacular (BNS)",
          lat: -7.8963,
          lon: 112.53452,
          categories: ["hiburan"],
          description:
            "Tempat hiburan malam dengan wahana permainan dan pertunjukan lampu spektakuler.",
          link: "https://jtp.id/bns/mobile/index.html",
        },
        {
          name: "Gunung Bromo",
          lat: -7.9425,
          lon: 112.953,
          categories: ["alam"],
          description: "Gunung berapi terkenal dengan keindahan panoramanya.",
          link: "https://maps.app.goo.gl/VSCDjmnrhsRMrMq19",
        },
        {
          name: "Jatim Park 1",
          lat: -7.8838,
          lon: 112.5332,
          categories: ["edukasi", "hiburan"],
          description:
            "Taman rekreasi dengan wahana edukasi yang menggabungkan ilmu pengetahuan dan hiburan.",
          link: "https://maps.app.goo.gl/E93hLE4Tnju4PyJV7",
        },
        {
          name: "Jatim Park 2",
          lat: -7.8831,
          lon: 112.5286,
          categories: ["edukasi", "hiburan"],
          description: "Taman bermain dan kebun binatang modern.",
          link: "https://maps.app.goo.gl/JFMSyjTZFbr2WuTJ9",
        },
        {
          name: "Coban Rondo",
          lat: -7.7303,
          lon: 112.4638,
          categories: ["alam"],
          description: "Air terjun indah di lereng Gunung Panderman.",
          link: "https://maps.app.goo.gl/UASo4rsZnmcDvpEUA",
        },
        {
          name: "Museum Angkut",
          lat: -7.8787,
          lon: 112.51995,
          categories: ["budaya", "edukasi"],
          description: "Museum transportasi terbesar di Indonesia.",
          link: "https://maps.app.goo.gl/6LaFet7sTEWLm3eF7",
        },
        {
          name: "Alun-alun Kota Malang",
          lat: -7.9824,
          lon: 112.6308,
          categories: ["budaya"],
          description: "Pusat kota dengan suasana yang ramai dan menarik.",
          link: "https://maps.app.goo.gl/2gyophrkx2JNNkSx8",
        },
        {
          name: "Kebun Teh Wonosari",
          lat: -7.9192,
          lon: 112.9473,
          categories: ["alam"],
          description: "Perkebunan teh dengan pemandangan hijau menakjubkan.",
          link: "https://maps.app.goo.gl/AGKzt9Nkh74nuhwT8",
        },
        {
          name: "Paralayang Batu",
          lat: -7.8547,
          lon: 112.4968,
          categories: ["alam", "hiburan"],
          description:
            "Pegunungan Batu dengan wisata paralayang dan city lightnya di malam hari.",
          link: "https://maps.app.goo.gl/VWcbofsvKaC51Hpy9",
        },
        {
          name: "Hotel Tugu Malang",
          lat: -7.9771,
          lon: 112.6331,
          categories: ["hotel", "budaya"],
          description:
            "Hotel bintang 5 dengan nuansa tradisional Jawa, lengkap dengan koleksi seni dan artefak bersejarah.",
          link: "https://www.tuguhotels.com",
        },
        {
          name: "The Shalimar Boutique Hotel",
          lat: -7.9698,
          lon: 112.6252,
          categories: ["hotel"],
          description:
            "Hotel bintang 5 dengan arsitektur kolonial yang elegan, menawarkan kenyamanan dan kemewahan.",
          link: "https://www.theshalimarhotel.co.id",
        },
        {
          name: "Grand Mercure Malang Mirama",
          lat: -7.9417,
          lon: 112.6486,
          categories: ["hotel"],
          description:
            "Hotel bintang 5 dengan fasilitas lengkap seperti kolam renang, pusat kebugaran, dan restoran mewah.",
          link: "https://www.all.accor.com/hotel/grand-mercure-malang",
        },
        {
          name: "HARRIS Hotel & Conventions Malang",
          lat: -7.92586,
          lon: 112.6452,
          categories: ["hotel"],
          description:
            "Hotel bintang 4 dengan desain kontemporer, memiliki kolam renang, spa, dan pusat kebugaran.",
          link: "https://malang.harrishotels.com",
        },
        {
          name: "Atria Hotel Malang",
          lat: -7.9492,
          lon: 112.6392,
          categories: ["hotel"],
          description:
            "Hotel bintang 4 dengan fasilitas lengkap, termasuk restoran dan kolam renang, di pusat kota Malang.",
          link: "https://www.atriahotels.com/malang",
        },
        {
          name: "Ijen Suites Resort & Convention",
          lat: -7.9808,
          lon: 112.6156,
          categories: ["hotel"],
          description:
            "Hotel bintang 4 dengan pemandangan indah, fasilitas kolam renang, dan pusat kebugaran.",
          link: "https://www.ijensuitesmalang.com",
        },
        {
          name: "The Alana Hotel",
          lat: -7.8377,
          lon: 112.6759,
          categories: ["hotel"],
          description:
            "Hotel bintang 4 dengan fasilitas modern seperti kolam renang dan pusat kebugaran.",
          link: "https://www.alanahotels.com",
        },
        {
          name: "Aria Gajayana Hotel",
          lat: -7.9774,
          lon: 112.6240,
          categories: ["hotel"],
          description:
            "Hotel bintang 4 yang terletak di pusat kota, dekat dengan pusat perbelanjaan dan destinasi wisata.",
          link: "https://www.ariagajayanahotel.com",
        },
        {
          name: "Air Terjun Grojokan Sewu",
          lat: -7.8662,
          lon: 112.4232,
          categories: ["alam"],
          description:
            "Air terjun megah setinggi 180 meter dengan pemandangan tebing hijau yang menakjubkan.",
          link: "https://maps.app.goo.gl/hSDGgWcHcvAGpwwm8",
        },
        {
          name: "Pantai Balekambang",
          lat: -8.4031,
          lon: 112.5338,
          categories: ["alam"],
          description:
            "Pantai indah dengan pasir putih dan pura di atas pulau karang, sering disebut 'Tanah Lot'nya Malang.",
          link: "https://maps.app.goo.gl/DEQcNDSVJQHqS5Vm7",
        },
        {
          name: "Gunung Panderman",
          lat: -7.9021, 
          lon: 112.4972,
          categories: ["alam"],
          description:
            "Gunung dengan ketinggian 2.000 mdpl, cocok untuk pendaki pemula dengan pemandangan kota Batu dari puncaknya.",
          link: "https://maps.app.goo.gl/tksza672Cv58oBtc6",
        },
        {
          name: "Pantai Tiga Warna",
          lat: -8.4379, 
          lon: 112.6780,
          categories: ["alam"],
          description:
            "Pantai dengan gradasi tiga warna air laut, menawarkan snorkeling dengan terumbu karang yang indah.",
          link: "https://maps.app.goo.gl/gu9d1nQRCexQvLxk9",
        },
        {
          name: "Coban Rais",
          lat: -7.9147, 
          lon: 112.5058,
          categories: ["alam"],
          description:
            "Air terjun setinggi 20 meter dengan jalur trekking menantang dan spot foto menarik seperti Bukit Bulu dan Flower Garden.",
          link: "https://maps.app.goo.gl/CZi6it3fTbnX1jtQ6",
        },
        {
          name: "Sumber Sirah",
          lat: -8.1227,
          lon: 112.6206,
          categories: ["alam"],
          description:
            "Mata air jernih yang cocok untuk snorkeling, menampilkan pemandangan bawah air yang memukau.",
          link: "https://maps.app.goo.gl/Mg6cAWq8KzzsSw3i8",
        },
        {
          name: "Pantai Ngantep",
          lat: -8.4083, 
          lon: 112.5749,
          categories: ["alam"],
          description:
            "Pantai yang masih asri dengan ombak tenang, ideal untuk bersantai dan menikmati keindahan alam.",
          link: "https://maps.app.goo.gl/ccWB6Ssiygk1rrTQ8",
        },
        {
          name: "Coban Rondo",
          lat: -7.8838, 
          lon: 112.4766,
          categories: ["alam"],
          description:
            "Air terjun setinggi 84 meter dengan fasilitas outbound dan labirin yang menarik.",
          link: "https://maps.app.goo.gl/coban-rondo",
        },
        {
          name: "Pantai Teluk Asmara",
          lat: -8.4424, 
          lon: 112.6652,
          categories: ["alam"],
          description:
            "Pantai dengan pulau-pulau kecil yang menyerupai Raja Ampat, menawarkan pemandangan eksotis dan spot snorkeling.",
          link: "https://maps.app.goo.gl/uEk2MYBRj6EsBEhS6",
        },
        {
          name: "Candi Singosari",
          lat:-7.8875, 
          lon: 112.66375,
          categories: ["budaya", "edukasi"],
          description: "Candi Hindu bersejarah dari zaman Kerajaan Singosari.",
          link: "https://maps.app.goo.gl/cU4ELQdR8Z9Ecvho8",
        },
        {
          name: "Kampung Warna-Warni Jodipan",
          lat: -7.9782,
          lon: 112.6371,
          categories: ["budaya", "hiburan"],
          description:
            "Perkampungan dengan bangunan berwarna-warni, cocok untuk spot foto Instagram.",
          link: "https://maps.app.goo.gl/nxhtE9Az47RJPAi47",
        },
        {
          name: "Omah Kayu",
          lat:-7.8547, 
          lon: 112.4977,
          categories: ["alam", "hiburan", "hotel"],
          description:
            "Penginapan dan wisata di rumah pohon dengan pemandangan kota Batu dari ketinggian.",
          link: "https://maps.app.goo.gl/EUrjmJcgyA7NwgL3A",
        },
        {
          name: "Selecta",
          lat: -7.8218,
          lon: 112.5266,
          categories: ["alam", "hiburan"],
          description:
            "Taman rekreasi sejuk di ketinggian dengan kolam renang dan kebun buah.",
          link: "https://maps.app.goo.gl/4gLU6mmkqK33T2Qb9",
        },
        {
          name: "Kusuma Agrowisata",
          lat: -7.8835,
          lon: 112.5159,
          categories: ["alam", "edukasi"],
          description:
            "Tempat wisata pertanian dengan berbagai jenis tanaman dan kegiatan petik buah.",
          link: "https://maps.app.goo.gl/ogTMCis6bS9nAJFDA",
        },
        {
          name: "Predator Fun Park",
          lat: -7.9123, 
          lon: 112.5486,
          categories: ["hiburan", "edukasi"],
          description:
            "Taman bermain dengan koleksi satwa buas dan berbagai wahana edukasi.",
          link: "https://maps.app.goo.gl/9JevMBukez9JM4C38",
        },
        {
          name: "Eco Green Park",
          lat: -7.8876, 
          lon: 112.5266,
          categories: ["alam", "edukasi"],
          description:
            "Taman edukasi lingkungan dengan berbagai area hijau dan wahana interaktif.",
          link: "https://maps.app.goo.gl/53nNEax17okoyaYX6",
        },
        {
          name: "Agro Wisata Apel Malang",
          lat:-7.8514, 
          lon: 112.5269,
          categories: ["alam", "edukasi"],
          description:
            "Perkebunan apel dengan kegiatan petik apel dan edukasi pertanian.",
          link: "Agro Wisata Apel Malang",
        },
        {
          name: "The Singhasari Resort",
          lat: -7.8930,
          lon: 112.5501,
          categories: ["hotel", "hiburan"],
          description:
            "Resort mewah dengan fasilitas lengkap dan pemandangan pegunungan.",
          link: "https://maps.app.goo.gl/4JmDLqCKAguuAhJu5",
        },
        {
          name: "Batu Flower Garden",
          lat: -7.9114, 
          lon: 112.5188,
          categories: ["alam", "hiburan"],
          description:
            "Taman bunga luas dengan berbagai jenis tanaman hias dan spot foto.",
          link: "https://maps.app.goo.gl/PidJN9WD4Mbx94j16",
        },
        {
          name: "Kasembon Rafting Malang",
          lat: -7.8021,
          lon: 112.3123,
          categories: ["alam", "hiburan"],
          description:
            "Lokasi arung jeram yang menantang di Sungai Brantas dengan pemandangan alam.",
          link: "https://maps.app.goo.gl/16jRgpUo32FAS28H7",
        }, 
        {
          name: "Coban Talun",
          lat: -7.8031, 
          lon: 112.5163,
          categories: ["alam"],
          description:
            "Air terjun tersembunyi dengan Trek pendakian menantang dan pemandangan hijau.",
          link: "https://maps.app.goo.gl/jjh16dcBcftDiv5g7",
        },
        {
          name: "Wisata Edukasi Kopi Malang",
          lat: -7.9623,
          lon: 112.6053,
          categories: ["edukasi", "alam"],
          description:
            "Perjalanan dari biji kopi hingga secangkir, dengan workshop dan degustasi.",
          link: "https://maps.app.goo.gl/Gq78rZvnyreFGx6B7",
        },
        {
          name: "Kampung Budaya Polowijen",
          lat: -7.9203,
          lon: 112.6444,
          categories: ["budaya", "edukasi"],
          description:
            "Pusat pelestarian budaya lokal dengan berbagai kegiatan tradisional.",
          link: "https://maps.app.goo.gl/NAX3MtXL3Wixj3LPA",
        },
        {
          name: "Pantai Sendang Biru",
          lat: -8.4318,
          lon: 112.6840,
          categories: ["alam"],
          description:
            "Pantai eksotis di selatan Kabupaten Malang dengan pemandangan alam memukau.",
          link: "https://maps.app.goo.gl/pdgeyZFHBpjUzDUU7",
        },
        {
          name: "Pantai Ngliyep",
          lat: -8.3834,
          lon: 112.4241,
          categories: ["alam"],
          description:
            "Pantai alami dengan ombak tenang dan pemandangan hijau di sekitarnya.",
          link: "https://maps.app.goo.gl/VB843ubiSXXJnCkD7",
        },
        {
          name: "Sumber Maron",
          lat: -8.1654, 
          lon: 112.5920,
          categories: ["alam"],
          description:
            "Objek wisata alam dengan mata air jernih dan suasana pedesaan.",
          link: "https://maps.app.goo.gl/oztSx1KJYcXdVdMC9",
        },
        {
          name: "Gunung Kawi",
          lat: -7.9541, 
          lon: 112.4651,
          categories: ["alam", "budaya"],
          description:
            "Kompleks makam keramat dengan pemandangan pegunungan hijau.",
          link: "https://maps.app.goo.gl/9Ac8a6uDC1ufV3eq5",
        },
        {
          name: "Cafe Sawah Pujon",
          lat: -7.8543,
          lon: 112.4538,
          categories: ["alam", "hiburan"],
          description: "Kafe dengan konsep sawah dan pemandangan spektakuler.",
          link: "https://maps.app.goo.gl/EKSjum6o3engfbNu7",
        },
        {
          name: "Bendungan Lahor",
          lat: -8.1447,
          lon: 112.4510,
          categories: ["alam"],
          description: "Waduk indah dengan pemandangan alam dan aktivitas air.",
          link: "https://maps.app.goo.gl/PMu343iPdTYaYEVM9",
        },
        {
          name: "Coban Jahe",
          lat: -7.970, 
          lon: 112.8022,
          categories: ["alam"],
          description:
            "Air terjun tersembunyi dengan trek pendakian menantang.",
          link: "https://maps.app.goo.gl/BbmqCoL4SAxrT2mh8",
        },
        {
          name: "Bobocabin Coban Rondo",
          lat: -7.8701,
          lon: 112.4867,
          categories: ["hotel", "alam"],
          description:
            "Resort dengan pemandangan lembah hijau dan fasilitas mewah.",
          link: "https://maps.app.goo.gl/C1hB2cgEchufuWgc8",
        }
    ];
    this.createChatbotUI();
    this.setupEventListeners();
    this.conversationHistory = [];
  }

  createChatbotUI() {
    const chatbotHTML = `
      <div id="chatbot-container">
        <button id="chatbot-toggle">💬</button>
        <div id="chatbot-window">
          <div id="chatbot-messages"></div>
          <div id="chatbot-input-area">
            <input type="text" id="chatbot-input" placeholder="Tanya tentang destinasi...">
            <button id="chatbot-send">Kirim</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", chatbotHTML);
  }

  setupEventListeners() {
    const toggle = document.getElementById("chatbot-toggle");
    const chatWindow = document.getElementById("chatbot-window");
    const send = document.getElementById("chatbot-send");
    const input = document.getElementById("chatbot-input");

    toggle.addEventListener("click", () => {
      const isVisible = chatWindow.style.display === "block";
      chatWindow.style.display = isVisible ? "none" : "block";
      if (!isVisible && this.conversationHistory.length === 0) {
        this.addBotMessage(
          "Hai! Saya adalah asisten perjalanan. Ingin rekomendasi wisata di Malang?"
        );
      }
    });

    send.addEventListener("click", () => this.handleMessage());
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.handleMessage();
    });
  }

  async handleMessage() {
    const input = document.getElementById("chatbot-input");
    const message = input.value.trim();
    if (!message) return;

    this.addUserMessage(message);
    input.value = "";

    const lowercaseMsg = message.toLowerCase();
    if (
      lowercaseMsg.includes("rekomendasi") ||
      lowercaseMsg.includes("wisata")
    ) {
      this.recommendDestinations();
    } else if (
      ["alam", "budaya", "hiburan", "edukasi", "hotel"].some((category) =>
        lowercaseMsg.includes(category)
      )
    ) {
      const category = ["alam", "budaya", "hiburan", "edukasi", "hotel"].find(
        (cat) => lowercaseMsg.includes(cat)
      );
      this.recommendDestinationsByCategory(category);
    } else {
      try {
        const response = await this.getGeminiResponse(message);
        this.processResponse(response);
      } catch (error) {
        console.error("Error:", error);
        this.addBotMessage(
          "Maaf, saya tidak mengerti pertanyaan Anda. Silakan coba lagi atau gunakan kata kunci kategori seperti 'alam' atau 'budaya'."
        );
      }
    }
  }

  async getGeminiResponse(message) {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `Context: I am a travel assistant for Malang tourism. Available destinations: ${this.destinations
                    .map((d) => d.name)
                    .join(", ")}. User message: ${message}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 256,
          },
        }),
      }
    );

    const data = await response.json();
    return (
      data.candidates[0]?.content.parts[0]?.text ||
      "Maaf, tidak ada jawaban yang tersedia saat ini."
    );
  }

  processResponse(response) {
    this.addBotMessage(response);
    const mentionedDest = this.destinations.find((dest) =>
      response.toLowerCase().includes(dest.name.toLowerCase())
    );
    if (mentionedDest) {
      this.suggestReservation(mentionedDest);
    }
  }

  recommendDestinations() {
    const randomDests = [...this.destinations]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    this.addBotMessage("Berikut rekomendasi destinasi wisata di Malang:");
    randomDests.forEach((dest) => {
      this.addBotMessage(`${dest.name}: ${dest.description}`);
    });
  }

  recommendDestinationsByCategory(category) {
    const filteredDests = this.destinations.filter((d) =>
      d.categories.includes(category)
    );

    if (filteredDests.length === 0) {
      this.addBotMessage(
        `Maaf, tidak ada destinasi dalam kategori '${category}'.`
      );
      return;
    }

    this.addBotMessage(
      `Berikut adalah destinasi dalam kategori '${category}':`
    );
    filteredDests.forEach((dest) => {
      this.addBotMessage(`${dest.name}: ${dest.description}`);
    });
  }

  addUserMessage(text) {
    const div = document.createElement("div");
    div.className = "chatbot-message user-message";
    div.textContent = text;
    document.getElementById("chatbot-messages").appendChild(div);
    this.scrollToBottom();
  }

  addBotMessage(text) {
    const div = document.createElement("div");
    div.className = "chatbot-message bot-message";
    div.textContent = text;
    document.getElementById("chatbot-messages").appendChild(div);
    this.scrollToBottom();
  }

  scrollToBottom() {
    const messages = document.getElementById("chatbot-messages");
    messages.scrollTop = messages.scrollHeight;
  }

  suggestReservation(destination) {
    const div = document.createElement("div");
    div.className = "destination-card";
    div.innerHTML = `
      <h4>${destination.name}</h4>
      <p>${destination.description}</p>
      <a href="reserve.html?destination=${encodeURIComponent(
        destination.name
      )}" class="button button--flex">Reservasi <i class="ri-arrow-right-line"></i></a>
    `;
    document.getElementById("chatbot-messages").appendChild(div);
    this.scrollToBottom();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new GeminiChatbot();
});
