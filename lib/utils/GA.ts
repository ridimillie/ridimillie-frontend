declare global {
  interface Window {
    dataLayer: Array<any>;
  }
}

function gtag(...args: any[]) {
  window.dataLayer.push(arguments);
  // console.log(window.dataLayer);
}

export { gtag };
