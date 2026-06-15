// Translations
const translations = {
    tr: {
        nav: {
            coaches: "Koçlarımız",
            howItWorks: "Nasıl Çalışır?",
            features: "Özellikler",
            testimonials: "Yorumlar",
            faq: "SSS",
            apply: "Başvur"
        },
        hero: {
            badge: "Türkiye'nin En Profesyonel Koçluk Platformu",
            title: "Iron'dan <span class=\"highlight\">Radiant</span>'a!",
            subtitle: "Radiant ve Immortal seviye koçlarımızla oyun içi performansınızı zirveye taşıyın. Aim geliştirme, oyun bilgisi (game sense), advanced movement, stratejik pozisyon alma ve daha fazlası!",
            cta1: "Hemen Başvur",
            cta2: "Koçlarımızı Gör",
            stat1: "Toplam Ders",
            stat2: "Mutlu Öğrenci",
            stat3: "Aktif Koç"
        },
        features: {
            badge: "Neden AURA?",
            title: "Profesyonel Koçluk Deneyimi",
            subtitle: "En iyi koçlarla çalışarak hızla gelişin",
            f1Title: "Birebir Özel Dersler",
            f1Desc: "Size özel hazırlanan ders programı ile hızla ilerleyin",
            f2Title: "VOD Analizi",
            f2Desc: "Oyunlarınızı birlikte izleyip hatalarınızı ve eksiklerinizi tespit edelim",
            f3Title: "Aim & Mekanik Eğitimi",
            f3Desc: "Aim egzersizleri ve mekanik geliştirme programları",
            f4Title: "Game Sense Geliştirme",
            f4Desc: "Harita bilgisi, rotasyon ve strateji eğitimleri"
        },
        howItWorks: {
            badge: "Nasıl İşliyor?",
            title: "4 Basit Adımda Gelişim",
            subtitle: "Kısa sürede seviyenizi yükseltin",
            step1Title: "Başvuru Yap",
            step1Desc: "Formu doldurun ve bize ulaşın",
            step2Title: "Koçunuzla Tanışın",
            step2Desc: "Seviyenize ve hedefinize uygun koçu belirleyin",
            step3Title: "Derslere Başla",
            step3Desc: "Programınızı oluşturun ve derslere başlayın",
            step4Title: "Rank Atla!",
            step4Desc: "Hedefinize ulaşın ve oyunun keyfini çıkarın"
        },
        coaches: {
            badge: "Uzman Kadromuzla Tanışın",
            title: "En İyi Koçlarla Çalışın",
            subtitle: "Radiant ve Immortal seviye koçlarımızla çalışın",
            coach1Name: "Dash",
            coach1Role: "Radiant • Baş Koç",
            coach2Name: "Dowsie",
            coach2Role: "Immortal 3 • Koç",
            coach3Name: "Dugi",
            coach3Role: "Immortal 2 • Koç",
            coachBtn: "Koçluk Al"
        },
        testimonials: {
            badge: "Öğrencilerimiz Ne Diyor?",
            title: "Başarı Hikayeleri",
            subtitle: "Gerçek öğrencilerimizin yorumları",
            t1Name: "Aerica",
            t1Text: "Koçluğa plat 2'de başladım; aimime ve movementıma güvenmiyordum. İlk haftadan itibaren antrenmanların etkisini hissettim, özgüvenim arttı. Smoke, skill kullanımı, peek ve movementım belirgin şekilde gelişti. 2. haftada dia1 oldum, sonra iniş çıkışlarla dia2'ye çıktım. Oyun bilgim, ajan ve skill farkındalığım ciddi şekilde arttı. 2 hafta ara verip rank düşsem de çalışmaya dönünce sezon bitmeden yüceliye ulaştım.",
            t1Rank: "Plat 2 → Yücelik 2",
            t2Name: "Nhifty",
            t2Text: "Koçlar her derste birebir ilgilenip eksiklerinizi tespit ediyor ve samimi yaklaşarak gelişimi kolaylaştırıyor. Başta tereddüt etsem de iyi ki almışım; aimim, movementım ve gamesense'im ilk günlerde inanılmaz gelişti. VOD dersleri sayesinde hatalarımı görüp düzeltmeye başladım. Gönül rahatlığıyla söyleyebilirim ki kesinlikle pişman olmayacaksınız.",
            t2Rank: "Plat 3 → Yücelik 1",
            t3Name: "Eno",
            t3Text: "Koçluk sistemi oldukça stabil ve tamamen kişiye özel işliyor. Aim, movement, game sense gibi konuları basit ve anlaşılır bir dille anlatıyorlar. Koçluğu almadan önce Yücelik 2'ydim, aldıktan 1 ay sonra Immortal 2'ye kadar çıktım.",
            t3Rank: "Yücelik 2 → Immortal 3",
            t4Name: "Axolotone",
            t4Text: "Plat 2'yken koçluk almayı düşünmeye başladım, bir süre araştırdım ve Dash'i buldum. 1 aylık paket alıp başladım, her şey çok iyi gidiyordu. Önce dia, sonra yüce ve ardından immo oldum. 3 aylık gibi kısa bir sürede immo oldum, her şey için çok teşekkürler!",
            t4Rank: "Plat 2 → Immortal"
        },
        faq: {
            badge: "Sıkça Sorulan Sorular",
            title: "Merak Ettikleriniz",
            subtitle: "Aklınıza takılan soruların cevapları burada!",
            q1Title: "Dersler birebir mi, yoksa grup şeklinde mi yapılıyor?",
            q1Text: "Dersleri isterseniz birebir, isterseniz sınıf mantığıyla grup dersi şekilde alabilirsiniz. Birebir dersler tamamen kişiye özel ilerlerken, grup dersleri belirli bir müfredat doğrultusunda ilerler ve kendi seviyenizle eşit öğrencilerle eğitim alırsınız.",
            q2Title: "Haftalık ders sayısı ve süreleri nasıl planlanıyor?",
            q2Text: "Haftada en az 4 ders almanızı öneriyoruz. Her ders standard olarak 1 saat sürer ve ders programı organizatör ile size en uygun zamanlara göre ayarlanır.",
            q3Title: "VOD analizleri nasıl gerçekleştiriliyor?",
            q3Text: "Oyunlarınızı kaydedip koçunuza iletiyorsunuz. Koçunuzla birlikte VOD'u baştan sona izleyerek hatalarınız, kaçırdığınız fırsatlar, konum alma, karar verme ve mekaniklerinizi detaylı şekilde analiz edilir.",
            q4Title: "Koçlarla ders dışında iletişim kurabilir miyim?",
            q4Text: "Evet! Ders dışında da koçlarınızla konuşabilir, soru sorabilir veya tavsiye alabilirsiniz. Destek sadece derste sınırlı kalmaz.",
            q5Title: "Topluluk ortamı nasıl? Oyun arkadaşları bulabilir miyim?",
            q5Text: "Oldukça canlı ve aktif bir topluluğumuz var. Diğer öğrencilerle sohbet edebilir, scrim'lere katılabilir, kendinize oyun arkadaşları bulabilir veya toplulukla birlikte aktiviteler yapabilirsiniz.",
            q6Title: "Ödemeler ve abonelik sistemi nasıl işliyor?",
            q6Text: "Ödemeler Discord üzerinden, organizatörün yönlendirdiği adımlar ile güvenli bir şekilde gerçekleştirilmektedir.",
            q7Title: "Koçluk sistemi ne kadar sürede gelişim sağlar?",
            q7Text: "Net bir gelişim için en az 1 ay (16 ders) almanızı öneriyoruz. Tıpkı spor gibi: Ne kadar düzenli gelirseniz, o kadar hızlı ve kalıcı gelişirsiniz!"
        },
        cta: {
            title: "Hemen Başvur ve Gelişmeye Başla!",
            subtitle: "Koçluk ücreti mevcut rank ve hedef rankına göre değişiklik gösteriyor. Formda verdiğiniz bilgilere göre size özel fiyatlandırmayı ileteceğiz!",
            btn: "Hemen Başvur"
        },
        footer: {
            title: "Valorant Koçluk Platformu",
            desc: "Profesyonel koçlarımızla oyununuzu zirveye taşıyın.",
            link1: "Koçlarımız",
            link2: "Nasıl Çalışır?",
            link3: "Özellikler",
            support: "Destek",
            faq: "Sıkça Sorulan Sorular",
            contact: "İletişim",
            discord: "Discord Sunucumuz",
            privacy: "Gizlilik Politikası",
            info: "Hızlı Bilgi",
            ageWarning: "⚠️ Koçluk için yaş sınırı 16'dır",
            copyright: "© 2026 AURA COACHING. Tüm hakları saklıdır."
        },
        auth: {
            login: "Giriş Yap",
            signup: "Kayıt Ol",
            welcome: "Hoş Geldin",
            welcomeSub: "Hesabınla giriş yap, koçunu bul",
            googleLogin: "Google ile giriş yap",
            orEmail: "E-posta ile devam et",
            emailOrUsername: "E-posta veya Kullanıcı Adı",
            emailOrUsernamePlaceholder: "KullanıcıAdınız",
            forgot: "Şifremi unuttum",
            email: "E-posta",
            password: "Şifre",
            fullName: "Ad Soyad",
            emailPlaceholder: "ornek@email.com",
            passwordPlaceholder: "••••••••",
            fullNamePlaceholder: "Adınız Soyadınız",
            loginBtn: "Giriş Yap",
            signupBtn: "Kayıt Ol",
            loginRequired: "Lütfen Önce Giriş Yapın",
            loginRequiredText: "Başvuru yapmak için giriş yapmanız gerekiyor.",
            noAccount: "Hesabın yok mu?",
            signupNow: "Kayıt Ol",
            haveAccount: "Zaten hesabın var mı?",
            loginNow: "Giriş Yap"
        },
        application: {
            title: "AURA'ya Başvur",
            fullName: "Ad Soyad *",
            discord: "Discord Kullanıcı Adı *",
            email: "E-posta",
            currentRank: "Mevcut Rank *",
            targetRank: "Hedef Rank *",
            preferredCoach: "Tercih Ettiğiniz Koç (İsteğe Bağlı)",
            anyCoach: "Herhangi bir koç",
            message: "Ekstra Bilgiler",
            messagePlaceholder: "Hedefleriniz, hangi konuda gelişmek istediğiniz vb.",
            submit: "Başvuruyu Gönder",
            note: "⚠️ Koçluk için yaş sınırı 16'dır. Başvurunuz sonrası size Discord üzerinden ulaşılacaktır."
        },
        success: {
            title: "Başvurunuz Başarıyla Alındı!",
            text: "En kısa sürede Discord üzerinden size ulaşacağız. Lütfen beklemede kalın.",
            close: "Kapat"
        },
        rankSelect: "Seçiniz"
    },
    en: {
        nav: {
            coaches: "Our Coaches",
            howItWorks: "How It Works?",
            features: "Features",
            testimonials: "Reviews",
            faq: "FAQ",
            apply: "Apply Now"
        },
        hero: {
            badge: "Turkey's Most Professional Coaching Platform",
            title: "From Iron to <span class=\"highlight\">Radiant</span>!",
            subtitle: "Take your in-game performance to the next level with our Radiant and Immortal level coaches. Aim training, game sense, advanced movement, strategic positioning and more!",
            cta1: "Apply Now",
            cta2: "Meet Our Coaches",
            stat1: "Total Lessons",
            stat2: "Happy Students",
            stat3: "Active Coaches"
        },
        features: {
            badge: "Why AURA?",
            title: "Professional Coaching Experience",
            subtitle: "Improve fast by working with the best coaches",
            f1Title: "One-on-One Lessons",
            f1Desc: "Progress quickly with a customized lesson plan",
            f2Title: "VOD Analysis",
            f2Desc: "Watch your games together and identify your mistakes and weaknesses",
            f3Title: "Aim & Mechanics Training",
            f3Desc: "Aim exercises and mechanics development programs",
            f4Title: "Game Sense Development",
            f4Desc: "Map knowledge, rotation and strategy training"
        },
        howItWorks: {
            badge: "How It Works?",
            title: "Development in 4 Simple Steps",
            subtitle: "Level up in a short time",
            step1Title: "Apply Now",
            step1Desc: "Fill out the form and reach out to us",
            step2Title: "Meet Your Coach",
            step2Desc: "Find the right coach for your level and goals",
            step3Title: "Start Lessons",
            step3Desc: "Create your program and start your lessons",
            step4Title: "Rank Up!",
            step4Desc: "Reach your goals and enjoy the game"
        },
        coaches: {
            badge: "Meet Our Expert Team",
            title: "Work With The Best Coaches",
            subtitle: "Work with our Radiant and Immortal level coaches",
            coach1Name: "Dash",
            coach1Role: "Radiant • Head Coach",
            coach2Name: "Dowsie",
            coach2Role: "Immortal 3 • Coach",
            coach3Name: "Dugi",
            coach3Role: "Immortal 2 • Coach",
            coachBtn: "Get Coaching"
        },
        testimonials: {
            badge: "What Our Students Say?",
            title: "Success Stories",
            subtitle: "Reviews from our real students",
            t1Name: "Aerica",
            t1Text: "I started coaching at Plat 2; I didn't trust my aim and movement. From the first week I felt the effect of the training, my confidence increased. Smoke, skill usage, peek and my movement improved significantly. In the 2nd week I became Dia 1, then with ups and downs I got to Dia 2. My game knowledge, agent and skill awareness increased seriously. Even though I took a 2 week break and dropped in rank, when I came back to training I reached Ascendant before the season ended.",
            t1Rank: "Plat 2 → Ascendant 2",
            t2Name: "Nhifty",
            t2Text: "Coaches give one-on-one attention in every lesson, identify your weaknesses and make improvement easy with a sincere approach. Even though I hesitated at first, I'm glad I took it; my aim, movement and gamesense improved incredibly in the first days. Thanks to VOD lessons I started seeing and fixing my mistakes. I can comfortably say you definitely won't regret it.",
            t2Rank: "Plat 3 → Ascendant 1",
            t3Name: "Eno",
            t3Text: "The coaching system is very stable and completely personalized. They explain topics like aim, movement, game sense in a simple and understandable way. Before taking coaching I was Ascendant 2, 1 month after taking it I got to Immortal 2.",
            t3Rank: "Ascendant 2 → Immortal 3",
            t4Name: "Axolotone",
            t4Text: "When I was Plat 2 I started thinking about getting coaching, I researched for a while and found Dash. I bought a 1 month package and started, everything was going great. First Dia, then Ascendant and then Immortal. In a short time like 3 months I became Immortal, thank you so much for everything!",
            t4Rank: "Plat 2 → Immortal"
        },
        faq: {
            badge: "Frequently Asked Questions",
            title: "What You're Wondering",
            subtitle: "Answers to your questions are here!",
            q1Title: "Are lessons one-on-one or group lessons?",
            q1Text: "You can take lessons either one-on-one or as group lessons. One-on-one lessons are completely personalized, while group lessons follow a specific curriculum with students at your level.",
            q2Title: "How are weekly lesson count and duration planned?",
            q2Text: "We recommend taking at least 4 lessons per week. Each lesson is 1 hour standard and the schedule is arranged with the organizer at the most convenient times for you.",
            q3Title: "How are VOD analyses done?",
            q3Text: "You record your games and send them to your coach. You watch the VOD together from start to finish with your coach, analyzing your mistakes, missed opportunities, positioning, decision-making and mechanics in detail.",
            q4Title: "Can I contact coaches outside of lessons?",
            q4Text: "Yes! You can also talk to your coaches outside of lessons, ask questions or get advice. Support isn't limited to just lessons.",
            q5Title: "How is the community environment? Can I find teammates?",
            q5Text: "We have a very lively and active community. You can chat with other students, join scrims, find teammates or do activities with the community.",
            q6Title: "How do payments and subscription system work?",
            q6Text: "Payments are made securely via Discord through the steps guided by the organizer.",
            q7Title: "How long does it take to see improvement with the coaching system?",
            q7Text: "We recommend taking at least 1 month (16 lessons) for clear improvement. Just like sports: The more regularly you come, the faster and more lasting your improvement will be!"
        },
        cta: {
            title: "Apply Now and Start Improving!",
            subtitle: "Coaching fee varies depending on your current rank and target rank. We will send you a customized pricing based on the information you provide in the form!",
            btn: "Apply Now"
        },
        footer: {
            title: "Valorant Coaching Platform",
            desc: "Take your game to the next level with our professional coaches.",
            link1: "Our Coaches",
            link2: "How It Works?",
            link3: "Features",
            support: "Support",
            faq: "Frequently Asked Questions",
            contact: "Contact",
            discord: "Our Discord Server",
            privacy: "Privacy Policy",
            info: "Quick Info",
            ageWarning: "⚠️ Age limit for coaching is 16",
            copyright: "© 2026 AURA COACHING. All rights reserved."
        },
        auth: {
            login: "Login",
            signup: "Sign Up",
            welcome: "Welcome",
            welcomeSub: "Login with your account, find your coach",
            googleLogin: "Continue with Google",
            orEmail: "Continue with email",
            emailOrUsername: "Email or Username",
            emailOrUsernamePlaceholder: "YourUsername",
            forgot: "Forgot password?",
            email: "Email",
            password: "Password",
            fullName: "Full Name",
            emailPlaceholder: "example@email.com",
            passwordPlaceholder: "••••••••",
            fullNamePlaceholder: "Your Full Name",
            loginBtn: "Login",
            signupBtn: "Sign Up",
            loginRequired: "Please Login First",
            loginRequiredText: "You need to login to apply.",
            noAccount: "Don't have an account?",
            signupNow: "Sign Up",
            haveAccount: "Already have an account?",
            loginNow: "Login"
        },
        application: {
            title: "Apply to AURA",
            fullName: "Full Name *",
            discord: "Discord Username *",
            email: "Email",
            currentRank: "Current Rank *",
            targetRank: "Target Rank *",
            preferredCoach: "Preferred Coach (Optional)",
            anyCoach: "Any coach",
            message: "Additional Information",
            messagePlaceholder: "Your goals, which areas you want to improve in, etc.",
            submit: "Submit Application",
            note: "⚠️ Age limit for coaching is 16. We will contact you via Discord after your application."
        },
        success: {
            title: "Your Application Has Been Received!",
            text: "We will contact you via Discord as soon as possible. Please wait.",
            close: "Close"
        },
        rankSelect: "Select"
    }
};

