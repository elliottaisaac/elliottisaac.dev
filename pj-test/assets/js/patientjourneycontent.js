//Patient Journey page content

const fields = {
    headline: 
    "Our Method",

    introText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. All page content is edited from <a href='assets/js/patientjourneycontent.js' target='blank'>this file</a>",

    categories: [
        {
            title: "Organ Detox Support",
            icon: "assets/icons/Icon_Graphics_Organ_Detoxification_Support.png",
            headline1: "Organ Detox Support Headline",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            headline2: "Headline Two",
            paragraphText2: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatr adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            image: "assets/img/testing.png",
            sidebarText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Binders",
            icon: "assets/icons/Icon_Graphics_Binders.png",
            headline1: "Binders headline",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            headline2: "Binders headline two ipsum",
            paragraphText2: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatr adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            image: "assets/img/testing.png",
            sidebarText: "Binders lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Environmental Support",
            icon: "assets/icons/Icon_Graphics_Environmental_Support.png",
            headline1: "Environmental headline",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            headline2: "etox Support internal headli ipsum",
            paragraphText2: "r adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatr adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            image: "assets/img/testing.png",
            sidebarText:  "Environmental SupportEnvironmental Support Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Gastrointestinal Support",
            icon: "assets/icons/Icon_Graphics_Gastrointestinal_Support.png",
            headline1: "Gastrointestinal headline",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi, tempor incidiectetur adipiscing elit, sed do eiusmod tempor incidiectetur.",
            headline2: "Gastrointestinal",
            paragraphText2: "sit amet",
            image: "assets/img/testing.png",
            sidebarText: "Super cool lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Immune Support",
            icon: "assets/icons/Icon_Graphics_Immune_Support.png",
            headline1: "Immune headline",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file.  sum dolor sit amet, consectetur adipiscing elit, t Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu",
            headline2: "psum dolor sit ",
            paragraphText2: "sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
            image: "assets/img/testing.png",
            sidebarText: "This is different Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },
        {
            title: "Dental Support",
            icon: "assets/icons/Icon_Graphics_Dental_Support.png",
            headline1: "ectetur adipiscing elit, sed do eiusmod tempor incidi",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. psum lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  psum lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
            headline2: "do eiusmod tempor i",
            paragraphText2: "ectetur adipiscing elit, sed do eiusmod tempor incidiectetur adipiscing elit, sed do eiusmod tempor incidiectetur adipiscing elit, sed do eiusmod tempor incidi",
            image: "assets/img/testing.png",
            sidebarText: "Ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Neurological Support",
            icon: "assets/icons/Icon_Graphics_Neurological_Support.png",
            headline1: "Neurological Neurological",
            paragraphText1:"I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. Neurological adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            headline2: "Neurological two",
            paragraphText2: "labore et dolore magna aliqua. Ut  psum lorem ipsum dolor sit amet, consectetur adipiscing elit",
            image: "assets/img/testing.png",
            sidebarText: "Lorem different ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        },

        {
            title: "Foundational Support",
            icon: "assets/icons/Icon_Graphics_Foundational_Support.png",
            headline1: "consectetur adipiscing",
            paragraphText1: "I'm paragraph text, edit me and all other content in the assets/js/patientjourneycontent.js file. etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            headline2: "Elliott",
            paragraphText2: "rem ipsum dolor sit amet, consectetur adipiscing elit, s",
            image: "assets/img/testing.png",
            sidebarText: "Blahhhhh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            buttonText: "Shop all",
            buttonLink: "https://biopurecustomer.myshopify.com/"
        }
    ]
}

FillInitialContent();