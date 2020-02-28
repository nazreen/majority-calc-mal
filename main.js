/* TODOs
setup bundler so we can use npm packages
setup dev server
use parliament-svg
test view build/index.html
update pages to serve from build folder
chat function?
*/
new Vue({
  el: '#app',
  data: {
    parties: {
      // PH: 92,
      DAP: 42,
      PKR: 39,
      Amanah: 11,

      // BN: 42,
      UMNO: 39,
      MCA: 2,
      MIC: 1,

      PPBM: 36,

      // Gagasan Sejahtera
      PAS: 18,

      GPS: 18,
      /*
      PBB,PRS,PDP,SUPP
      */

      Warisan: 9,

      GBS: 3,
      /*
      PBS,PBRS,STAR
      */

      PSB: 1,
      UPKO: 1,

      Independent: 2
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
    twoThirdsAchieved: function() {
      return this.totalNumber > this.totalParliamentSeats * (2 / 3)
    },
    totalParliamentSeats: function() {
      return Object.values(this.parties).reduce((a, b) => a + b, 0)
    }
  }
})
