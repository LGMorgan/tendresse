import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { dynaScanTable } from "$lib/server/dynaDB";
import { sortWorkshopAndDates, cleanTestimonies, shuffle } from "../hook.client.js";

import { AWS_REGION } from "$env/static/private";

export const load = async (event) => {
  const client = new DynamoDBClient({ region: AWS_REGION })

  const scan = await dynaScanTable(client, "Tendresse_Dates")
  const workshops = scan?.response ? sortWorkshopAndDates(scan?.response.Items) : undefined
  
  const tmp = await dynaScanTable(client, "Tendresse_Testimonies")
  const testimonies = tmp?.response ? cleanTestimonies(tmp?.response.Items) : undefined
  //shuffle(testimonies)

  console.log("SERVER LOAD", {
    scan,
    tmp
  })
  if(scan?.response && !! tmp?.response) {
    return {
      workshops,
      testimonies
    }
  }
  return {
    scan,
    tmp
  }
}