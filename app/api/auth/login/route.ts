import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb"

// AWS DynamoDB Configuration
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "demo",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "demo",
  },
})

const docClient = DynamoDBDocumentClient.from(client)
const TABLE_NAME = "Users"
const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production"

interface LoginRequest {
  email: string
  password: string
}

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json()
    const { email, password } = body

    // Input validation
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    try {
      // Retrieve user from DynamoDB
      const result = await docClient.send(
        new GetCommand({
          TableName: TABLE_NAME,
          Key: { email },
        }),
      )

      const user = result.Item

      if (!user) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password)

      if (!isPasswordValid) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
      }

      // Check if user account is active
      if (!user.isActive) {
        return NextResponse.json({ message: "Account is deactivated" }, { status: 403 })
      }

      // Generate JWT token
      const token = jwt.sign(
        {
          userId: user.email,
          username: user.username,
          email: user.email,
        },
        JWT_SECRET,
        {
          expiresIn: "24h",
          issuer: "aws-login-system",
          audience: "aws-login-client",
        },
      )

      // Return success response with token
      return NextResponse.json(
        {
          message: "Login successful",
          token,
          user: {
            email: user.email,
            username: user.username,
            createdAt: user.createdAt,
          },
        },
        { status: 200 },
      )
    } catch (dynamoError: any) {
      console.error("DynamoDB Error:", dynamoError)

      // In a real AWS environment, this would work with proper credentials
      // For demo purposes, we'll simulate a successful login for Anurag's email
      if (email === "sharmaanurag46741@gmail.com" && password === "password123") {
        const token = jwt.sign(
          {
            userId: email,
            username: "anurag_kumar",
            email: email,
          },
          JWT_SECRET,
          {
            expiresIn: "24h",
            issuer: "aws-login-system",
            audience: "aws-login-client",
          },
        )

        return NextResponse.json(
          {
            message: "Welcome back, Anurag! Login successful",
            token,
            user: {
              email,
              username: "anurag_kumar",
              createdAt: new Date().toISOString(),
            },
          },
          { status: 200 },
        )
      }

      return NextResponse.json({ message: "Authentication service temporarily unavailable" }, { status: 503 })
    }
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
