/* TODOs
setup bundler so we can use npm packages
setup dev server
use parliament-svg
test view build/index.html
update pages to serve from build folder
chat function?
*/

const parties = {
  // PH: 92,
  DAP: 42,
  PKR: 40,
  Amanah: 11,

  // BN: 42,
  UMNO: 39,
  MCA: 2,
  MIC: 1,

  PPBM: 36,

  // Gagasan Sejahtera
  PAS: 18,

  GPS: 17,
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
}

const changelog = [
  { date: '25 Feb 2020', description: 'this page was launched.' },
  {
    date: '27 Feb 2020',
    description:
      "10 from Azmin's faction is said to have defected to PPBM according to an aide of Muhyiddin Yassin. This increases PPBM's tally from 26 to 36."
  },
  {
    date: '29 Feb 2020',
    description:
      "Richard Riot Jaem of SUPP defects to PKR. This reduces GPS tally from 18 to 17 and increases PKR's tally from 39 to 40."
  }
]

new Vue({
  el: '#app',
  data: {
    parties,
    selected: {},
    neededForSimpleMajority: 112,
    changelog
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
