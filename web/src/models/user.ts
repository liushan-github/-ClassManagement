import { Effect } from 'dva';
import { Reducer } from 'redux';
import {queryCurrent, queryStudent, query as queryUsers} from '@/services/user';
import {getAuthority} from "@/utils/authority";

export interface CurrentUser {
  avatar?: string;
  name?: string;
  title?: string;
  group?: string;
  signature?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  unreadCount?: number;
}

export interface CurrentStudent {
  name?: string;
  number?: string;
  sex?: number;
  identity?: number;
  avatar?: string;
  signature?: string;
}
export interface UserModelState {
  currentUser?: CurrentUser;
  currentStudent?: CurrentStudent;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetch: Effect;
    fetchCurrent: Effect;
    fetchStudent: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
    saveCurrentStudent: Reducer<UserModelState>;
    changeNotifyCount: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: {},
    currentStudent: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
    * fetchStudent({_, callback}, {call, put}) {
      const currentStudent = getAuthority('currentStudent');
      //暂时先在这里测试
      let number = 0;
      if (currentStudent == '柳杉') {
        number = 53;
      }
      if (currentStudent == '鲁佳明') {
        number = 54;
      }
      if (currentStudent == '朱贤康') {
        number = 73;
      }
      const response = yield call(queryStudent, number);
      if (response && response.code == 0) {
        callback(response);
      }
      yield put({
        type: 'saveCurrentStudent',
        payload: response,
      });
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    saveCurrentStudent(state, action) {
      return {
        ...state,
        currentStudent: action.payload || {},
      };
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};

export default UserModel;
