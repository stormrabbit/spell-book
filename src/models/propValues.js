import * as PrpActions from '../action/PrpAction';
export default {
  namespace: 'propValues',
  state: {
    str: 8,
    dex: 8,
    con: 8,
    int: 8,
    wis: 8,
    cha: 8,
    total: 32
  },
  reducers: {
    updateValues(state, { payload: { propName, adds } }) {
      const crntVl = state[propName];
      const nxtVl = crntVl + adds;
      if (nxtVl > 18 || nxtVl < 3) {
        return { ...state };
      } else {
        let cost = 1 * adds;
        switch (nxtVl) {
          case (adds > 0 ? 17 : 16):
          case (adds > 0 ? 18 : 17):
            cost = 3 * adds;
            break;
          case (adds > 0 ? 15 : 14):
          case (adds > 0 ? 16 : 15):
            cost = 2 * adds;
            break;
        }
        if ((state['total'] - cost) >= 0) {
          state[propName] = nxtVl;
          state['total'] = state['total'] - cost;
        }
        return { ...state };
      }

    }
  },
  effects: {
  },
  subscriptions: {},
};