let currentLang = 'tr';
let isLoggedIn = false;

// Language Switching
function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.dataset.i18n.split('.');
        let value = translations[lang];
        for (const key of keys) {
            value = value?.[key];
        }
        if (value) {
            el.innerHTML = value;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const keys = el.dataset.i18nPlaceholder.split('.');
        let value = translations[lang];
        for (const key of keys) {
            value = value?.[key];
        }
        if (value) {
            el.placeholder = value;
        }
    });
}

// Initialize language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            if (entry.target.querySelector('.stat-number')) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(animateCounter);
            }
        }
    });
}, observerOptions);

// Observe all sections and animated elements
document.querySelectorAll('section, .feature-card, .coach-card, .step').forEach(el => {
    observer.observe(el);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderDotsContainer = document.getElementById('sliderDots');

// Create dots
if (sliderDotsContainer && slides.length > 0) {
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        sliderDotsContainer.appendChild(dot);
    });
}

function goToSlide(index) {
    if (!slides.length) return;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    currentSlide = index;
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

// Auto slide
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 5000);

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
});

// Modal Functionality
const applicationModal = document.getElementById('applicationModal');
const closeModalBtn = document.getElementById('closeModal');
const applicationForm = document.getElementById('applicationForm');
const successModal = document.getElementById('successModal');
const closeSuccessModalBtn = document.getElementById('closeSuccessModal');
const authModal = document.getElementById('authModal');
const closeAuthModalBtn = document.getElementById('closeAuthModal');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const authTabs = document.querySelectorAll('.auth-tab');

