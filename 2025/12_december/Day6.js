function ProxyConcept(role) {
    const originalObject = {
        name: "Nischal",
        profession: "engineer",
        salary: 750000000,
        email: "nisal@gmail.com"
    }

    const proxy = new Proxy(originalObject, {
        set(target, prop, value) {
            if(role === "admin") {
                return Reflect.set(target, prop, value);
            }
            else {
                console.log("error: only admin can modify");
                return false;
            }
        }
    })

    return proxy;
}

const logByAdmin = ProxyConcept("dev");
logByAdmin.name = "Changed";  // This will log "error: only admin can modify"

const logByAdminActual = ProxyConcept("admin");
logByAdminActual.name = "Changed";  // This will work
console.log(logByAdminActual);  // "Changed"