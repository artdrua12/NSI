import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: [],
    message: { color: 'info', text: 'default', run: false },
    dataTable: [
      {
        code: 123,
        type: "Пользовательский",
        name: "Справочник1",
        dataStart: "2003-03-08",
        dataEnd: "2008-12-08",
      },
      {
        code: 321,
        type: "Пользовательский",
        name: "Справочник2",
        dataStart: "2007-06-08",
        dataEnd: "2010-01-08",
      },
      {
        code: 345,
        type: "Защищенный",
        name: "Справочник3",
        dataStart: "1990-06-08",
        dataEnd: "1993-06-08",
      },
      {
        code: 678,
        type: "Пользовательский",
        name: "Справочник4",
        dataStart: "1993-04-08",
        dataEnd: "2003-06-08",
      },
      {
        code: 910,
        type: "Технологический",
        name: "Справочник5",
        dataStart: "2003-06-08",
        dataEnd: "2003-07-08",
      },
      {
        code: 1230,
        type: "Пользовательский",
        name: "Справочник6",
        dataStart: "1993-06-08",
        dataEnd: "1996-06-08",
      },
      {
        code: 3210,
        type: "Пользовательский",
        name: "Справочник7",
        dataStart: "2003-06-08",
        dataEnd: "2013-06-08",
      },
      {
        code: 3445,
        type: "Защищенный",
        name: "Справочник8",
        dataStart: "2002-06-08",
        dataEnd: "2002-06-08",
      },
      {
        code: 6786,
        type: "Пользовательский",
        name: "Справочник9",
        dataStart: "2003-06-08",
        dataEnd: "2003-06-08",
      },
      {
        code: 9170,
        type: "Технологический",
        name: "Справочник10",
        dataStart: "2023-06-08",
        dataEnd: "2023-06-08",
      },
    ],
    name: "",
    code: "",
    type: "",
  },
  getters: {
    get: state => type => {
      return state[type];
    },

    findDataTable: state => {

      let filterdataTable = [...state.dataTable];

      if (state.name) {
        let nameObj = filterdataTable.filter((item) => {
          return item.name == state.name;
        });
        filterdataTable = nameObj;
      }

      if (state.code) {
        let codeObj = filterdataTable.filter((item) => {
          return item.code == state.code;
        });
        filterdataTable = codeObj;
      }

      if (state.type) {
        let typeObj = filterdataTable.filter((item) => {
          return item.type == state.type;
        });
        filterdataTable = typeObj;
      }
      return filterdataTable
    }
  },
  mutations: {
    set(state, obj) {
      state[obj.name] = obj.value;
    },
  },
  actions: {
  },
  modules: {
  }
})
