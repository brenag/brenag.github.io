// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-academic-service",
          title: "academic service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academic_service/";
          },
        },{id: "news-i-m-happy-to-share-that-i-recently-defended-my-master-s-thesis-data-driven-static-output-feedback-control-for-time-delay-systems-and-was-directly-admitted-to-the-ph-d-program-in-electrical-engineering-at-ufmg",
          title: 'I’m happy to share that I recently defended my Master’s thesis, Data-driven Static...',
          description: "",
          section: "News",},{id: "news-exciting-news-i-ve-just-presented-at-the-17th-brazilian-symposium-on-intelligent-automation-in-são-joão-del-rei-where-i-was-awarded-best-master-s-student-paper",
          title: 'Exciting news! I’ve just presented at the 17th Brazilian Symposium on Intelligent Automation...',
          description: "",
          section: "News",},{id: "news-come-take-a-look-at-our-most-recent-paper-published-in-the-european-journal-of-control-where-we-tackle-the-challenge-of-stabilization-and-tracking-for-time-delay-systems-through-a-novel-data-driven-static-output-feedback-approach-validated-through-both-simulations-and-experiments",
          title: 'Come take a look at our most recent paper published in the European...',
          description: "",
          section: "News",},{id: "news-come-take-a-look-at-our-most-recent-contribution-toward-safe-data-driven-control-with-practical-guarantees-input-saturated-control-of-time-delay-systems-a-data-driven-approach-published-in-the-international-journal-of-systems-science",
          title: 'Come take a look at our most recent contribution toward safe data-driven control...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%6D%61%6E%75%65%6C%62%72%65%6E%61%67@%75%66%6D%67.%62%72", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9KSz3NwAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/emanuelbrenag", "_blank");
        },
      },{
        id: 'social-lattes',
        title: 'Lattes',
        section: 'Socials',
        handler: () => {
          window.open("http://lattes.cnpq.br/2033109071202640", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
