//proxy concept

function APIRequest(role) {
  const user = {
    id: 1,
    name: "Nischal",
    email: "nischal@gmail.com",
    password: "dsfsdf",
  };

  return new Proxy(user, {
    get(target, prop, receiver) {
      // Mask password for non-admins
      if (prop === "password" && role !== "admin") {
        return undefined;
      }

      return Reflect.get(target, prop, receiver);
    },

    // Optional: hide password from Object.keys / JSON.stringify
    ownKeys(target) {
      return Reflect.ownKeys(target);
    },

    getOwnPropertyDescriptor(target, prop) {
      if (prop === "password" && role !== "admin") {
        return {
          configurable: true,
          enumerable: true,
          value: undefined,
        };
      }

      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
  });
}

const response = APIRequest("user");
console.log("return from the proxy response ------", response);
