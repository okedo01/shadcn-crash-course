import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"

const CardDemo: React.FC = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your Account</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                    <CardAction>Sign Up</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default CardDemo