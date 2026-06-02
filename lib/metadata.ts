import type { Metadata } from 'next';

const CommonMetadata: Metadata = {
    keywords: ['jsleetcode', 'jsleetcode.com', 'javascript online compiler', 'js playground', 'code editor', 'coding practice', 'interview preparation', 'algorithm challenges', 'data structures', 'coding exercises'],
    authors: [{ name: 'M R Kishore Kumar' }],
    robots: 'index, follow',
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        url: 'https://jsleetcode.rigial.com/',
        type: 'website',
        title: 'JSLeetCode - Javascript Online Programming Learning Platform',
        description: 'Level up your Javascript skills and quickly land a job. This is the best place to expand your javascript knowledge and get prepared for your next interview.',
        images: [
            {
                url: 'https://jsleetcode.rigial.com/jsleetcode.webp',
                width: 1200,
                height: 630,
                alt: 'JSLeetCode',
            },
        ],
    },
};

// Home Page Metadata
export const rootMetadata: Metadata = {
    title: 'JSLeetCode - Javascript Online Programming Learning Platform',
    description: 'Level up your Javascript skills and quickly land a job. This is the best place to expand your javascript knowledge and get prepared for your next interview.',
    ...CommonMetadata
};

// Login Page Metadata
export const loginMetadata: Metadata = {
    title: 'Log In to JSLeetCode - Access Your Playgrounds and Save Your Code',
    description: 'Sign in to your JSLeetCode account to securely save your coding playgrounds, track your JavaScript interview preparation progress, and sync your workspace across devices.',
    ...CommonMetadata

};

// JavaScript Cheat Sheet Page Metadata
export const jsCheatSheetMetadata: Metadata = {
    title: 'JavaScript (JS) Cheat Sheet Online - JSLeetCode',
    description: 'JavaScript Cheat Seet contains useful code examples on a single page. It is a quick reference guide for JavaScript developers to easily find code snippets and examples for common programming tasks and concepts.',
    ...CommonMetadata
};

// 404 Not Found Page Metadata
export const notFoundMetadata: Metadata = {
    title: 'Page Not Found - JSLeetCode',
    description: 'The page you are looking for does not exist or has been moved.',
    ...CommonMetadata
};
