import project1_1 from '../../public/assets/fuel.png';
import project1_2 from '../../public/assets/fuel2.png';
import project1_3 from '../../public/assets/fuel3.png';
import project1_4 from '../../public/assets/fuel4.png';

import project2_1 from '../../public/assets/installer.png';
import project2_2 from '../../public/assets/installer2.png';
import project2_3 from '../../public/assets/installer3.png';
import project2_4 from '../../public/assets/installer5.png';

import project3_1 from '../../public/assets/screen.png';
import project3_2 from '../../public/assets/screen2.png';
import project3_3 from '../../public/assets/screen3.png';
import project3_4 from '../../public/assets/screen4.png';

import project4_1 from '../../public/assets/app.png';
import project4_2 from '../../public/assets/app2.png';
import project4_3 from '../../public/assets/app3.png';
import project4_4 from '../../public/assets/app4.png';

import project5_1 from '../../public/assets/ecommerce.png';
import project5_2 from '../../public/assets/ecommerce2.png';
import project5_3 from '../../public/assets/ecommerce3.png';
import project5_4 from '../../public/assets/ecommerce1.png';

import project6_1 from '../../public/assets/youtube.png';
import project6_2 from '../../public/assets/youtube2.png';
import project6_3 from '../../public/assets/youtube3.png';
import project6_4 from '../../public/assets/youtube4.png';

import project7_1 from '../../public/assets/IMG_9284.png';
import project7_2 from '../../public/assets/IMG_9286.png';
import project7_3 from '../../public/assets/IMG_9287.png';
import project7_4 from '../../public/assets/IMG_9292.png';

