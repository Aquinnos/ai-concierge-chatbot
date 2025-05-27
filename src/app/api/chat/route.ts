import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import OpenAI from 'openai'

// API key for OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

/**
 *
 * @param req - The request object containing the user's message and language preference.
 * This function handles the chat API endpoint.
 * It first checks for a matching FAQ in the Payload CMS.
 * If a match is found, it returns the answer from the FAQ.
 * If no match is found, it uses OpenAI's GPT-4 to generate an answer.
 * @returns
 * A JSON response containing the answer and the source of the answer (either 'local' for FAQ or 'openai' for generated response).
 * @throws
 * An error response with status 500 if there is an issue processing the request.
 * @example
 * POST /api/chat
 * Request body: { "message": "What time is check-out?", "lang": "en" }
 * Response: { "answer": "Check-out time is at 11:00 AM. Late check-out may be available upon request.
", "source": "local" }
 */
export async function POST(req: Request) {
  try {
    const { message, lang = 'hr' } = await req.json()

    const payload = await getPayload({
      config: configPromise,
      importMap: {
        baseDir: process.cwd(),
      },
    })

    // Search for matching FAQ
    const faqs = await payload.find({
      collection: 'faq',
      where: {
        question: { like: message },
        language: { equals: lang },
      },
    })

    if (faqs.docs.length > 0) {
      return NextResponse.json({
        answer: faqs.docs[0].answer,
        source: 'local',
      })
    }

    // If no FAQ match, use OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful hotel concierge answering questions for guests. ',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    })

    const answer = completion.choices[0].message?.content

    return NextResponse.json({
      answer,
      source: 'openai',
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Failed to process chat request' }, { status: 500 })
  }
}
