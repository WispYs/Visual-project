import axios  from './axios';
import urls  	from './urls';

export default {
	fetchEquipmentInfo(data) {
		// const url = urls.getEquipmentInfo();
		const url = 'https://api.apiopen.top/getJoke';
		return axios.get(url, data);
	},
}