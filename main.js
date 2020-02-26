/* TODOs
setup bundler so we can use npm packages
setup dev server
use parliament-svg
test view build/index.html
update pages to serve from build folder
*/
new Vue({
  el: '#app',
  data: {
    parties: {
      // PH: 92,
      PKR: 39,
      Amanah: 11,
      DAP: 42,

      // BN: 42,
      UMNO: 39,
      MCA: 2,
      MIC: 1,

      PPBM: 26,

      PAS: 18,

      GPS: 18,

      "Azmin's Team": 11,
      Warisan: 9,

      GBS: 3,

      PSB: 1,
      UPKO: 1,

      Independent: 1
    },
    selected: {},
    neededForSimpleMajority: 112
  },
  computed: {
    selectedParties: function() {
      return Object.keys(this.parties)
        .filter(
          key => Object.keys(this.selected).includes(key) && this.selected[key]
        )
        .reduce((obj, key) => {
          obj[key] = this.parties[key]
          return obj
        }, {})
    },
    selectedNames: function() {
      return Object.keys(this.selectedParties)
    },
    selectedStatement: function() {
      return this.selectedNames.join(', ')
    },
    totalNumber: function() {
      const selectedValues = Object.values(this.selectedParties)
      return selectedValues.reduce((a, b) => a + b, 0)
    },
    simpleMajorityAchieved: function() {
      return this.totalNumber > this.neededForSimpleMajority
    },
    totalParliamentSeats: function() {
      return Object.values(this.parties).reduce((a, b) => a + b, 0)
    }
  }
})
