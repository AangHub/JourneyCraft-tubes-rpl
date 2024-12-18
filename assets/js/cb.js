class GeminiChatbot {
  constructor() {
    this.API_KEY = "AIzaSyCzAe7PevMoSYguwJzAOxj1rIwIWVWFt_A";
    this.destinations = [
      {
        name: "Batu Night Spectacular (BNS)",
        lat: -7.8833,
        lon: 112.5288,
        categories: ["hiburan"],
        description:
          "Tempat hiburan malam dengan wahana permainan dan pertunjukan lampu spektakuler.",
      },
      {
        name: "Gunung Bromo",
        lat: -7.9425,
        lon: 112.953,
        categories: ["alam"],
        description: "Gunung berapi terkenal dengan keindahan panoramanya.",
      },
      {
        name: "Jatim Park 1",
        lat: -7.8838,
        lon: 112.5332,
        categories: ["edukasi", "hiburan"],
        description:
          "Taman rekreasi dengan wahana edukasi yang menggabungkan ilmu pengetahuan dan hiburan.",
      },
      {
        name: "Jatim Park 2",
        lat: -7.8831,
        lon: 112.5286,
        categories: ["edukasi", "hiburan"],
        description: "Taman bermain dan kebun binatang modern.",
      },
      {
        name: "Coban Rondo",
        lat: -7.7303,
        lon: 112.4638,
        categories: ["alam"],
        description: "Air terjun indah di lereng Gunung Panderman.",
      },
      {
        name: "Museum Angkut",
        lat: -7.8831,
        lon: 112.5286,
        categories: ["budaya", "edukasi"],
        description: "Museum transportasi terbesar di Indonesia.",
      },
      {
        name: "Alun-alun Kota Malang",
        lat: -7.9824,
        lon: 112.6308,
        categories: ["budaya"],
        description: "Pusat kota dengan suasana yang ramai dan menarik.",
      },
      {
        name: "Kebun Teh Wonosari",
        lat: -7.9192,
        lon: 112.9473,
        categories: ["alam"],
        description: "Perkebunan teh dengan pemandangan hijau menakjubkan.",
      },
      {
        name: "Paralayang Batu",
        lat: -7.8547,
        lon: 112.4968,
        categories: ["alam", "hiburan"],
        description:
          "Pegunungan Batu dengan wisata paralayang dan city lightnya di malam hari.",
      },
      {
        name: "Hotel Tugu Malang",
        lat: -7.9771,
        lon: 112.6331,
        categories: ["hotel", "budaya"],
        description:
          "Hotel bintang 5 dengan nuansa tradisional Jawa, lengkap dengan koleksi seni dan artefak bersejarah.",
      },
      {
        name: "The Shalimar Boutique Hotel",
        lat: -7.9698,
        lon: 112.6252,
        categories: ["hotel"],
        description:
          "Hotel bintang 5 dengan arsitektur kolonial yang elegan, menawarkan kenyamanan dan kemewahan.",
      },
      {
        name: "Grand Mercure Malang Mirama",
        lat: -7.9417,
        lon: 112.6486,
        categories: ["hotel"],
        description:
          "Hotel bintang 5 dengan fasilitas lengkap seperti kolam renang, pusat kebugaran, dan restoran mewah.",
      },
      {
        name: "HARRIS Hotel & Conventions Malang",
        lat: -7.92586,
        lon: 112.6452,
        categories: ["hotel"],
        description:
          "Hotel bintang 4 dengan desain kontemporer, memiliki kolam renang, spa, dan pusat kebugaran.",
      },
      {
        name: "Atria Hotel Malang",
        lat: -7.9492,
        lon: 112.6392,
        categories: ["hotel"],
        description:
          "Hotel bintang 4 dengan fasilitas lengkap, termasuk restoran dan kolam renang, di pusat kota Malang.",
      },
      {
        name: "Ijen Suites Resort & Convention",
        lat: -7.9808,
        lon: 112.6156,
        categories: ["hotel"],
        description:
          "Hotel bintang 4 dengan pemandangan indah, fasilitas kolam renang, dan pusat kebugaran.",
      },
      {
        name: "Pantai Tiga Warna",
        lat: -8.4379,
        lon: 112.678,
        categories: ["alam"],
        description:
          "Pantai dengan gradasi tiga warna air laut, menawarkan snorkeling dengan terumbu karang yang indah.",
      },
      {
        name: "Gunung Panderman",
        lat: -7.9021,
        lon: 112.4972,
        categories: ["alam"],
        description:
          "Gunung dengan ketinggian 2.000 mdpl, cocok untuk pendaki pemula dengan pemandangan kota Batu dari puncaknya.",
      },
      {
        name: "Kampung Warna-Warni Jodipan",
        lat: -7.9782,
        lon: 112.6371,
        categories: ["budaya", "hiburan"],
        description:
          "Perkampungan dengan bangunan berwarna-warni, cocok untuk spot foto Instagram.",
      },
      {
        name: "Kasembon Rafting Malang",
        lat: -7.8021,
        lon: 112.3123,
        categories: ["alam", "hiburan"],
        description:
          "Lokasi arung jeram yang menantang di Sungai Brantas dengan pemandangan alam.",
      },
      {
        name: "Coban Talun",
        lat: -7.8031,
        lon: 112.5163,
        categories: ["alam"],
        description:
          "Air terjun tersembunyi dengan trek pendakian menantang dan pemandangan hijau.",
      },
      {
        name: "Pantai Teluk Asmara",
        lat: -8.4424,
        lon: 112.6652,
        categories: ["alam"],
        description:
          "Pantai dengan pulau-pulau kecil yang menyerupai Raja Ampat, menawarkan pemandangan eksotis dan spot snorkeling.",
      },
      {
        name: "Gunung Kawi",
        lat: -7.9541,
        lon: 112.4651,
        categories: ["alam", "budaya"],
        description:
          "Kompleks makam keramat dengan pemandangan pegunungan hijau.",
      },
      {
        name: "Bobocabin Coban Rondo",
        lat: -7.8701,
        lon: 112.4867,
        categories: ["hotel", "alam"],
        description:
          "Resort dengan pemandangan lembah hijau dan fasilitas mewah.",
      },
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
