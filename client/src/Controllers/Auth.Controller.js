import Cookies from "js-cookie";

const cookieHolder = (response) => {
  if (response && response.data.Token && response.data.Plan) {
    const payLoad = { token: response.data.Token, plan: response.data.Plan };
    Cookies.set("user", JSON.stringify(payLoad), { expires: 1 });

    return true;
  } else {
    console.error("Invalid response:", response);
    return false;
  }
};

export default cookieHolder;
