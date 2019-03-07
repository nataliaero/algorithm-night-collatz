require('chai').should();
const { collatz, longestBetween } = require('../index')

describe('Collatz calculator', () => {
  it ('should correctly calculate the collatz number for positive integers', () => {
    collatz(1).should.eql([1]);
    collatz(2).should.eql([2, 1]);
    collatz(3).should.eql([3, 10, 5, 16, 8, 4, 2, 1]);
    collatz(500).should.eql([500,250,125,376,188,94,47,142,71,214,107,322,161,484,242,121,364,182,91,274,137,412,206,103,310,155,466,233,700,350,175,526,263,790,395,1186,593,1780,890,445,1336,668,334,167,502,251,754,377,1132,566,283,850,425,1276,638,319,958,479,1438,719,2158,1079,3238,1619,4858,2429,7288,3644,1822,911,2734,1367,4102,2051,6154,3077,9232,4616,2308,1154,577,1732,866,433,1300,650,325,976,488,244,122,61,184,92,46,23,70,35,106,53,160,80,40,20,10,5,16,8,4,2,1])
    collatz(123123).should.eql([123123,369370,184685,554056,277028,138514,69257,207772,103886,51943,155830,77915,233746,116873,350620,175310,87655,262966,131483,394450,197225,591676,295838,147919,443758,221879,665638,332819,998458,499229,1497688,748844,374422,187211,561634,280817,842452,421226,210613,631840,315920,157960,78980,39490,19745,59236,29618,14809,44428,22214,11107,33322,16661,49984,24992,12496,6248,3124,1562,781,2344,1172,586,293,880,440,220,110,55,166,83,250,125,376,188,94,47,142,71,214,107,322,161,484,242,121,364,182,91,274,137,412,206,103,310,155,466,233,700,350,175,526,263,790,395,1186,593,1780,890,445,1336,668,334,167,502,251,754,377,1132,566,283,850,425,1276,638,319,958,479,1438,719,2158,1079,3238,1619,4858,2429,7288,3644,1822,911,2734,1367,4102,2051,6154,3077,9232,4616,2308,1154,577,1732,866,433,1300,650,325,976,488,244,122,61,184,92,46,23,70,35,106,53,160,80,40,20,10,5,16,8,4,2,1,])
    collatz(123123123).should.eql([123123123,369369370,184684685,554054056,277027028,138513514,69256757,207770272,103885136,51942568,25971284,12985642,6492821,19478464,9739232,4869616,2434808,1217404,608702,304351,913054,456527,1369582,684791,2054374,1027187,3081562,1540781,4622344,2311172,1155586,577793,1733380,866690,433345,1300036,650018,325009,975028,487514,243757,731272,365636,182818,91409,274228,137114,68557,205672,102836,51418,25709,77128,38564,19282,9641,28924,14462,7231,21694,10847,32542,16271,48814,24407,73222,36611,109834,54917,164752,82376,41188,20594,10297,30892,15446,7723,23170,11585,34756,17378,8689,26068,13034,6517,19552,9776,4888,2444,1222,611,1834,917,2752,1376,688,344,172,86,43,130,65,196,98,49,148,74,37,112,56,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1,])
    collatz(812627435).should.eql([812627435,2437882306,1218941153,3656823460,1828411730,914205865,2742617596,1371308798,685654399,2056963198,1028481599,3085444798,1542722399,4628167198,2314083599,6942250798,3471125399,10413376198,5206688099,15620064298,7810032149,23430096448,11715048224,5857524112,2928762056,1464381028,732190514,366095257,1098285772,549142886,274571443,823714330,411857165,1235571496,617785748,308892874,154446437,463339312,231669656,115834828,57917414,28958707,86876122,43438061,130314184,65157092,32578546,16289273,48867820,24433910,12216955,36650866,18325433,54976300,27488150,13744075,41232226,20616113,61848340,30924170,15462085,46386256,23193128,11596564,5798282,2899141,8697424,4348712,2174356,1087178,543589,1630768,815384,407692,203846,101923,305770,152885,458656,229328,114664,57332,28666,14333,43000,21500,10750,5375,16126,8063,24190,12095,36286,18143,54430,27215,81646,40823,122470,61235,183706,91853,275560,137780,68890,34445,103336,51668,25834,12917,38752,19376,9688,4844,2422,1211,3634,1817,5452,2726,1363,4090,2045,6136,3068,1534,767,2302,1151,3454,1727,5182,2591,7774,3887,11662,5831,17494,8747,26242,13121,39364,19682,9841,29524,14762,7381,22144,11072,5536,2768,1384,692,346,173,520,260,130,65,196,98,49,148,74,37,112,56,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1,])
  });

  it ('should correctly find the longest sequence between two integers', () => {
    longestBetween(10 ** 2).should.equal(97);
    longestBetween(10 ** 3).should.equal(871);
    longestBetween(10 ** 4).should.equal(6171);
    longestBetween(10 ** 5).should.equal(77031);
    longestBetween(10 ** 6).should.equal(837799);
  }).timeout(3000)

  describe ('BONUS CHALLENGE', () => {
    it ('should calculate the sequence as quickly as possible', () => {
      for (let n = 1; n < 10 ** 7; n++) {
        collatz(n);
      }
    }).timeout(20000)
  })
});