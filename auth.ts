import { Github } from 'lucide-react';
import {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {  
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_SECRET_ID as string,
        }),
        
    ],
} satisfies NextAuthOptions;