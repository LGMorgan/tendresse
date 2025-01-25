
export function sortWorkshopAndDates(dynamoDBResponse) {
  console.log("sort", {dynamoDBResponse})
  if(dynamoDBResponse == null)
    return []
  const workshops = {Adoration: [], Playfight: [], Tendresse: []}
  for(const item of dynamoDBResponse) {
    workshops[item.workshop.S].push(item)
  }
  for (const [key, values] of Object.entries(workshops)) {
    workshops[key] = values.sort(function(a,b){
      return new Date(a.date.S) - new Date(b.date.S);
    });
  }
  
  return workshops
}

export function sortDates(obj) {
  let workshops: [] = []


    workshops = obj.sort(function(a,b){
      return new Date(a.date.S) - new Date(b.date.S);
    });
  return workshops
}

export function cleanTestimonies(dynamoDBResponse) {
  console.log("sort", {dynamoDBResponse})
  const testimonies: workshopsT = {Adoration: [], Playfight: [], Tendresse: []}
  for(const item of dynamoDBResponse) {
    testimonies[item.workshop.S].push(item)
  }

  return testimonies
}

export function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}