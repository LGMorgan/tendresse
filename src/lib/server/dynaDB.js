import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { capitalizeFirstLetter } from "$lib/utils";

/**
 * Scans a DynamoDB table and returns all items.
 * @param {object} client - The DynamoDB client.
 * @param {string} table - The name of the DynamoDB table.
 * @param {string} [filter] - Optional filter for the scan.
 * @returns {Promise<any[]>} - The items from the table.
 */
export async function dynaScanTable(client, table, filter) {
    console.log({ table, filter })
    try {
        let cmd = {}
        if (filter != undefined) {
            cmd = {
                TableName: table,
                FilterExpression: "#w = :f",
                ExpressionAttributeNames: { "#w": "workshop" },
                ExpressionAttributeValues: { ":f": filter }
            }
        }
        else {
            cmd = { TableName: table }
        }
        console.log("cmd :", { cmd })
        const command = new ScanCommand(cmd)
        const response = await client.send(command);
        console.log("Scan response :", { response })
        return { response }
    } catch (error) {
        console.error(`Error scanning table ${table}:`, error);
        throw new Error(`Failed to scan table ${table}.`);
    }
}

/**
 * Puts an item into a DynamoDB table.
 * @param {object} client - The DynamoDB client.
 * @param {string} table - The name of the DynamoDB table.
 * @param {object} obj - The item to put into the table.
 * @returns {Promise<any>} - The response from DynamoDB.
 */
export async function dynaPut(client, table, obj) {
    try {
        obj.workshop = capitalizeFirstLetter(obj.workshop)
        const command = new PutCommand({
            TableName: table,
            Item: obj
        });
        const response = await client.send(command);
        return { response };
    } catch (error) {
        console.error(`Error putting item into table ${table}:`, error);
        throw new Error(`Failed to put item into table ${table}.`);
    }
}

/**
 * Updates an item in a DynamoDB table.
 * @param {object} client - The DynamoDB client.
 * @param {object} params - The update parameters.
 * @param {string} params.date - The primary key of the item to update.
 * @param {string} params.workshop - The secondary key of the item to update.
 * @param {boolean} params.isFull - The new value for the "isFull" attribute.
 * @returns {Promise<any>} - The response from DynamoDB.
 */
export async function dynaUpdate(client, { date, workshop, isFull }) {
    console.log({ date, workshop, isFull })
    try {
        const command = new UpdateCommand({
            TableName: "Tendresse_Dates",
            Key: { date, workshop },
            UpdateExpression: "set isFull = :fullStatus",
            ExpressionAttributeValues: {
                ":fullStatus": isFull,
            },
        })
        console.log("CIK", command.input.Key)
        const response = await client.send(command);
        console.log({ response })
        return { response }
    } catch (error) {
        console.error(`Error updating item in table Tendresse_Dates:`, error);
        throw new Error(`Failed to update item in table Tendresse_Dates.`);
    }
}

/**
 * Deletes an item from a DynamoDB table.
 * @param {object} client - The DynamoDB client.
 * @param {string} table - The name of the DynamoDB table.
 * @param {Record<string, any>} key - The key of the item to delete.
 * @returns {Promise<any>} - The response from DynamoDB.
 */
export async function dynaDelete(client, table, key) {
    console.log("DELETING", table, key)
    try {
        const command = new DeleteCommand({
            TableName: table,
            Key: key,
        })

        const response = await client.send(command)
        console.log(response)
        return { response }
    } catch (error) {
        console.error(`Error deleting item from table ${table}:`, error);
        throw new Error(`Failed to delete item from table ${table}.`);
    }
}