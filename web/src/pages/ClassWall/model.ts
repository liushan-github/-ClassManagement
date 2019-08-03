import {EffectsCommandMap} from 'dva';
import {AnyAction, Reducer} from 'redux';
import {fakeclassWallData} from './service';
import {IClassWallData} from '@/pages/ClassWall/data';

export interface ModelState {
  classWallData: IClassWallData[];
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

const initState = {
  classWallData: [],
};
const Model: ModelType = {
  namespace: 'classWall',
  state: initState,
  effects: {
    * fetch(_, {call, put}) {
      const response = yield call(fakeclassWallData);
      if (response && response.success == true) {
        yield put({
          type: 'save',
          payload: response.data,
        });
      }
    },
  },
  reducers: {
    save(state, {payload}) {
      return {
        ...state,
        classWallData: payload,
      }
    },
    clear() {
      return {
        classWallData: [],
      }
    },
  },
};
export default Model;
