// 3 parks and 4 streets both of them have a name and a buildyear

class Town {
  constructor(name, buildYear){
  this.name = name;
  this.buildYear = buildYear;
  }


}

class Park extends Town {
    constructor(name, buildYear, area, numberOfTrees){
    super(name,buildYear);
    this.area = area;
    this.numberOfTrees = numberOfTrees;
  } averageYears(){
    let average;average = average + this.buildYear;
    console.log(average / 3);
  }
    treeDensity() {
      // tree density of each park in the town(formula:number of trees / park areas)
      const density = this.numberOfTrees / this.area;
      console.log(`${this.name} has a tree density of ${density} per square km`); 
    }
    moreThanThousand() {
      // park name which has more than 1000 trees
      const amount = this.numberOfTrees
      if (amount > 1000) {
        console.log(`${this.name}  has  more than 1000 trees`)
      }
    }
  
}


class Streets extends Town {
  constructor(name,buildYear, length, size = 3){
    super(name,buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, was build in ${this.buildYear} is a ${classification.get(this.size)}street.`)




  }
  
}


const AllParks = [new Park('Green Park', 1987, 0.2, 215 ),
new Park('NationalPark', 1894, 2.9, 3540 ), new Park('DarkPark ', 1953, 0.4, 950)];

const allStreets = [new Streets('Ocean Avenue', 1999, 1.1, 4),
                    new Streets('Evergreen Street', 2000, 2.7, 2),
                    new Streets('4th Street', 2015, 0.8),
                    new Streets('Sunset Boulevard', 1982, 2.5, 5)];


  function calc(arr) {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);

    return [sum, sum / arr.length]
  }
  function reportParks(p) {
      console.log('--------PARK REPORT--------');

      // density
      p.forEach(el => el.treeDensity());


      // avg age
      const ages = p.map(el => new Date().getFullYear() - el.buildYear)
      const [totalAge, avgAge] = calc(ages);
      console.log(`Our ${p.length} parks have an average of ${avgAge} years`)




      // which park has more than 1000 trees
      const index = p.map(el => el.numberOfTrees).findIndex(el => el >= 1000)
      console.log(`${p[index].name} has more than 1000 trees`)





  }


  function reportStreets(s) {

    console.log('--------STREETS REPORT--------');

    
// 4. total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total of ${totalLength} km, with an average of ${avgLength} km`);




// 5. size classification of all streets: tiny/small/normal/big/huge. if the size is unknown, the defaults is normal
    s.forEach(el => el.classifyStreet());





  }


  reportParks(AllParks);
  reportStreets(allStreets);