// Open application modal buttons
const applyLinks = document.querySelectorAll('a[href="#apply"]');
const coachButtons = document.querySelectorAll('.coach-btn');

function openAuthModal() {
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openModal(preferredCoach = '') {
    if (!isLoggedIn) {
        openAuthModal();
        return;
    }
    
    applicationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (preferredCoach) {
        document.getElementById('preferredCoach').value = preferredCoach;
    }
}

function closeModal() {
    applicationModal.classList.remove('active');
    document.body.style.overflow = '';
}

function openSuccessModal() {
    applicationModal.classList.remove('active');
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

function closeAuthModal() {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Add event listeners to application links
applyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
});

// Add event listeners to coach buttons
coachButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const coachCard = btn.closest('.coach-card');
        let preferredCoach = '';
        if (coachCard) {
            const coachName = coachCard.querySelector('.coach-name').textContent;
            preferredCoach = coachName;
        }
        openModal(preferredCoach);
    });
});

// Auth tabs switching (new implementation)
const switchTabBtn = document.getElementById('switchTabBtn');
const switchText = document.getElementById('switchText');
let isLogin = true; // Start on login form

function toggleAuthTab() {
    isLogin = !isLogin;
    
    if (isLogin) {
        // Show login form
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        // Update switch text
        switchText.setAttribute('data-i18n', 'auth.noAccount');
        switchTabBtn.setAttribute('data-i18n', 'auth.signupNow');
    } else {
        // Show signup form
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        // Update switch text
        switchText.setAttribute('data-i18n', 'auth.haveAccount');
        switchTabBtn.setAttribute('data-i18n', 'auth.loginNow');
    }
    
    // Update translation for the new text
    switchLanguage(currentLang);
}

