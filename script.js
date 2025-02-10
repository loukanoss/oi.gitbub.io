const images = [
    "20230418_210819.jpg", "20230426_213849.jpg", "20230527_221639.jpg", 
    "20230624_131917.jpg", "20230625_223542.jpg", "20230916_212200.jpg", 
    "20231126_133300.jpg", "20231126_145346.jpg", "20231126_150212.mp4", 
    "20231126_174718.jpg", "20231205_212507.jpg", "20231219_225139.jpg", 
    "20231219_225326.jpg", "20240302_211954.jpg", "20240323_204213.jpg", 
    "20240329_131254.jpg", "20240329_134808.jpg", "20240329_181327.jpg", 
    "20240329_181332.jpg", "20240329_220901.jpg", "20240330_075913.jpg", 
    "20240415_104106.jpg", "20240508_075435.jpg", "20240516_105115.jpg", 
    "20240521_092214.jpg", "20240608_205301.jpg", "20240608_215228.jpg", 
    "20240825_213025.jpg", "20240907_220605.jpg", "20241021_093737.jpg", 
    "20241112_094405.jpg", "20241113_181525.jpg", "20241216_214422.jpg", 
    "20241219_184317.jpg", "20241220_220349.jpg", "20241229_232151(0).jpg", 
    "20241229_232243.jpg", "20241229_232338.jpg", "20241229_234409.jpg", 
    "20250101_002052.jpg", "41938692dca6cf06d46f1cb9fa158dff.jpg", 
    "a77f9a07b2f8687b5b10099a0ff2890e.jpg", "fe936e4f-ac48-4950-aac4-cf09f5d62ca4.jpg", 
    "IMG_20230511_214259882_MFNR.jpg", "IMG-20230513-WA0059.jpg", 
    "IMG_20230606_221245_111.jpg", "IMG_20230622_225950_083.webp", 
    "IMG_20230624_100112120.jpg", "IMG_20230725_221147960_MFNR.jpg", 
    "IMG_20230725_221149530_MFNR.jpg", "IMG_20230725_221212736_MFNR.jpg", 
    "IMG_20230826_223305106_MFNR.jpg", "IMG-20230828-WA0010.jpg", 
    "IMG_20230903_104333905_MFNR.jpg", "IMG_20230919_203058_476.webp", 
    "IMG-20230926-WA0003.jpg", "IMG-20230930-WA0036.jpg", 
    "IMG_20231118_210619125_MFNR.jpg", "IMG_20231123_212624836.jpg", 
    "IMG-20231127-WA0035.jpg", "IMG-20231127-WA0038.jpg", "IMG-20231127-WA0040.jpg", 
    "IMG-20231130-WA0006.jpg", "IMG-20231206-WA0002.jpg", "IMG-20231211-WA0001.jpg", 
    "IMG-20231219-WA0009.jpg", "IMG-20231219-WA0016.jpg", "IMG_20240407_171033032_MFNR~2.jpg", 
    "IMG_20240410_205100654.jpg", "IMG_20240516_215035685_MFNR.jpg", 
    "IMG_20240523_211556_154.jpg", "IMG_20240523_211622_004.jpg", 
    "IMG-20240525-WA0030.jpg", "IMG_20240528_090111408_MFNR.jpg", 
    "IMG_20240528_090118800.jpg", "IMG_20240603_104330_418.webp", 
    "IMG_20240603_104645_250.webp", "IMG_20240619_214542_776.webp", 
    "IMG_20240619_214603_587.webp", "IMG_20240619_214620_641.webp", 
    "IMG-20240726-WA0067.jpg", "IMG_20240813_202631_899.webp", 
    "IMG_20240813_202709_458.webp", "IMG-20240827-WA0042.jpg", 
    "IMG_20240915-WA0078.jpg", "IMG_20241126-WA0105.jpg", 
    "IMG_20241126-WA0135.jpg", "IMG_20241127-WA0002.jpg", 
    "IMG_20241128_221517_994.webp", "IMG_20241128_221530_336.webp", 
    "IMG-20241201-WA0009.jpg", "IMG_20241223_190933_564.webp", 
    "IMG_20241225_124115_464.webp", "IMG-20250125-WA0226.jpg", 
    "IMG-20250125-WA0385~2.jpg", "IMG-20250204-WA0005.jpg", 
    "Screenshot_20230419-101449_Instagram.jpg", "Screenshot_20230606-220505_Instagram.jpg", 
    "Screenshot_20231212-012256_WhatsApp.jpg", "Screenshot_20231222-053229_CapCut.jpg", 
    "Screenshot_20240329_143908_Instagram.jpg", "Screenshot_20240331_034906_Instagram.jpg", 
    "Screenshot_20240331_034933_Instagram.jpg", "Screenshot_20240331_035208_Instagram.jpg", 
    "Screenshot_20240426_233750_CapCut.jpg", "Screenshot_20240521_094750_Instagram.jpg", 
    "Screenshot_20240524_225224_WhatsApp.jpg", "Screenshot_20240610_234350_Instagram.jpg", 
    "Screenshot_20241204_234023_Canva.jpg", "Screenshot_20241225_152647_Instagram.jpg", 
    "Screenshot_20250112_234338_Instagram.jpg", "Snapchat-1929067514.jpg", 
    "VideoCapture_20231016-003821.jpg", "VideoCapture_20231209-133022.jpg", 
    "VideoCapture_20240605-220331.jpg", "VideoCapture_20241230-104343.jpg", 
    "VideoCapture_20241231-180845.jpg", "VideoCapture_20250113-004257.jpg", 
    "VideoCapture_20250113-004302.jpg"
];

const imageContainer = document.getElementById("image-container");

// Função para carregar imagens aleatórias
function loadImages() {
    const imageCount = 7;  // Número de imagens para carregar por vez
    imageContainer.innerHTML = ''; // Limpa as imagens existentes
    for (let i = 0; i < imageCount; i++) {
        // Seleciona uma imagem aleatória da lista
        const randomImage = images[Math.floor(Math.random() * images.length)];

        // Cria o elemento <img> para a imagem
        const image = document.createElement("img");
        image.src = `images/${randomImage}`;
        image.classList.add("image-item");

        // Define um tamanho aleatório para a imagem
        const width = Math.random() * 150 + 150;  // Entre 150px e 300px
        const height = Math.random() * 150 + 150; // Entre 150px e 300px
        image.style.width = `${width}px`;
        image.style.height = `${height}px`;

        // Quando a imagem for carregada, adiciona à página
        image.onload = () => imageContainer.appendChild(image);

        // Adiciona o evento de clique à imagem para gerar mais imagens
        image.addEventListener("click", () => {
            loadImages(); // Carrega mais imagens ao clicar
        });
    }
}

// Função que verifica a rolagem da página e carrega mais imagens quando necessário
function loadMoreImagesOnScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadImages();  // Carrega mais imagens quando chega no final
    }
}

// Função para verificar o tipo de dispositivo
function isMobileDevice() {
    return window.innerWidth <= 768; // Considera dispositivos com largura até 768px como móveis
}

// Ajustar o layout com base no dispositivo
function adjustLayout() {
    if (isMobileDevice()) {
        document.body.style.display = "block"; // Layout em blocos para mobile
    } else {
        document.body.style.display = "flex"; // Layout flexível para desktop
        document.body.style.flexDirection = "column";
    }
}

// Carrega as primeiras imagens e ajusta o layout
loadImages();
adjustLayout();

// Adiciona o evento de rolagem para carregar mais imagens
window.addEventListener("scroll", loadMoreImagesOnScroll);