export const project = [
    {
        id: 1,
        project_name: "FMS Management System",
        status: false,
        credential:['user','12345678'],
        credential_status:true,
        year: 2023,
        live_at: 'https://detfsmmm.com',
        role: "FullStack",
        about: 'The real-time fuel management website is currently operational, with hundreds of users, including the Ministry of Electricity and Energy (MOEE) and fuel station companies, actively monitoring it. On the default website, 10 stations are running, providing detailed sales information. Many managers use this website for their stations to generate daily reports, manage accounts, and check profits and other staff details from their individual dashboards. The website maintains daily data directly sourced from the table application used by sellers and dispensers. Future plans include displaying information for 100 stations, allowing control of multiple accounts. I am actively contributing to the development and design of the cloud server API. However, my primary focus is on developing the frontend user interface, emphasizing user experience and UI design. I worked closely with the project manager and another backend developer to devise solutions and brainstorm ideas for improvements. I created the design using Figma and implemented it with React.js, Tailwind, ReactRouterDom, Framermotion, and Prime React.Of course, version control is being managed using Git and GitHub.Bought Domain from z.com.For hosting, I utilize AWS EC2.',
        tools: 'React.js, Tailwind ,Framer Motion, React Rouder Dom, Redux, Redux Thunk, Custom Hooks,Prime React, Chart.js,Nginx, Express, Node.js, Mongodb,Redis, TypeScript, Zod, EC2',
        pictures: [project1_1,project1_2,project1_3,project1_4],
        next_project_title: 'FMS Set up application',
        next_project_year:2023,
        next_project_description: 'The POS setup website serves as an installer platform, widely utilized by installers to configure POS servers for various stations. Dispensers, nozzles, initial data, and account controls all originate ...',
        next_project_pictures: [project2_1,project2_2,project2_3,project2_4],
        next_project_id:1
    },
    {
        id: 2,
        project_name: "FMS Set up application",
        status: true,
        credential:'userName:User , Password:12345678',
        credential_status:false,
        year: 2023,
        live_at: 'unauthorized',
        role: "FullStack",
        about: 'The POS setup website serves as an installer platform, widely utilized by installers to configure POS servers for various stations. Dispensers, nozzles, initial data, and account controls all originate from this POS setup web. Emphasizing simplicity, ease of use, and lightweight design, I aim to make the setup process straightforward for users, offering a plug-and-play experience through installers.',
        pictures: [project2_1,project2_2,project2_3,project2_4],
        next_project_title: 'FMS SETUP WEB Frontend',
        next_project_description: 'The POS setup website serves as an installer platform, widely utilized by installers to configure POS servers for various stations. Dispensers, nozzles, initial data, and account controls all originate from this POS setup web.',
        next_project_pictures: [project2_1,project2_2,project2_3,project2_4],
        next_project_id:2
    },
    {
        id: 3,
        project_name: "FMS SETUP Web Frontend",
        status: true,
        credential:'userName:User , Password:12345678',
        credential_status:false,
        year: 2023,
        live_at: 'localhost',
        role: "Frontend ",
        about: 'The POS setup website serves as an installer platform, widely utilized by installers to configure POS servers for various stations. Dispensers, nozzles, initial data, and account controls all originate from this POS setup web. Emphasizing simplicity, ease of use, and lightweight design, I aim to make the setup process straightforward for users, offering a plug-and-play experience through installers.',
        pictures: [project2_1,project2_2,project2_3,project2_4],
        next_project_title: 'Ecommerce',
        next_project_description: 'TThe UI for this ecommerce website is ready for interaction with the API that I developed during my free time. The features include displaying products based on categories, special products, sale products, and popular products determined by user preferences. ',
        next_project_pictures: [project3_1,project3_2,project3_3,project3_4],
        next_project_id:3
    },
    {
        id: 4,
        project_name: "KhitZay Ecommerce UI",
        status: true,
        credential:'userName:User , Password:12345678',
        credential_status:false,
        year: 2023,
        live_at: 'https://thurakhitzay.netlify.app',
        role: "Frontend ",
        about: 'The UI for this ecommerce website is ready for interaction with the API that I developed during my free time. The features include displaying products based on categories, special products, sale products, and popular products determined by user preferences. Additionally, there will be a blog section for advertising.On the products page, users can utilize filters based on prices, categories, color, and stock availability.',
        pictures: [project3_1,project3_2,project3_3,project3_4],
        next_project_title: 'FMS RealTime Application',
        next_project_description: 'The FMS application is currently operational across nine stations in Natogyi, Ohn Chaw, Kyawe Tat Sone, Kyein Pin Sel, Nawng Kio, Muse, Sittwe, Gwa, and Taunggyi.',
        next_project_pictures: [project4_1,project4_1,project4_3,project4_4],
        next_project_id:4
    },
    {
        id: 5,
        project_name: "FMS RealTime Application",
        status: false,
        credential:'userName:User , Password:12345678',
        credential_status:false,
        year: 2023,
        live_at: 'https://drive.google.com/file/d/15NQDfyogA01TvzT2dz9qv_8cEdl7pLjJ/view?usp=drive_link',
        role: "Backend ",
        about: 'The FMS application is currently operational across nine stations in Natogyi, Ohn Chaw, Kyawe Tat Sone, Kyein Pin Sel, Nawng Kio, Muse, Sittwe, Gwa, and Taunggyi. Fuel station employees are using this application with satisfaction, utilizing it to permit dispensers and adjust dispenser prices.They frequently use the app to monitor the fuel balance in the tanks.The application features two modes: auto permit and default permit.',
        pictures: [project4_1,project4_2,project4_3,project4_4],
        next_project_title: 'Ecommerce Backend Rest API',
        next_project_description: 'For API development, I designed with the MVC control pattern, a significant pattern for maintaining and identifying errors.',
        next_project_pictures: [project5_1,project5_2,project5_1,project5_4],
        next_project_id:5
    },
    
    {
        id: 6,
        project_name: "Ecommerce Backend Rest API",
        status: false,
        credential:'userName:User , Password:12345678',
        credential_status:false,
        year: 2023,
        live_at: 'https://detfsmmm.com',
        role: "Backend ",
        about: 'For API development, I designed with the MVC control pattern, a significant pattern for maintaining and identifying errors. I implemented thorough error handling to ensure the stability of the API and prevent crashes. Multiple middlewares are utilized for enhanced functionality.To efficiently handle images and videos, I integrated Cloudinary to store these media files, ensuring optimal API performance. The API includes a password recovery feature with email recovery and password reset functionalities, and I implemented Jsonweb token for security measures.',
        pictures: [project5_1,project5_2,project5_1,project5_4],
        next_project_title: 'Youtube Backend Rest api',
        next_project_description: 'YouTube Rest API is implemented using the MVC pattern with Node.js and MongoDB. I utilize Zod for type validation, JSON Web Token for account control and security, and TypeScript for robust development, incorporating multiple middlewares. MongoDB is employed as the database.',
        next_project_pictures: [project6_1,project6_2,project6_3,project6_4],
        next_project_id:6
    },
    {
        id: 7,
        project_name: "Youtube Backend Rest api",
        status: false,
        credential:'userName:User , Password:12345678',
        credential_status:false,
        year: 2023,
        live_at: 'https://detfsmmm.com',
        role: "Backend ",
        about: 'YouTube Rest API is implemented using the MVC pattern with Node.js and MongoDB. I utilize Zod for type validation, JSON Web Token for account control and security, and TypeScript for robust development, incorporating multiple middlewares. MongoDB is employed as the database.YouTube Rest API is implemented using the MVC pattern with Node.js and MongoDB.I utilize Zod for type validation, JSON Web Token for',
        pictures: [project6_1,project6_2,project6_3,project6_4],
        next_project_title: 'Local Server Development',
        next_project_description: 'Raspberry pi, Banana pi and Pos Handle.I learned to connect my web and hardware devices for further improvement in my development. I am familiar with SSH technology, Raspbian OS, Linux, and server logic. Similar configurations apply to the Banana Pi. The server logic is the same as on a cloud server, such as EC2.',
        next_project_pictures: [project7_1,project7_2,project7_3,project7_4],
        next_project_id:7
    },
    {
        id: 8,
        project_name: "Local Server Development",
        status: false,
        credential:'userName:User , Password:12345678',
        credential_status:false,
        year: 2023,
        live_at: 'https://detfsmmm.com',
        role: "Server ",
        about: 'Raspberry pi, Banana pi and Pos Handle.I learned to connect my web and hardware devices for further improvement in my development. I am familiar with SSH technology, Raspbian OS, Linux, and server logic. Similar configurations apply to the Banana Pi. The server logic is the same as on a cloud server, such as EC2.',
        pictures: [project7_1,project7_2,project7_3,project7_4],
        next_project_title: 'Real Time Fuel Management System',
        next_project_description: 'The real-time fuel management website is currently operational, with hundreds of users, including the Ministry of Electricity and Energy (MOEE) and fuel station companies, actively monitoring it.',
        next_project_pictures: [project1_1, project1_2, project1_3, project1_4],
         next_project_id:0
    }
];