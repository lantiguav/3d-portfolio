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
    
    // Return user-friendly error messages for the chat widget
    let userMessage = "I'm having trouble connecting right now. Please try again in a moment."
    
    if (error.message.includes('404')) {
      userMessage = "The chat service is currently unavailable. Please check back later."
    } else if (error.message.includes('401') || error.message.includes('403')) {
      userMessage = "Authentication issue with the chat service. Please contact support."
    } else if (error.message.includes('500')) {
      userMessage = "The chat service is experiencing technical difficulties. Please try again later."
    }
    
    // Return in chat widget format
    return NextResponse.json({
      output: userMessage
    }, { status: 200 }) // Return 200 so chat widget doesn't show additional errors
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

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
