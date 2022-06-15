import request from '../utils/request'


export const getUserInfo = (data: any) => {
    return request({
      url: `api/getListAdvertising`,
      method: "post",
      data,
    });
  };

export const login = (data: any) => {
  return request({
    url: "https://smallpig.site/api/user/login",
    method: "post",
    data,
  });
};
  