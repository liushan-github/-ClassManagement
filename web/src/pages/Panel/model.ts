import {PanelData} from './data.d';
import {EffectsCommandMap} from 'dva';
import {AnyAction, Reducer} from 'redux';
import {fakeTotalData} from './service';

export interface ModelState {
  data: PanelData[],
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: ModelState) => T) => T },
) => void;

export interface ModelType {
  namespace: string,
  state: ModelState,
  effects: {
    fetch: Effect,
  },
  reducers: {
    save: Reducer<ModelState>,
    clear: Reducer<ModelState>,
  },

}

const Model: ModelType = {
  namespace: 'Panel',
  state: {
    data: [],
  },
  effects: {
    * fetch(_, {call, put}) {
      const response = yield call(fakeTotalData);
      yield put({
        type: 'save',
        payload: response,
      });
    }
  },
  reducers: {
    save(state, {payload}) {
      return {
        ...state,
        data: payload,
      }
    },
    clear() {
      return {
        data: [],
      }
    }
  }
};
export default Model;
