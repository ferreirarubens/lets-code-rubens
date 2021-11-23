export function AutoUnsub() {
    return function(constructor) {
        const orig = constructor.prototype.ngOnDestroy
        constructor.prototype.ngOnDestroy = function() {
            for(const prop in this) {
                const property = this[prop]
                if(typeof property.subscribe === "function") {
                    console.log(`Unsubscribing from ${prop}`);
                    property.unsubscribe()
                }
            }
            orig.apply()
        }
    }
}