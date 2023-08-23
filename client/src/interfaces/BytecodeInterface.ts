import { ReactNode } from 'react';
export interface Problem {
    _id: number;
    _name: string;
    _description: string;
    _difficulty: string;
    _constraint: string;
    _input: string;
    _output: string;
    _sample_input:string;
    _sample_output:string;
    _tests: number;
}
export interface User {
    username: string;
    token: string;
}
export interface Result {
    passed: number;
    failed: number;
    error: string;
}
export interface LayoutProps {
    children: ReactNode;
}