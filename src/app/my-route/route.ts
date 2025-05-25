import configPromise from '@payload-config'
import { getPayload } from 'payload'

/*
 * This file defines a route for fetching all users from the Payload CMS.
 * It uses the Payload CMS SDK to interact with the 'users' collection.
 */
export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'users',
  })

  return Response.json(data)
}
