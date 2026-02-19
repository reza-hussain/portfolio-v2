import Titan from "../assets/images/titan.png";
import Pinewheel from "../assets/images/pinewheel.png";
import Occulead from "../assets/images/occulead.png";
import IndiabullsTrading from "../assets/images/indiabulls.png";

export const projects = [
  {
    name: "Indiabulls Stock Trading Platform",
    description: `
    <h3>Project Overview:</h3>
    <p>This project involved building and scaling a high-performance stock market trading application for Indiabulls. The platform was engineered to handle high-frequency data updates and provide a seamless trading experience for retail and institutional investors, focusing on speed, reliability, and real-time data visualization.</p>

    <h3>Tech Stack:</h3>
    <ul>
        <li><strong>Frontend:</strong>Next.js, Tailwind CSS</li>
        <li><strong>State Management:</strong> Redux</li>
        <li><strong>Data Visualization:</strong> TradingView (Custom UDF Integration)</li>
        <li><strong>Real-Time Data:</strong> WebSockets</li>
        <li><strong>Optimization:</strong> Custom API Caching Layers</li>
    </ul>

    <h3>My Role:</h3>
    <p>I served as a front-end developer focused on the core trading engine and frontend architecture. My primary responsibility was bridging the gap between complex proprietary trading algorithms and a responsive user interface, ensuring that millisecond-level data changes were reflected accurately across the application.</p>

    <h3>Key Features:</h3>
    <ul>
        <li><strong>Custom TradingView Integration:</strong> Developed a bespoke UDF (Universal Data Feed) adapter from scratch to connect proprietary trading algorithms with TradingView’s charting library.</li>
        <li><strong>Live Market Feed:</strong> Implementation of WebSockets to provide real-time, low-latency streaming of stock prices, indices, and market depth.</li>
        <li><strong>Advanced State Management:</strong> Leveraged Redux to maintain a complex global state, ensuring data consistency across multiple trading screens and watchlists.</li>
        <li><strong>Optimized API Caching:</strong> Built a custom caching layer to reduce redundant server requests, significantly improving platform responsiveness during peak trading hours.</li>
        <li><strong>Scalable Architecture:</strong> Utilized Next.js for optimized rendering and performance, allowing the platform to scale effectively as the user base grew.</li>
        <li><strong>Responsive Trading Interface:</strong> A high-fidelity UI designed for rapid execution, allowing users to place, modify, and cancel orders with minimal friction.</li>
    </ul>

    <h3>Challenges & Solutions:</h3>
    <p><strong>Data Synchronization:</strong> Handling live market feeds while maintaining UI performance is a common bottleneck. I optimized the Redux store and implemented selective re-rendering to ensure the interface remained fluid even during high market volatility.</p>
    <p><strong>Proprietary Algorithm Integration:</strong> Standard charting tools often struggle with non-standard data. By building a custom UDF adapter, I enabled the seamless visualization of specialized trading indicators that were unique to the Indiabulls ecosystem.</p>
    <p><strong>Latency Reduction:</strong> In trading, every millisecond counts. I implemented aggressive API caching and optimized WebSocket message parsing to minimize the "tick-to-trade" time experienced by the end-user.</p>

    <h3>Results:</h3>
    <p>The platform successfully scaled to meet the demands of a major financial institution, providing users with a robust and reliable tool for market analysis and execution. The custom integration of trading algorithms gave Indiabulls a competitive edge in data visualization, resulting in improved user retention and platform engagement.</p>

    <p>This project highlights my expertise in building latency-sensitive applications, complex third-party integrations, and scalable frontend architectures within the FinTech sector.</p>`,
    img: IndiabullsTrading, // Replace with your actual image variable
    slug: `Built and scaled a high-performance stock market trading application for Indiabulls using React.js, Next.js, and Redux, featuring custom TradingView integrations and real-time WebSocket feeds.`,
  },
  {
    name: "Employee Portal for Titan Company Ltd.",
    description: `<div>

  <h3>Background:</h3>
  <p>
    While working at Sketch Brahma, I had the opportunity to lead a significant project for Titan Company Ltd., 
    an Indian multinational conglomerate known for revolutionizing the Indian watch market with its quartz technology. 
    Titan Company Ltd is renowned for its brands Titan and Tanishq, and is the fifth largest integrated own brand watch manufacturer globally. 
    The company’s product portfolio includes watches, jewelry, eyecare, and apparel.
  </p>

  <h3>Project Overview:</h3>
  <p>
    This project involved a complete revamp of Titan's existing employee portal, a critical application managing over 
    10,000 employees. The portal consisted of over 22 pages and was built using Next.js. I was entrusted with the role 
    of project lead within just 6 months of joining Sketch Brahma.
  </p>

  <h3>Technologies Used:</h3>
  <ul>
    <li>Next.js</li>
    <li>Charts.js</li>
    <li>SASS</li>
  </ul>

  <h3>Challenges & Solutions:</h3>
  <p>
    Given the scalability requirements of the application, which catered to over 10,000 employees, we made a strategic 
    decision to minimize the use of external packages and instead, focused on developing custom components from scratch. 
    This approach led to a substantial performance boost and resulted in exceptional Lighthouse scores.
  </p>

  <h3>Key Features:</h3>
  <ul>
    <li>Asset Management for every employee</li>
    <li>Employee Attendance and Leave Application Process</li>
    <li>Employee Score Management</li>
    <li>Discount Coupons on Company Products</li>
    <li>Communication with the Administration</li>
    <li>Admin Portal with CRUD Operations</li>
    <li>Policy Control Page</li>
    <li>Notification Management and Scheduling</li>
    <li>And much more…</li>
  </ul>

  <h3>Outcome:</h3>
  <p>
    This project spanned over 8 months, and during this period, the client was highly satisfied with our work. As a 
    result, Sketch Brahma was awarded two additional projects from Titan Company Ltd., leading to a 30% increase in revenue. 
    Furthermore, Titan referred us to new clients, significantly expanding our client base.
  </p>
</div>
`,
    img: Titan,
    slug: `This project involved a complete revamp of Titan's existing employee portal, a critical application managing over 
    10,000 employees. The portal consisted of over 22 pages and was built using Next.js. I was entrusted with the role 
    of project lead within just 6 months of joining Sketch Brahma.`,
  },
  {
    name: "Landing Page for AI Startup",
    description: `<p>This project involved creating a landing page for a company revolutionizing cybersecurity with advanced Large Language Models (LLMs) and AI technology. The project was secured through Upwork and included ongoing work on the company's primary product.</p>
    
    <h3>Objectives</h3>
    <p>The goal was to design a high-performing landing page that effectively communicates the company's innovative use of AI in cybersecurity, appealing to potential clients and investors.</p>
    
    <h3>Challenges & Solutions</h3>
    <ul>
        <li><strong>Complex Content Simplification:</strong> The sophisticated technology needed to be explained clearly. We used engaging visuals and straightforward content to make AI concepts accessible.</li>
        <li><strong>Payment Integration:</strong> Using Stripe API, we ensured a secure and user-friendly payment process, handling customer data with the utmost care.</li>
        <li><strong>Database Management:</strong> PostgreSQL was chosen for its reliability in managing complex data securely and efficiently.</li>
    </ul>
    
    <h3>Results</h3>
    <ul>
        <li><strong>Increased User Engagement:</strong> The landing page captured visitors' interest, leading to higher engagement.</li>
        <li><strong>Enhanced Credibility:</strong> Clear communication of the company’s tech prowess helped establish its authority in the cybersecurity field.</li>
        <li><strong>Seamless User Experience:</strong> Stripe integration ensured a smooth, secure transaction process.</li>
    </ul>
    
    <p>This project highlights the importance of blending technical expertise with clear, effective communication in creating a successful product.</p>`,
    img: Pinewheel,
    slug: `This project involved creating a landing page for a company revolutionizing cybersecurity with advanced Large 
    Language Models (LLMs) and AI technology. The project was secured through Upwork and included ongoing work on the company's primary product.`,
  },
  {
    name: "Appointment Booking Platform.",
    description: `
    <h3>Project Overview:</h3>
    <p>This freelance project involved the development of a comprehensive medical appointment booking platform designed to facilitate interactions between clinics and companies. The platform, built using a modern tech stack, aimed to streamline the appointment scheduling process, enhance communication, and improve operational efficiency for both parties involved.</p>

    <h3>Tech Stack:</h3>
    <ul>
        <li><strong>Frontend:</strong> Next.js, Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Real-Time Communication:</strong> Socket.io</li>
        <li><strong>Appointment Scheduling Integration:</strong> Calendly</li>
    </ul>

    <h3>My Role:</h3>
    <p>I played a multifaceted role in this project, taking on the responsibility for the entire development process, from front-end and back-end development to database management. Additionally, I volunteered to design the entire UI/UX, ensuring a user-friendly and aesthetically pleasing interface.</p>

    <h3>Key Features:</h3>
    <ul>
        <li><strong>Dashboard with Insights:</strong> A dynamic dashboard featuring charts and graphs, providing real-time insights into key metrics such as appointment numbers, clinic utilization, and contract status.</li>
        <li><strong>Appointment Scheduling:</strong> Integration with Calendly to enable seamless appointment scheduling, allowing users to easily book and manage appointments.</li>
        <li><strong>Clinic and Company Management:</strong> Functionality to add and manage clinics and companies within the platform, allowing for smooth coordination and collaboration.</li>
        <li><strong>Contracts Management:</strong> Creation and management of contracts between clinics and companies, with the ability to monitor the status and details of each contract.</li>
        <li><strong>CRUD Operations:</strong> Comprehensive CRUD (Create, Read, Update, Delete) operations for managing various entities within the platform, ensuring data accuracy and integrity.</li>
        <li><strong>Settings and Customization:</strong> A settings page that allows users to customize their experience, manage notifications, and configure platform preferences.</li>
        <li><strong>Clinic Slot Management:</strong> Tools for clinics to manage their available slots, ensuring that they can effectively control appointment availability and reduce scheduling conflicts.</li>
    </ul>

    <h3>Challenges & Solutions:</h3>
    <p><strong>Seamless User Experience:</strong> The platform needed to cater to both clinics and companies with varying levels of technical expertise. I focused on creating an intuitive UI and robust backend to handle complex scheduling and contract management seamlessly.</p>
    <p><strong>Real-Time Updates:</strong> By integrating Socket.io, I ensured that users received real-time updates on appointments, contract changes, and other critical notifications, enhancing the overall responsiveness of the platform.</p>
    <p><strong>Scalability:</strong> The platform was designed with scalability in mind, using Next.js for server-side rendering and MongoDB for flexible data management, which allowed it to efficiently handle increasing amounts of data and users.</p>

    <h3>Results:</h3>
    <p>The platform successfully bridged the gap between clinics and companies, facilitating smoother appointment scheduling and contract management. The client was highly satisfied with the product's performance, leading to continued collaboration and the potential for future enhancements.</p>

    <p>This project not only demonstrated my ability to manage and execute full-stack development tasks but also showcased my skills in UI/UX design and real-time application development.</p>`,
    img: Occulead,
    slug: `This freelance project involved the development of a comprehensive medical appointment booking platform designed to facilitate interactions between clinics and companies. The platform, built using a modern tech stack, aimed to streamline the appointment scheduling process, enhance communication, and improve operational efficiency for both parties involved.`,
  },
];
