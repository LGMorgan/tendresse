import { redirect } from "@sveltejs/kit"

import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, PAGE_ADMIN, PAGE_HOME } from "$env/static/private";
import { dynaDelete, dynaPut, dynaUpdate } from "$lib/server/dynaDB";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { v4 as uuidv4 } from 'uuid';

const client = new DynamoDBClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
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
  if(!session?.user) {
    return redirect(307, PAGE_ADMIN)
  }

  if (!["mo.leguen.42@gmail.com", "laurette.deloison@gmail.com"].includes(session?.user?.email)) {
    return redirect(307, PAGE_HOME)
  }

  console.log("PAGE LOAD", {
    session
  })
  return {
    session
  }
}
