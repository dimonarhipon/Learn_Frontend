/**
 * @param {{ action: string, payload: unknown }} data
 */
export const handleMessage = ({ action, payload }) => {
  if (action) {
    console.log("message from children", { action, payload });
  }

  switch (action) {
    case "getToken":
      paymentForm.contentWindow.postMessage(
        {
          action: "token",
          payload: { token: "current-token" },
        },
        TARGET_ORIGIN
      );
      break;
  }
};

window.addEventListener("message", (e) => {
  //
  // if (e.origin !== "hhtp://my-origin.ru") {
  //   return;
  // }

  handleMessage(e.data);
});

const TARGET_ORIGIN = "*";
// paymentForm = ref iframe
const paymentForm = document.querySelector("#payment-form");
//Post message to iframe
paymentForm.contentWindow.postMessage(
  {
    action: "action",
    payload: { text: "qwe" },
  },
  TARGET_ORIGIN
);
