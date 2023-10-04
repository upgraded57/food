import axios from "axios";
import { toast } from "react-hot-toast";
export const comingSoon = () => {
  toast("Coming Soon", {
    icon: "🖐🏼",
    duration: 2000,
    style: {
      border: "1px solid #32b768",
      color: "#32b768",
      borderRadius: "50px",
      padding: "5px 12px ",
    },
  });
};

export const getUserIp = async (
  setLocationLoading,
  setUserLocation,
  setLocationError
) => {
  setLocationLoading(true);
  await axios
    .get("https://api.ipify.org?format=json")
    .then((res) =>
      axios
        .get(`http://ip-api.com/json/${res.data.ip}?fields=32789`)
        .then((res) => setUserLocation(res.data))
        .catch((err) => {
          console.log(err.message);
          setLocationError(true);
        })
        .finally(() => {
          setLocationLoading(false);
        })
    )
    .catch(() => setLocationError(true))
    .finally(() => {
      setLocationLoading(false);
    });
};
