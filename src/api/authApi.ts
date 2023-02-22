import axiosClient from './axiosClient'

const authApi = {
  login(payload: any) {
    const url = '/auth/login'
    return axiosClient.post(url, payload)
  },

  resetPassword(payload: any) {
    const url = '/auth/reset-password'
    return axiosClient.post(url, payload)
  },

  newPassword(payload: any) {
    const url = '/auth/new-password'
    return axiosClient.post(url, payload)
  },
}

export default authApi
