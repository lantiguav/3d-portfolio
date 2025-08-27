/* eslint-env node */
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // Get the request body
    const body = await request.json()
    
    // Get environment variables
    const webhookUrl = process.env.N8N_WEBHOOK_URL
    const basicUser = process.env.N8N_WEBHOOK_USERNAME
    const basicPass = process.env.N8N_WEBHOOK_PASSWORD
    
    // Validate environment variables
    if (!webhookUrl || !basicUser || !basicPass) {
      return NextResponse.json(
        { error: 'Missing required environment variables' },
        { status: 500 }
      )
    }
    
    // Log the webhook URL for debugging (without credentials)
    console.log('Calling n8n webhook:', webhookUrl)
    
    // Create basic auth header
    const credentials = btoa(`${basicUser}:${basicPass}`)
    const authHeader = `Basic ${credentials}`
    
    // Make request to n8n webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    
    // Check if the request was successful
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`n8n webhook failed with status: ${response.status} - ${errorText}`)
    }
    
    // Get response data - handle empty or non-JSON responses
    const responseText = await response.text()
    
    if (responseText.trim()) {
      try {
        // Try to parse as JSON and return it directly (for n8n chat widget compatibility)
        const data = JSON.parse(responseText)
        return NextResponse.json(data)
      } catch (parseError) {
        // If response is not JSON, return as plain text message
        return NextResponse.json({ output: responseText })
      }
    } else {
      // Empty response - return a default message
      return NextResponse.json({ output: 'Message received successfully.' })
    }
    
  } catch (error) {
    console.error('n8n webhook error:', error)
    return NextResponse.json(
      { error: 'Failed to communicate with n8n webhook', details: error.message },
      { status: 500 }
    )
  }
}

// Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    message: 'n8n webhook endpoint is ready',
    method: 'POST',
    description: 'Send POST requests with JSON payload to trigger n8n flow'
  })
}
