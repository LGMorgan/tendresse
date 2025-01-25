import {
  ListTablesCommand,
  DynamoDBClient,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";

import { DeleteCommand, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

export async function dynaScanTable(client, table, filter) {
  try {
    let cmd = {}
    if(filter != undefined) {
      cmd = {
        TableName: table,
        FilterExpression: "#w = :f",
        ExpressionAttributeNames: { "#w": "workshop" },
        ExpressionAttributeValues: { ":f": filter }
      }
    }
    else {
      cmd = {TableName: table}
    }
    const command = new ScanCommand(cmd)
    const response = await client.send(command);
    return { response }
  } catch(error) {
    console.log("scan", {error})
  }
}

export async function dynaPut(client, table, obj) {
  try {
    const command = new PutCommand({
      TableName: table,
      Item: obj,
    });
    const response = await client.send(command);
    return { response }
  } catch (error) {
    console.log("Put error :", {error})
  }
}

export async function dynaUpdate(client, {date, isFull}) {
  console.log({date, isFull})
  try {
    const command = new UpdateCommand({
      TableName: "Tendresse_Dates",
      Key: {date},
      UpdateExpression: "set isFull = :fullStatus",
      ExpressionAttributeValues: {
        ":fullStatus": isFull,
      },
    })
    const response = await client.send(command);
    console.log({response})
    return { response }
  } catch (error) {
    console.log("Update error :", {error})
  }
}

export async function dynaDelete(client, table, key) {
  console.log(key)
  try {
    const k = table !== "Tendresse_Dates" ? key : {date: key}
    console.log("key", k)
    const command = new DeleteCommand({
      TableName: table,
      Key: k,
      
    })

    const response = await client.send(command)
    console.log(response)
    return {response}
  } catch (error) {
    console.log("delete error :", {error})
  }
}