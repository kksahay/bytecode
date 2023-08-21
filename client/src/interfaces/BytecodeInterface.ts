export interface Problem {
    _id: number;
    _name: string;
    _description: string;
    _difficulty: string;
    _constraint: string;
    _input: string;
    _output: string;
    _example_input:string;
    _example_output:string;
    _tests: number;
}