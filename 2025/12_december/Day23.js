//proxy concept
const legacyAPI = new Proxy(
    { newMethod: () => 'new way' },
    {
      get(target, prop) {
        const deprecations = {
          oldMethod: 'Use newMethod instead'
        };
        
        if (prop in deprecations) {
          console.warn(`⚠️ ${prop} is deprecated. ${deprecations[prop]}`);
        }
        
        return target[prop];
      }
    }
  );
  
  legacyAPI.oldMethod(); // Warns: "⚠️ oldMethod is deprecated..."