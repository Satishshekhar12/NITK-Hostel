import axios from '../api/axios';
import useAuth from '../hooks/useAuth';

const useRefreshToken = () => {
	const { setAuth } = useAuth();

	const refresh = async () => {
		try {
			const response = await axios.post('/api/admin/refresh');
			const accessToken = response?.data?.accessToken;
			console.log("ACCESS TOKEN: ", accessToken);
			const username = response?.data?.username;
			const role = response?.data?.role;
			if (accessToken) {
				setAuth(prev => {
					return {
						...prev,
						isLogin: true,
						username,
						role,
						accessToken
					}
				})
			}
		} catch (err) {
			console.log(err);
		}
	}

	return refresh;
}

export default useRefreshToken;