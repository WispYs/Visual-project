import axios  from './axios';
import urls  	from './urls';

export default {
	fetchEquipmentInfo(data) {
		// const url = urls.getEquipmentInfo();
		console.log(process.env.NODE_ENV);
		const url = 'http://192.168.50.145:9005/data';
		return axios.get(url, data);
	},
}