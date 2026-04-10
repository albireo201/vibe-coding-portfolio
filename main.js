const dotGroups = document.querySelectorAll(".slider-dots");

dotGroups.forEach((group) => {
    const dots = group.querySelectorAll(".dot");

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            dots.forEach((item) => item.classList.remove("is-active"));
            dot.classList.add("is-active");
        });
    });
});

const translations = {
    ko: {
        heroName: "김재현",
        navAbout: "소개",
        navServices: "서비스",
        navProjects: "프로젝트",
        navContact: "문의",
        heroEyebrow: "프로덕트 디자이너",
        heroSub: "저는 프리랜서 UI/UX 디자이너입니다. 현대적이고 간결한 인터페이스를 만듭니다.",
        contactMe: "문의하기",
        downloadCv: "이력서 다운로드",
        cardResearch: "사용자 리서치",
        cardVisual: "비주얼 디자인",
        cardTesting: "사용자 테스트",
        cardProto: "프로토타이핑",
        aboutEyebrow: "소개",
        aboutTitle: "더 나은 디자인,<br>더 좋은 경험",
        aboutP1: "사용자 중심의 접근으로 브랜드와 서비스에 맞는 인터페이스를 설계합니다. 이해하기 쉬운 흐름과 일관된 시각 언어로 완성도를 높입니다.",
        aboutP2: "기획부터 프로토타입, 테스트까지 전 과정을 함께하며 실제 사용성 개선에 집중합니다.",
        servicesEyebrow: "나의 서비스",
        servicesTitle: "고객을 위해 제가 할 수 있는 일",
        servicesDesc: "브랜드 방향성과 사용자 경험을 함께 고려해 실무에 바로 적용 가능한 디자인을 제공합니다.",
        viewAll: "전체보기",
        service1Title: "브랜드 아이덴티티",
        service2Title: "프로덕트 디자인",
        service3Title: "인터랙션 디자인",
        service4Title: "앱 디자인",
        service1Body: "브랜드 톤앤매너를 반영한 시각 체계를 설계합니다.",
        service2Body: "사용자 흐름에 맞춘 웹/앱 화면을 설계합니다.",
        service3Body: "자연스럽고 직관적인 동작 경험을 디자인합니다.",
        service4Body: "실제 개발 환경을 고려한 모바일 UI를 제작합니다.",
        readMore: "자세히 보기"
    },
    en: {
        heroName: "Jaehyun Kim",
        navAbout: "About",
        navServices: "Services",
        navProjects: "Projects",
        navContact: "Contact",
        heroEyebrow: "Product Designer",
        heroSub: "I am a freelance UI/UX designer. I create modern and simple interfaces.",
        contactMe: "Contact Me",
        downloadCv: "Download CV",
        cardResearch: "User Research",
        cardVisual: "Visual Design",
        cardTesting: "User Testing",
        cardProto: "Prototyping",
        aboutEyebrow: "About Me",
        aboutTitle: "Better design,<br>better experiences",
        aboutP1: "I design interfaces that fit your brand and product goals with a user-first process and clear visual direction.",
        aboutP2: "From planning to prototyping and testing, I focus on practical improvements in real user experience.",
        servicesEyebrow: "My Services",
        servicesTitle: "Things I can do for my clients",
        servicesDesc: "I provide practical, production-ready design while balancing brand direction and user experience.",
        viewAll: "View All",
        service1Title: "Brand Identity",
        service2Title: "Product Design",
        service3Title: "Interaction Design",
        service4Title: "App Design",
        service1Body: "I build visual systems that match your brand tone and identity.",
        service2Body: "I design web and app screens with user flow in mind.",
        service3Body: "I craft smooth, intuitive interaction experiences.",
        service4Body: "I create mobile UI with real development constraints in mind.",
        readMore: "Read More"
    }
};

const langButtons = document.querySelectorAll(".lang-btn");
const translatableNodes = document.querySelectorAll("[data-i18n]");

function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    translatableNodes.forEach((node) => {
        const key = node.dataset.i18n;
        if (!key || !dict[key]) return;
        node.innerHTML = dict[key];
    });

    langButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.lang === lang);
    });

    document.documentElement.lang = lang === "ko" ? "ko" : "en";
}

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selected = button.dataset.lang || "ko";
        applyLanguage(selected);
    });
});

applyLanguage("ko");