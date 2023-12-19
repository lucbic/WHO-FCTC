import Home from './templates/Home.vue'
import Scenarios from './templates/Scenarios.vue'
import Scenario from './templates/Scenario.vue'
import About from './templates/About.vue'
import Resources from './templates/Resources.vue'
import Contact from './templates/Contact.vue'

export const routes = [
	{ path: '/', component: Home, name:'home' },
	{ path: '/scenario', component: Scenario, name:'scenario' },
	{ path: '/scenario/:id', component: Scenarios, name:'scenarios' },
	{ path: '/about', component: About, name:'about' },
	{ path: '/resources', component: Resources, name:'resources' },
	{ path: '/contact', component: Contact, name:'contact' }
];