import { redirect } from "@sveltejs/kit"
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, HOME_URL, LOGIN_URL } from "$env/static/private";
import { dynaDelete, dynaPut, dynaUpdate } from "$lib/server/dynaDB";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from 'uuid';
import type { RequestEvent } from "@sveltejs/kit";


interface FormData {
  get(name: string): FormDataEntryValue | null;
}

interface WorkshopObject {
  date: FormDataEntryValue;
  workshop: FormDataEntryValue;
  location: FormDataEntryValue;
  isFull: boolean;
  link: string;
}

const client = new DynamoDBClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  }
});

export const actions = {
  putDate: async ({ cookies, request }: RequestEvent) => {
    console.log("action create");
    const data: FormData = await request.formData();
    for (const entry of data.entries()) {
      console.log(entry);
    }
    const obj: WorkshopObject = {
      date: data.get("date"),
      workshop: data.get("workshop"),
      location: data.get("location"),
      isFull: false,
      link: data.get("link")
    };
    const create = await dynaPut(client, "Tendresse_Dates", obj);
  },
  changeComplet: async ({ cookies, request }): RequestEvent => {
    console.log('action change complet status')
    const data = await request.formData();
    for (const entry of data.entries()) {
      console.log(entry)
    }
    const val = data.get("isFull") === "true" ? false : true
    const obj: WorkshopObject = {
      date: data.get("date")?.toString() || '',
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
    return redirect(307, LOGIN_URL)
  }
  
  if (!["mo.leguen.42@gmail.com", "laurette.deloison@gmail.com", "les.ateliers.tendresse@gmail.com"].includes(session?.user?.email)) {
    return redirect(307, HOME_URL)
  }

  console.log("PAGE LOAD", {
    session
  })
  return {
    session
  }
}
