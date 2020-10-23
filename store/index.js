export const state = () => ({
  data: [],
  headers: [
    {
      text: 'ชื่อ',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: 'นามสกุล', value: 'lastname' },
    { text: 'รหัสพนักงาน', value: 'code' },
    { text: 'ประเภทไวน์', value: 'column' },
    { text: 'ยี่ห้อไวน์', value: 'brand' },
    { text: 'ราคา', value: 'price' },
  ],
})
export const mutations = {
  input(state, { name, lastname, code, column, brand, price }) {
    state.data.push({ name, lastname, code, column, brand, price })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
