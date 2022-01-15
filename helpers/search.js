export default {
  makeFilterable: (items) => {
    return items.map((item) => {
      return {
        data: item,
        show: true
      }
    })
  },
  getFilteredList: (items) => {
    const visibleList = []
    items.forEach((item) => {
      if (item.show) {
        visibleList.push(item.data)
      }
    })
    return visibleList
  }
}
