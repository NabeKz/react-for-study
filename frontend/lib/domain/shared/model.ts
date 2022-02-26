// Needed for all mixins
type Constructor<T = {}> = new (...args: any[]) => T;

////////////////////
// Example mixins
////////////////////

function DbInstance<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    private _id = 0;

    get id() {
      return this._id;
    }

    static valueOf() {
      return ""
    }
  };
}

export const fromDbInstance = 
  <T extends Constructor>(model: T) => DbInstance(model);
