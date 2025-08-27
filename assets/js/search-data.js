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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-",
      
        title: "",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/2025-08-26-getting-started-with-city-ev-infrastructure/";
        
      },
    },{id: "post-great-charging-needs-green-software",
      
        title: "Great Charging Needs Green Software",
      
      description: "Why are sustainable software solutions important for operating great EV Charging networks? We&#39;ll explore how you can you make your EV Charging solution sustainable through the lens of green software practices.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/great-charging-needs-green-software/";
        
      },
    },{id: "post-charging-in-the-city",
      
        title: "Charging in the City",
      
      description: "Why are EV charging solutions in the city important? What opportunities in city charging have not been explored or expanded?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/charging-in-the-city/";
        
      },
    },{id: "post-could-micromobility-work-in-the-suburbs",
      
        title: "Could Micromobility Work in the Suburbs?",
      
      description: "Exploring a thought on improving transit in the suburbs with micromobility, defining what it is and my personal experiences with it. Could micromobility work in the suburbs?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/could-micromobility-work-in-the-suburbs/";
        
      },
    },{id: "post-an-introduction",
      
        title: "An Introduction",
      
      description: "What is the Jordan Ventures blog about?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/an-introduction/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jordan-a-glover", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%67%6C%6F%76%65%72%34%32@%67%61%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/jae-ventures.bsky.social", "_blank");
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
