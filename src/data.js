import * as icon from 'react-icons/si'

const profile = {
	name: 'Axel Avelino',
	role: '@Backend Developer'
};

const social = [{
	icon: icon.SiGithub,
	link: 'https://github.com/avelinojrr'
},
{
	icon: icon.SiLinkedin,
	link: 'https://www.linkedin.com/in/axelavelino/'
},
{
	icon: icon.SiInstagram,
	link: 'https://instagram.com/avelinojrr'
},
];

const brand = 'avelinojrr'


const work = [{
	name: 'Login And Register',
	description: 'It is a simple REST Api where we have applied the MVC architecture, creating the backend in NodeJS/Express, as a database MongoDB and the UI part in ReactJs + TailwindsCss.',
	stack: [{
		icon: icon.SiNodedotjs,
		name: 'NodeJs'
	},
	{
		icon: icon.SiExpress,
		name: 'Express'
	},
	{
		icon: icon.SiReact,
		name: 'ReactJs'
	},
	{
		icon: icon.SiTailwindcss,
		name: 'TailwindCss'
	},
	{
		icon: icon.SiMongodb,
		name: 'Mongodb'
	},
	{
		icon: icon.SiTextpattern,
		name: 'MVC'
	},
	{
		icon: icon.SiVisualstudiocode,
		name: 'Visual Studio Code'
	},
	{
		icon: icon.SiFastapi,
		name: 'Apis'
	}
	],
	linkProject: 'https://github.com/avelinojrr/fintech-login-register',
},
{
	name: 'Stripe Payment Api',
	description: 'Phrases App, application built under the MVVM architecture (Model-View-ViewModel), in this app I put my knowledge of the architecture and this app is made with the Kotlin language.',
	stack: [{
		icon: icon.SiNodedotjs,
		name: 'NodeJs'
	},
	{
		icon: icon.SiExpress,
		name: 'Express'
	},
	{
		icon: icon.SiNodemon,
		name: 'Nodemon'
	},
	{
		icon: icon.SiTextpattern,
		name: 'Clean Architecture'
	},
	{
		icon: icon.SiAndroidstudio,
		name: 'Android Studio'
	},
	],
	linkProject: 'https://github.com/avelinojrr/PhrasesAppMVVM'
},
{
	name: 'Excel Validator',
	description: 'This is a console application where we validate 2 excel files for conflicts, using Python, Pandas and some libraries.',
	stack: [{
		icon: icon.SiPython,
		name: 'Python'
	},
	{
		icon: icon.SiPandas,
		name: 'Pandas'
	},
	{
		icon: icon.SiMicrosoftexcel,
		name: 'Excel Files'
	},
	{
		icon: icon.SiVisualstudiocode,
		name: 'Visual Studio Code'
	},
	{
		icon: icon.SiWindowsterminal,
		name: 'Windows Terminal'
	},
	],
	linkProject: 'https://github.com/avelinojrr/CB'
},
{
	name: 'And More Projects...',
	description: 'If you want to see more projects, you can visit my github profile.',
	stack: [

	],
	linkProject: 'https://github.com/avelinojrr',
},
]


const stack = [{
	name: 'Technologies',
	items: [{
		icon: icon.SiPython,
		name: 'Python'
	},
	{
		icon: icon.SiDjango,
		name: 'Django'
	},
	{
		icon: icon.SiNodedotjs,
		name: 'NodeJs',
	},
	{
		icon: icon.SiExpress,
		name: 'Express'
	},
	{
		icon: icon.SiVisualstudiocode,
		name: 'Visual Studio Code',
	},
	{
		icon: icon.SiTextpattern,
		name: 'Clean Architecture'
	},
	{
		icon: icon.SiMongodb,
		name: 'MongoDB'
	},
	{
		icon: icon.SiPostgresql,
		name: 'PostgresSQL'
	}
	],
},
{
	name: 'Other Tech',
	items: [{
		icon: icon.SiReact,
		name: 'ReactJs'
	},
	{
		icon: icon.SiTailwindcss,
		name: 'TailwindCss'
	},
	{
		icon: icon.SiNpm,
		name: 'Npm',
	},
	{
		icon: icon.SiFastapi,
		name: 'Apis',
	},
	{
		icon: icon.SiGithub,
		name: 'GitHub'
	},
	{
		icon: icon.SiGit,
		name: 'Git'
	},
	{
		icon: icon.SiGooglecloud,
		name: 'Google Cloud'
	},
    {
        icon: icon.SiAmazonaws,
        name: 'Amazon Web Services'
    },
	],
},
]

const contact = {
	description: 'I am currently interested in new job opportunities, if you want to contact me, you can do it through the following social networks or email. My inbox is always open, I will do my best to answer you!',
	email: 'axelavelino1@gmail.com'
}

export {
	profile,
	social,
	work,
	stack,
	contact,
	brand,
}