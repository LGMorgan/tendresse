import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { dynaScanTable } from "$lib/server/dynaDB";
import { sortWorkshopAndDates, cleanTestimonies, shuffle } from "../hook.client.js";

export const load = async (event) => {
  const client = new DynamoDBClient({ region: "ap-southeast-1" })

  const scan = await dynaScanTable(client, "Tendresse_Dates")
  //const workshops = sortWorkshopAndDates(scan?.response.Items)
  
  const tmp = await dynaScanTable(client, "Tendresse_Testimonies")
  //const testimonies = cleanTestimonies(tmp?.response.Items)
  //shuffle(testimonies)

  console.log("SERVER LOAD", {
    scan,
    tmp
  })
  return {
    workshops: scan?.response.Items,
    testimonies: tmp?.response.Items
  }
}