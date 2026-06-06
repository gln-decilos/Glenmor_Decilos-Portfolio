export type Project = {
    slug: string;
    title: string;
    shortTitle: string;
    category: string;
    description: string;
    summary: string;
    role: string;
    year: string;
    status: string;
    image: string;
    tags: string[];
    overview: string[];
    challenge: string;
    approach: string[];
    features: string[];
    outcome: string;
    coverAccent: string;
    clientContext?: string;
    projectType?: string;
    liveUrl?: string;
    githubUrl?: string;
    figmaUrl?: string;
    screenshotDescription?: string;
    capstoneDescription?: string;
    photoSectionTitle?: string;
    photoDescription?: string;
    galleryImages?: {
        src: string;
        alt: string;
        type: "figma" | "mockup" | "demo" | "screenshot" | "capstone" | "photo";
    }[];
    sections?: {
        id: string;
        title: string;
        icon: string;
    }[];
};

export const projects: Project[] = [
    // Update the ReadBee project in your projects array:

    {
        slug: "readbee",
        title: "ReadBee: A Teacher-Assisted Reading Assessment Tool w/ Voice-Based Read Rate Monitoring & Comprehension Analysis",
        shortTitle: "ReadBee",
        category: "Capstone Project",
        description: "Voice-based reading and scoring platform designed for elementary learners using voice recognition and analytics.",
        summary: "A voice-based reading and scoring platform designed for elementary learners. It simplifies oral reading assessments by using voice recognition and analytics, helping teachers track reading progress, identify gaps, and support students with data-driven insights — anytime, anywhere.",
        role: "Project Leader · UI/UX Designer · Web Developer",
        year: "2025 - Present",
        status: "Tech Transfer Training at DepEd Nasugbu",
        tags: ["PHP", "React", "Tailwind", "Laravel", "Supabase"],
        image: "/projects/readbee.png",
        coverAccent: "from-green-100 via-emerald-50 to-white dark:from-cyan-950/50 dark:via-zinc-950 dark:to-zinc-950",
        overview: [
            "ReadBee is a capstone project that is currently undergoing tech transfer training at the Department of Education (DepEd) in the 1st District of Batangas. The system is designed to revolutionize how oral reading assessments are conducted in elementary schools.",
            "As the Project Leader, UI/UX Designer, and Web Developer, I led the development of this voice-based reading assessment platform that uses voice recognition technology and digital scoring to automatically calculate the score pupil reading performance. The system provides teachers with real-time analytics and data-driven insights to support student learning.",
        ],
        challenge: "The main challenge was developing an accurate voice recognition system that could assess young learners' reading in real-time while accounting for different accents, reading speeds, and environmental noise. Additionally, we needed to create an intuitive interface that teachers with varying technical skills could easily adopt.",
        approach: [
            "Led a team to design and implement the readbee capstone project.",
            "Designed the complete UI/UX in Figma, creating wireframes, prototypes, and design systems that guided the development team.",
            "Built a responsive web application using Laravel for backend services and React with Tailwind CSS for the frontend interface.",
            "Implemented Supabase for real-time data synchronization and user authentication across different school accounts.",
        ],
        features: [
            "Voice Recognition — Automatically detects and processes oral reading for real-time scoring",
            "Digital Scoring — Instantly evaluates reading performance and tracks scores digitally",
            "Reading Materials — Provides accessible reading content tailored for different grade levels",
            "Analytics Dashboard — Visualizes progress, trends, and performance metrics over time",
            "Report Generation — Generates detailed reports to track student progress and performance",
            "Account Management — Manages user roles, access, and system settings with ease",
        ],
        outcome: "ReadBee successfully completed its development phase and is now in tech transfer training at DepEd Nasugbu. The system has demonstrated improved efficiency in conducting reading assessments, reducing manual grading time by 70% and providing teachers with actionable insights for student intervention.",
        
        // Additional fields for enhanced display
        clientContext: "Department of Education (DepEd) - 1st District of Nasugbu, Batangas",
        projectType: "Capstone Project · Tech Transfer",
        liveUrl: "https://readbee.onrender.com",
        githubUrl: "https://github.com/yourusername/readbee", // Add your actual GitHub URL
        figmaUrl: "https://figma.com/your-readbee-design", // Add your Figma URL
        screenshotDescription:
            "Here are some screenshots of the ReadBee web application, showing the main pages and interface used by teachers, evaluators, and administrators.",
        capstoneDescription:
            "Some photos captured during our capstone journey.",
        
        // Gallery images for screenshots and capstone documentation
        galleryImages: [
            { src: "/projects/readbee-web-3.png", alt: "ReadBee Web App - Landing Page", type: "screenshot" },
            { src: "/projects/readbee-web-4.png", alt: "ReadBee Web App - My Team", type: "screenshot" },
            { src: "/projects/readbee-web-1.png", alt: "ReadBee Web App - Dashboard", type: "screenshot" },
            { src: "/projects/readbee-web-2.png", alt: "ReadBee Web App - Assessment Calendar", type: "screenshot" },
            { src: "/projects/readbee-capstone-1.jpg", alt: "ReadBee Demonstration with DepEd teachers", type: "capstone" },
            { src: "/projects/readbee-capstone-2.jpg", alt: "ReadBee Final Defense 2025", type: "capstone" },
            { src: "/projects/readbee-capstone-4.jpg", alt: "With my team after successfully completing our final defense.", type: "capstone" },
            { src: "/projects/readbee-capstone-3.jpg", alt: "With Our Panelist", type: "capstone" },

        ],
        
        // Menu/tabs for navigation
        sections: [
            { id: "overview", title: "Overview", icon: "LayoutListIcon" },
            { id: "screenshots", title: "Screenshots", icon: "MonitorSmartphoneIcon" },
            { id: "capstone", title: "Capstone Photos", icon: "MonitorSmartphoneIcon" },
            { id: "demo", title: "Live Demo", icon: "ExternalLinkIcon" },
        ],
    },
    {
        slug: "livelihub",
        title: "LiveliHub: A Web-Based Facility Management and Activity Portfolio System for the Taal Building – Livelihood Training Center",
        shortTitle: "LiveliHub",
        category: "Institutional Project",
        description: "A web-based platform for managing event reservations and facilities at the Taal Building, Batangas State University – ARASOF Nasugbu.",
        summary: "A web-based platform for managing event reservations and facilities at the Taal Building, Batangas State University – ARASOF Nasugbu. The system allows users to book facilities, track event schedules, and manage reservations efficiently through an intuitive interface.",
        role: "UI/UX Designer · Web Developer",
        year: "2026",
        status: "Completed",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
        image: "/projects/livelihub.png",
        coverAccent: "from-lime-100 via-green-50 to-white dark:from-emerald-950/40 dark:via-zinc-950 dark:to-zinc-950",
        overview: [
            "LiveliHub is an institutional project assigned by Batangas State University – ARASOF Nasugbu for the Taal Building – Livelihood Training Center. It was developed to provide a centralized platform for managing event reservations, facility usage, and activity schedules.",
            "As the UI/UX Designer and Web Developer, I worked on designing the user interface and developing the web system together with one other developer. The goal was to make the reservation process easier for users while helping administrators monitor bookings, schedules, and facility-related activities more efficiently.",
        ],
        challenge: "The challenge was to create a simple and organized reservation system that could support facility bookings, event schedules, and activity monitoring for an institutional setting while remaining easy to use for both users and administrators.",
        approach: [
            "Designed a clear and intuitive interface for facility reservation, event scheduling, and activity monitoring workflows.",
            "Built the system together with another developer using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL.",
            "Structured the pages around common user and admin tasks such as booking facilities, checking event schedules, and managing reservation records.",
            "Focused on a simple, responsive layout so the platform could be used comfortably by different users in the university setting.",
        ],
        features: [
            "Facility Reservations — Allows users to book available facilities for events and activities",
            "Event Scheduling — Tracks upcoming events and facility schedules in one centralized system",
            "Reservation Management — Helps administrators monitor, review, and manage reservation records",
            "Activity Monitoring — Supports the Livelihood Training Center in tracking activities related to extension services and community development initiatives",
            "Intuitive Interface — Provides a simple and organized user experience for both users and administrators",
        ],
        outcome: "LiveliHub was completed as an institutional project for Batangas State University – ARASOF Nasugbu and is now being used by the university. The system provides the Livelihood Training Center with a centralized platform for managing facility reservations, event schedules, and activity monitoring, making the reservation process more organized and easier to track for administrators and users.",

        clientContext: "Batangas State University – ARASOF Nasugbu · Taal Building – Livelihood Training Center",
        projectType: "Institutional Project · Facility Reservation System",
        liveUrl: "https://livelihub.arasof-rdes.com/livelihub//index.php",

        screenshotDescription:
            "Here are some screenshots of the LiveliHub web platform, showing the interface for facility reservations, event scheduling, and reservation management.",

        galleryImages: [
            { src: "/projects/livelihub-web-1.png", alt: "LiveliHub Web Platform - Dashboard", type: "screenshot" },
            { src: "/projects/livelihub-web-2.png", alt: "LiveliHub Web Platform - Facility Reservation", type: "screenshot" },
            { src: "/projects/livelihub-web-3.png", alt: "LiveliHub Web Platform - Event Schedule", type: "screenshot" },
            { src: "/projects/livelihub-web-4.png", alt: "LiveliHub Web Platform - Reservation Management", type: "screenshot" },
        ],
    },
    {
        slug: "wress",
        title: "WRESS: Web-Based Requirements Engineering Support System",
        shortTitle: "WRESS",
        category: "Internship Project",
        description: "A web-based support system for collecting, organizing, analyzing, and tracking software requirements.",
        summary: "WRESS helps teams manage requirements engineering activities through a web-based support system for collecting, organizing, analyzing, and tracking software requirements.",
        role: "Software Engineer",
        year: "2025",
        status: "Completed",
        tags: ["React", "Tailwind", "Python", "PostgreSQL"],
        image: "/projects/wress.png",
        coverAccent: "from-sky-100 via-cyan-50 to-white dark:from-sky-950/40 dark:via-zinc-950 dark:to-zinc-950",
        overview: [
            "WRESS was my internship project at the Department of Science and Technology – Advanced Science and Technology Institute (DOST-ASTI) under the Computer Software Division. I was assigned as a Software Engineer to develop a draft version of WRESS using an MVP approach.",
            "Before proceeding to development, my supervisor assigned me to study Software Requirements by Karl Wiegers and Joy Beatty to better understand the requirements engineering process. This helped me connect the system design and implementation with the actual practices used in requirements collection, analysis, validation, and traceability.",
            "The system helps teams manage requirements engineering activities through a web-based support platform for collecting, organizing, analyzing, and tracking software requirements in one structured workspace.",
        ],
        challenge: "Requirements engineering can become scattered quickly, so the key challenge was creating an interface that makes complex project information feel organized.",
        approach: [
            "Studied Software Requirements by Karl Wiegers and Joy Beatty to understand the requirements engineering process before starting development.",
            "Created analysis diagrams to map the requirements engineering flow, user interactions, and system structure.",
            "Designed a prototype to visualize the WRESS workflow and guide the MVP development.",
            "Developed the MVP draft of WRESS as a web-based support system for requirements engineering activities.",
            "Presented my final output to the DOST-ASTI Computer Software Division together with our BSU advisers on my final internship day.",
        ],
        features: [
            "Professional support for requirements engineering — Provides essential tools for collecting, analyzing, tracing, and managing software requirements in one organized platform",
            "Requirements Collection — Captures and organizes stakeholder requirements in a centralized web-based workspace",
            "Requirements Analysis — Supports reviewing, validating, and refining requirements to improve clarity, completeness, and consistency",
            "Traceability Support — Tracks requirements across the project lifecycle from initial submission to implementation reference",
            "Team Collaboration — Supports communication between project members when reviewing, updating, and managing requirements",
        ],
        outcome: "WRESS was completed as an MVP draft during my internship at DOST-ASTI. On my final day, I presented the output to the Computer Software Division together with our BSU advisers, showing how the system can support teams in managing requirements engineering activities more systematically.",
        clientContext: "Department of Science and Technology – Advanced Science and Technology Institute (DOST-ASTI), Computer Software Division",
        projectType: "Internship Project · MVP Development",
        githubUrl: "",
        screenshotDescription:
            "Here are some screenshots of the WRESS web application, showing the main pages and interface for managing requirements engineering activities.",
        photoSectionTitle: "Internship Photos",
        photoDescription:
            "Some photos from my internship at DOST-ASTI under the Computer Software Division, including our work area, weekly status reporting, and final moments with the team.",
        galleryImages: [
            { src: "/projects/wress-web-1.png", alt: "WRESS Web App - Home Page", type: "screenshot" },
            { src: "/projects/wress-web-2.png", alt: "WRESS Web App - Features Page", type: "screenshot" },
            { src: "/projects/wress-web-3.png", alt: "WRESS Web App - Sign In Page", type: "screenshot" },
            { src: "/projects/wress-web-4.png", alt: "WRESS Web App - Requirements Workspace", type: "screenshot" },

            { src: "/projects/wress-internship-1.jpg", alt: "Outside the DOST-ASTI building during my internship.", type: "photo" },
            { src: "/projects/wress-internship-2.jpg", alt: "Group photo with our supervisor and the Computer Software Division staff.", type: "photo" },
            { src: "/projects/wress-internship-3.jpg", alt: "Waiting for our weekly status report during my internship at DOST-ASTI.", type: "photo" },
            { src: "/projects/wress-internship-4.jpg", alt: "Working with the co-intern at DOST-ASTI Computer Software Division.", type: "photo" },
        ],
    },
    {
        slug: "moneypulse",
        title: "MoneyPulse: Track Your Financial Heartbeat",
        shortTitle: "MoneyPulse",
        category: "Academic Project",
        description: "A secure online banking system designed to support faster registration, account activation, transactions, and banking operations.",
        summary: "MoneyPulse: Track Your Financial Heartbeat is a secure online banking system that makes registration, account activation, and transactions faster and easier. It supports customer-friendly dashboards, QR code withdrawals, real-time notifications, and tools that help bank staff manage account review, cash handling, monitoring, and reports more efficiently.",
        role: "Web Developer · UI/UX Designer",
        year: "2024",
        status: "Academic project",
        tags: ["HTML", "CSS", "PHP", "Laravel", "JavaScript", "MySQL"],
        image: "/projects/moneypulse.png",
        coverAccent: "from-emerald-100 via-teal-50 to-white dark:from-teal-950/40 dark:via-zinc-950 dark:to-zinc-950",
        overview: [
            "MoneyPulse was developed as an academic project for our System Quality Assurance course. It focuses on building a secure online banking system that improves the flow of user registration, account activation, transactions, and account monitoring for both customers and bank staff.",
            "As one of the Web Developers and UI/UX Designers, I contributed to the system development and also designed the mobile application prototype in Figma so the team had a clear visual guide for the future application direction.",
            "The project aims to improve customer satisfaction through user-friendly dashboards, QR code withdrawals, and real-time notifications, while also helping bank staff work more efficiently with tools for account review, cash handling, monitoring, and report generation.",
        ],
        challenge: "The challenge was to design and develop a banking-style system that feels secure, organized, and easy to use while supporting different user roles, transaction workflows, QR-based withdrawals, notifications, monitoring, and reporting requirements.",
        approach: [
            "Designed the mobile application prototype in Figma to guide the team in planning the user experience and future mobile direction of MoneyPulse.",
            "Worked as one of the web developers in building the online banking system using HTML, CSS, PHP, Laravel, JavaScript, and MySQL.",
            "Structured the system around the needs of different users, including administrators, staff, and customers.",
            "Focused on secure account workflows such as registration validation, account activation, minimum balance verification, login/logout, and account management.",
            "Implemented banking-related modules for balance inquiry, QR code withdrawals, fund transfers, bills payment, transaction history, notifications, audit trails, and reports.",
        ],
        features: [
            "User Registration & Validation — Supports account creation and validation for admin, staff, and customers",
            "Minimum Balance Verification — Applies the ₱500.00 minimum balance rule during account-related transactions",
            "Secure Login & Logout — Provides protected access for different user roles",
            "Role-Based Dashboards — Includes separate dashboards for admin, staff, and customer users",
            "Balance Inquiry — Allows customers to view their available account balance",
            "QR Code Withdrawals — Supports withdrawals using QR code technology",
            "Fund Transfers — Enables users to transfer funds between accounts",
            "Bills Payment — Supports payment transactions within the banking system",
            "Transaction History — Tracks transactions with export options for records and review",
            "Real-Time Notifications — Provides system and email notifications for important account and transaction updates",
            "Account Management — Supports profile updates, password reset, and security-related account actions",
            "Transaction Monitoring & Audit Trail — Helps admin and staff monitor activities and review transaction records",
            "Reports Generation — Produces operational and financial reports for transparency and decision-making",
        ],
        outcome: "MoneyPulse was completed as an academic project for our System Quality Assurance course. The project helped us apply banking workflow design, quality-focused development, and UI/UX planning while building a system that supports secure transactions, account monitoring, reports, and future growth such as mobile applications and third-party integrations.",

        clientContext: "System Quality Assurance Course",
        projectType: "Academic Project · Online Banking System",
        screenshotDescription:
            "Here are some screenshots of the MoneyPulse online banking system, showing the main pages, dashboards, transaction workflows, and banking management features.",

        galleryImages: [
            { src: "/projects/moneypulse-web-1.png", alt: "MoneyPulse Web - Landing Page", type: "screenshot" },
            { src: "/projects/moneypulse-web-2.png", alt: "MoneyPulse Web - Customer Dashboard", type: "screenshot" },
            { src: "/projects/moneypulse-web-3.png", alt: "MoneyPulse Web - Transaction Management", type: "screenshot" },
            { src: "/projects/moneypulse-web-4.png", alt: "MoneyPulse Web - QR Code Withdrawal", type: "screenshot" },

        ],
    },
    {
        slug: "pawcheck",
        title: "PawCheck: Pet Health Management System",
        shortTitle: "PawCheck",
        category: "Academic Project",
        description: "A web-based system designed to digitize the clinic operations of Ysabel Veterinary Services.",
        summary: "PawCheck is a web-based system designed to help Ysabel Veterinary Services manage pet profiles, appointments, medical records, and client interactions more efficiently through a centralized digital platform with QR-based pet information.",
        role: "Project Leader · UI/UX Designer · Web Developer",
        year: "2025",
        status: "Completed",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "CodeIgniter 4", "MySQL"],
        image: "/projects/pawcheck.png",
        coverAccent: "from-orange-100 via-amber-50 to-white dark:from-orange-950/35 dark:via-zinc-950 dark:to-zinc-950",
        overview: [
            "PawCheck is an academic project developed for Ysabel Veterinary Services to digitize clinic operations and make daily workflows easier for staff and clients. The system focuses on managing pet profiles, appointments, medical records, and client interactions in one organized platform.",
            "As the Project Leader, UI/UX Designer, and one of the Web Developers, I worked on designing the system interface and developing key parts of the web application. The goal was to reduce manual workload, prevent lost records, and improve the clinic's customer service through a more reliable digital process.",
            "The project also follows SMART business objectives, including achieving at least 90% digitization of clinic operations within 3 months of launch and delivering a fully functional system by May 06, 2025.",
        ],
        challenge: "Ysabel Veterinary Services was using a manual process for managing pet health records and appointments, which caused time-consuming record searches, lost files, and slower service. PawCheck addresses this by creating a centralized digital system that improves data accuracy, reduces administrative work, and supports a better experience for both staff and clients.",
        approach: [
            "Led the project direction and helped plan the system modules based on the clinic's needs and workflow.",
            "Designed the UI/UX to make pet records, appointments, and medical information easier to access and manage.",
            "Developed the web system using CodeIgniter 4 with PHP, MySQL, HTML, CSS, and JavaScript.",
            "Implemented QR-based pet information to help staff access pet profiles more quickly.",
            "Structured the system around practical clinic operations such as appointment booking, digital records, vaccination reminders, and admin analytics.",
        ],
        features: [
            "Pet Profile Management — Stores pet details and links records through QR-based pet information",
            "Appointment Booking — Helps clients and staff manage clinic appointment schedules",
            "Digital Medical Records — Keeps pet medical history and clinic records in a centralized system",
            "Vaccination Reminder — Supports reminders for upcoming vaccination schedules",
            "Diet & Weight Tracking — Helps monitor pet health information over time",
            "Admin Dashboard with Analytics — Provides clinic staff with organized summaries and monitoring tools",
            "Chatbot for FAQs — Assists users with common questions and basic clinic information",
            "Feedback and Rating Module — Allows clients to share feedback about clinic services",
        ],
        outcome: "PawCheck was developed as an academic project to support the digitization of Ysabel Veterinary Services' clinic operations. The system provides a centralized platform for pet profiles, appointments, medical records, QR-based pet information, reminders, analytics, and client support, helping reduce manual workload and improve service efficiency.",
        clientContext: "Ysabel Veterinary Services",
        projectType: "Academic Project · Veterinary Clinic Management System",
        screenshotDescription:
            "Here are some screenshots of the PawCheck web system, showing the main pages for managing pet profiles, appointments, medical records, and clinic-related workflows.",
        galleryImages: [
            { src: "/projects/pawcheck-web-1.png", alt: "PawCheck Web System - Dashboard", type: "screenshot" },
            { src: "/projects/pawcheck-web-2.png", alt: "PawCheck Web System - Pet Profile Management", type: "screenshot" },
           
        ],
    },
];

export function getProjectBySlug(slug: string | undefined) {
    return projects.find((project) => project.slug === slug);
}
