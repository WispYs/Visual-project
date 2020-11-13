import axios  from './axios';
import urls  	from './urls';

export default {
	fetchEquipmentInfo(data) {
		// const url = urls.getEquipmentInfo();
		const url = 'http://192.168.50.17:9005/data';
		return axios.get(url, data);
	},
}