switchTabBtn.addEventListener('click', toggleAuthTab);

// Close application modal
closeModalBtn?.addEventListener('click', closeModal);
applicationModal?.addEventListener('click', (e) => {
    if (e.target === applicationModal) {
        closeModal();
    }
});

// Close success modal
closeSuccessModalBtn?.addEventListener('click', closeSuccessModal);
successModal?.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeSuccessModal();
    }
});

// Close auth modal
closeAuthModalBtn?.addEventListener('click', closeAuthModal);
authModal?.addEventListener('click', (e) => {
    if (e.target === authModal) {
        closeAuthModal();
    }
});

// Close any modal when Escape key is pressed
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (applicationModal?.classList.contains('active')) {
            closeModal();
        } else if (successModal?.classList.contains('active')) {
            closeSuccessModal();
        } else if (authModal?.classList.contains('active')) {
            closeAuthModal();
        }
    }
});

// Login form submit
loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    isLoggedIn = true;
    closeAuthModal();
    openModal();
});

// Signup form submit
signupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    isLoggedIn = true;
    closeAuthModal();
    openModal();
});

// Handle form submission
applicationForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName')?.value,
        discord: document.getElementById('discord')?.value,
        email: document.getElementById('email')?.value,
        currentRank: document.getElementById('currentRank')?.value,
        targetRank: document.getElementById('targetRank')?.value,
        preferredCoach: document.getElementById('preferredCoach')?.value,
        message: document.getElementById('message')?.value
    };
    
    console.log('Başvuru Alındı:', formData);
    openSuccessModal();
    applicationForm?.reset();
});

