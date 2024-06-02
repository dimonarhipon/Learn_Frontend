/**
 * @param {{ action: string, payload: unknown }} data
 */
const handleMessage = ({ action, payload }) => {
  if (action) {
    console.log("message from parent", { action, payload });
  }

  switch (action) {
    case "token":
      const token = payload.token;
      break;
  }
};

window.addEventListener("message", (e) => {
  handleMessage(e.data);
});

const targetOrigin = "https://my.bezkupur.com";
//Post message to parent
window.parent.postMessage(
  { action: "action", payload: { text: "qwe" } },
  targetOrigin
);

// 
window.addEventListener("load", () => {
  //здесь можно запросить у парента токен
  window.parent.postMessage({ action: "getToken" }, targetOrigin);
});
