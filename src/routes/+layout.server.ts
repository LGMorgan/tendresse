import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { dynaScanTable, dynaDelete } from "$lib/server/dynaDB";
import { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from "$env/static/private";

interface IWorkshop {
  workshop: string | { S: string },
  date: string | { S: string },
  location: string | { S: string },
  link: string | { S: string }
  isFull: boolean | { BOOL: boolean },
}

interface IWorkshopsObject {
  Adoration?: IWorkshop[],
  Playfight?: IWorkshop[],
  Tendresse?: IWorkshop[],
  PastDates: IWorkshop[]
}

function sortWorkshopAndDates(dynamoDBResponse: IWorkshop[] | null): IWorkshopsObject | [] {
  const now = new Date();
  
  if(dynamoDBResponse == null)
    return []

  const workshops: IWorkshopsObject = {PastDates: []}
  for(const item of dynamoDBResponse) {
    console.log({item})
    if(new Date(item.date.S) < now)
      workshops.PastDates.push(item)
    else {
      if(!workshops[item.workshop.S])
        workshops[item.workshop.S] = []
      workshops[item.workshop.S].push(item)
    }
  }
  for (const [key, values] of Object.entries(workshops)) {
    workshops[key] = values.sort(function(a,b){
      return new Date(a.date.S) - new Date(b.date.S);
    });
  }
  return workshops
}

function cleanTestimonies(dynamoDBResponse) {
  const testimonies: IWorkshopsObject = {Adoration: [], Playfight: [], Tendresse: []}
  for(const item of dynamoDBResponse) {
    testimonies[item.workshop.S].push(item)
  }

  return testimonies
}


export const load = async () => {
  const client = new DynamoDBClient({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID, 
      secretAccessKey: AWS_SECRET_ACCESS_KEY, 
    }
  }
)

  const scan = await dynaScanTable(client, "Tendresse_Dates")
  const workshops = scan?.response ? sortWorkshopAndDates(scan.response.Items) : undefined

  if(!!workshops.PastDates.length) {
    for(const item of workshops.PastDates) {
      await dynaDelete(client, "Tendresse_Dates", item.date.S)
    }
  }
  
  const tmp = await dynaScanTable(client, "Tendresse_Testimonies")
  const testimonies = tmp?.response ? cleanTestimonies(tmp.response.Items) : undefined

  return { workshops, testimonies }
}