// Typewriter Effect for Hero Title
const typewriterTexts = {
    tr: ["Iron'dan Radiant'a!", "AURACOACHING ile zirveye!"],
    en: ["From Iron to Radiant!", "To the top with AURACOACHING!"]
};

let currentLangTypewriter = currentLang;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // ms per character
const typewriterElement = document.getElementById('typewriter');

function typeWriter() {
    const texts = typewriterTexts[currentLangTypewriter];
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        // Delete characters
        typewriterElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // Faster when deleting
    } else {
        // Add characters
        typewriterElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100; // Normal typing speed
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// Start typewriter effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});

// Update typewriter language when language is switched
const originalSwitchLanguage = switchLanguage;
switchLanguage = function(lang) {
    currentLangTypewriter = lang;
    originalSwitchLanguage(lang);
    // Reset typewriter state to start with new language
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
};

// Animated Browser Title
const titleText = "AURA COACHING";
let titleCharIndex = 0;
let isTitleDeleting = false;

function animateTitle() {
    if (isTitleDeleting) {
        // Delete characters, but never go below 1
        if (titleCharIndex > 1) {
            document.title = titleText.substring(0, titleCharIndex - 1);
            titleCharIndex--;
        } else {
            // At 1 character, start typing again
            isTitleDeleting = false;
        }
    } else {
        // Add characters
        document.title = titleText.substring(0, titleCharIndex + 1);
        titleCharIndex++;
    }

    if (!isTitleDeleting && titleCharIndex === titleText.length) {
        // Pause at end
        isTitleDeleting = true;
        setTimeout(animateTitle, 2000);
        return;
    }

    const speed = isTitleDeleting ? 100 : 200;
    setTimeout(animateTitle, speed);
}

// Start title animation when page loads
animateTitle();

console.log('AURA COACHING - Valorant Koçluk Platformu Yüklendi! 🎮');
console.log('Discord Sunucumuz: https://discord.gg/srKYEKXUYW');
