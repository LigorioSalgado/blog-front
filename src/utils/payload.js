export default () => {

	const token =  localStorage.getItem('blogToken');
	if(token){
		const baseUri =  token.split('.')[1];
		const base64 =  baseUri.replace('-','+').replace('_','/');
		return JSON.parse(window.atob(base64));
	}
}