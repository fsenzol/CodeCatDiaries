import process from "react-syntax-highlighter/.eslintrc.js";

export const handleSliceForSmallPage = (currentPage) => {
	const itemsPerPage = 6;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = currentPage * itemsPerPage;
	return [startIndex, endIndex];
};


export const handleSliceForBigPage = (currentPage) => {
	const itemsPerPage = 9;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = currentPage * itemsPerPage;
	return [startIndex, endIndex];
};

export const AUTH = {
	USERNAME: import.meta.env.VITE_USER || process.env.VITE_USER,
	PASSWORD: import.meta.env.VITE_PASS || process.env.VITE_PASS,
	URL: import.meta.env.VITE_API_URL 	|| process.env.VITE_API_URL,
	SECRET: import.meta.env.VITE_SECR 	|| process.env.VITE_SECR
}


export const TechStack = [
	{
		"title": "C/C++",
		"desc": "I’m comfortable working with C/C++, mainly for performance-critical, Network programming with sockets applications and game development with SFML. While I am not too verse with SFML yet, I’ve started creating simple games and graphics-based projects with it. I love how C and C++ give me full control over memory and performance, and I’m constantly learning new ways to optimize code and improve efficiency. Every project helps me understand the language a bit more."
	},
	{
		"title": "Java/XML",
		"desc": "I’ve used Java mainly for mobile development, with some ventures into JavaFX. It’s a powerful language that I’m always learning more about, especially when it comes to building reliable and user-friendly apps, with XML based UIs. With every project, I learn new best practices and ways to improve my code."
	},
	{
		"title": "Kotlin",
		"desc": "Kotlin is currently my preferred language for Android development. I use it to build modern, smooth, and responsive mobile apps. I’m still discovering new ways to make my Kotlin apps better, and I love how concise and fun() it is xd . I’m always looking for ways to improve my workflow and keep my projects simple and well good :v."
	},
	{
		"title": "Python",
		"desc": "I use Python primarily for automation. Whether it’s web scraping, automating tasks, or working with APIs, Python is my go-to tool for handling repetitive tasks. While I’m not deep into frameworks like Django, I enjoy discovering new libraries and techniques that help me solve problems faster and more efficiently, but hey! python is so much fun :v. Python is a language I’m always exploring to make my work easier and more automated."
	},
	{
		"title": "JavaScript",
		"desc": "I’ve work with JavaScript to build interactive web applications, mostly using React. JavaScript allows me to create dynamic, real-time user interfaces, and I’m always learning new ways to optimize performance and enhance the user experience. I also use Node.js for backend services and enjoy experimenting with different tools to improve my full-stack development skills. I also use JS for many automated projects especially i miss NPM xd"
	},
	{
		"title": "PHP",
		"desc": "I use PHP for creating webservers, linked to an SQL database. I’m constantly refining my skills in organizing code and improving server-side logic. There’s always something new to learn in PHP, whether it’s a more efficient way to handle data or a new approach to managing content, and by the way php reminds me of the sums of $ i'd have soon :P."
	},
	{
		"title": "SQL",
		"desc": "With SQL, I manage and query data in databases. I’m skilled at writing queries to get the data I need and keeping everything organized. I continue to learn about advanced database management and optimization techniques. SQL helps me make sure my data is structured properly and easily accessible. Who needs JSON for complex structures when Sequal got your back? xd"
	},
	{
		"title": "Lua",
		"desc": "I’ve used Lua for game development with Love2D. It’s a lightweight scripting language that’s perfect for quickly building small games. I’m not really into Lua these days, but it’s a great tool for experimenting and bringing ideas to life fast, and yuh it all started from Lua, and i still visit it when free :P. I enjoyed the process of learning and improving my Lua projects, it was really a fun way to do stuff without ready-made libraries *sigh"
	},
	{
		"title": "Bash",
		"desc": "I use Bash for scripting and automating tasks in Linux environments. It’s great for simplifying repetitive tasks and managing systems. I’m always learning new ways to write more efficient Bash scripts and make them even more useful for system administration or automating my workflows. It’s a tool I rely on and am always refining as I work more with it. But hey its obvious i need to be good at bash scripting cuz imma linux guy :v"
	},
	{
		"title": "Flet",
		"desc": "I’ve started working with Flet to build real-time web applications. It’s a simple tool for creating interactive apps that update live data, and I’m excited to keep learning about it. As I explore more of its capabilities, I’m getting better at using it for building apps that are easy to maintain and fun to use. Every new project I do with Flet helps me understand it a little better. PS: its flutter on steroids, on python xd"
	},
	{
		"title": "Three.js",
		"desc": "I’ve begun working with Three.js to create interactive 3D web experiences. It’s a fantastic tool for building 3D scenes and animations in the browser like this site :v, and I’m still learning all the powerful features it has. Whether I’m creating 3D models or exploring new ways to visualize data, I’m always excited to learn more about Three.js and what it can do for web-based 3D projects. And well, nothing gives me such high dopamine levels, as working with Computer grapics, its magical!"
	},
	{
		"title": "Networking & VPNs",
		"desc": "I’m familiar with tools like Hysteria and Tun2Socks for managing network traffic and improving security, and I’m constantly exploring new ways to optimize network configurations. 'Every good guy was once a bad guy ~basedcatx'"
	},
	{
		"title": "Automation",
		"desc": "I regularly use Python, JS and Bash to automate tasks, and I’m always discovering better, more efficient ways to make processes run smoothly."
	},
	{
		"title": "Web Development",
		"desc": "I have experience with React for front-end development and Node.js for server-side logic (MERN), and I’m continually learning how to improve my web apps, both in design and functionality, well cuz of ThreeJS xd"
	},
	{
		"title": "Network Security & Ethical Hacking",
		"desc": "I am skilled in network security and ethical hacking. I’m learning how to secure systems, identify vulnerabilities, and understand attack vectors. I keep myself updated with the latest tools and techniques for securing networks and improving privacy. While still growing in this field, I’m passionate about ethical hacking and always seeking new knowledge to better protect systems and networks. All my programming prowess kinda converges to this :P"
	}
]

export const passions = [
	"Drawing and exploring creative art.",
	"Playing guitar and diving into music.",
	"Helping others and making a positive impact.",
	"Socializing and building meaningful connections."
]

export const myIntro = "Hello! My name is Tazuh Faith (basedcatx), a 19-year-old developer from <strong>Cameroon</strong>. I’m passionate about creating, exploring, and sharing knowledge in the tech space. I specialize in the MERN stack and enjoy diving deep into various technologies."

export const Attributions = [
	{
		name: "Freepik",
		link: "https://freepik.com"
	}
]

