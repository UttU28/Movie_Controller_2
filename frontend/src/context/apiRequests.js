// apiRequests.js
import axios from 'axios';

const BASE_URL = "http://192.168.0.132:5000";

export const sendMovement = async (dx, dy) => {
  try {
    await axios.post(`${BASE_URL}/move`, { dx, dy });
  } catch (error) {
    console.error("Error sending motion data:", error);
  }
};

export const sendScroll = async (dy) => {
  try {
    await axios.post(`${BASE_URL}/scroll`, { dy });
  } catch (error) {
    console.error("Error sending scroll data:", error);
  }
};

export const sendClick = async (button) => {
  try {
    await axios.post(`${BASE_URL}/click`, { button });
  } catch (error) {
    console.error(`Error sending ${button} click:`, error);
  }
};
