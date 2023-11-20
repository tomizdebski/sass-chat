
import { Github } from 'lucide-react';
import {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from "next-auth/providers/github";
import { Firestore } from 'firebase-admin/firestore';
import { FirestoreAdapter } from '@auth/firebase-adapter';
import { adminDb, adminAuth } from './firebase-admin';

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
    callbacks: {
        session: async ({session, token}) => {
            if(session?.user) {
                session.user.id = token.sub;
                const firebaseToken = await adminAuth.createCustomToken(token.sub);
                session.firebaseToken = firebaseToken;
            } 
            return session;  
        },

        jwt: async ({user, token}) => {
            if (user) {
                token.uid = user.id;
            }
            return token;   
        }
    },
    session: {
        strategy: 'jwt',
    },
    adapter: FirestoreAdapter(adminDb),
} satisfies NextAuthOptions;