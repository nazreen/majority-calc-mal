new Vue({
  el: '#app',
  data: {
    parties: {
      Warisan: 9,
      PH: 92,
      "Azmin's Team": 11,
      PPBM: 26,
      BN: 42,
      PAS: 18,
      GPS: 18,
      GBS: 8,
      Others: 2,
      Independent: 1
    },
    selected: {},
    neededForSimpleMajority: 122
  },
  computed: {
    selectedNames: function() {
      return Object.keys(this.selected)
    },
    selectedStatement: function() {
      return this.selectedNames.join(', ')
    },
    totalNumber: function() {
      const selectedParties = Object.keys(this.parties)
        .filter(key => this.selectedNames.includes(key))
        .reduce((obj, key) => {
          obj[key] = this.parties[key]
          return obj
        }, {})
      const selectedValues = Object.values(selectedParties)
      return selectedValues.reduce((a, b) => a + b, 0)
    },
    simpleMajorityAchieved: function() {
      return this.totalNumber > this.neededForSimpleMajority
    }
  }
})
