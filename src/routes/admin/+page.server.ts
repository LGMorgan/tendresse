import { redirect } from "@sveltejs/kit"

import { AWS_ACCESSKEY_ID, AWS_SECRET_ACCESSKEY } from "$env/static/private";
import { dynaScanTable, dynaDelete, dynaPut, dynaUpdate } from "$lib/server/dynaDB";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { sortWorkshopAndDates, cleanTestimonies } from "../../hook.client.js";
import { v4 as uuidv4 } from 'uuid';

const client = new DynamoDBClient({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: AWS_ACCESSKEY_ID,
    secretAccessKey: AWS_SECRET_ACCESSKEY,
  }
});

export const actions = {
  putDate: async ({ cookies, request }) => {
    console.log("action create")
    const data = await request.formData();
    for (const entry of data.entries()) {
      console.log(entry)
    }
    let obj = {
      date: data.get("date"),
      workshop: data.get("workshop"),
      location: data.get("location"),
      isFull: false
    }
    const create = await dynaPut(client, "Tendresse_Dates", obj)
    console.log("putdata", create?.response)
  },
  changeComplet: async ({ cookies, request }) => {
    console.log('action change complet status')
    const data = await request.formData();
    for (const entry of data.entries()) {
      console.log(entry)
    }
    const val = data.get("isFull") === "true" ? false : true
    const obj = {
      date: data.get("date").toString(),
      isFull: val,
    }
    const create = await dynaUpdate(client, obj)
    console.log({create})
  },
  deleteDate: async ({ cookies, request }) => {
    console.log('action delete')
    const data = await request.formData();
    for (const entry of data.entries()) {
      console.log(entry)
    }
    const del = await dynaDelete(client, "Tendresse_Dates", data.get("date"))
    console.log({del})
  },
  putTestimony: async ({ cookies, request }) => {
    console.log("action putTestimony")
    const data = await request.formData();
    for (let p of data.entries()) {
      console.log(p)
    }
    const obj = {
      uuid: uuidv4(),
      workshop: data.get("workshop"),
      testimony: data.get("testimony"),
      signature: data.get("signature")
    }
    const create = await dynaPut(client, "Tendresse_Testimonies", obj)
    console.log({create})
  },
  deleteTestimony: async ({ cookies, request }) => {
    console.log('action delete testimony')
    const data = await request.formData();
    for (let p of data.entries()) {
      console.log(p)
    }
    const obj = {uuid: data.get("uuid"), workshop: data.get("workshop")}
    let del = await dynaDelete(client, "Tendresse_Testimonies", obj)
    console.log({del})
  }
};
 
export const load = async ({locals, depends}) => {
  console.log("from page server")
  depends("workshops:state")
  
  const session = await locals.auth()
  console.log("PAGE LOAD", {
    session
  })

  if (session?.user?.name != "Morgan Le Guen" || "laurette.deloison@gmail.com") {
    return redirect(307, "http://localhost:5173/")
  }

  //const client = new DynamoDBClient({ region: "ap-southeast-1" });
  const scan = await dynaScanTable(client, "Tendresse_Dates")
  const workshops = sortWorkshopAndDates(scan?.response.Items)

  const tmp = await dynaScanTable(client, "Tendresse_Testimonies")
  const testimonies = cleanTestimonies(tmp?.response.Items)
 
  console.log("PAGE LOAD", {
    session
  })
  console.log("WT", workshops.Tendresse)
  return {
    session,
    workshops,
    testimonies
  }
}
