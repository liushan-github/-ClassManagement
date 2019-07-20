import {AnalysisData} from './data.d';
import {EffectsCommandMap} from 'dva';
import {AnyAction, Reducer} from 'redux';
import {fakeTotalData} from './service';

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: AnalysisData) => T) => T },
) => void;

export interface ModelType {
  namespace: string,
  state: AnalysisData,
  effects: {
    fetch: Effect,
  },
  reducers: {
    save: Reducer<AnalysisData>,
    clear: Reducer<AnalysisData>,
  },

}

const initState = {
  topRowData: [],
};
const Model: ModelType = {
  namespace: 'Panel',
  state: initState,
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
        topRowData: payload,
      }
    },
    clear() {
      return {
        topRowData: [],
      }
    }
  }
};
export default Model;
