function NischalFunction() {
  const protectedObject = {
    message: "Protected object",
    origin: "https.nischalbaniya.myshopify.com",
  };

  const proxy = new Proxy(protectedObject, {
    set(target, prop, value) {
      if (prop === "origin" && value.includes("myshopify.com")) {
        return Reflect.set(target, prop, value);
      } else {
        console.log("Untrusted domain");
      }
    },

    get(){}
  });

  return proxy;
}

const objectlog = NischalFunction();
objectlog.origin = "www.hellouser.myshopif.com";
console.log(objectlog);
